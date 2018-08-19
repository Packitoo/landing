jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.main-nav ul').toggleClass('active');
    jQuery('.close-nav').toggleClass('active');

    e.preventDefault();
});

jQuery('.close-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.main-nav ul').toggleClass('active');

    e.preventDefault();
});