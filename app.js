//personal website jquery
$(window).scroll(function() {
	// body...
	if ($(document) .scrollTop() > 50) {
		$('nav').addClass('shrink');
	}
	else {
		$('nav').removeClass('shrink');
	}
});