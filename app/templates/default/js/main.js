(function($){
	$(document).ready(function() {
		function authorUnderline() {
			if ($(window).width() > 1025) {
				var windowWidth = $(window).width();

				var underlineWidth = (windowWidth - 1025)/2 + 138;

				$(".red-border").css("width", underlineWidth);
			}
			else {
				$(".red-border").css("width", 138);
			}
		}

		authorUnderline();
		$(window).resize(function() {
			authorUnderline();
		});

		$('.header-top-wrapper a').click(function(){
			var target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 800);
			return false;
		});

		$menu = $('#header-small-top');
		$menu.attr('data-scroll', $(window).scrollTop());
		$menu.addClass('showMenu');

		$(window).on('scroll', function(event) {
			if($(this).scrollTop() < 930 && $menu.hasClass("showMenu")) {
				$menu.stop().animate({
						top: '-75px',
					}, 400,
					function() {
					}
				);
				$menu.removeClass("showMenu");
				$menu.addClass("hideMenu");
			}
			else if ($(this).scrollTop() >= 930 ) {
				if($menu.hasClass('parallax')) {
					$menu.removeClass("parallax");
					$menu.addClass("hideMenu");
					$menu.css('top','-75px');
				}
				if($menu.hasClass("showMenu") && $(this).scrollTop() > $menu.attr('data-scroll')) {
					$menu.stop().animate({
							top: '-75px',
						}, 400,
						function() {
						}
					);
					$menu.removeClass("showMenu");
					$menu.addClass("hideMenu");
				}
				if($menu.hasClass("hideMenu") && $(this).scrollTop() < $menu.attr('data-scroll')) {
					$menu.stop().animate({
							top: 0,
						}, 400,
						function() {
						}
					);
					$menu.removeClass("hideMenu");
					$menu.addClass("showMenu");
				}
			}
			$menu.attr('data-scroll', $(this).scrollTop());

		});

		$('.slider-1').bxSlider({
			slideWidth: 1025,
			slideHeight: 684,
			maxSlides: 1,
			minSlides: 1,
			slideMargin: 0,
            pager: true,
            pagerType: 'short'
		});

		$('.slider-2').bxSlider({
			slideWidth: 1025,
			slideHeight: 800,
			maxSlides: 1,
			minSlides: 1,
			slideMargin: 0
		});

		$('.slider-3').bxSlider({
			slideWidth: 1025,
			slideHeight: 800,
			maxSlides: 1,
			minSlides: 1,
			slideMargin: 0
		});

		$('.slider-4').bxSlider({
			slideWidth: 1025,
			slideHeight: 405,
			maxSlides: 1,
			minSlides: 1,
			slideMargin: 0
		});

		$('.slider-5').bxSlider({
			slideWidth: 1025,
			slideHeight: 770,
			maxSlides: 1,
			minSlides: 1,
			slideMargin: 0
		});

		$('.slider-6').bxSlider({
			slideWidth: 1025,
			slideHeight: 800,
			maxSlides: 1,
			minSlides: 1,
			slideMargin: 0
		});

		$('.slider-7').bxSlider({
			slideWidth: 1025,
			slideHeight: 500,
			maxSlides: 1,
			minSlides: 1,
			slideMargin: 0
		});

		$('.slider-not-first .bx-prev').prepend('<img src="/app/templates/default/images/arrow_standby.svg" />');
		$('.slider-not-first .bx-next').prepend('<img src="/app/templates/default/images/arrow_standby.svg" />');

        $('.slider-first .bx-prev').prepend('<img src="/app/templates/default/images/arrow_white.svg" />');
        $('.slider-first .bx-next').prepend('<img src="/app/templates/default/images/arrow_white.svg" />');


        function titleUnderline() {
            var windowWidth = $(window).width();

            if (windowWidth > 1025) {
                var underlineWidth = (windowWidth - 940)/2 + 940;

                $(".red-border").css("width", underlineWidth);
            }
            else {
                $(".red-border").css("width", 85/2 + 940);
            }
        }

        titleUnderline();
        $(window).resize(function() {
            titleUnderline();
        });
	});

})(jQuery);