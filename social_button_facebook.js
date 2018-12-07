/* some script */

$(document).ready(function () {
    $('#login_button_facebook').on('click', function () {
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
        alert('OK');

    })
});