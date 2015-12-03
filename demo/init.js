/*--- Initializations ---*/

$(document).ready(function() {
	$('.accordion').DMAccordion({
		control: '.accordion-control',
		content: '.accordion-content',
		speed: 200,
		openSinge: false,
	});
}); // ready()