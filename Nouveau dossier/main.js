$(document).ready(function () {
	$('.menu').on('click', function	() {
		$(this).toggleClass('open');
		$('.nav_top').toggleClass('open');
	});

	$('.nav_top .nav_link').on('click', function () {
		$('.menu').removeClass('open');
		$('.nav_top').removeClass('open');
	});
});	