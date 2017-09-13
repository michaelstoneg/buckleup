$(document).ready(function(){
  console.log("It's the job page");


  $('.subscribe_popup_wrapper').hide();
  $('#subscribe_general').click(function () {
    $('.subscribe_popup_wrapper').show();
  });

  $('#subscribe_popup_close').click(function () {
    $('.subscribe_popup_wrapper').hide();
  });

  $('.press_subscribe_popup_wrapper').hide();
  $('#subscribe_press').click(function () {
    $('.press_subscribe_popup_wrapper').show();
  });

  $('#press_subscribe_popup_close').click(function () {
    $('.press_subscribe_popup_wrapper').hide();
  });

  if ($(window).width() < 450) {
    console.log('mobile mode');
  }


  // $('.seatbelt_animation_left').click(function () {

    $('.seatbelt_animation_left').css({
      animation: 'left_seatbelt 1.5s infinite'
    });

    $('.seatbelt_animation_right').css({
      animation: 'right_seatbelt 1.5s infinite'
    });

    $('.seatbelt_animation_arrow').css({
      animation: 'arrow_seatbelt 1.5s infinite'
    })

  // })


});
