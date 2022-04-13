var hotelSwiper = new Swiper('#hotel-slider', {
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

    speed: 600,
  effect: 'coverflow',
  grabCursor: true,
  //touchAngle: 45,
  //watchSlidesProgress: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // And if we need scrollbar
  /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
})

var mySwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button_next',
    prevEl: '.reviews-slider__button_prev',
  },
    speed: 600,
  //effect: 'coverflow',
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoHeight: true,
})