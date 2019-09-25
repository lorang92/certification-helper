// Graph object.    
var Graph = function (a, b, c, colour) {
    this.a = a;             // Coefficient of x squared.
    this.b = b;             // Coefficient of x.
    this.c = c;             // Coefficient of units.
    this.colour = colour;   // Colour to plot the graph.
    return this;
};


// Global variables.
var COLOURS = ['red', 'orange', 'gold', 'green', 'blue', 'indigo', 'violet'];
var CELL_SIZE;              // Size of a cell in the graph, in pixels.
var W, H;                   // Width and height of the graph canvas, in pixels.  

var graphs = [];            // Collection of Graph objects.
var legendContext;          // 2d context for the legend context.
var graphContext;           // 2d context for the graph context.


// Page-load function.
function onLoad() {

    legendContext = document.getElementById('legendCanvas').getContext('2d');
    graphContext  = document.getElementById('graphCanvas').getContext('2d');

    W = graphContext.canvas.width;
    H = graphContext.canvas.height;
    CELL_SIZE = W / 22;   // The graph grid is 22 x 22 cells.

    initLegendCanvas();
    initGraphCanvas();
}


// Initialize the legend canvas.
function initLegendCanvas() {
    legendContext.clearRect(0, 0, legendContext.canvas.width, legendContext.canvas.height);
    drawHeaderText(legendContext, 'Legend');
}


// Initialize the graph canvas.
function initGraphCanvas() {
    graphContext.clearRect(0, 0, W, H);
    drawHeaderText(graphContext, 'Graphs');

    drawGrid();
    drawAxes();
    drawLabels();
}


// Draw the light-blue grid on the graph canvas.
function drawGrid() {

    graphContext.save();

    graphContext.strokeStyle = 'lightblue';
    graphContext.lineWidth = 0.5;

    // Draw vertical lines for the grid.
    for (var x = -11; x <= 11; x++) {
        graphContext.beginPath();
        graphContext.moveTo(xCoord(x), 0);
        graphContext.lineTo(xCoord(x), H);
        graphContext.stroke();
    }

    // Draw horizontal lines for the grid.
    for (var y = -11; y <= 11; y++) {
        graphContext.beginPath();
        graphContext.moveTo(0, yCoord(y));
        graphContext.lineTo(W, yCoord(y));
        graphContext.stroke();
    }

    graphContext.restore();
}


// Draw the dark-blue axes on the graph canvas.
function drawAxes() {

    graphContext.save();

    graphContext.strokeStyle = 'darkblue';
    graphContext.fillStyle   = 'darkblue';
    graphContext.lineWidth = 2;

    // Draw the horizontal x axis.
    graphContext.beginPath();
    graphContext.moveTo(0, H/2);
    graphContext.lineTo(W, H/2);
    graphContext.stroke();

    // Draw the vertical y axis.
    graphContext.beginPath();
    graphContext.moveTo(W/2, 0);
    graphContext.lineTo(W/2, H);
    graphContext.stroke();

    // Draw a small triangular arrowhead at the end of the x axis.
    graphContext.beginPath();
    graphContext.moveTo(W - 10, H/2 - 10);
    graphContext.lineTo(W - 10, H/2 + 10);
    graphContext.lineTo(W,      H/2);
    graphContext.fill();

    // Draw a small triangular arrowhead at the end of the y axis.
    graphContext.beginPath();
    graphContext.moveTo(W/2 - 10, 10);
    graphContext.lineTo(W/2 + 10, 10);
    graphContext.lineTo(W/2,      0);
    graphContext.fill();

    graphContext.restore();
}


// Click-handler for the "Add" button on the form. 
function onAddGraph() {

    // Get the coefficients for x squared, x, and units.
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Invalid coefficient(s)");
    }
    else {
        // Create a new Graph object and add it to the collection of graphs.
        var graph = new Graph(a, b, c, COLOURS[graphs.length % COLOURS.length]);
        graphs.push(graph);

        // Draw the curve in the graph canvas, and the equation text in the legend canvas.
        drawGraphCurve(graph);
        drawGraphEquation(graph);
    }
}


// Draw a graph curve on the graph canvas.
function drawGraphCurve(graph) {

    graphContext.save();

    graphContext.strokeStyle = graph.colour;
    graphContext.lineWidth = 2;

    // Calculate the x, y values for the first point.
    var x = -11;
    var y = (graph.a * x * x) + (graph.b * x) + (graph.c);

    // Move to the first point.
    graphContext.beginPath();
    graphContext.moveTo(xCoord(x), yCoord(y));

    // Plot the graph by drawing a series of very small joined-up lines.
    for (x = -11; x <= 11; x += 0.1) {
        y = (graph.a * x * x) + (graph.b * x) + (graph.c);
        graphContext.lineTo(xCoord(x), yCoord(y));
        graphContext.stroke();
    }

    graphContext.restore();
}


// Helper function, to calculate the x canvas-coordinate for a logical x value.
function xCoord(x) {
    return W / 2 + x * CELL_SIZE;
}


// Helper function, to calculate the y canvas-coordinate for a logical y value. 
// Remember that whereas logical y values increase as you go up the graph, the pixel coordinates must decrease!
function yCoord(y) {
    return H / 2 - y * CELL_SIZE;
}


// Draw a large header text on the specified canvas context.
function drawHeaderText(context, headerText) {

    context.save();

    // TODO 1: Draw the header text at the top of the specified canvas context.



    context.restore();
}


// Draw the number labels on the graph.
function drawLabels() {

    graphContext.save();

    // TODO 2: Draw the labels on the x and y axes.



    graphContext.restore();
}


// Draw the equation text for a graph on the legend canvas.
function drawGraphEquation(graph) {

    // Coordinates for the start of the equation in the legend canvas.
    var x = 0;
    var y = 60 * graphs.length;

    legendContext.save();

    // TODO 3b: 
    // First, set the colour and baseline for the text.
    // Then write the equation text in the following format (normal text should be 20pt, and the power subscripts should be 10pt):
    //
    //         2     1     0
    //   y = ax  + bx  + cx 
    //
    // To achieve this effect, call drawLegendTextSnippet() several times, to draw each individual text snippet. 
    // The function returns the width of the text snippet. Add this value to x each time, ready for the next text snippet.



    graphContext.restore();
}


// Helper function, to draw a snippet of text in the legend, using the specified coordinates and fontsize.
function drawLegendTextSnippet(x, y, fontSize, text) {

    // TODO 3a: 
    // Set the font to Arial at the specified font size.
    // Draw solid text at the specified x, y coordinates.
    // Return the width of the text just displayed.


}