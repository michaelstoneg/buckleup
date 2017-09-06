$(document).ready(function(){

  console.log("It's the tech page");


  $(".burger_menu_list").hide();
  $(".burger_menu_img_wrapper").click(function() {
    $(".burger_menu_list").slideToggle(1000);
  });

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
          console.log(inviteUrl);
        });
      }

    $('.tech_section_slack_button').click(function () {
      console.log('go go gadget slack invite');
      addSlackMember();
    })

});
