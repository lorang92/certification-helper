function onload() {

    var myVideo = document.getElementById('myVideo');
    var myAudio = document.getElementById('myAudio');
    myAudio.playbackRate = 5;

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    // Shift the canvas down by its height, and flip its Y axis (to achieve the reflection effect).
    context.translate(0, canvas.height);
    context.scale(1, -1);

    // Set an opaque-to-transparent gradient for the canvas.
    var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    context.fillStyle = gradient;

    // Handle the mouseenter event for the video, to play an audio blip. 
    myVideo.addEventListener('mouseenter',
                              function () {
                                  myAudio.play();
                              },
                              false);

    // When the audio has finished, play the video and also fade-in the canvas.
    myAudio.addEventListener('ended',
                              function () {
                                  myVideo.play();
                                  $('#reflectionCanvas').fadeIn(1000);
                              },
                              false);


    // Handle the mouseleave event for the video, to pause the video and also fade-out the canvas.
    myVideo.addEventListener('mouseleave',
                              function () {
                                  myVideo.pause();
                                  $('#reflectionCanvas').fadeOut();
                              },
                              false);

    var videoInterval;

    // Handle the canplay event for the video, to regularly copy the video frame into the canvas.
    // DO NOT USE: canplay event, because it is not always triggered.
    myVideo.addEventListener('play', function () {
        videoInterval = setInterval(function () {
            context.drawImage(myVideo, 0, 0, canvas.width, canvas.height);  // Draw the current video frame in the canvas.
            context.fillRect(0, 0, canvas.width, canvas.height);            // Draw the fade effect.
        }, 20);
    }, false);

    myVideo.addEventListener('pause', function () {
        clearInterval(videoInterval);
    }, false);
}
