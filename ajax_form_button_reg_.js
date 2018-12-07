/* WP ajax */

function register_user()
{
    var msg = $('#reg_form').serialize();

    show_animated_gif();

    $.ajax({
        type: 'POST',
        url: 'http://EXAMPLE.by/wp-admin/admin-ajax.php',
        data: msg,
        success: function () {
            $('.registration-button').val('Сохранено');
            $('input[type="submit"]').attr('disabled', true);
            $('span#load_animation').remove();
        }
    });

    function show_animated_gif()
    {
        var elemParent = document.getElementById('load_animation');
        var elemChild = document.createElement('img');
        elemChild.setAttribute("src", 'http://EXAMPLE.by/wp-content/themes/bpt/spin.gif');
        elemParent.appendChild(elemChild);
    }
}