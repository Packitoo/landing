// Global variables to avoid effect repea
var artboard22 = false;


// isInView check if a div is currently displayed
// `id` is the id of the html tag to check
// 
// Doesn't work with elements repeated in a view
function isInView(id) {
    var elementTop = $(id).offset().top;
    var elementBottom = elementTop + $(id).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return viewportTop > (elementTop - 400)
}

// effectOnView add a css effect when an element is on the view
// `id` is the id of the html tag
// `cls` is the class to add to the html tag
function fadeInEffect(id, cls) {
    if (isInView(id)) {
        $(id).addClass(cls);
        $(id).removeClass('hidden');
    }
}

function counterEffect(id) {
    if (isInView(id) && $(id).attr('class').indexOf('count-effect') == -1 ) {
        $(id).addClass('count-effect');
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
}

$(window).scroll(function() {
    var fromTop = $(window).scrollTop();
    var headerMargin = 0;

    // Header 
    headerMargin = (fromTop > 30) ? -30 : -fromTop;
    $(".header-contact").css('margin-top', headerMargin);

    // Index - Process steps            -- fadeIn
    fadeInEffect("#step-1-icon", 'fade-in-div');
    fadeInEffect("#step-1-text", 'fade-in-div');
    fadeInEffect("#step-2-icon", 'fade-in-div');
    fadeInEffect("#step-2-text", 'fade-in-div');
    fadeInEffect("#step-3-icon", 'fade-in-div');
    fadeInEffect("#step-3-text", 'fade-in-div');

    // Index - Stats                    -- fadeIn w/ bounce
    counterEffect("#stats");

    // Index - Communauty               -- fadeIn w/ bounce
    fadeInEffect("#community-map", 'fade-in-div');

    // Index - call-to-action button    -- fadeIn
    // About - Image "talks"            -- fadeIn
});