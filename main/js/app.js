

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

  var scroll_speed = undefined;

  $('.responsive_on').hide();
  $('.responsive_on_2').hide();
  $('.tablet_on').hide();

  $('.animation_text_subcontainer').slick({
    arrows: false,
    dots: false,
    vertical: true
  });

  if($(window).width() < 377 && $(window).width() > 300) {
    small_mobile_mode = 'on';
    $('.responsive_off').hide();
    $('.mobile_off').hide();
    $('.responsive_on').show();
    $('.mobile_on').show();
  }

  if($(window).width() < 450 && $(window).width() > 400) {
    mobile_mode = 'on';
    $('.responsive_off').hide();
    $('.mobile_off').hide();
    $('.responsive_on').show();
    $('.mobile_on').show();
  }

  if ($(window).width() < 769 && $(window).width() > 700 ) {
    tablet_mode = 'on';
    $('.responsive_off').hide();
    $('.tablet_off').hide();
    $('.mobile_on').hide();
    $('.responsive_on').show();
    $('.tablet_on').show();
  }


  $('.subscribe_popup_wrapper').hide();
  $('#subscribe_general').click(function () {
    $('.subscribe_popup_wrapper').show();
  });

  $('#download_badge_2').click(function () {
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

  $('.ambassador_apply_popup_wrapper').hide();
  $('.ambassador_join_button').click(function () {
    $('.ambassador_apply_popup_wrapper').show();
  });

  $('.ambassador_apply_popup_close').click(function () {
    $('.ambassador_apply_popup_wrapper').hide();
  });

  $(".burger_menu_list").hide();
  $(".burger_menu_img_wrapper").click(function() {
    $(".burger_menu_list").slideToggle(1000);
  });

  var SiteStartDate = '2017/09/18 14:00';
  if( $('#countdown').length > 0 ) {
  		$('#countdown').countdown({
  			until: new Date(SiteStartDate),
  			format: 'DHMS',
        compact: true
  		});
  	}

setTimeout(RotateCarousel, 1000);
function RotateCarousel() {

  if ($(window).width() > 768) {
    $(".media_scroll_list li:first-child").animate({ marginLeft: -500 }, 10000, 'linear', function () {
    $(".media_scroll_list li:first-child").appendTo('.media_scroll_list');
    $(".media_scroll_list li:last-child").css({marginLeft: '0'});
    RotateCarousel();
    });
  }
  else if ( $(window).width() == 768) {
    $(".media_scroll_list li:first-child").animate({ marginLeft: -350 }, 8000, 'linear', function () {
    $(".media_scroll_list li:first-child").appendTo('.media_scroll_list');
    $(".media_scroll_list li:last-child").css({marginLeft: '0'});
    RotateCarousel();
    });
  }
  else if ($(window).width() <= 420) {
    $(".media_scroll_list li:first-child").animate({ marginLeft: -250 }, 8000, 'linear', function () {
    $(".media_scroll_list li:first-child").appendTo('.media_scroll_list');
    $(".media_scroll_list li:last-child").css({marginLeft: '0'});
    RotateCarousel();
    });
  }
}



// var scrollSpeedMonitor = new ScrollSpeedMonitor(function (speedInPxPerMs, timeStamp, newDirection)
// {
//   scroll_speed = speedInPxPerMs;
//   console.log('Scroll speed: ' + speedInPxPerMs);
// });


  $(window).scroll(function () {
      scroll_position = $(window).scrollTop();
      // console.log(scroll_position);

      // if (scroll_speed > 14) {
      //   console.log("too fast animation might be skipping");
      //   $('.animation_skip_cover').show();
      // } else {
      //   $('.animation_skip_cover').hide();
      // }


      var scroll_position_b = $(this).scrollTop();
      if (scroll_position_b > scroll_position_a) {
        scroll_direction = 'down';
      } else {
        scroll_direction = 'up';
      }
      scroll_position_a = scroll_position_b;


      if ($(window).width() >= 1280 ) {
        if (($(document).scrollTop()-200) < $(window).height() ) {
          go_animate = 'off';

          $('.animation_master_container').css({position: 'relative', top: '180px'});
        }

        if (($(document).scrollTop()-200) > $(window).height() ) {
          go_animate = 'on';

          var animation_container_adjust_1 = $('.main_container').height() / 12;
          animation_progress = (scroll_position - $(window).height())- 200;
          $('.animation_master_container').css({position: 'fixed', top: '80px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off'
          $('.animation_master_container').css({position: 'relative', top: '11250px'});
        }
      }



      if ($(window).height() == 1024 && $(window).width() == 768 ) {
        // console.log('chrome tools ipad size');
        if (($(document).scrollTop() - 100) < $(window).height() ) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '350px'});
        }

        if (($(document).scrollTop() - 300) > $(window).height() ) {
          go_animate = 'on';
          animation_progress = (scroll_position - $(window).height())- 300;
          $('.animation_master_container').css({position: 'fixed', top: '150px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '11400px'});
        }
      }

      if ($(window).height() == 768 && $(window).width() == 1024 ) {
        // console.log('chrome tools ipad size');
        if (($(document).scrollTop() - 50) < $(window).height() ) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '250px'});
        }

        if (($(document).scrollTop() - 300) > $(window).height() ) {
          go_animate = 'on';
          animation_progress = (scroll_position - $(window).height())- 300;
          $('.animation_master_container').css({position: 'fixed', top: '50px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '11400px'});
        }
      }


//ipad portrait

      if ($(window).height() == 1016 && $(window).width() == 834 ) {
        // console.log('congratulations your baby is an ipad');
        if (($(document).scrollTop() -100) < $(window).height() ) {
          // console.log('hooold!');
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '300px'});
        }

        if (($(document).scrollTop() - 300) > $(window).height() ) {
          go_animate = 'on';
          // console.log('engage');
          animation_progress = (scroll_position - $(window).height())- 300;
          $('.animation_master_container').css({position: 'fixed', top: '100px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '11300px'});
        }
      }


//ipad landscape

      if ($(window).height() == 738 && $(window).width() == 1112 ) {
        // console.log('congratulations your baby is an ipad');
        if (($(document).scrollTop() - 150) < $(window).height() ) {
          // console.log('hooold!');
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '150px'});
        }

        if (($(document).scrollTop() - 300) > $(window).height() ) {
          go_animate = 'on';
          // console.log('engage');
          animation_progress = (scroll_position - $(window).height())- 300;
          $('.animation_master_container').css({position: 'fixed', top: '20px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '11200px'});
        }
      }


      // if (($(window).height() == 736 || $(window).height() == 731) && ($(window).width() == 414 || $(window).width() == 411 )) {
      if ($(window).width() < 416 && $(window).width() > 410) {
        if (($(document).scrollTop() - 200) < $(window).height() ) {
          go_animate = 'off';

          $('.animation_master_container').css({position: 'relative', top: '270px'});
        }

        if (($(document).scrollTop() - 300) > $(window).height() ) {
          go_animate = 'on';

          animation_progress = (scroll_position - $(window).height())- 300;
          $('.animation_master_container').css({position: 'fixed', top: '0px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off'
          $('.animation_master_container').css({position: 'relative', top: '11326px'});
        }
      }

      if ($(window).width() == 375 ) {
      // if ($(window).width() > 380 && $(window).width() < 373 ) {
        if (($(document).scrollTop() - 100) < $(window).height() ) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '130px'});
        }

        if (($(document).scrollTop() - 200) > $(window).height() ) {
          go_animate = 'on';
          animation_progress = (scroll_position - $(window).height())- 200;
          $('.animation_master_container').css({position: 'fixed', top: '-25px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '11206px'});
        }
      }


      if ($(window).height() <= 640 && $(window).width() == 360 ) {
        if (($(document).scrollTop() - 0) < $(window).height() ) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '100px'});
        }

        if (($(document).scrollTop() - 180) > $(window).height() ) {
          go_animate = 'on';
          animation_progress = (scroll_position - $(window).height())- 180;
          $('.animation_master_container').css({position: 'fixed', top: '-40px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '11190px'});
        }
      }

      if ($(window).height() == 740 && $(window).width() <= 360 ) {
        if (($(document).scrollTop() - 0) < $(window).height() ) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '100px'});
        }

        if (($(document).scrollTop() - 130) > $(window).height() ) {
          go_animate = 'on';
          animation_progress = (scroll_position - $(window).height())- 130;
          $('.animation_master_container').css({position: 'fixed', top: '0px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '11136px'});
        }
      }

      if ($(window).width() == 320 ) {

        if (($(document).scrollTop() - 0) < $(window).height() ) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '100px'});
        }

        if (($(document).scrollTop() - 280) > $(window).height() ) {
          go_animate = 'on';
          animation_progress = (scroll_position - $(window).height())- 280;
          $('.animation_master_container').css({position: 'fixed', top: '-100px'});
        }

        if (animation_progress > 11070) {
          go_animate = 'off';
          $('.animation_master_container').css({position: 'relative', top: '11136px'});
        }

      }


      if (go_animate  == 'on') {

        if ($(window).width() < 417) {
          $('.chatlio-widget.closed').fadeOut(100);
          $('#chatlio-widget').fadeOut(100);
        }


        //transition snap fixes

        if (animation_progress > 1700 && animation_progress <2500 && $('.animation_sheet_3').css('left') != 0) {
          $('.animation_sheet_3').css({left: 0});
          $('.animation_step_set_3').css({left: 0});
        }
        if (animation_progress > 2782 && animation_progress < 4900 && $('.animation_sheet_3').css('left') != 281) {
          $('.animation_sheet_3').css({left: -280});
          $('.animation_step_set_3').css({left: -280});
        }
        if (animation_progress > 2500 && animation_progress < 2783 && $('.animation_press_chats').css('top') != 0) {
          $('.animation_press_chats').css({top: 0});
        }
        if (animation_progress > 2853 && animation_progress < 4400 && $('.animation_press_chats').css('top') != -72) {
          $('.animation_press_chats').css({top: -72});
        }
        if (animation_progress > 4470 && animation_progress < 4900 && $('.animation_press_chats').css('top') != -72) {
          $('.animation_press_chats').css({top: -72});
        }
        if (animation_progress > 4900 && animation_progress < 6100 && $('.animation_sheet_4').css('left') != 0) {
          $('.animation_sheet_4').css({ left: 0 });
          $('.animation_step_set_4').css({ left: 0 });
        }
        if (animation_progress > 6380 && animation_progress < 7400 && $('.animation_sheet_4').css('left') != -277) {
          $('.animation_sheet_4').css({ left: -277 });
          $('.animation_step_set_4').css({ left: -277 });
        }
        if (animation_progress > 7685 && animation_progress < 8700 && $('.animation_sheet_4').css('left') != -561) {
          $('.animation_sheet_4').css({ left: -561 });
          $('.animation_step_set_4').css({ left: -561 });
        }
        if (animation_progress > 8983 && animation_progress < 9500 && $('.animation_sheet_4').css('top') != 0) {
          $('.animation_sheet_4').css({ top: 0 });
          $('.animation_step_set_4').css({ top: 0 });
        }
        if (animation_progress > 8983 && animation_progress < 10950 && $('.animation_sheet_4').css('left') != -840) {
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
          $('.animation_press_1').css({display: 'none'});
          $('.animation_press_2').css({display: 'none'});

          $('.animation_press_3').css({display: 'inline-block', animation: 'bulge .1s linear'});
          $('.animation_press_4').css({display: 'inline-block', animation: 'bulge .1s linear'});
        }

        if (animation_progress < 400) {
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
          $('.animation_sheet_1').css({display: 'none'});
          $('.animation_step_set_1').css({display: 'none'});

          $('.animation_sheet_2').slideDown(700);
          $('.animation_step_set_2').slideDown(700);

          $('.animation_press_5').css({display: 'inline-block', animation: 'wiggle 5s linear'});
        }

        if (animation_progress < 900 && animation_progress > 400) {
          $('.animation_sheet_2').css({display: 'none'});
          $('.animation_step_set_2').css({display: 'none'});

          $('.animation_sheet_1').slideDown(700);
          $('.animation_step_set_1').slideDown(700);
        }

        if (animation_progress > 1300 && animation_progress < 1700) {
          $('.animation_press_6').css({display: 'inline-block', animation: 'bulge .2s linear'});
        } else {
          $('.animation_press_6').css({display: 'none'});
        }

        if (animation_progress > 1700 && animation_progress < 2500) {
          $('.animation_sheet_2').slideUp(700);
          $('.animation_step_set_2').slideUp(700);

          $('.animation_sheet_3').slideDown(700);
          $('.animation_step_set_3').slideDown(700);
          $('.animation_press_chats').css({display: 'inline-block'});
        }

        if (animation_progress < 1700 && animation_progress > 900) {
          $('.animation_sheet_3').css({display: 'none'});
          $('.animation_step_set_3').css({display: 'none'});
          $('.animation_press_chats').css({display: 'none'});

          $('.animation_sheet_2').slideDown(700);
          $('.animation_step_set_2').slideDown(700);
        }



        if (animation_progress > 2100 && animation_progress < 2500) {
          $('.animation_press_7').css({display: 'inline-block', animation: 'bulge .1s linear'});
        } else {
          $('.animation_press_7').fadeOut(50);
        }

        if (animation_progress > 2500 && animation_progress < 2782) {
          $('.animation_chat_box').css({display: 'inline-block'})

          $('.animation_sheet_3').css({left: -(animation_progress - 2500)});
          $('.animation_step_set_3').css({left: -(animation_progress - 2500)});
        }

        if (animation_progress > 2782 && animation_progress < 2855 ) {
          $('.animation_press_chats').css({top: -(animation_progress - 2782)})
        }

        if (animation_progress > 3900 && animation_progress < 4400) {
          $('.animation_press_9').css({
            display: 'inline-block',
            transformOrigin: 'top',
            animation: 'zoom .2s ease-out',
            animationFillMode: 'forwards'});
        } else {
          $('.animation_press_9').fadeOut(300);
        }

        if (animation_progress > 4400 && animation_progress < 4473) {
          $('.animation_press_chats').css({top: -(animation_progress - 4400)})
        }

        if (animation_progress > 4900 && animation_progress < 4980) {
          $('.animation_sheet_3').fadeOut(600);
          $('.animation_press_chats').fadeOut(600);
          $('.animation_step_set_3').css({display: 'none'});

          $('.animation_sheet_4').slideDown(600);
          $('.animation_step_set_4').slideDown(600);
          $('.animation_press_18').css({display: 'inline-block'});
          $('.animation_press_19').css({display: 'inline-block', animation: 'bulge .15s linear'});
        }

        if (animation_progress < 4900 && animation_progress > 4840) {
          $('.animation_sheet_3').slideDown(600);
          $('.animation_press_chats').slideDown(600);
          $('.animation_step_set_3').css({display: 'inline-block'});

          $('.animation_sheet_4').fadeOut(600);
          $('.animation_step_set_4').fadeOut(600);
        }


        //mid animation jump fix
        if (animation_progress > 4900) {
          $('.animation_sheet_4').show();
          $('.animation_step_set_4').show();


          $('.animation_sheet_3').hide();
          $('.animation_step_set_3').hide();

          $('.animation_sheet_2').hide();
          $('.animation_step_set_2').hide();

          $('.animation_sheet_1').hide();
          $('.animation_step_set_1').hide();
        }


        if (animation_progress > 5400 && animation_progress < 5900) {
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
          $('.animation_sheet_4').css({left: -(animation_progress - 6100)});
          $('.animation_step_set_4').css({left: -(animation_progress - 6100)});
        }

        if (animation_progress > 6900 && animation_progress < 7400) {
          $('.animation_press_22').css({display: 'inline-block', animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_22').css({display: 'none'});
        }

        if (animation_progress > 7400 && animation_progress < 7685) {
          var temp_slide_measure = $('.animation_sheet_4').css('left');
          $('.animation_sheet_4').css({left: -((animation_progress - 7400) + 276)});
          $('.animation_step_set_4').css({left: -((animation_progress - 7400) + 276)});
        }

        if (animation_progress > 8200 && animation_progress < 8700) {
          $('.animation_press_23').css({display: 'inline-block'});
        }
        else {
          $('.animation_press_23').css({display: 'none'});
        }

        if (animation_progress > 8700 && animation_progress < 8983) {
          $('.animation_sheet_4').css({left: -((animation_progress - 8700) + 559)});
          $('.animation_step_set_4').css({left: -((animation_progress - 8700) + 559)});
        }

        if (animation_progress > 9500 && animation_progress < 11200) {
          $('.animation_sheet_4').css({top: -(animation_progress - 9500)});
        }
      }
      else {
        $('.chatlio-widget.closed').show();
        $('#chatlio-widget').show();

      }
  });


  $('#burger_menu_link_download').click(function () {
    // window.moveTo(0, 0);
    $('html, body').animate({ scrollTop: 0, scrollLeft: 0}, 800);
  });

  $('#footer_site_links_download').click(function () {
    // window.moveTo(0, 0);
    $('html, body').animate({scrollTop: 0, scrollLeft: 0}, 800);
  });

  $('.animation_skip_up_img').click(function () {
      $('html, body').animate({scrollTop: 0, scrollLeft: 0}, 800);
  });

  $('.animation_skip_down_img').click(function () {
    $('html, body').animate({
      scrollTop: $('.footer_bottom_subcontainer').offset().top - $('html, body').offset().top + $('html, body').scrollTop()
    }, 800);
  });

  $('#footer_site_links_features').click(function () {
    $('html, body').animate({
      scrollTop: $('.unknown_container').offset().top - $('html, body').offset().top + $('html, body').scrollTop()
    }, 800);
  });

  $('#burger_menu_link_features').click(function () {
    $('html, body').animate({
      scrollTop: $('.unknown_container').offset().top - $('html, body').offset().top + $('html, body').scrollTop()
    }, 800);
  });

  $('#burger_menu_link_contact').click(function () {
    $('html, body').animate({
      scrollTop: $('.footer_bottom_subcontainer').offset().top - $('html, body').offset().top + $('html, body').scrollTop()
    }, 800);
  });

  $('#footer_site_links_contact').click(function () {
    $('html, body').animate({
      scrollTop: $('.footer_bottom_subcontainer').offset().top - $('html, body').offset().top + $('html, body').scrollTop()
    }, 800);
  });


