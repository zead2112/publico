
var video = document.getElementById("Video")
function setupVideo () {
    // get video
      var video = document.getElementById('Video')
      // Play the video, this is optional
      video.play();
      // Add a listener to this video, so that when the video ends, the video is "hidden".
      video.addEventListener('ended', function() {
      // hide video
        video.style.display = "none";
      })
    }