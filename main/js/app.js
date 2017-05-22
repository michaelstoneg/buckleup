


$(document).ready(function(){
  console.log("It's Aliiive!!");

  var scroll_position = 0;
  var scroll_direction = $(window).scrollTop();
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
  console.log('hiding responsive elements');
  $('.tablet_on').hide();
  console.log('hiding tablet elements');

  if($(window).width() < 377 && $(window).width() > 300) {
    small_mobile_mode = 'on';
    console.log('small mobile mode is ' + small_mobile_mode);
    $('.responsive_off').hide();
    console.log('non responsive elements ran away!!');
    $('.responsive_on').show();
    console.log('wild responsive elements appeared!!');
  }

  if($(window).width() < 450 && $(window).width() > 400) {
    mobile_mode = 'on';
    console.log('mobile mode is ' + mobile_mode);
    $('.responsive_off').hide();
    console.log('non responsive elements ran away!!');
    $('.responsive_on').show();
    console.log('wild responsive elements appeared!!');
  }

  if ($(window).width() < 769 && $(window).width() > 700 ) {
    tablet_mode = 'on';
    console.log('tablet mode is ' + tablet_mode);
    $('.responsive_off').hide();
    $('.tablet_off').hide();
    console.log('non responsive elements ran away!!');
    $('.responsive_on').show();
    $('.tablet_on').show();
    console.log('wild responsive elements appeared!!');
  }

  // if (mobile_mode == 'on' || small_mobile_mode == 'on' ) {
  //   console.log('the animation section mysteriously dissapeared');
  //   $('.unknown_container').hide();
  // }


  // $('.carousel').slick({
  //   dots: true,
  //   swipe: true,
  //   touchMove: true,
  //   infinite: false,
  //   speed: 1000
  //   // autoplay: true,
  //   // autoplaySpeed: 1500
  // });
  //
  // $('.sub_carousel').slick({
  //   dots: false,
  //   arrows: false,
  //   vertical: true,
  //   swipe: true,
  //   touchMove: true,
  //   infinite: false
  //   // initialSlide: 1
  // });
  // console.log('sub carousel loaded');
  //
  // $('.sub_carousel_2').slick({
  //   dots: false,
  //   arrows: false,
  //   swipe: true,
  //   infinite: false,
  //   touchMove: true
  // });
  // console.log('sub carousel 2 loaded');


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


  $('.unknown_container').focus(function () {
    console.log('we are now inthe unknown zone');
  })


  $(window).scroll(function (event) {
      scroll_position = $(window).scrollTop();
      console.log("scroll position: " + scroll_position + " slide " + which_slide);

      var scroll_direction_2 = $(this).scrollTop();
      if (scroll_direction_2 > scroll_direction) {
        console.log('going down');
      } else {
        console.log('going up');
      }
      scroll_direction = scroll_direction_2;


      // if (scroll_position < 900 && parseFloat(which_slide) == 0) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_white.svg')
      // };
      // if (scroll_position < 900 && parseFloat(which_slide) == 1) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_yellow.svg')
      // };
      // if (scroll_position < 900 && parseFloat(which_slide) == 2) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_blue.svg')
      // }
      // if (scroll_position < 900 && parseFloat(which_slide) == 3) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_green.svg')
      // };
      // if (scroll_position < 900 && parseFloat(which_slide) == 4) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
      // };
      // if (scroll_position < 900 && parseFloat(which_slide) == 5) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_white.svg')
      // };



      // if (scroll_position < 869) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_white.svg')
      // };
      // if (scroll_position > 869) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
      // };
      // if (scroll_position > 1018) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_green.svg')
      // };
      // if (scroll_position > 1910) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_blue.svg')
      // };
      // if (scroll_position > 9430) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_yellow.svg')
      // };
      // if (scroll_position > 10613) {
      //   $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
      // }


      // if (small_mobile_mode === 'on' && mobile_mode === 'off' && tablet_mode === 'off') {
      //   if (scroll_position > 625) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
      //     console.log('change to pink');
      //   };
      //   if (scroll_position > 723) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_green.svg')
      //     console.log('change to green');
      //   };
      //   if (scroll_position > 1757) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_blue.svg')
      //     console.log('change to blue');
      //   };
      //   if (scroll_position > 2424) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_yellow.svg')
      //     console.log('change to yellow');
      //   };
      //   if (scroll_position > 3858) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
      //     console.log('change to pink');
      //   };
      // };
      //
      //
      // if (mobile_mode === 'on' && tablet_mode === 'off') {
      //   if (scroll_position > 693) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
      //     console.log('change to pink');
      //   };
      //   if (scroll_position > 792) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_green.svg')
      //     console.log('change to green');
      //   };
      //   if (scroll_position > 1870) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_blue.svg')
      //     console.log('change to blue');
      //   };
      //   if (scroll_position > 2606) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_yellow.svg')
      //     console.log('change to yellow');
      //   };
      //   if (scroll_position > 4037) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
      //     console.log('change to pink');
      //   };
      // };
      //
      //
      // if (tablet_mode === 'on') {
      //   if (scroll_position > 945) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
      //   };
      //   if (scroll_position > 1094) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_green.svg')
      //   };
      //   if (scroll_position > 2582) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_blue.svg')
      //   };
      //   if (scroll_position > 3607) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_yellow.svg')
      //   };
      //   if (scroll_position > 5097) {
      //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
      //   };
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


      if ($(window).height() == 1024 && $(window).width() == 768 ) {
        console.log('whats up short stuff');
        animation_progress = scroll_position - 1150;


        if (scroll_position < 1150) {
          go_animate = 'off';

          $('.animation_container').css({
            position: 'relative',
            top: '120px',
            left: '390px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '80px',
            left: '-400px'
          });
        }


        if (scroll_position > 1040 && scroll_position < 14030 && mobile_mode == 'off') {
          go_animate = 'on';
          console.log('screen animation is ' + go_animate);
          $('.unknown_container').css({height: '1350vh'});
          console.log('enlarging section');

          $('.animation_container').css({
            position: 'fixed',
            top: '180px',
            left: '390px'
          });
          $('.animation_text_container').css({
            position: 'fixed',
            top: '240px',
            left: '0px'
          });

          $('.animation_text_subcontainer').css({
            top: -(animation_progress/6)
          });

        }


        if (scroll_position > 14030 ) {
          go_animate = 'off';
          console.log('screen animation is ' + go_animate);

          $('.animation_container').css({
            position: 'relative',
            top: '12950px',
            left: '390px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '13030px',
            left: '-400px'
          });

        }

      }

      if ($(window).height() <= 750 && $(window).width() <= 450 ) {
        console.log('pssst small ting');
        animation_progress = scroll_position - 830;


        if (scroll_position < 830) {
          go_animate = 'off';

          $('.animation_container').css({
            position: 'relative',
            top: '80px',
            left: '40px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '120px',
            left: '-400px'
            // display: 'none'
          });
        }


        if (scroll_position > 830 && scroll_position < 13350 && mobile_mode == 'on') {
          go_animate = 'on';
          console.log('screen animation is ' + go_animate);
          $('.unknown_container').css({height: '1820vh'});
          console.log('enlarging section');

          $('.animation_container').css({
            position: 'fixed',
            top: '100px',
            left: '40px'
          });
          $('.animation_text_container').css({
            // display: 'inline-block',
            position: 'fixed',
            top: '  5px',
            left: '10px'
          });

          $('.animation_text_subcontainer').css({
            top: -(animation_progress/6)
          });

        }


        if (scroll_position > 13350 ) {
          go_animate = 'off';
          console.log('screen animation is ' + go_animate);

          $('.animation_container').css({
            position: 'relative',
            top: '12550px',
            left: '40px'
          });
          $('.animation_text_container').css({
            // position: 'relative',
            // top: '12050px',
            // left: '0px'
            display: 'none'
          });
        }
        else {
          $('.animation_text_container').css({
            display: 'inline-block'
          })
        }

      }


      animation_progress = scroll_position - 1115;

      if (scroll_position < 1035) {
        go_animate = 'off';

        if ($(window).width() > 1679) {
          $('.animation_container').css({
            position: 'relative',
            top: '100px',
            left: '1200px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '100px',
            left: '0px'
          });
        }
        if ($(window).width() == 1679) {
          $('.animation_container').css({
            position: 'relative',
            top: '100px',
            left: '1100px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '100px',
            left: '-100px'
          });
        }
        if ($(window).width() == 1440) {
          $('.animation_container').css({
            position: 'relative',
            top: '100px',
            left: '900px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '100px',
            left: '-200px'
          });
        }
        if ($(window).width() == 1280) {
          $('.animation_container').css({
            position: 'relative',
            top: '100px',
            left: '750px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '100px',
            left: '-200px'
          });
        }
      }

      if (scroll_position > 1020 && scroll_position < 12030 && mobile_mode == 'off') {
        go_animate = 'on';
        console.log('screen animation is ' + go_animate);
        $('.unknown_container').css({height: '1270vh'});
        console.log('enlarging section');

        if ($(window).width() > 1679) {
          $('.animation_container').css({
            position: 'fixed',
            top: '80px',
            left: '1200px'
          });
          $('.animation_text_container').css({
            position: 'fixed',
            top: '180px',
            left: '400px'
          });
          console.log('freeze frame');

          $('.animation_text_subcontainer').css({
            top: -(animation_progress/6.5)
          });
        }
        if ($(window).width() == 1679) {
          $('.animation_container').css({
            position: 'fixed',
            top: '80px',
            left: '1100px'
          });
          $('.animation_text_container').css({
            position: 'fixed',
            top: '180px',
            left: '300px'
          });
          console.log('freeze frame');

          $('.animation_text_subcontainer').css({
            top: -(animation_progress/6.5)
          });
        }
        if ($(window).width() == 1440) {
          $('.animation_container').css({
            position: 'fixed',
            top: '80px',
            left: '900px'
          });
          $('.animation_text_container').css({
            position: 'fixed',
            top: '180px',
            left: '200px'
          });
          console.log('freeze frame');

          $('.animation_text_subcontainer').css({
            top: -(animation_progress/6.5)
          });
        }
        if ($(window).width() == 1280) {
          $('.animation_container').css({
            position: 'fixed',
            top: '80px',
            left: '750px'
          });
          $('.animation_text_container').css({
            position: 'fixed',
            top: '180px',
            left: '200px'
          });
          console.log('freeze frame');

          $('.animation_text_subcontainer').css({
            top: -(animation_progress/6.5)
          });
        }
      }

      console.log('animation progress = ' + animation_progress);

      if (scroll_position > 12030 ) {
        go_animate = 'off';
        console.log('screen animation is ' + go_animate);

        if ($(window).width() > 1679) {
          $('.animation_container').css({
            position: 'relative',
            top: '11040px',
            left: '1200px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top:'11040px',
            left: '0px'
          });
        }
        if ($(window).width() == 1679) {
          $('.animation_container').css({
            position: 'relative',
            top: '11040px',
            left: '1100px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '11040px',
            left: '-100px'
          });
        }
        if ($(window).width() == 1440) {
          $('.animation_container').css({
            position: 'relative',
            top: '11040px',
            left: '900px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '11040px',
            left: '-200px'
          });
        }
        if ($(window).width() == 1280) {
          $('.animation_container').css({
            position: 'relative',
            top: '11040px',
            left: '750px'
          });
          $('.animation_text_container').css({
            position: 'relative',
            top: '11040px',
            left: '-200px'
          });
        }
      }



      if (go_animate  == 'on') {
        console.log('animating...');

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

        if (animation_progress > 950 && animation_progress < 1231 ) {
          console.log('swiping right');
          $('.animation_sheet').css({left: -(animation_progress - 950) });
          $('.animation_step_set').css({left: -(animation_progress - 950) });
        }
        else  if ($('.animation_sheet').css('left') != 0 && animation_progress < 1230){
          $('.animation_sheet').css({left: 0});
          $('.animation_step_set').css({left: 0});
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

        if (animation_progress > 9400 && animation_progress < 10950) {
          console.log('prepare to dive');
          $('.animation_sheet_5').css({
            top: -(animation_progress - 9400)
          });
        }
      }
  });


  // $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   which_slide = nextSlide;
  //   console.log("scroll position: " + scroll_position + " slide " + which_slide);
  //
  //   if (scroll_position <= '150' && which_slide == '0') {
  //     console.log('presto change-O');
  //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_white.svg')
  //   };
  //   if (scroll_position < '150' && which_slide == '1') {
  //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_yellow.svg')
  //   };
  //   if (scroll_position <= '150' && which_slide == '2') {
  //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_blue.svg')
  //   };
  //   if (scroll_position <= '150' && which_slide == '3') {
  //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_green.svg')
  //   };
  //   if (scroll_position <= '150' && which_slide == '4') {
  //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_pink.svg')
  //   };
  //   if (scroll_position <= '150' && which_slide == '5') {
  //     $('.burger_menu_img').attr('src', 'images/icons/menu_4_white.svg')
  //   };
  //
  //
  //   if (which_slide == '1') {
  //     console.log('wild static elements appeared');
  //     $('.static_rainbow_download_badges_wrapper').fadeIn(100);
  //     $('.static_rainbow_subcontainer_right').fadeIn(250);
  //     $('.static_main_logo_rainbow_2').fadeIn(250);
  //     $('.sub_carousel_2').slideDown(1300);
  //   }
  //   if (which_slide == '0') {
  //     console.log('static elements ran away');
  //     $('.static_rainbow_download_badges_wrapper').fadeOut();
  //     $('.static_rainbow_subcontainer_right').fadeOut();
  //     $('.static_main_logo_rainbow_2').fadeOut();
  //     $('.sub_carousel_2').slideUp(200);
  //   }
  //
  // });
  //
  // $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   console.log('main carousel moving from ' + currentSlide + ' to ' + nextSlide);
  //   $('.sub_carousel_2').slick('slickGoTo',which_slide);
  //   $('.sub_carousel').slick('slickGoTo',which_slide);
  // });
  //
  //
  // $('.sub_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  //   console.log('sub carousel moving from ' + currentSlide + ' to ' + nextSlide);
  // });
  // $('.sub_carousel_2').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  //   console.log('sub carousel 2 moving from ' + currentSlide + ' to ' + nextSlide);
  // });


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
