/* some script */

$(document).ready(function () {
    $('#login_button_vk').on('click', function () {
        VK.Auth.login(function (response) {
            if (response.session)
            {
                VK.Api.call('users.get', {fields: ['bdate,country,home_phone,email'], v: "5.8"},
                    function (second_response) {
                        if (second_response)
                        {
                            var name = second_response.response[0].first_name + ' ' + second_response.response[0].last_name;
                            $("input#user_name").val(name);

                            var country = second_response.response[0].country.title;
                            $("select#user_country").val(country);

                            var telephone = second_response.response[0].telephone;
                            $("input#user_telephone").val(telephone);

                            var email = second_response.response[0].email;
                            $("input#user_email").val(email);

                            var user_bdate = second_response.response[0].bdate;
                            var new_date = user_bdate.split(".");
                            $("select#day").val(new_date[0]);
                            $("select#month").val(new_date[1]);
                            $("select#year").val(new_date[2]);
                        }
                    });

                if (response.settings)
                {
                }
            } else
            {
            }
        }, 4194304);
    })
});