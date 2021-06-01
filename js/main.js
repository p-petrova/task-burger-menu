$( document ).ready(function() {
	$('.burger_menu').on('click', function() {
		$('body').toggleClass('has-active-nav');
		$(this).toggleClass('is-active');
	});
});