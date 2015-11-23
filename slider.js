jQuery(document).ready(function ($) {
  
	var slideCount = $('.slider__list-item').length;
	var slideWidth = $('.slider__list-item').outerWidth(true);
    var slideMargin = 30;
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.slider__list').css({ width: sliderUlWidth, marginLeft: - slideWidth - slideMargin});
	
    $('.slider__list-item:last-child').prependTo('.slider__list');

    function moveLeft() {
        $('.slider__list').animate({
            left: + slideWidth
        }, 200, function () {
            $('.slider__list-item:last-child').prependTo('.slider__list');
            $('.slider__list').css('left', '');
        });
    };

    function moveRight() {
        $('.slider__list').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider__list-item:first-child').appendTo('.slider__list');
            $('.slider__list').css('left', '');
        });
    };

    $('.slider__arrow--prev').click(function () {
        moveLeft();
    });

    $('.slider__arrow--next').click(function () {
        moveRight();
    });

});    