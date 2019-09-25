// Prime Worker
// Object is used by both the UI and the PrimeFinder web worker.
// Not really needed as we are not serializing and deserializing in the communication between
// UI and web workers, but that w/could be the next step for this example.
var PrimeWorker = function (name) {
    this.name = name;
    this.action = "none";
    this.statusMessage = "created";
    this.fromNumber = null;
    this.toNumber = null;
}

// Prime Worker doesn't have any behavior, making it a POJO (Plain Old JavaScript Object).
PrimeWorker.prototype = {
}

// UI Prime Worker
// Derives properties from Prime Worker.
// Adds properties for the passed in handler functions.
// Adds a property for the web worker it creates and attaches its own handlers to the web workers' events.
var UIPrimeWorker = function (name, onMessage, onError, onMessageError) {
    PrimeWorker.call(this, name);

    this.onMessageCallback = onMessage;
    this.onErrorCallback = onError;
    this.onMessageErrorCallback = onMessageError;

    // Create new Worker and provide it with our own event handlers.
    // The event handlers we received will be called from those.
    // This ensures that we can update our status according to what happened, and don't leave
    // our own internal state to whomever uses us (the UI for example).

    // Chrome does not support the name in the option parameter -> pass it in the uri as well.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker at bottom compatability for
    // "Constructor name option"
    this.worker = new Worker("PrimeFinder.js?" + name, { name: name });
    this.worker.addEventListener('message', this);
    this.worker.addEventListener('error', this);
    this.worker.addEventListener('messageerror', this);
}

// Ensure the UI Prime Worker inherits any behavior that is in or might be added to Prime Worker.
// Even though Prime Worker currently doesn't have behavior to "inherit", this ensures
// that we won't forget to add this statement when that changes ;)
UIPrimeWorker.prototype = new PrimeWorker();

// Tell the internal web worker to start finding primes.
UIPrimeWorker.prototype.findPrimes = function (fromNumber, toNumber) {
    this.action = "calc";
    this.statusMessage = "calculating";
    this.fromNumber = fromNumber;
    this.toNumber = toNumber;
    this.worker.postMessage({
        "type": "calc",
        "fromNumber": fromNumber,
        "toNumber": toNumber
    })
}

// Tell the internal web worker to clean up and then close itself.
UIPrimeWorker.prototype.close = function () {
    this.worker.postMessage({
        "type": "close"
    });
}

// UI Prime Worker implements the EventListener interface, so 'this' inside the handlers is bound to an
// UI Prime Worker object, instead of to the Worker object that dispatches the message.
// Implementation is a simple "switchboard" to specific handlers so the details of handling a specific
// message are well contained.
UIPrimeWorker.prototype.handleEvent = function (event) {
    switch (event.type) {
        case "message":
            this.handleOnMessage(event);
            break;
        case "error":
            this.handleOnError(event);
            break;
        case "messageerror":
            this.handleOnMessageError(event);
            break;
        default:
            ;
    }
}

// Handle a message from the internal web worker and then pass it through to the handler we received in the constructor.
UIPrimeWorker.prototype.handleOnMessage = function (messageEvent) {
    if (messageEvent.data.type == "close") {

        this.statusMessage = "closed";
        this.worker = null; // <= prevent reference errors on no longer existing instances.

    } else if (messageEvent.data.type == "calc") {

        if (messageEvent.data.statusMessage == "finished") {
            this.statusMessage = "finished";
        }

    }

    if (this.onMessageCallback) { // if a handler was passed in to the constructor function
        this.onMessageCallback(messageEvent);
    }
}

// Handle an error from the internal web worker.
// Currently that's just passing it through to the handler we received in the constructor.
UIPrimeWorker.prototype.handleOnError = function (e) {
    if (this.onErrorCallback) {
        this.onErrorCallback(e);
    }
}

// Handle a messageerror from the internal web worker.
// Currently that's just passing it through to the handler we received in the constructor.
UIPrimeWorker.prototype.handleOnMessageError = function (e) {
    if (this.onMessageErrorCallback) {
        this.onMessageErrorCallback(e);
    }
}
