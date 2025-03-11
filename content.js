function forceSkipVideos() {
    const videos = document.querySelectorAll('video.vjs-tech');
    videos.forEach(video => {
        if (video.readyState > 0) {
            video.pause();
            video.currentTime = video.duration || 99999;
            video.dispatchEvent(new Event('ended'));
        } else {
            video.addEventListener('loadedmetadata', () => {
                video.pause();
                video.currentTime = video.duration || 99999;
                video.dispatchEvent(new Event('ended'));
            });
        }
    });
    const skipButtons = document.querySelectorAll('button.skip-video-controllers, button.vjs-ended');
    skipButtons.forEach(btn => btn.click());
}
window.addEventListener('load', () => {
    forceSkipVideos();
    setInterval(forceSkipVideos, 2000);
});
