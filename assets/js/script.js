$(function () {

    $('.navbar-toggle').click(function () {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.main-menu').addClass('act');
        } else {
            $('.main-menu').removeClass('act');
        }
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });


    // Navigation overlay
    skrollr.init({
        forceHeight: false,
        smoothScrolling: false,
        mobileDeceleration: 0.004,
        mobileCheck: function () {
            //hack - forces mobile version to be off
            return false;
        }
    });

});