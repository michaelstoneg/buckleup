$(document).ready(function(){



  console.log("It's the tech page");

  var addSlackMember = function(){
    var email           = $('.tech_section_slack_input').val(),
        // time                = new Date().getTime(),
        // slack_team_id          = 'C5V51HJ8N',
        joinChannels    = 'C5V51HJ8N',
        authToken           = 'xoxp-197800860529-199171589414-236745932726-26f065e94be6d66fa8bf2a93be64cf71',
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
