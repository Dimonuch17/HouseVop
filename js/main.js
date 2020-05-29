$(function() {


var defaults = {
containerID: 'toTop', // fading element id
containerHoverID: 'toTopHover', // fading element hover id
scrollSpeed: 1200,
easingType: 'linear'
};

 
$().UItoTop({ easingType: 'easeOutQuart' });

	// preloader
	var $preloader = $('#page-preloader'),
	$spinner   = $preloader.find('.cssload-loader');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');


	// Modal 
	$('.modal__btn').click(function(e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	});
	

	// Menu- gamburger
	$('.menu-open').click(function() {
		$('.menu-collapse').toggleClass('d-none').css( 'order', '1');
		$('.nav-menu').toggleClass('menu-opened');
	});

	// Navbar Scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500){       
			$('.nav').addClass("stirce");
		}
		else{
			$('.nav').removeClass("stirce");
		}
	});

	// плавное перемещение страницы к нужному блоку
	$('.nav-menu li a').click(function () {
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 800);
	});

		// плавное перемещение страницы к нужному блоку
		$('.offer__arrow').click(function () {
			elementClick = $(this).attr('href');
			destination = $(elementClick).offset().top;
			$('body,html').animate({scrollTop: destination }, 800);
		});

	// Анимация
	$(window).scroll(function() {
		$('.review__item').each(function() {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass('fadeInLeft');
			}
		});
	});

	$(window).scroll(function() {
		$('.apart__item_left').each(function() {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('fadeInLeft');
			}
		});
	});

	$(window).scroll(function() {
		$('.apart__item_right').each(function() {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('fadeInRight');
			}
		});
	});

	$(window).scroll(function() {
		$('.video').each(function() {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('fadeIn');
			}
		});
	});

	$(window).scroll(function() {
		$('.maps').each(function() {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+550) {
				$(this).addClass('flipInX').css('opacity', '1');
			}
		});
	});


		// ArcticModal
		$('.btn').click(function() {
			$('#exampleModal').arcticmodal();
		});


	});