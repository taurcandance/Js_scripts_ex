/* some script */

$(document).ready(function () {
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: '574052001802-j80ce8hignf7vuqknnfncmpnaskbi5b.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });

        auth2.attachClickHandler($("#login_button_google")[0], {},
            function (googleUser) {
                var profile = googleUser.getBasicProfile();
                $("input#user_name").val(profile.getName());
                $("input#user_email").val(profile.getEmail());
            }, function (error) {
            });
    });
});