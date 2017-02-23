$(document).ready(function () {
     /* feature menu fixed*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100, 1000)
        {
            $(".headerMenu").addClass('headerMenufixed');
        } else
        {
            $(".headerMenu").removeClass('headerMenufixed');
        }
    });
    /* feature menu fixed*/
    
    
    /*MobileMenu Start By Shagor */
    $('.scrolls a').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - (0)}, 1000);
        return false;
    });

    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
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
    /* feature menu fixed*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 3500)
        {
            $(".featureMenu").addClass('featureMenufixed');
        } else
        {
            $(".featureMenu").removeClass('featureMenufixed');
        }
    });
    /* feature menu fixed*/

});
 
        