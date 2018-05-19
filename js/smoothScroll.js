$(function () {

    var $window = $(window);		//Window object

    var scrollTime = 1;			    //Scroll time
    var scrollDistance = 700;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

    $window.on("mousewheel DOMMouseScroll", function (e) {

        e.preventDefault();

        var delta = e.originalEvent.wheelDelta / 120 || -e.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: { y: finalScroll, autoKill: true },
            ease: Power1.easeOut,
            autoKill: true,
            overwrite: 5
        });

    });

});