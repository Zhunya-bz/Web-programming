$(document).ready(function(){
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
});

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
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function(){
  //console.log("клик по кнопке меню");
  document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom_active');
}
);

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');

//открытие модального окна по клику на кнопку
modalButton.on('click', openModal);

//нажатие на клавишу Esc
$(document).on('keydown', function(evt) {
  if (evt.code == "Escape") {     //(e.keyCode == 27){ 
    //console.log('ты нажала на клавишу esc');
    closeModal(evt);}
});
//закрытие по клику на крестик
closeModalButton.on('click', closeModal);

function openModal(){
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay_visible');
  modalDialog.addClass('modal__dialog_visible');
}

function closeModal(event){
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay_visible');
  modalDialog.removeClass('modal__dialog_visible');
}
//обработка форм
$('.form').each(function(){
  $(this).validate({
    errorClass: "invalid",
    rules: {
      name: {
        required: true,
        minlength: 2
    },
    phone: {
      required: true,
      minlength: 16 //cj всеми +()  
    }
  },
    messages: {
    name: {
      required: "Specify your name",
      minlength: "Name must be more than 2 letters"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "Phone is required",
      minlength: "Incorrect phone number"
    }
  }
})

})

$('.phone_us').mask('+7(000) 000-0000');

AOS.init();
})
