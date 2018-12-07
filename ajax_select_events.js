/* WP Ajax */

$(document).ready(function ($) {
    $("#button_selected_event").on('click', function () {
        var event_id = $("select.event_select")['0'].value;
        var url = "http://EXAMPLE.by/wp-admin/admin-ajax.php";
        var data = {
            'action': 'ajax_show_subscribers_callback',
            'event_id': event_id
        };

        $.post(url, data, function (response) {
            $('#content-ajax-resp').html(response);
        })
    })
});