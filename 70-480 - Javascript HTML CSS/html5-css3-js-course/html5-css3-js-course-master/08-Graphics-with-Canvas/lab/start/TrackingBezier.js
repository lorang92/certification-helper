// Global variables.
var startPoint    = [ 50, 100];
var endPoint      = [400, 100];
var controlPoint1 = [250,  50];
var controlPoint2 = [350,  50];

var context;

// Page-load function.
function init() {
    var canvas = document.getElementById('mainCanvas');
    context = canvas.getContext('2d');
    canvas.addEventListener('mousemove', mousemove, true);

    draw();
}

// Handler for mousemove events.
// If the SHIFT   key is pressed, set controlPoint1 to the current mouse coordinate.
// If the CONTROL key is pressed, set controlPoint2 to the current mouse coordinate.
function mousemove(e) {

    if (e.shiftKey) {  
        controlPoint1 = [e.clientX, e.clientY];
    } else if (e.ctrlKey) {
        controlPoint2 = [e.clientX, e.clientY];
    }

    // On every mouse move event, clear the canvas and redraw it.
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    draw();
}

// Main drawing function.
function draw() {

    context.save();

    // TODO 5: Draw the Bezier curve.



    // Draw the start point, the end point, and the two control points as light-blue points.
    context.lineWidth = 4;
    context.strokeStyle = 'lightblue';
    var points = [startPoint, endPoint, controlPoint1, controlPoint2];
    for (var i = 0; i < points.length; i++) {
        drawPoint(points[i]);
    }

    // Draw a line from the start point to the controlPoint1, and from the end point to controlPoint2.
    context.lineWidth = 2;
    drawLine(startPoint, controlPoint1);
    drawLine(endPoint, controlPoint2);

    context.restore();
}

// Draw a point as a small square, 4px in size.
// The "point" parameter is an array specifying the left-top coordinate for the point. 
function drawPoint(point) {
    context.beginPath();
    context.strokeRect(point[0] - 2, point[1] - 2, 4, 4);
}

// Draw a line from one coordinate to another.
// The "from" parameter is an array specifying the left-top coordinate for first point. 
// The "to"   parameter is an array specifying the left-top coordinate for other point. 
function drawLine(from, to) {
    context.beginPath();
    context.moveTo(from[0], from[1]);
    context.lineTo(to[0], to[1]);
    context.stroke();
}
