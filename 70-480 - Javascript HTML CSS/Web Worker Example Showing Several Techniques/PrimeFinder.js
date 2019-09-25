//-----------------------------------------------------------------------------------------------
// PrimeFinder worker - set up
//-----------------------------------------------------------------------------------------------

// Import any other JavaScript files this worker needs to do its work.
importScripts("Utilities.js");
importScripts("PrimeWorkerDetails.js");

// Log to console so you can visually check what's coming in.
console.log("created: " + self.name);
console.log("search string: " + self.location.search.substr(1))

// If the browser doesn't support 'name' as part of the options object for the Worker constructor,
// it will be undefined. To help identifying the worker while debugging, we set the name ourselves.
// Log it to the console if you want visual confirmation of what's happening.
if (typeof self.name === "undefined") {
    self.name = self.location.search.substr(1) + " - via search text";
    console.log("added name property and set it to: " + self.name);
}

// Global variable that helps identify this worker and its current settings in the browser debugger tools.
// Pass this currentWork object around as an argument rather than relying on its global nature as the worker does its thing.
// This will make it visible in the "locals" list of the browser debugger tools, instead of it being buried in the
// long list of members of "self".
var currentWork = new PrimeWorker(self.name);

// Call function to initialize any resources this worker needs when responding to messages.
// Pass currentWork as an argument rather than relying on its global nature to make it visible in 
// the "locals" list of the browser debugger tools.
initializeWorker(currentWork);

// Set up on message handler.
// Do this after initialization so you can rest assured that resources won't be used before you're ready.
// May be unnecessary in Javascript (as a result of the way the event loop works), but doesn't hurt and prevents
// unnecessary trouble and errors.
// Keep the message handler small and sweet with a single level of abstraction: only calls to functions
// that do the real work. It starts with a call to update the currentWork global object with the arguments
// passed in the message and then calls the function needed to process the message.
// This also helps when the message structure changes - you would only have to update a single place (updateWorker)
// and can keep using the properties of currentWork to decide what to do.
self.onmessage = function (message) {
    updateWorker(currentWork, message);
    if (currentWork.action == "calc") {
        calc(currentWork, message);
    } else if (currentWork.action == "close") {
        cleanUpAndClose(currentWork, message);
    }
};

//-----------------------------------------------------------------------------------------------
// PrimeFinder worker - functions
//-----------------------------------------------------------------------------------------------

// Function to find primes in a given range.
// Implementation not exactly efficient to make this worker take time so we can illustrate effects of
// using workers on the responsiveness of the main JavaScript UI thread.
function calc(currentWork, message) {

    var primeNumbers = [];
    for (i = currentWork.fromNumber; i <= currentWork.toNumber; i++) {
        if (isPrimeNumber(i)) {
            primeNumbers.push(i);
            triggerPostMessage(currentWork, "progress", i);
        }
    }

    triggerPostMessage(currentWork, "finished", primeNumbers);
}

// Function to clean up and close up shop.
// Function itself closes the worker so there is no chance of the worker receiving a message
// while its resources are being or have been cleaned up already.
function cleanUpAndClose(e) {
    finalizeWorker();

    triggerPostMessage(currentWork, "Cleaned up successfully and closing", null);

    self.close();
}

// Helper to post messages so message structure is defined in one place
function triggerPostMessage(currentWork, statusMessage, primes) {
    postMessage({
        "type": currentWork.action,
        "statusMessage": statusMessage,
        "primes": primes,
        "worker": currentWork
    });
}

function initializeWorker(currentWork) {
    // Initialize any resources this worker uses to do its work.
    // ...
}

function updateWorker(currentWork, message) {
    // Transfer the values from the message to currentWork, so this worker's other code remains
    // independent of the message structure.
    currentWork.action = message.data.type;
    currentWork.fromNumber = message.data.fromNumber;
    currentWork.toNumber = message.data.toNumber;
}

function finalizeWorker(currentWork) {
    // Finalize (clean up) any resources this worker used to do its work.
    // ...
}