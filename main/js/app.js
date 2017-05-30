


$(document).ready(function(){
  console.log("It's Aliiive!!");

  var scroll_position = 0;
  var direction = undefined;
  var scroll_direction = undefined;
  var media_scroll_position = 0;
  var go_animate = 'off';
  var animation_progress = undefined;
  var animation_slide_counter = 0;
  var which_slide = '0';
  console.log("slide " + which_slide);
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


setTimeout(RotateCarousel, 1000);
function RotateCarousel() {
    $(".media_scroll_list li:first-child").animate({ marginLeft: -440 }, 8000, 'linear', function () {
        $(".media_scroll_list li:first-child").appendTo('.media_scroll_list');
        $(".media_scroll_list li:last-child").css({marginLeft: '0'});
        RotateCarousel();
    });
}



  $(window).scroll(function () {
      scroll_position = $(window).scrollTop();
      console.log("scroll position: " + scroll_position);

      var scroll_position_2 = $(this).scrollTop();
      if (scroll_position_2 > scroll_position) {
        console.log('going down');
        scroll_direction = 'down';
      } else {
        scroll_direction = 'up';
        console.log('going up');
      }
      scroll_position = scroll_position_2;



      if ($(window).width() >= 1280 ) {
        console.log('laptop animation');


        if (($(document).scrollTop()-300) < $(window).height() ) {
          console.log('Too soon!!!');
          go_animate = 'off';

          $('.animation_master_container').css({
            position: 'relative',
            top: '200px'
          });
        }

        if (($(document).scrollTop()-300) > $(window).height() ) {
          console.log('Nowwww!!!');
          go_animate = 'on';

          var animation_container_adjust_1 = $('.main_container').height() / 12;
          console.log('animation container adjustment  ' + animation_container_adjust_1);

          animation_progress = (scroll_position - $(window).height())- 300;
          console.log('animation_progress  ' + animation_progress);

          $('.animation_master_container').css({
            position: 'fixed',
            top: '100px'
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
            top: '400px'
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



      if ($(window).height() <= 736 && $(window).width() <= 414 ) {
        console.log('tablet animation');


        if (($(document).scrollTop() - 200) < $(window).height() ) {
          console.log('Hooldd!!!');
          go_animate = 'off';

          $('.animation_master_container').css({
            position: 'relative',
            top: '200px'
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

          $('.animation_master_container').css({
            position: 'relative',
            top: '11146px'
          });

        }

      }


      // if (scroll_position < 869) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_white.svg')
      // };

      // if (small_mobile_mode === 'on' && mobile_mode === 'off' && tablet_mode === 'off') {
      // };
      //
      // if (mobile_mode === 'on' && tablet_mode === 'off') {
      // };
      //
      // if (tablet_mode === 'on') {
      // };

      if (scroll_position >= 100 ) {
        $('.burger_menu_img_wrapper').css({
          position: 'fixed',
          top: '10px',
          left: '15px'
        });
      }
      else {
        $('.burger_menu_img_wrapper').css({
          position: 'sticky'
        });
      }



      if (go_animate  == 'on') {
        console.log('animating...');


        if (animation_progress < 1230) {
          $('.animation_text_subcontainer').slick('slickGoTo', '0');
        }

        if (animation_progress > 50 && animation_progress < 1230) {
          console.log('light up icon 1');
          $('.animation_press_1').css({
            display: 'inline-block',
            animation: 'bulge .1s linear'});
        }
        else {
          $('.animation_press_1').css({display: 'none'});
        }

        if (animation_progress > 80 && animation_progress < 1230) {
          console.log('light up icon 2');
          $('.animation_press_2').css({
            display: 'inline-block',
            animation: 'bulge .1s linear'});
        }
        else {
          $('.animation_press_2').css({display: 'none'});
        }

        if (animation_progress > 350 && animation_progress < 1230) {
          console.log('light up icon 3');
          $('.animation_press_3').css({
            display: 'inline-block',
            animation: 'bulge .1s linear'});
          $('.animation_press_2').css({display: 'none'});
        }
        else {
          $('.animation_press_3').css({display: 'none'});
        }

        if (animation_progress > 380 && animation_progress < 1230) {
          console.log('light up icon 4');
          $('.animation_press_4').css({
            display: 'inline-block',
            animation: 'bulge .1s linear'});
        }
        else {
          $('.animation_press_4').css({display: 'none'});
        }

        if (animation_progress > 700 && animation_progress < 1230) {
          console.log('light up icon 5');
          $('.animation_press_5').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_5').css({display: 'none'});
        }

        if (animation_progress > 950 && animation_progress < 1230 ) {
          console.log('swiping right');
          $('.animation_sheet').css({left: -(animation_progress - 950) });
          $('.animation_step_set').css({left: -(animation_progress - 950) });
        }
        else  if ($('.animation_sheet').css('left') != 0 && animation_progress < 1230){
          console.log('resetting animation sheet position');
          $('.animation_sheet').css({left: 0});
          $('.animation_step_set').css({left: 0});
        }

        if (animation_progress > 1050 && animation_progress < 3000) {
          //text change 1
          console.log('go to slide 1');
          $('.animation_text_subcontainer').slick('slickGoTo', '1');
        }

        if (animation_progress > 1230 && animation_progress < 3000) {
          console.log('light up icon 6');
          $('.animation_press_6').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
          $('.location_slide_line').css({display: 'inline-block'})
        }
        else {
          $('.animation_press_6').css({display: 'none'});
          $('.location_slide_line').css({display: 'none'});
        }

        if (animation_progress > 1500 && animation_progress < 3000) {
          console.log('light up icon 7');
          $('.animation_press_7').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_7').css({display: 'none'});
        }

        if (animation_progress > 1800 && animation_progress < 3000) {
          console.log('light up icon 8');
          $('.animation_press_8').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_8').css({display: 'none'});
        }

        if (animation_progress > 2100 && animation_progress < 3000) {
          console.log('light up icon 9');
          $('.animation_press_9').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_9').css({display: 'none'});
        }

        if (animation_progress > 2400 && animation_progress < 2505 ) {
          var location_slide_measure = animation_progress - 2400;
          console.log('location slider ' + location_slide_measure);
          $('.animation_press_6').css({left: 302+location_slide_measure});
          $('.location_slide_line').css({width: location_slide_measure});
        }

        if (animation_progress > 2700 && animation_progress < 3000) {
          console.log('light up icon 10');
          $('.animation_press_10').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_10').css({display: 'none'});
        }

        if (animation_progress > 3000 && animation_progress < 3500) {
          console.log('moving to card screen');
          $('.animation_sheet').fadeOut(250);
          $('.animation_step_set').fadeOut(250);
          $('.animation_sheet_2').fadeIn(250);


          //text change 2
          $('.animation_text_subcontainer').slick('slickGoTo', '2');



        }
        else if (animation_progress < 3000){
          $('.animation_sheet').fadeIn(250);
          $('.animation_step_set').fadeIn(250);
          $('.animation_sheet_2').fadeOut(250);
        }

        if (animation_progress > 3000 && animation_progress < 3300) {
          console.log('lighting up icon 11');
          $('.animation_press_11').fadeIn(250);
          console.log('lighting up icon 12');
          $('.animation_press_12').fadeIn(250);
        }
        else {
          $('.animation_press_11').css({display: 'none'});
          $('.animation_press_12').css({display: 'none'});
        }

        if (animation_progress > 3300 && animation_progress < 3500) {
          $('.animation_press_11').css({display: 'none'});
          $('.animation_press_12').css({display: 'none'});
          console.log('light up icon 14');
          $('.animation_press_14').css({display: 'inline-block'});
          console.log('light up icon 13');
          $('.animation_press_13').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'
          });
        }
        else if (animation_progress < 3300 && animation_progress > 3000 ) {
          $('.animation_press_13').css({display: 'none'});
          $('.animation_press_14').css({display: 'none'});

          $('.animation_press_11').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'
          });
          $('.animation_press_12').css({display: 'inline-block'});
        }


        if (animation_progress > 3500 && animation_progress < 4000) {
          console.log('to the map');
          $('.animation_sheet_2').slideUp(250);
          $('.animation_sheet_3').slideDown(250);
          $('.animation_press_15').css({
            display: 'inline-block',
            animation: 'wiggle 4s linear'
          });
          $('.animation_press_14').css({display: 'none'});
          $('.animation_press_13').css({display: 'none'});
        }
        else if (animation_progress < 3500 && animation_progress > 3300) {
          $('.animation_sheet_2').slideDown(250);
          $('.animation_sheet_3').slideUp(250);
          $('.animation_press_15').css({display: 'none'});
          $('.animation_press_14').css({display: 'inline-block'});
          $('.animation_press_13').css({display: 'inline-block'});
        }

        if (animation_progress > 3800 && animation_progress < 4000) {
          console.log('light up icon 16');
          $('.animation_press_16').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_16').css({display: 'none'});
        }

        if (animation_progress > 4000 && animation_progress < 6200 ) {
          console.log('to the swipe screen robin');
          $('.animation_sheet_3').slideUp(250);
          $('.animation_press_13').css({display: 'none'});
          $('.animation_press_14').css({display: 'none'});
          $('.animation_press_15').css({display: 'none'});
          $('.animation_sheet_4').slideDown(250);


          //txt change 3
          if (direction == 'up') {
            console.log('previous txt slide');
          } else if (direction == 'down') {
            console.log('next carousel slide');
          }
          $('.animation_text_subcontainer').slick('slickGoTo', '3');



        }
        else if (animation_progress < 4000) {
          $('.animation_sheet_4').slideUp(250);
        }

        if (animation_progress > 4300 && animation_progress < 4600) {
          console.log('pressing the screen... light up icon 17');
          $('.animation_press_17').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_17').css({display: 'none'});
        }
      //
        if (animation_progress > 4600 && animation_progress < 4880) {
          console.log('sliding left...');
          $('.animation_press_17').css({display: 'none'});
          $('.animation_sheet_4').css({left: -(animation_progress - 4600)})
        }
      //
        if (animation_progress > 5100 && animation_progress < 5870 ) {
          console.log('were going dooown');
          var profile_vert_slide = animation_progress - 5100;
          $('.animation_sheet_4').css({top: -(animation_progress - 5100)})
        }

        if (animation_progress > 6200 ) {
          console.log('thats far enough! go to android');
          $('.animation_sheet_4').css({display: 'none'});
          $('.animation_sheet_5').fadeIn(250);
          $('.animation_press_18').css({display: 'inline-block'});
          $('.animation_press_19').css({
            display: 'inline-block',
            animation: 'bulge .15s linear',
          });
        }
        else {
          $('.animation_sheet_5').fadeOut(250);
          $('.animation_press_18').css({display: 'none'});
          $('.animation_press_19').css({display: 'none'});
        }

        if (animation_progress > 6200 && animation_progress < 9085) {
          //txt change 4
          if (direction == 'up') {
            console.log('previous txt slide');
          } else if (direction == 'down') {
            console.log('next carousel slide');
          }
          $('.animation_text_subcontainer').slick('slickGoTo', '4');
        }

        if (animation_progress > 6500 && animation_progress < 6980) {
          console.log('light up icon 20 & 21');
          $('.animation_press_20').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
          $('.animation_press_21').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'
          });

            $('.animation_press_18').css({display: 'none'});
            $('.animation_press_19').css({display: 'none'});
        }
        else {
          $('.animation_press_20').css({display: 'none'});
          $('.animation_press_21').css({display: 'none'});
        }

        if (animation_progress > 6800 &&  animation_progress < 7080) {
          console.log('new trips ahoy');
          $('.animation_sheet_5').css({
            left: -(animation_progress - 6800)
          });
          $('.animation_step_set_3').css({
            left: -(animation_progress - 6800)
          });
        }

        if (animation_progress > 7400 && animation_progress < 7700) {
          console.log('light up icon 22');
          $('.animation_press_22').css({
            display: 'inline-block',
            animation: 'bulge .15s linear'});
        }
        else {
          $('.animation_press_22').css({display: 'none'});
        }

        if (animation_progress > 7700 && animation_progress < 7985) {
          console.log('swiping left');
          var temp_slide_measure = $('.animation_sheet_5').css('left');
          $('.animation_sheet_5').css({
            left: -((animation_progress - 7700) + 276)
          });
          $('.animation_step_set_3').css({
            left: -((animation_progress - 7700) + 276)
          });
        }

        if (animation_progress > 8300 && animation_progress < 8500) {
          console.log('snap b-code');
          $('.animation_press_23').css({
            display: 'inline-block'
          })
        }
        else {
          $('.animation_press_23').css({display: 'none'});
        }

        if (animation_progress > 8800 && animation_progress < 9083) {
          console.log('swiping left');
          $('.animation_sheet_5').css({
            left: -((animation_progress - 8800) + 559)
          });
          $('.animation_step_set_3').css({
            left: -((animation_progress - 8800) + 559)
          });

        }

        if (animation_progress > 9083 && animation_progress < 10000 ) {
          //txt change 5
          if (direction == 'up') {
            console.log('previous txt slide');
          } else if (direction == 'down') {
            console.log('next carousel slide');
          }
          $('.animation_text_subcontainer').slick('slickGoTo', '5');
        }

        if (animation_progress > 9400 && animation_progress < 10950) {
          console.log('prepare to dive');
          $('.animation_sheet_5').css({
            top: -(animation_progress - 9400)
          });

        }

        if (animation_progress > 10600) {
          //txt change 6
          if (direction == 'up') {
            console.log('previous txt slide');
          } else if (direction == 'down') {
            console.log('next carousel slide');
          }
          $('.animation_text_subcontainer').slick('slickGoTo', '6');
        }

      }


  });



  $('#burger_menu_link_download').click(function () {
    console.log('telporting to downloads');
    // window.moveTo(0, 0);
    $('html, body').animate({
      scrollTop: 0,
      scrollLeft: 0
    }, 800);
  });

  $('#footer_site_links_download').click(function () {
    console.log('telporting to downloads');
    // window.moveTo(0, 0);
    $('html, body').animate({
      scrollTop: 0,
      scrollLeft: 0
    }, 800);
  });


  $('#footer_site_links_features').click(function () {
    console.log('telporting to features');
    // window.moveTo(947, 0);
    $('html, body').animate({
      scrollTop: 950,
      scrollLeft: 0
    }, 800);
  });

  $('#burger_menu_link_features').click(function () {
    console.log('telporting to features');
    // window.moveTo(947, 0);
    $('html, body').animate({
      scrollTop: 950,
      scrollLeft: 0
    }, 800);
  });


  $('#burger_menu_link_contact').click(function () {
    console.log('telporting to contact');
    // window.moveTo(4199, 0);
    $('html, body').animate({
      scrollTop: 16030,
      scrollLeft: 0
    }, 800);
  });
  $('#footer_site_links_contact').click(function () {
    console.log('telporting to contact');
    // window.moveTo(4199, 0);
    $('html, body').animate({
      scrollTop: 16030,
      scrollLeft: 0
    }, 800);
  });

});
