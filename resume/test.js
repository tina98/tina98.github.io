$(window).mousewheel(function(event, delta) {
event.preventDefault();
var scroll = $(window).scrollLeft();
$(window).scrollLeft(scroll – (delta * 30));
});
