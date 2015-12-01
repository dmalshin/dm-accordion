/**
 * DM Accordion
 * @version 0.2.1
 * @author Dmitry Alshin <dm.alshin@gmail.com>
 * @license The MIT License (MIT)
 */


/*--- Functions ---*/

// Intializing accordion
function dmAccordionInit(container, control, content) {
	$(container).addClass('dm-accordion');
	$(control).addClass('dm-accordion-control');
	$(content).addClass('dm-accordion-content');
}


/*--- Events ---*/

$(document)
	.on('click', '.dm-accordion .dm-accordion-control', function() {
		$(this)
			.addClass('.dm-accordion-content-active')
        	.next('.dm-accordion-content')
        	.slideToggle(200);
	});