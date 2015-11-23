$(function () {
    $(document).on('click', '.header__feedback .button', function () {
        $('.feedback-dropdown').toggleClass('hidden').find('input:first').focus()
    });

    $(document).on('click', '.sanatorium__dropdown-button', function () {
    	var content = $(this).find('.sanatorium__dropdown-content');
        content.toggleClass('hidden');
    });

    $(document).on('click', '[class^="nav__title-lev"]', function () {
    	var parent = $(this).parent();
    	var is_open = parent.hasClass('nav__item-lev--open');
	    parent.toggleClass('nav__item-lev--open', !is_open)
	    if (is_open){
	    	parent.find('.nav__item-lev--open').removeClass('nav__item-lev--open');
	    }
    });

    $(document).on('click', '.button-up', function () {
		$('html, body').animate(
	        { scrollTop: 0 },
	        {
	            duration: 300,
	            easing: 'swing'
	        }
		);
	});
});
