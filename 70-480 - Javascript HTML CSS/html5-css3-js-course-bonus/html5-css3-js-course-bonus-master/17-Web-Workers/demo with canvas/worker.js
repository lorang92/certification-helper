importScripts('lib.js');

onmessage = function (e){
    sleep(1000);
    try {
        var offscreenCanvas = e.data;
        var context = offscreenCanvas.getContext('2d');

        sleep(1000);

        context.fillStyle = 'orange';
        context.strokeStyle = 'blue';

        context.rect(10, 10, 80, 80);
        context.fill();

        context.beginPath();
        context.moveTo(40, 40);
        context.lineTo(200, 80);
        context.stroke();
    } finally {
        // Don't uncomment the next line, because you won't see the drawing:
        //this.close();
    }
}
