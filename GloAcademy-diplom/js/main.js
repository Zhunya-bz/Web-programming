$(document).ready(function(){
    var menuButton = $(".menu-button");
    menuButton.on('click', function(){
      //console.log('Все ок');
      $(".navbar-menu").toggleClass('navbar-menu_active');
      //$('.navbar-menu__close').toggleClass('navbar-menu__close_active');
  });
  var buttonClose = $(".navbar-menu__close");
    buttonClose.on('click', function(){
      //console.log('Все ок');
      $(".navbar-menu").toggleClass('navbar-menu_active');
     // $('.navbar-menu__close').toggleClass('navbar-menu__close_active');
  });
  //тут переключаем табы
  var tabs=$('.trend__item');
  var content=$('.card');
  tabs.on('click', function (event) {
    var activeTabs = $(this).attr('data-target');
    //console.log($('.'+activeTabs)); //обращаюсь к контенту
    tabs.removeClass('trend__item_active');
    content.removeClass('card_active');
    $(this).addClass('trend__item_active');
    $('.'+activeTabs).addClass('card_active');
    
  });

  var mySwiper = new Swiper('#reviews', {
  // Optional parameters
 // direction: 'vertical',
  loop: true,
  effect: "coverflow",
  autoplay: {
        delay: 7000,
    },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  });
  $(".swiper-container").mouseover(function() {
    
    mySwiper.autoplay.stop();
  });

  $(".swiper-container").mouseout(function() {
    mySwiper.autoplay.start();
  });
  
  var historySwiper = new Swiper('#history', {
    // Optional parameters
  // direction: 'vertical',
    loop: false,
    effect: "coverflow",
    // Navigation arrows
    navigation: {
      nextEl: '.history__button_next',
      prevEl: '.history__button_prev',
    },
   
  });

  //var buttonSlide = $('.history__button')
  //buttonSlide.on('')
  $(".form").each(function(){
    $(this).validate({
    errorClass:"invalid",
    
      messages:{
       // name:{
          //required:"Specify your name",minlength:"Name must be more than 2 letters"},
        email:{
          required: "Это обязательное поле",
          email: "Ваш email должен быть в виде mail@domain.com",
        },
        password: {
          required: "Это обязательное поле",
          
        }
     }
    //}
  });
  });

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

  //закрытие если кликаешь на пустую область
  $('.bg-close').on('click', function(e) {
    //$(document).mouseup(function (e){ // событие клика по веб-документу
    //var div = $("#modal"); // тут указываем ID элемента
    //if (!div.is(e.target) // если клик был не по нашему блоку
        //&& div.has(e.target).length === 0) { // и не по его дочерним элементам
        //div.hide(); // скрываем его
        closeModal(e);
      //}
  });


  function openModal(){
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    $(".navbar-menu").removeClass('navbar-menu_active');
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
  }

  function closeModal(event){
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
  };

  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
    $(".navbar-menu").removeClass('navbar-menu_active');
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
  // $('a[href*="#"]').on('touchstart', function() {
  //   $(".navbar-menu").removeClass('navbar-menu_active');
  //   $page.animate({
  //       scrollTop: $($.attr(this, 'href')).offset().top
  //   }, 1000);
  //   return false;
  // });

});