$(document).ready(function() {

    //header
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    //slider
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false,
    });
});

$(document).ready(function () {
    var sections = $('section')
    nav = $('nav[role="navigation"]');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 86
            bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this)
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 85
        }, 500);
        return false;
    });
});

function onScroll(e){

    var scrollPos = $(document).scrollTop()+85;
    $('#navbarSupportedContent a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-85 <= scrollPos && refElement.position().top-85 + refElement.height() > scrollPos) {
            $('#navbarSupportedContent ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}