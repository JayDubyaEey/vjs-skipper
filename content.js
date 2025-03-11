function skipVjsVideos() {
  const vjsVideos = document.querySelectorAll('video.video-js');

  vjsVideos.forEach(video => {
    if (video && video.duration && !isNaN(video.duration)) {
      // Jump to the end of the video
      video.currentTime = video.duration;
    } else {
      // Listen for metadata loading if duration is not yet available
      video.addEventListener('loadedmetadata', () => {
        video.currentTime = video.duration;
      });
    }
  });
}

// Run the function immediately when the page loads
window.addEventListener('load', skipVjsVideos);

// Also periodically check for dynamically loaded videos (optional)
setInterval(skipVjsVideos, 3000); // every 3 seconds
