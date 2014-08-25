$(document).ready(function() {

	$(window).resize(function(){
		if($(window).width() > 910) {
			$('.nav-menu').show();
			$('.nav-icon').hide();
		} else {
			$('.nav-menu').hide();
			$('.nav-icon').show();
		}
	});

	function sublistName (){

		$('.sublist').hide();

		$('.site-nav .nav-menu-item').on('mouseenter', function(event) {
			event.preventDefault();

			var $this = $(this);
			$(this).find('ul').stop().slideDown(150);
		});

		$('.site-nav .nav-menu-item').on('mouseleave', function(event) {
			event.preventDefault();

			$(this).find('ul').stop().slideUp(50);
			console.log('inside mouseleave');
		});

		$('.fade').on('mouseover', function(){
			$(this).find('.caption').stop().fadeIn(150);
		});
		
		$('.fade').on('mouseleave', function(){
			$(this).find('.caption').stop().fadeOut(100);
		});
	}
	sublistName();

	function navIcon () {
		$('.nav-icon').on('click', function() {
			$('.nav-menu').slideToggle();
		});

	}
	navIcon();

	$('.topic:not(.current)').hide();
	setInterval(rotateText, 3000);

	function rotateText() {
		var curTopic = $('#slideshow .current'),
			nextTopic = curTopic.next();

		if(nextTopic.length === 0) {
			nextTopic = $('#slideshow span:first');
		}
		
		curTopic.removeClass('current');
		nextTopic.addClass('current');

		$('.topic:not(.current)').hide();
		$('.current').show();
	}

	function scrollFix () {
		
		$(window).scroll(function(){
			var top = $('.content-container').offset().top;
			var bottom = $('')
			var y = $(window).scrollTop();

			if (y >= top) {
				console.log("inside if statement");
				$('.country-page-sidebar').addClass('fixed').css('margin-top', '-5em');
			} else {
				console.log('inside else statement');
				$('.country-page-sidebar').removeClass('fixed').css('margin-top', '0');
			}

		});
		
	}
	scrollFix();
	
});