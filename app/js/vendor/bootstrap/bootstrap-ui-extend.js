$('.nav').find('li').each(function() {//busca los elementos de las listas nav
    $(this).click(function() {//les coloca el trigger on click
        $(this).parent().find('li').each(function() {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
});


function LoadAjaxContent(url) {
    $('.preloader').show();
    $.ajax({
        mimeType: 'text/html; charset=utf-8', 
        url: url,
        type: 'GET',
        success: function(data) {
            $('#ajax-content').html(data);
            $('.preloader').hide();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        },
        dataType: "html",
        async: false
    });
}

$(document).ready(function() {
    $('.ajax-link').on('click', function(e) {
            e.preventDefault();
            var url = $(this).attr('href');
            window.location.hash = url;
            LoadAjaxContent(url);
    });
});