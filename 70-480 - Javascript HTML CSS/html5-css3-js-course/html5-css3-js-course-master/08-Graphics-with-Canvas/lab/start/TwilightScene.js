// Global variables.
var context;

// Page-load function.
function init() {

    // TODO 1: Get the 2d context for the canvas element, and store in the global context variable.
    var canvas = document.getElementById("mainCanvas");
    context = canvas.getContext("2d");
    
    drawSky();
    drawMoon();
    drawSmallBird(100, 50);
    drawLargeBird(300, 150);
    drawBucket(40, 10);
}

function drawSky() {

    // TODO 2: Draw the sky as a blue-to-red linear gradient, like a sunset.
    context.save();
    var grad = context.createLinearGradient(0, 0, context.canvas.width, 0)
    grad.addColorStop(0, "blue");
    grad.addColorStop(1, "red");
    context.fillStyle = grad;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.restore();

}


function drawMoon() {

    // TODO 3a: Draw a big moon in the top-right corner of the canvas.
    context.save();
    context.fillStyle = "white";
    context.strokeStyle = "yellow";
    context.beginPath();
    context.arc(100, 75, 50, 0, 2 * Math.PI);
    context.stroke();
    context.fill(); 
    context.restore();
}


function drawSmallBird(x, y) {

    // TODO 3b: Draw a small yellow bird.

}


function drawLargeBird(x, y) {

    // TODO 3c: Draw a large orange bird.

}


function drawBucket(bucketWidth, bucketHeight) {

    // TODO 3d: Draw a bucket at the bottom of the canvas (in the middle).

}
