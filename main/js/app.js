

$(document).ready(function(){
  console.log("It's Aliiive!!");

  var scroll_position = 0;
  var scroll_position_a = 0;
  var direction = undefined;
  var scroll_direction = undefined;
  var media_scroll_position = 0;
  var go_animate = 'off';
  var animation_progress = undefined;
  var animation_slide_counter = 0;
  var small_mobile_mode = 'off';
  var mobile_mode = 'off';
  var tablet_mode = 'off';

  $('.responsive_on').hide();
  $('.responsive_on_2').hide();
  console.log('hiding responsive elements');
  $('.tablet_on').hide();
  console.log('hiding tablet elements');

  $('.animation_text_subcontainer').slick({
    arrows: false,
    dots: false,
    vertical: true
  });

  if($(window).width() < 377 && $(window).width() > 300) {
    small_mobile_mode = 'on';
    console.log('small mobile mode is ' + small_mobile_mode);
    $('.responsive_off').hide();
    $('.mobile_off').hide();
    console.log('non responsive elements ran away!!');
    $('.responsive_on').show();
    $('.mobile_on').show();
    console.log('wild responsive elements appeared!!');
  }

  if($(window).width() < 450 && $(window).width() > 400) {
    mobile_mode = 'on';
    console.log('mobile mode is ' + mobile_mode);
    $('.responsive_off').hide();
    $('.mobile_off').hide();
    console.log('non responsive elements ran away!!');
    $('.responsive_on').show();
    $('.mobile_on').show();
    console.log('wild responsive elements appeared!!');
  }

  if ($(window).width() < 769 && $(window).width() > 700 ) {
    tablet_mode = 'on';
    console.log('tablet mode is ' + tablet_mode);
    $('.responsive_off').hide();
    $('.tablet_off').hide();
    $('.mobile_on').hide();
    console.log('non responsive elements ran away!!');
    $('.responsive_on').show();
    $('.tablet_on').show();
    console.log('wild responsive elements appeared!!');
  }


  $('.subscribe_popup_wrapper').hide();
  $('#subscribe_general').click(function () {
    console.log('open the subscribe bay doors');
    $('.subscribe_popup_wrapper').show();
  });

  $('#subscribe_popup_close').click(function () {
    console.log('subscribe popup disappeared from b4 your eyes');
    $('.subscribe_popup_wrapper').hide();
  });


  $('.press_subscribe_popup_wrapper').hide();
  $('#subscribe_press').click(function () {
    console.log('open the subscribe bay doors');
    $('.press_subscribe_popup_wrapper').show();
  });

  $('#press_subscribe_popup_close').click(function () {
    console.log('subscribe popup disappeared from b4 your eyes');
    $('.press_subscribe_popup_wrapper').hide();
  });


  $(".burger_menu_list").hide();
  $(".burger_menu_img_wrapper").click(function() {
    console.log('open menu');
    $(".burger_menu_list").slideToggle(1000);
  });

  if ($(window).width() >= 2560) {
    console.log('0 - 5000 real quick!!!!');
  }


setTimeout(RotateCarousel, 1000);
function RotateCarousel() {

  if ($(window).width() > 768) {
    console.log('500px media scroll');
    $(".media_scroll_list li:first-child").animate({ marginLeft: -500 }, 8000, 'linear', function () {
    $(".media_scroll_list li:first-child").appendTo('.media_scroll_list');
    $(".media_scroll_list li:last-child").css({marginLeft: '0'});
    RotateCarousel();
    });
  }
  else if ( $(window).width() == 768) {
    console.log('350px media scroll');
    $(".media_scroll_list li:first-child").animate({ marginLeft: -350 }, 5000, 'linear', function () {
    $(".media_scroll_list li:first-child").appendTo('.media_scroll_list');
    $(".media_scroll_list li:last-child").css({marginLeft: '0'});
    RotateCarousel();
    });
  }
  else if ($(window).width() <= 420) {
    console.log('250px media scroll');
    $(".media_scroll_list li:first-child").animate({ marginLeft: -250 }, 5000, 'linear', function () {
    $(".media_scroll_list li:first-child").appendTo('.media_scroll_list');
    $(".media_scroll_list li:last-child").css({marginLeft: '0'});
    RotateCarousel();
    });
  }
}


  $(window).scroll(function () {
      scroll_position = $(window).scrollTop();
      console.log("scroll position: " + scroll_position);

      var scroll_position_b = $(this).scrollTop();
      if (scroll_position_b > scroll_position_a) {
        console.log('going down');
        scroll_direction = 'down';
      } else {
        scroll_direction = 'up';
        console.log('going up');
      }
      scroll_position_a = scroll_position_b;



      // if (scroll_position >= 50 ) {
      //   $('.burger_menu_img_wrapper').css({
      //     position: 'fixed',
      //     top: '10px',
      //     left: '15px'
      //   });
      // }
      // else {
      //   $('.burger_menu_img_wrapper').css({
      //     position: 'sticky'
      //   });
      // }


      if ($(window).width() >= 1280 ) {
        console.log('laptop animation');

        if (($(document).scrollTop()-200) < $(window).height() ) {
          console.log('Too soon!!!');
          go_animate = 'off';

          $('.animation_master_container').css({
            position: 'relative',
            top: '180px'
          });
        }

        if (($(document).scrollTop()-200) > $(window).height() ) {
          console.log('Nowwww!!!');
          go_animate = 'on';

          var animation_container_adjust_1 = $('.main_container').height() / 12;
          console.log('animation container adjustment  ' + animation_container_adjust_1);

          animation_progress = (scroll_position - $(window).height())- 200;
          console.log('animation_progress  ' + animation_progress);

          $('.animation_master_container').css({
            position: 'fixed',
            top: '80px'
          });
        }

        if (animation_progress > 10950) {
          go_animate = 'off'
          console.log('animation is ' + go_animate);

          $('.animation_master_container').css({
            position: 'relative',
            top: '11146px'
          });
        }
      }


      if ($(window).height() == 1024 && $(window).width() == 768 ) {
        console.log('tablet animation');

        if (($(document).scrollTop() - 100) < $(window).height() ) {
          console.log('Hooldd!!!');
          go_animate = 'off';

          $('.animation_master_container').css({
            position: 'relative',
            top: '350px'
          });
        }

        if (($(document).scrollTop() - 300) > $(window).height() ) {
          console.log('Nowwww!!!');
          go_animate = 'on';

          animation_progress = (scroll_position - $(window).height())- 300;
          console.log('animation_progress  ' + animation_progress);

          $('.animation_master_container').css({
            position: 'fixed',
            top: '150px'
          });
        }

        if (animation_progress > 10950) {
          go_animate = 'off'
          console.log('animation is ' + go_animate);

          $('.animation_master_container').css({
            position: 'relative',
            top: '11146px'
          });
        }
      }


      // if ($(window).height() == 736 && $(window).width() == 414 ) {
      if (($(window).height() == 736 || $(window).height() == 731) && ($(window).width() == 414 || $(window).width() == 411 )) {
        console.log('mobile animation');

        if (($(document).scrollTop() - 200) < $(window).height() ) {
          console.log('Hooldd!!!');
          go_animate = 'off';

          $('.animation_master_container').css({
            position: 'relative',
            top: '270px'
          });
        }

        if (($(document).scrollTop() - 300) > $(window).height() ) {
          console.log('Nowwww!!!');
          go_animate = 'on';

          animation_progress = (scroll_position - $(window).height())- 300;
          console.log('animation_progress  ' + animation_progress);

          $('.animation_master_container').css({
            position: 'fixed',
            top: '5px'
          });
        }

        if (animation_progress > 10950) {
          go_animate = 'off'
          console.log('animation is ' + go_animate);
          $('.animation_master_container').css({position: 'relative', top: '11206px'});
        }
      }

      if ($(window).height() <= 680 && $(window).width() <= 375 ) {
        console.log('small mobile animation');

        if (($(document).scrollTop() - 100) < $(window).height() ) {
          console.log('Hooldd!!!');
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '130px'});
        }

        if (($(document).scrollTop() - 200) > $(window).height() ) {
          console.log('Nowwww!!!');
          go_animate = 'on';
          animation_progress = (scroll_position - $(window).height())- 200;
          console.log('animation_progress  ' + animation_progress);

          $('.animation_master_container').css({
            position: 'fixed', top: '-25px'});
        }

        if (animation_progress > 10950) {
          go_animate = 'off'
          console.log('animation is ' + go_animate);

          $('.animation_master_container').css({
            position: 'relative', top: '11146px'});
        }
      }


      if ($(window).height() <= 640 && $(window).width() <= 360 ) {
        console.log('small mobile animation 2');

        if (($(document).scrollTop() - 0) < $(window).height() ) {
          console.log('Hooldd!!!');
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '100px'});
        }

        if (($(document).scrollTop() - 375) > $(window).height() ) {
          console.log('Nowwww!!!');
          go_animate = 'on';

          animation_progress = (scroll_position - $(window).height())- 375;
          console.log('animation_progress  ' + animation_progress);

          $('.animation_master_container').css({
            position: 'fixed',
            top: '-40px'
            // top: '-30px'
          });
        }

        if (animation_progress > 10950) {
          go_animate = 'off'
          console.log('animation is ' + go_animate);
          $('.animation_master_container').css({position: 'relative', top: '11146px'});
        }
      }


      if (go_animate  == 'on') {
        console.log('animating...');

        //transition snap fixes

        if (animation_progress > 1700 && animation_progress <2500 && $('.animation_sheet_3').css('left') != 0) {
          console.log('animation sheet 3 is not aligned');
          $('.animation_sheet_3').css({left: 0});
          $('.animation_step_set_3').css({left: 0});
        }
        if (animation_progress > 2782 && animation_progress < 4900 && $('.animation_sheet_3').css('left') != 281) {
          console.log('animation sheet 3 is not aligned');
          $('.animation_sheet_3').css({left: -280});
          $('.animation_step_set_3').css({left: -280});
        }
        if (animation_progress > 2500 && animation_progress < 2783 && $('.animation_press_chats').css('top') != 0) {
          console.log('chats box is not vertically aligned');
          $('.animation_press_chats').css({top: 0});
        }
        if (animation_progress > 2853 && animation_progress < 4400 && $('.animation_press_chats').css('top') != -72) {
          console.log('chats box is not vertically aligned yet again');
          $('.animation_press_chats').css({top: -72});
        }
        if (animation_progress > 4470 && animation_progress < 4900 && $('.animation_press_chats').css('top') != -72) {
          console.log('chats box is not vertically aligned yet again');
          $('.animation_press_chats').css({top: -72});
        }
        if (animation_progress > 4900 && animation_progress < 6100 && $('.animation_sheet_4').css('left') != 0) {
          console.log('animation sheet 4 is out of horizontal alignment');
          $('.animation_sheet_4').css({ left: 0 });
          $('.animation_step_set_4').css({ left: 0 });
        }
        if (animation_progress > 6380 && animation_progress < 7400 && $('.animation_sheet_4').css('left') != -277) {
          console.log('animation sheet 4 is out of horizontal alignment yet again');
          $('.animation_sheet_4').css({ left: -277 });
          $('.animation_step_set_4').css({ left: -277 });
        }
        if (animation_progress > 7685 && animation_progress < 8700 && $('.animation_sheet_4').css('left') != -561) {
          console.log('animation sheet 4 is out of horizontal alignment yet again');
          $('.animation_sheet_4').css({ left: -561 });
          $('.animation_step_set_4').css({ left: -561 });
        }
        if (animation_progress > 8983 && animation_progress < 9500 && $('.animation_sheet_4').css('top') != 0) {
          console.log('animation sheet 4 is out of vertical alignment yet again');
          $('.animation_sheet_4').css({ top: 0 });
          $('.animation_step_set_4').css({ top: 0 });
        }
        if (animation_progress > 8983 && animation_progress < 10950 && $('.animation_sheet_4').css('left') != -840) {
          console.log('animation sheet 4 is out of horizontal alignment yet again');
          $('.animation_sheet_4').css({ left: -840 });
          $('.animation_step_set_4').css({ left: -840 });
        }

        //transition snap fixes


        //txt changes

        if (animation_progress < 400) {
          $('.animation_text_subcontainer').slick('slickGoTo', '0');
        }
        if (animation_progress > 400 && animation_progress < 2782) {
          $('.animation_text_subcontainer').slick('slickGoTo', '1');
        }
        if (animation_progress > 2782 && animation_progress < 4900) {
          $('.animation_text_subcontainer').slick('slickGoTo', '2');
        }
        if (animation_progress > 4900 && animation_progress < 8983) {
          $('.animation_text_subcontainer').slick('slickGoTo', '3');
        }
        if (animation_progress > 8983 && animation_progress < 10700) {
          $('.animation_text_subcontainer').slick('slickGoTo', '4');
        }
        if (animation_progress > 10700) {
          $('.animation_text_subcontainer').slick('slickGoTo', '5');
        }
        //txt changes


        if (animation_progress > 400 && animation_progress < 900) {
          console.log('turning off step 1 - 2');
          console.log('turning on step 3 - 4');

          $('.animation_press_1').css({display: 'none'});
          $('.animation_press_2').css({display: 'none'});

          $('.animation_press_3').css({display: 'inline-block', animation: 'bulge .1s linear'});
          $('.animation_press_4').css({display: 'inline-block', animation: 'bulge .1s linear'});
        }

        if (animation_progress < 400) {
          console.log('turning on step 1 - 2');
          console.log('turning off step 3 - 4');

          $('.animation_press_1').css({display: 'inline-block', animation: 'bulge .1s linear'});
          $('.animation_press_2').css({display: 'inline-block', animation: 'bulge .1s linear'});
          $('.animation_sheet_1').css({display: 'inline-block'});

          $('.animation_press_3').css({display: 'none'});
          $('.animation_press_4').css({display: 'none'});
          $('.animation_sheet_2').css({display: 'none'});
          $('.animation_step_set_2').css({display: 'none'});
          $('.animation_sheet_3').css({display: 'none'});
          $('.animation_step_set_3').css({display: 'none'});
          $('.animation_sheet_4').css({display: 'none'});
          $('.animation_step_set_4').css({display: 'none'});
        }


        if (animation_progress > 900 && animation_progress < 1400) {
          console.log('moving from swipe to map screen');

          $('.animation_sheet_1').css({display: 'none'});
          $('.animation_step_set_1').css({display: 'none'});

          $('.animation_sheet_2').slideDown(500);
          $('.animation_step_set_2').slideDown(500);

          console.log('turn on step 5');
          $('.animation_press_5').css({display: 'inline-block', animation: 'wiggle 5s linear'});
        }

        if (animation_progress < 900 && animation_progress > 400) {
          console.log('back to screen 1');
          $('.animation_sheet_2').css({display: 'none'});
          $('.animation_step_set_2').css({display: 'none'});

          $('.animation_sheet_1').slideDown(500);
          $('.animation_step_set_1').slideDown(500);
        }


        if (animation_progress > 1300 && animation_progress < 1700) {
          console.log('turn on step 6');
          $('.animation_press_6').css({display: 'inline-block', animation: 'bulge .2s linear'});
        } else {
          $('.animation_press_6').css({display: 'none'});
        }


        if (animation_progress > 1700 && animation_progress < 2500) {
          console.log('moving to profile cover');

          $('.animation_sheet_2').slideUp(500);
          $('.animation_step_set_2').slideUp(500);

          $('.animation_sheet_3').slideDown(500);
          $('.animation_step_set_3').slideDown(500);
          $('.animation_press_chats').css({display: 'inline-block'});
        }

        if (animation_progress < 1700 && animation_progress > 900) {
          $('.animation_sheet_3').css({display: 'none'});
          $('.animation_step_set_3').css({display: 'none'});
          $('.animation_press_chats').css({display: 'none'});

          $('.animation_sheet_2').slideDown(500);
          $('.animation_step_set_2').slideDown(500);
        }


        if (animation_progress > 2100 && animation_progress < 2500) {
          console.log('turn on step 7');

          $('.animation_press_7').css({display: 'inline-block', animation: 'bulge .1s linear'});
        } else {
          $('.animation_press_7').fadeOut(50);
        }


        if (animation_progress > 2500 && animation_progress < 2782) {
          console.log('slding left to chat screen');

          $('.animation_chat_box').css({display: 'inline-block'})

          $('.animation_sheet_3').css({left: -(animation_progress - 2500)});
          $('.animation_step_set_3').css({left: -(animation_progress - 2500)});
        }


        if (animation_progress > 2782 && animation_progress < 2855 ) {
          console.log('new chat 1 incoming');
          $('.animation_press_chats').css({top: -(animation_progress - 2782)})
        }

        if (animation_progress > 3900 && animation_progress < 4400) {
          console.log('look ma! no network!');

          $('.animation_press_9').css({
            display: 'inline-block',
            transformOrigin: 'top',
            animation: 'zoom .2s ease-out',
            animationFillMode: 'forwards'});
        } else {
          $('.animation_press_9').fadeOut(300);
        }


        if (animation_progress > 4400 && animation_progress < 4473) {
          console.log('turn on press 10. 1 more chat');
          $('.animation_press_chats').css({top: -(animation_progress - 4400)})
        }


        if (animation_progress > 4900 && animation_progress < 4980) {
          console.log('back to profiles');

          $('.animation_sheet_3').fadeOut(300);
          $('.animation_press_chats').fadeOut(300);
          $('.animation_step_set_3').css({display: 'none'});


          $('.animation_sheet_4').slideDown(300);
          $('.animation_step_set_4').slideDown(300);
          $('.animation_press_18').css({display: 'inline-block'});
          $('.animation_press_19').css({display: 'inline-block', animation: 'bulge .15s linear'});
        }


        if (animation_progress < 4900 && animation_progress > 4840) {
          $('.animation_sheet_3').slideDown(300);
          $('.animation_press_chats').slideDown(300);
          $('.animation_step_set_3').css({display: 'inline-block'});

          $('.animation_sheet_4').fadeOut(300);
          $('.animation_step_set_4').fadeOut(300);
        }


        if (animation_progress > 5400 && animation_progress < 5900) {
          console.log('light up icon 20 & 21');
          $('.animation_press_20').css({display: 'inline-block', animation: 'bulge .15s linear'});
          $('.animation_press_21').css({display: 'inline-block', animation: 'bulge .15s linear'});
            $('.animation_press_18').css({display: 'none'});
            $('.animation_press_19').css({display: 'none'});
        }

        if (animation_progress > 4900 && animation_progress < 5400) {
          $('.animation_press_20').css({display: 'none'});
          $('.animation_press_21').css({display: 'none'});

          $('.animation_press_18').css({display: 'inline-block', animation: 'bulge .15s linear'});
          $('.animation_press_19').css({display: 'inline-block', animation: 'bulge .15s linear'});
        }

        if (animation_progress > 6100 &&  animation_progress < 6380) {
          console.log('new trips ahoy');
          $('.animation_sheet_4').css({left: -(animation_progress - 6100)});
          $('.animation_step_set_4').css({left: -(animation_progress - 6100)});
        }


        if (animation_progress > 6900 && animation_progress < 7400) {
          console.log('light up icon 22');
          $('.animation_press_22').css({display: 'inline-block', animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_22').css({display: 'none'});
        }


        if (animation_progress > 7400 && animation_progress < 7685) {
          console.log('swiping left');
          var temp_slide_measure = $('.animation_sheet_4').css('left');
          $('.animation_sheet_4').css({left: -((animation_progress - 7400) + 276)});
          $('.animation_step_set_4').css({left: -((animation_progress - 7400) + 276)});
        }

        if (animation_progress > 8200 && animation_progress < 8700) {
          console.log('snap b-code');
          $('.animation_press_23').css({display: 'inline-block'});
        }
        else {
          $('.animation_press_23').css({display: 'none'});
        }

        if (animation_progress > 8700 && animation_progress < 8983) {
          console.log('swiping left');
          $('.animation_sheet_4').css({left: -((animation_progress - 8700) + 559)});
          $('.animation_step_set_4').css({left: -((animation_progress - 8700) + 559)});
        }

        if (animation_progress > 9500 && animation_progress < 11050) {
          console.log('prepare to dive');
          $('.animation_sheet_4').css({top: -(animation_progress - 9500)});
        }
      }
  });



  $('#burger_menu_link_download').click(function () {
    console.log('telporting to downloads');
    // window.moveTo(0, 0);
    $('html, body').animate({ scrollTop: 0, scrollLeft: 0}, 800);
  });

  $('#footer_site_links_download').click(function () {
    console.log('telporting to downloads');
    // window.moveTo(0, 0);
    $('html, body').animate({scrollTop: 0, scrollLeft: 0}, 800);
  });


  $('#footer_site_links_features').click(function () {
    console.log('telporting to features');
    $('html, body').animate({
      scrollTop: $('.unknown_container').offset().top - $('html, body').offset().top + $('html, body').scrollTop()
    }, 800);
  });

  $('#burger_menu_link_features').click(function () {
    console.log('telporting to features');
    $('html, body').animate({
      scrollTop: $('.unknown_container').offset().top - $('html, body').offset().top + $('html, body').scrollTop()
    }, 800);
  });

  $('#burger_menu_link_contact').click(function () {
    console.log('telporting to contact');
    $('html, body').animate({
      scrollTop: $('.footer_bottom_subcontainer').offset().top - $('html, body').offset().top + $('html, body').scrollTop()
    }, 800);
  });

  $('#footer_site_links_contact').click(function () {
    console.log('telporting to contact');
    $('html, body').animate({
      scrollTop: $('.footer_bottom_subcontainer').offset().top - $('html, body').offset().top + $('html, body').scrollTop()
    }, 800);
  });


  if ($(window).width() == 768) {
    console.log('adjust chatlio for tablet');
    if (go_animate = 'on') {
      $('.chatlio-widget.closed').css({right: '15px'});
    }
    else {
      $('.chatlio-widget.closed').css({right: '155px'});
    }
  }

  if ($(window).width() == 414) {
    console.log('adjust chatlio for mobile');
    if (go_animate = 'on') {
      console.log('chat widget mobile adjust');
      $('#chatlio-widget,.chatlio-widget').css({right: '10px'});
    }
    else {
      $('#chatlio-widget,.chatlio-widget').css({right: '65px'});
    }
  }

  if ($(window).width() == 375) {
    console.log('adjust chatlio for small mobile');
    if (go_animate = 'on') {
      $('#chatlio-widget .chatlio-widget').css({right: '10px'});
    }
    else {
      $('#chatlio-widget .chatlio-widget').css({right: '65px'});
    }
  }

  if ($(window).width() == 360) {
    console.log('adjust chatlio for x-small mobile');
    if (go_animate = 'on') {
      $('#chatlio-widget .chatlio-widget').css({right: '10px'});
    }
    else {
      $('#chatlio-widget .chatlio-widget').css({right: '65px'});
    }
  }


});