// Jobs Page

$('.seatbelt_animation_left').css({
  animation: 'left_seatbelt 1.5s infinite'
});

$('.seatbelt_animation_right').css({
  animation: 'right_seatbelt 1.5s infinite'
});

$('.seatbelt_animation_arrow').css({
  animation: 'arrow_seatbelt 1.5s infinite'
})


// Tech Page


  var addSlackMember = function(){
    var email           = $('.tech_section_slack_input').val(),
        // time                = new Date().getTime(),
        // joinChannels    = 'C5V51HJ8N', bot dojo test channel
        joinChannels    = 'C6Y3KSXM3',
        authToken           = 'xoxp-235333652672-236042182180-235456487713-9fe8fb17898293c864ebf067450fedf2',
        // authToken           = 'xoxp-197800860529-199171589414-236745932726-26f065e94be6d66fa8bf2a93be64cf71', bot dojo test token
        // inviteUrl = 'https://' + slack_team + '.slack.com/api/users.admin.invite?t=' + time;
        inviteUrl = 'https://slack.com/api/users.admin.invite?token=' + authToken + '&email=' + email + '&channels=' + joinChannels;

        $.post(inviteUrl, function() {
          // console.log(inviteUrl);
        });
      }

    $('.tech_section_slack_button').click(function () {
      // console.log('go go gadget slack invite');
      addSlackMember();
    });


});
