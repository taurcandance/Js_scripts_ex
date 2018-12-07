/* some script */

$('.choices').change(function () {
    var dayValue    = $('#day')['0'].value;
    var monthValue  = $('#month')['0'].value;
    var yearValue   = $('#year')['0'].value;

    if (monthValue < 10)
    {
        monthValue = '0' + monthValue;
    }
    if (dayValue < 10)
    {
        dayValue = '0' + dayValue;
    }

    var dateParams = '00:00 ' + dayValue + '.' + monthValue + '.' + yearValue;

    var elemParent = document.getElementById('check_valid_date');
    var elemChild = document.createElement('img');
    if (elemParent.childNodes.length > 0)
    {
        elemParent.firstChild.remove();
    }
    elemChild.setAttribute("style", 'max-height:25px;');

    if (tempus(dateParams, '%H:%M %d.%m.%Y').valid())
    {
        elemChild.setAttribute("src", 'http://EXAMPLE.by/wp-content/themes/bpt/chekok.png');
    }
    else
    {
        elemChild.setAttribute("src", 'http://EXAMPLE.by/wp-content/themes/bpt/chekbad.png');
    }

    elemParent.appendChild(elemChild);
});