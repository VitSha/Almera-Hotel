

/* -------------  open and close nav-menu START-------------*/
  

(function () {
    const navWrapper = document.querySelector('.nav-wrapper');
    const mainItem = document.querySelector('.main-item');
    const menuItemBurger = document.querySelector('.menu__item_burger');
    const body = document.body;
    let base = true;


    if (document.documentElement.clientWidth > 540) {
      navWrapper.addEventListener('mouseenter', () => {
        navWrapper.classList.add('nav-active'); 
        menuItemBurger.classList.add('burger-active');

        base = false;
  
      });
  
      navWrapper.addEventListener('mouseleave', () => {
        navWrapper.classList.remove('nav-active');
        menuItemBurger.classList.remove('burger-active');
      });
  
      mainItem.addEventListener('click', () => {
        if (base) {
          navWrapper.classList.add('nav-active');
          menuItemBurger.classList.add('burger-active');
          base = false; 
  
        } else {
          navWrapper.classList.remove('nav-active'); 
          menuItemBurger.classList.remove('burger-active');
          base = true;
  
        }
      });

    } else {

      mainItem.addEventListener('click', () => {
        if (base) {
          navWrapper.classList.add('nav-active');
          body.classList.add('no-scroll');
          menuItemBurger.classList.add('burger-active');
          base = false; 
  
        } else {
          navWrapper.classList.remove('nav-active');
          body.classList.remove('no-scroll');
          menuItemBurger.classList.remove('burger-active');
          base = true;
        }
      });
    };
  }());  


  
  /* -------------  open and close nav-menu END-------------*/

  
/* -------------  switcher in services section START-------------*/

(function () {
    const switcherLeft = document.querySelector('.switcher-left');
    const switcherCenter = document.querySelector('.switcher-center');
    const switcherRight = document.querySelector('.switcher-right');
    const serviceInfoWrapper = document.querySelectorAll('.services__service-info_wrapper');
    const servicesPhoto = document.querySelectorAll('.services__photo');
    const switcherSlider = document.querySelector('.switcher-slider__slider');
  
    switcherLeft.addEventListener('click', () => {
        switcherSlider.classList.add('switcher-slider__slider-left');
        switcherSlider.classList.remove('switcher-slider__slider-center');
        switcherSlider.classList.remove('switcher-slider__slider-right');

        switcherLeft.classList.add('switcher-click-color'); 
        switcherCenter.classList.remove('switcher-click-color'); 
        switcherRight.classList.remove('switcher-click-color');  
        serviceInfoWrapper[0].classList.remove('display-none'); 
        serviceInfoWrapper[1].classList.add('display-none'); 
        serviceInfoWrapper[2].classList.add('display-none'); 
        servicesPhoto[0].classList.remove('display-none'); 
        servicesPhoto[1].classList.add('display-none'); 
        servicesPhoto[2].classList.add('display-none'); 
    });
  
    switcherCenter.addEventListener('click', () => {
      switcherSlider.classList.remove('switcher-slider__slider-left');
      switcherSlider.classList.add('switcher-slider__slider-center');
      switcherSlider.classList.remove('switcher-slider__slider-right');

      switcherLeft.classList.remove('switcher-click-color'); 
      switcherCenter.classList.add('switcher-click-color'); 
      switcherRight.classList.remove('switcher-click-color'); 
      serviceInfoWrapper[1].classList.remove('display-none'); 
      serviceInfoWrapper[0].classList.add('display-none'); 
      serviceInfoWrapper[2].classList.add('display-none'); 
      servicesPhoto[1].classList.remove('display-none'); 
      servicesPhoto[0].classList.add('display-none'); 
      servicesPhoto[2].classList.add('display-none'); 
    });
  
    switcherRight.addEventListener('click', () => {
      switcherSlider.classList.remove('switcher-slider__slider-left');
      switcherSlider.classList.remove('switcher-slider__slider-center');
      switcherSlider.classList.add('switcher-slider__slider-right');

      switcherLeft.classList.remove('switcher-click-color'); 
      switcherCenter.classList.remove('switcher-click-color'); 
      switcherRight.classList.add('switcher-click-color');
      serviceInfoWrapper[2].classList.remove('display-none'); 
      serviceInfoWrapper[0].classList.add('display-none'); 
      serviceInfoWrapper[1].classList.add('display-none');
      servicesPhoto[2].classList.remove('display-none'); 
      servicesPhoto[0].classList.add('display-none'); 
      servicesPhoto[1].classList.add('display-none');
    });
  
  }());  
  
  /* -------------  switcher in services section END-------------*/
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

