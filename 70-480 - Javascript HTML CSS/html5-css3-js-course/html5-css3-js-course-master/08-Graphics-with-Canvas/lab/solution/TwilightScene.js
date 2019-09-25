// Global variables.
var context;

// Page-load function.
function init() {

    context = document.getElementById('mainCanvas').getContext('2d');

    drawSky();
    drawMoon();
    drawSmallBird(100, 50);
    drawLargeBird(300, 150);
    drawBucket(40, 10);
}

// Draw the sky as a blue-to-red linear gradient, like a sunset.
function drawSky() {

    context.save();

    var grad = context.createLinearGradient(0, 0, 0, context.canvas.height);
    grad.addColorStop(0.0,  'rgba(0,0,150,1.0)'); 
    grad.addColorStop(0.6,  'rgba(0,0,135,0.3)'); 
    grad.addColorStop(0.8,  'rgba(242,167,18,0.7)'); 
    grad.addColorStop(1.0,  'rgba(242,44,11,0.9)'); 
    context.fillStyle = grad;
    context.fillRect(0, 
                    0, 
                    context.canvas.width, 
                    context.canvas.height);

    context.restore();
}


// Draw a big moon in the top-right corner of the canvas.
function drawMoon() {

    context.save();

    context.fillStyle = 'white';
    context.strokeStyle = 'rgba(255, 255, 0, 0.25)';
    context.lineWidth = 2;
    context.beginPath();
    context.arc(400, 130, 90, 0, 2 * Math.PI, true);
    context.fill();
    context.stroke();

    context.restore();
}


// Draw a small yellow bird.
function drawSmallBird(x, y) {

    context.save();

    context.fillStyle='yellow';
    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI, true);
    context.arc(x-20, y-10, 10, 0, 2 * Math.PI, true);
    context.fill();

    context.fillStyle='orange';
    context.beginPath();
    context.moveTo(x-26, y-10);
    context.lineTo(x-38, y-10);
    context.lineTo(x-26, y-15);
    context.fill();

    context.restore();
}


// Draw a large orange bird.
function drawLargeBird(x, y) {

    context.save();

    context.fillStyle='orange';
    context.beginPath();
    context.arc(x, y, 40, 0, 2 * Math.PI, true);
    context.arc(x-40, y-20, 20, 0, 2 * Math.PI, true);
    context.fill();

    context.fillStyle='yellow';
    context.beginPath();
    context.moveTo(x-56, y-17);
    context.lineTo(x-80, y-17);
    context.lineTo(x-56, y-24);
    context.fill();

    context.restore();
}


// Draw a bucket at the bottom of the canvas (in the middle).
function drawBucket(bucketWidth, bucketHeight) {

    var canvasWidth  = context.canvas.width;
    var canvasHeight = context.canvas.height;

    context.save();

    context.strokeStyle = 'darkblue';
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(canvasWidth / 2 - bucketWidth / 2, canvasHeight - bucketHeight);
    context.lineTo(canvasWidth / 2 - bucketWidth / 2, canvasHeight);
    context.lineTo(canvasWidth / 2 + bucketWidth / 2, canvasHeight);
    context.lineTo(canvasWidth / 2 + bucketWidth / 2, canvasHeight - bucketHeight);
    context.stroke();

    context.restore();
}
