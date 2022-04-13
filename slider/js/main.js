var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,

  // If we need pagination это точки внизу
 /* pagination: {
    el: '.swiper-pagination',
  },*/

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_next',
    prevEl: '.slider-button_prev',
  },

  // And if we need scrollbar
  /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
  speed: 600,
  effect: 'coverflow',
  grabCursor: true,
  touchAngle: 45,
  watchSlidesProgress: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
