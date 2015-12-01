/**
 * DM Accordion
 * @version 0.2.1
 * @author Dmitry Alshin <dm.alshin@gmail.com>
 * @license The MIT License (MIT)
 */


/*--- Functions ---*/


/*--- Events ---*/

$(document)
	.on('click', '.dm-accordion .dm-accordion-control', function() {
		$(this)
			.addClass('.dm-accordion-content-active')
        	.next('.dm-accordion-content')
        	.slideToggle(200);
	});


/*--- Initializations ---*/

$(document).ready(function() {
    $('.accordion').addClass('dm-accordion');
    $('.accordion-control').addClass('dm-accordion-control');
    $('.accordion-content').addClass('dm-accordion-content');
}); // ready()