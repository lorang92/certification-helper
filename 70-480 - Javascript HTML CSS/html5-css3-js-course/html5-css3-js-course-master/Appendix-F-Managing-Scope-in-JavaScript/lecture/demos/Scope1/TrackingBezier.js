var canvasElem = document.getElementById("canvas");
var ctx = canvasElem.getContext("2d");

var startPoint = [50, 100];
var endPoint = [400, 100];
var cp1 = [250, 50];
var cp2 = [350, 50];

canvasElem.onmousemove = function(e) {
	if (e.shiftKey) {
		cp1 = [e.clientX, e.clientY];
	} else if (e.ctrlKey) {
		cp2 = [e.clientX, e.clientY];
	}
	ctx.clearRect(0, 0, 500, 140);
	draw();
}

draw();

function draw() {

	ctx.lineWidth = 3;
	ctx.strokeStyle = "darkblue";                  
	ctx.beginPath();
	ctx.moveTo(startPoint[0], startPoint[1]);
	ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], endPoint[0], endPoint[1]);
	ctx.stroke();

	ctx.lineWidth = 4;
	ctx.strokeStyle = "lightblue";            
	var points = [startPoint, endPoint, cp1, cp2];
	for (var i = 0; i < points.length; i++) {
		drawPoint(points[i]);    
	}

	ctx.lineWidth = 2;
	drawLine(startPoint, cp1);
	drawLine(endPoint, cp2);
}

function drawPoint(point) {
	ctx.beginPath();
	ctx.strokeRect(point[0] - 2, point[1] - 2, 4, 4);
}

function drawLine(from, to) {
	ctx.beginPath();
	ctx.moveTo(from[0], from[1]);
	ctx.lineTo(to[0], to[1]);
	ctx.stroke();
}
