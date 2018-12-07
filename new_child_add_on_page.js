/* some script */

$(document).ready(function () {
    var div             = document.getElementsByClassName('tab__header__time');
    var params_dates    = document.getElementsByClassName('tab__header__time');
    var params_events   = document.getElementsByClassName('tab__header__title');

    for (var i = 0; i < div.length; i++)
    {
        var number_id = i + 1;
        var button = document.createElement('a');

        button.setAttribute("href", "http://example.by/event_registration?date=" +
            params_dates[i].innerHTML + "&" + "event=" + params_events[i].innerHTML);
        button.setAttribute("class", "button_reg");
        button.setAttribute("id", number_id);
        button.innerHTML = 'ПРЕДРЕГИСТРАЦИЯ';
        div[i].appendChild(button);
    }
});