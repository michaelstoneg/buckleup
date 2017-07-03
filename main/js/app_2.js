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

});
