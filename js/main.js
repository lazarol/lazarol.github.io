
/*
 * Funktio, jolla navigointi tapahtuu sulavasti.
 */

$(function() {
	$('a').bind('click', function(event) {

		var $anchor = $(this);

		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 2000, 'easeInOutExpo');

		event.preventDefault();
	});


});

/*
 * Nameheader siirtyy oikealle.
 */

var nameheader = document.getElementById('nameheader');
var welcome = document.getElementById('welcome');
window.onscroll = function (e) {
	if (nameheader) {
		nameheader.style.left = window.pageYOffset + 'px';
	}
	if (welcome) {
		welcome.style.top = window.pageYOffset + 'px';
	}
}
