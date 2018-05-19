$(document).ready(function() {

    var scrollLink = $('.scroll');

    // Smooth links scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1600)
    });

    // Active link switch
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();


        // Handle navigation class
        if (scrollbarLocation >= 200) {
            $('.navigation-wrapper').addClass('navigation-moving');
        } else {
            $('.navigation-wrapper').removeClass('navigation-moving');
        }

        // Handle active class
        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }

        })
        
    });
    
})