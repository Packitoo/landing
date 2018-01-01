$(window).scroll(function() {
    var fromTop = $(window).scrollTop();
    var headerMargin = 0;

    // Header 
    headerMargin = (fromTop > 30) ? -30 : -fromTop;
    $(".header-contact").css('margin-top', headerMargin);
});