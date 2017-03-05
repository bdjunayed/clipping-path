$(document).ready(function () {
    /* feature menu fixed*/
        $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $(".hMenu").addClass('headerMenufixed');
        } else
        {
            $(".hMenu").removeClass('headerMenufixed');
        }
    });
    /* feature menu fixed*/

     /*DesignPage Slider Three Start here*/
    $('.DSliderThree').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        pagination: true,
        touchDrag: false,
        responsiveClass: true,
        navigationText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        navigation: true,
        autoPlay: false,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    /*MobileMenu Start By Shagor */
   $('.scrolls a').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - (100)}, 1000);
        return false;
    });

    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = -200;
        var rangeBottom = 500;

        $('.mainFeatureMenu').find('.scrolls > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top(100));
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }

        });

        $.each(contentTop, function (i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.mainFeatureMenu li.scrolls')
                        .removeClass('active')
                        .eq(i).addClass('active');
            }
        });

    }
    
    new WOW().init();
    
    /* feature menu fixed*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 3600)
        {
            $(".featureMenu").addClass('featureMenufixed');
        } else
        {
            $(".featureMenu").removeClass('featureMenufixed');
        }
    });
    /* feature menu fixed*/


    $(".MobileMenu1").on('click', function () {
        $("#menu").slideToggle('slow');
    });
    $(".SubSer").on('click', function () {
        $(".Menu ul li .Submenu").slideToggle('slow');
    });


    $(".srec").click(function () {
        $(".serText").toggle('2000');
    });
    $(".user").click(function () {
        $(".userBox").toggle('slow');
    });


});

    