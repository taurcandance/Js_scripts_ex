$(document).ready(function () {
    $("#button_export_subscribers").on('click', function () {
        var value = $("select.event_select")['0'].value;
        var url = "http://example.by/wp-admin/admin-ajax.php";

        var data = {
            'action': 'ajax_show_subscribers_callback',
            'event_id': value,
            'csv': '1'
        };

        $.post(url, data, function response() {
            document.location = 'http://example.by/wp-content/themes/bpt/export.csv';
        })
    })

});