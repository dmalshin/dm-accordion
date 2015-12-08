/**
 * DM Accordion
 * @version 1.0.2
 * @author Dmitry Alshin <dm.alshin@gmail.com>
 * @license The MIT License (MIT)
 */


;(function($, window, document, undefined) {

	/**
	 * Creates an accordion.
	 * @class DM Accordion.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function DMAccordion(element, options) {

		/**
		 * Current options set by the caller including defaults
		 * @public
		 */
		this.options = $.extend({}, DMAccordion.Defaults, options);

		this.initialize(element);
	};

	/**
	 * Default options for the accordion
	 * @public
	 */
	DMAccordion.Defaults = {
		control: '.accordion-control',
		content: '.accordion-content',
		openSinge: false,
		optionSpeed: 200,
	};

	/**
	 * Initializes the accordion
	 * @protected
	 */
	DMAccordion.prototype.initialize = function(element) {

		// Variables
		var optionContenElement 	= element.selector;
		var optionControlElement 	= optionContenElement + ' ' + this.options.control;
		var optionContentElement 	= optionContenElement + ' ' + this.options.content;
		var optionSpeed 			= this.options.speed;
		var optionOpenSinge 		= this.options.openSinge;

		// Classes for styles
		element
			.addClass('dm-accordion');
		$(optionControlElement)
			.addClass('dm-accordion-control');
		$(optionContentElement)
			.addClass('dm-accordion-content');

		// Events registration
		if ( optionOpenSinge ) {
			$(document)
			.on('click', optionControlElement, function() {
				$(optionContentElement).slideUp(optionSpeed);

				$(this)
					.next(optionContentElement)
					.slideDown( optionSpeed );
			});
		}
		else {
			$(document)
			.on('click', optionControlElement, function() {
				$(this)
					.next(optionContentElement)
					.slideToggle( optionSpeed );
			});
		}
	};

	/**
	 * The jQuery Plugin for DM Accordion
	 * @public
	 */
	$.prototype.DMAccordion = function (option) {
		var data = new DMAccordion(this, typeof option == 'object' && option);
	};

	window.DMAccordion = DMAccordion;

})(window.jQuery, window, document);
