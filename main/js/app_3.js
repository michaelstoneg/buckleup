$(document).ready(function(){
  $('.tech_section_center').hide();

  console.log("It's the tech page");

  $('.tech_section_left').mouseover(function() {
    console.log('open the gates');
    $('.tech_section_center').show();
  });

});
