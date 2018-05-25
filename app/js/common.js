$(function() {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('#nav').css('background-color', '#138fc2');
		} else {
			$('#nav').css('background-color', '');
		}
	});

	$('.header-carousel').owlCarousel({
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
	
	$('.reviews__carousel').owlCarousel({
    loop:true,
		nav:false,
		autoplay:true,
		autoplayTimeout: 6000,
		dots:false,
		navText : ['next ',' prev'],
		items: 1,
		margin: 999
	});

	var owl=$('.reviews__carousel');
	$('.reviews__leftArrow').click(function() {
		owl.trigger('prev.owl.carousel');
	})
	$('.reviews__rightArrow').click(function() {
		owl.trigger('next.owl.carousel')
	})

	$('.your-class').slick({
		dots: true
	});

});

