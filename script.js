/*!
 *  DM Accordion 0.0.1
 *  @author Дмитрий Альшин <dm.alshin@gmail.com>
 */


/*--- Functions ---*/


/*--- Events ---*/

$(document)
    .on('click', '.dm-accordion .dm-accordion-control', function() {
        var $this = $(this);
        var allContents = $('.dm-accordion .dm-accordion-content');
        allContents.removeClass('dm-accordion-active-contnent');
        var activeContent = $this.next('.dm-accordion-content');
        activeContent.addClass('dm-accordion-active-contnent')
        $('.dm-accordion .dm-accordion-content').css('max-height', '0');
        activeContent.css('max-height', '1000px');
    });


/*--- Initializations ---*/

$(document).ready(function() {
    $('.accordion').addClass('dm-accordion');
    $('.accordion-control').addClass('dm-accordion-control');
    $('.accordion-content').addClass('dm-accordion-content');
}); // ready()