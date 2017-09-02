$(document).ready(function(){

  // $('.tech_section_center').css({visibility: "hidden"});
  // $('.tech_section_right').css({visibility: "hidden"});

  console.log("It's the tech page");

  $('.tech_section_left').mouseover(function() {
    console.log('open the gates');
    // $('.tech_section_center').css({visibility: "visible"});
    // $('.tech_section_right').css({visibility: "visible"});
    $('.tech_section_center').css({
      transformOrigin: 'top',
      transform:scale(2,2)});
  });

});
