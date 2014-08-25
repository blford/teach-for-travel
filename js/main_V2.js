$(document).ready(function() {

	// $('.nav-menu-list').hide();

	$(window).resize(function(){
		if($(window).width() > 910) {
			$('.nav-menu-list').show();
		} else {
			$('.nav-menu-list').hide();
		}
	});

	$('.nav-icon').on('click', function() {
		console.log("click")
		$('.nav-menu').slideToggle();
	});




});