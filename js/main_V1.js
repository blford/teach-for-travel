$(document).ready(function() {

// sublistName();
console.log('test');
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
}();




function navIcon () {
	$('.nav-icon').on('click', function() {
		console.log("click")
		$('.nav-menu').slideToggle();
	});

}();

	// testing carousel
	$('#carousel').myCarousel ({
		width: '100%',
		items: {
			visible: 3,
			start: -1
		},
		scroll:{
			items: 1,
			duration: 1000,
			timeoutDuration: 3000
		},

	});

});