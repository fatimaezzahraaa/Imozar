$(document).ready(function() {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    });

    // Active link switch
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();


        // Handle navigation class
        if (scrollbarLocation >= 650) {
            $('.navigation-wrapper').addClass('navigation-moving');
        } else {
            $('.navigation-wrapper').removeClass('navigation-moving');
        }

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }

        })

    });

})