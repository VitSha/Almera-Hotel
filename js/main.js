/* ------------- START open and close nav-menu-------------*/
   
(function () {
    const navWrapper = document.querySelector('.nav-wrapper');
    const navWrapperFull = document.querySelector('.nav-wrapper-full')
    const mainItem = document.querySelector('.menu__item-full')
  
    navWrapper.addEventListener('mouseenter', () => {
        navWrapper.classList.add('display-none'); 
        navWrapperFull.classList.remove('display-none');   
    });
  
    navWrapperFull.addEventListener('mouseleave', () => {
        navWrapper.classList.remove('display-none'); 
        navWrapperFull.classList.add('display-none'); 
    });
  
    mainItem.addEventListener('click', () => {
      navWrapper.classList.remove('display-none'); 
      navWrapperFull.classList.add('display-none'); 
    });
  
  }());  
  
  /* ------------- END open and close nav-menu-------------*/

  
/* ------------- START switcher in services section-------------*/

(function () {
    const switcherLeft = document.querySelector('.switcher-left');
    const switcherCenter = document.querySelector('.switcher-center')
    const switcherRight = document.querySelector('.switcher-right')
  
    const cafeTitle = document.querySelector('.cafe-title');
    const restTitle = document.querySelector('.rest-title')
    const parkingTitle = document.querySelector('.parking-title')
  
    const cafeText = document.querySelector('.cafe-text');
    const restText = document.querySelector('.rest-text')
    const parkingText = document.querySelector('.parking-text')

    const cafePhoto = document.querySelector('.cafe-photo');
    const restPhoto = document.querySelector('.rest-photo')
    const parkingPhoto = document.querySelector('.parking-photo')
  
    switcherLeft.addEventListener('click', () => {
        switcherLeft.classList.add('switcher-click-color'); 
        switcherCenter.classList.remove('switcher-click-color'); 
        switcherRight.classList.remove('switcher-click-color');  
        cafeTitle.classList.remove('display-none'); 
        cafeText.classList.remove('display-none'); 
        restTitle.classList.add('display-none'); 
        restText.classList.add('display-none'); 
        parkingTitle.classList.add('display-none'); 
        parkingText.classList.add('display-none'); 
        cafePhoto.classList.remove('display-none'); 
        restPhoto.classList.add('display-none'); 
        parkingPhoto.classList.add('display-none');

  
    });
  
    switcherCenter.addEventListener('click', () => {
      switcherLeft.classList.remove('switcher-click-color'); 
      switcherCenter.classList.add('switcher-click-color'); 
      switcherRight.classList.remove('switcher-click-color'); 
      cafeTitle.classList.add('display-none'); 
      cafeText.classList.add('display-none'); 
      restTitle.classList.remove('display-none'); 
      restText.classList.remove('display-none'); 
      parkingTitle.classList.add('display-none'); 
      parkingText.classList.add('display-none'); 
      cafePhoto.classList.add('display-none'); 
      restPhoto.classList.remove('display-none'); 
      parkingPhoto.classList.add('display-none');
    });
  
    switcherRight.addEventListener('click', () => {
      switcherLeft.classList.remove('switcher-click-color'); 
      switcherCenter.classList.remove('switcher-click-color'); 
      switcherRight.classList.add('switcher-click-color');
      cafeTitle.classList.add('display-none'); 
      cafeText.classList.add('display-none'); 
      restTitle.classList.add('display-none'); 
      restText.classList.add('display-none');   
      parkingTitle.classList.remove('display-none'); 
      parkingText.classList.remove('display-none');
      cafePhoto.classList.add('display-none'); 
      restPhoto.classList.add('display-none'); 
      parkingPhoto.classList.remove('display-none');
    });
  
  }());  
  
  /* ------------- END switcher in services section-------------*/

  'use strict';
/* --------------START Video Youtube----------*/

function onYouTubePlayerAPIReady() {
  var playerYoutube;

  playerYoutube = new YT.Player("video__element", {
    videoId: "yKtr1roQ2yg",
    playerVars: {
        'start': 70,
        'mute': 1
    },
    events: {
      onReady: onYouTubePlayerReady
    }
  });
}

function onYouTubePlayerReady(event) {
  var targetYoutubeVideo = event.target;
  var videoDomElem = document.getElementById(
    event.target.getIframe().getAttribute("id")
  );
  var newPLayBtn = videoDomElem.nextElementSibling;

  newPLayBtn.addEventListener("click", function(event) {
    targetYoutubeVideo.playVideo();
    this.classList.add('hidden');
    videoDomElem.classList.remove('video__element__content_hide-origin-play-btn');
    videoDomElem.parentNode.classList.remove('videos__wrapper_overlay');
  });
}

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* ------------- END Video Youtube-------------*/