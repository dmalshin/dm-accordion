/*!
 *  DM Accordion 0.2.0
 *  @author Дмитрий Альшин <dm.alshin@gmail.com>
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