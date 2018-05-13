$(document).ready(function(){
	
	$(".slider_area").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-right"></i>','<i class="fa fa-angle-left"></i>'],
		autoplay: true,
		mouseDrag: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
	});
    
	$(".singal_post_slider").owlCarousel({
		items: 4,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-right"></i>','<i class="fa fa-angle-left"></i>'],
		autoplay: true,
		mouseDrag: true,
		autoplayTimeout: 500,
		autoplayHoverPause: true,
	});
    
	
});
