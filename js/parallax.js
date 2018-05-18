$(window).scroll(function() {
    parallax();
})

function parallax() {
    var windowScroll = $(window).scrollTop();

    $('.parallax').css('background-position', 'center ' + (windowScroll*.7) + 'px')
}