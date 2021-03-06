$(document).ready(function () {
    'use strict';
	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 200, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.disappear').fadeOut();
        } else {
            $('.disappear').fadeIn();
        }
    });
});
