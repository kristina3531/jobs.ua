$(document).ready(function () {
    svg4everybody({});

    //add class active in .header-nav__link
    $('.header-nav__link').on('click', function() {
        $('.header-nav__link.active').removeClass('active');
        $(this).addClass('active');
    });

    // slider for specials offer
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '.slider-btn--next',
        prevArrow: '.slider-btn--prev'
    });

    //show/hide toggle-menu
    $('.toggle-menu').on('click', function() {
        $('.toggle-dropdown').toggleClass('active');
    });

});