$(function() {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('#nav').css('background-color', '#138fc2');
		} else {
			$('#nav').css('background-color', '');
		}
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
		nav:false,
		autoplay:true,
		dots:false,
		navText : ['next ',' prev'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	});
	
	$('.your-class').slick();

});

