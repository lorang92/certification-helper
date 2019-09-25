// Handles the message event, to perform work in a background thread.
function messageHandler(e) {
    postMessage(e.data);

    //close();
}

addEventListener("message", messageHandler, true);