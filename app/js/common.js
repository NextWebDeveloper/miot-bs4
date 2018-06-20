$(function() {

// Прелоадер

	setTimeout(function() {
		$("#status").fadeOut();
		$("#preloader").delay(500).fadeOut("slow");
	}, 2500);

// Бэкграунд для меню при скролле страницы
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('#nav').css('background-color', '#138fc2');
		} else {
			$('#nav').css('background-color', '');
		}
	});

// Разворачивание меню на маленьких экранах при нажатии на кнопку	

	$('.navbar-button').on('click', function() {
		$('.nav__navbar').toggleClass('navbar-visible');
		$('.nav').toggleClass('nav__bg');
	});

// Активация карусели в секции .header	

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

// Активация карусели в секции .reviews		
	
	$('.reviews__carousel').owlCarousel({
    loop:true,
		nav:false,
		autoplay:true,
		autoplayTimeout: 6000,
		dots:false,
		navText : ['next ',' prev'],
		items: 1,
		margin: 999,
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

// Добавление экшн-действий для собственных стилизованных кнопок перелистывания слайдов в секции .reviews	

	var owl=$('.reviews__carousel');
	$('.reviews__leftArrow').click(function() {
		owl.trigger('prev.owl.carousel');
	});
	$('.reviews__rightArrow').click(function() {
		owl.trigger('next.owl.carousel')
	});

// Показ ответа на вопрос в секции .questions	

	$('.button').on('click', function() {
		var e = $(this).parent().next();
		$(this).children('span').toggleClass('active');
		if ( e.is(':hidden') ) {
			e.slideDown();
		} else {
			e.slideUp();
		}
	});

// Выделение активного пункта меню про скролле страницы

	var menu_selector = ".main-nav"; 
	var menu = jQuery('#nav').outerHeight();
	jQuery("#mainnav li:first-child a").addClass("current");

	function onScroll(){
    var scroll_top = jQuery(document).scrollTop();
    
    jQuery(menu_selector + " a").each(function(){
        var hash = jQuery(this).attr("href");
        var target = jQuery(hash);
        if (target.position().top - menu <= scroll_top + 400 && target.position().top + target.outerHeight()  > scroll_top) {
            jQuery(menu_selector + " a.current").removeClass("current");
            jQuery(this).addClass("current");
        } else {
            jQuery(this).removeClass("current");
        }
    });
	}
 
	jQuery(document).on("scroll", onScroll);
	jQuery("#mainnav a[href^=#]").click(function(e){
  	e.preventDefault();
  	jQuery(document).off("scroll");
  	jQuery(menu_selector + " .current").removeClass("current");
  	jQuery(this).addClass("current");
  	var hash = jQuery(this).attr("href");
  	var target = jQuery(hash);
  	jQuery("html, body").animate({
  	    scrollTop: target.offset().top
  	}, 300, function(){
  	    window.location.hash = hash;
  	    jQuery(document).on("scroll", onScroll);
		
  	});

	});

});

