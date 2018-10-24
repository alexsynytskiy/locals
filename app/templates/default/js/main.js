(function ($) {
    $(document).ready(function () {
        $('.header-top-wrapper a').click(function () {
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);
            return false;
        });

        $menu = $('#header-small-top');
        $menu.attr('data-scroll', $(window).scrollTop());
        $menu.addClass('showMenu');

        $(window).on('scroll', function (event) {
            if ($(this).scrollTop() < 930 && $menu.hasClass("showMenu")) {
                $menu.stop().animate({
                        top: '-75px'
                    }, 400,
                    function () {
                    }
                );
                $menu.removeClass("showMenu");
                $menu.addClass("hideMenu");
            }
            else if ($(this).scrollTop() >= 930) {
                if ($menu.hasClass('parallax')) {
                    $menu.removeClass("parallax");
                    $menu.addClass("hideMenu");
                    $menu.css('top', '-75px');
                }
                if ($menu.hasClass("showMenu") && $(this).scrollTop() > $menu.attr('data-scroll')) {
                    $menu.stop().animate({
                            top: '-75px'
                        }, 400,
                        function () {
                        }
                    );
                    $menu.removeClass("showMenu");
                    $menu.addClass("hideMenu");
                }
                if ($menu.hasClass("hideMenu") && $(this).scrollTop() < $menu.attr('data-scroll')) {
                    $menu.stop().animate({
                            top: 0
                        }, 400,
                        function () {
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
            slideHeight: 520,
            maxSlides: 1,
            minSlides: 1,
            slideMargin: 0,
            pager: false
        });

        $('.slider-3').bxSlider({
            slideWidth: 1025,
            slideHeight: 520,
            maxSlides: 1,
            minSlides: 1,
            slideMargin: 0,
            pager: false
        });

        var slider4 = $('.slider-4').bxSlider({
            slideWidth: 300,
            slideHeight: 373,
            maxSlides: 1,
            minSlides: 1,
            slideMargin: 0,
            controls: false,
            infiniteLoop: true,
            pager: false
        });

        $('a.pager-next.custom-next').click(function (e) {
            slider4.goToNextSlide();
            e.preventDefault();
        });

        // Cache the thumb selector for speed
        var thumb = $('#gallery-thumbs').find('.thumb');

        // How many thumbs do you want to show & scroll by
        var visibleThumbs = 5;

        // Put slider into variable to use public functions
        var gallerySlider = $('.slider-5').bxSlider({
            controls: true,
            infiniteLoop: true,
            slideWidth: 1025,
            slideHeight: 515,
            maxSlides: 1,
            minSlides: 1,
            slideMargin: 0,
            pager: false,

            onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                thumb.removeClass('pager-active');
                thumb.eq(newIndex).addClass('pager-active');
                // Action next carousel slide on one before the end, so newIndex + 1
                slideThumbs(newIndex + 1, visibleThumbs);
            }
        });

        // When clicking a thumb
        thumb.click(function (e) {
            // -6 as BX slider clones a bunch of elements
            gallerySlider.goToSlide($(this).closest('.thumb-item').index());

            // Prevent default click behaviour
            e.preventDefault();
        });

        // Function to calculate which slide to move the thumbs to
        function slideThumbs(currentSlideNumber, visibleThumbs) {
            // Tell the slider to move
            thumbsSlider.goToSlide(Math.floor(currentSlideNumber / visibleThumbs));
        }

        // When you click on a thumb
        $('#gallery-thumbs').find('.thumb').click(function () {

            // Remove the active class from all thumbs
            $('#gallery-thumbs').find('.thumb').removeClass('pager-active');

            // Add the active class to the clicked thumb
            $(this).addClass('pager-active');

        });

        // Thumbnail slider
        var thumbsSlider = $('#gallery-thumbs').bxSlider({
            minSlides: visibleThumbs,
            maxSlides: visibleThumbs,
            slideWidth: 222,
            slideMargin: 20,
            controls: false,
            pager: false,
            easing: 'easeInOutQuint',
            infiniteLoop: false
        });


        $('.slider-not-first .bx-prev').prepend('<img src="/app/templates/default/images/arrow_standby.svg" />');
        $('.slider-not-first .bx-next').prepend('<img src="/app/templates/default/images/arrow_standby.svg" />');

        $('.slider-first .bx-prev').prepend('<img src="/app/templates/default/images/arrow_white.svg" />');
        $('.slider-first .bx-next').prepend('<img src="/app/templates/default/images/arrow_white.svg" />');


        function titleUnderline() {
            var windowWidth = $(window).width();

            if (windowWidth > 1025) {
                var underlineWidth = (windowWidth - 940) / 2 + 940;

                $(".red-border").css("width", underlineWidth);
            }
            else {
                $(".red-border").css("width", 85 / 2 + 940);
            }
        }

        titleUnderline();
        $(window).resize(function () {
            titleUnderline();
        });
    });
})(jQuery);
