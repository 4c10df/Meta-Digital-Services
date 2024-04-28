// play video
document.addEventListener('DOMContentLoaded', () => {
    const videoOverlay = document.querySelector('.inner-box');
    
    
    
    const youtubeVideo = document.getElementById('player');
    const closeButton = document.getElementById('close-button');

    videoOverlay.addEventListener('click', () => {
        videoOverlay.style.display = 'none';
        youtubeVideo.style.display = 'block';
        player.playVideo();
    });

    closeButton.addEventListener('click', () => {
        youtubeVideo.style.display = 'none';
        videoOverlay.style.display = 'block';
        player.pauseVideo();
    });

   
});

//// bg color for nav  ////////
function changeBg(){
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    
    if(scrollValue < 100){
        navbar.classList.remove('bgColor');
    } else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg)
//// bg color for nav end ////////