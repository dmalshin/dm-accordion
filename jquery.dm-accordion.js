/**
 * DM Accordion
 * @version 1.0.0
 * @author Dmitry Alshin <dm.alshin@gmail.com>
 * @license The MIT License (MIT)
 */


(function() {

	/**
	 * Creates an accordion.
	 * @class DM Accordion.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function DMAccordion(element, options) { // core constructor
		// ensure to use the `new` operator
		if (!(this instanceof DMAccordion))
			return new DMAccordion(options);

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
		alertString: 'default',
		control: '.accordion-control',
		content: '.accordion-content',
	};

	/**
	 * Initializes the accordion
	 * @protected
	 */
	DMAccordion.prototype.initialize = function(element) {
		console.log(this.options.alertString);
		element.addClass('dm-accordion');
		$(this.options.control).addClass('dm-accordion-control');
		$(this.options.content).addClass('dm-accordion-content');

		var controlElement = this.options.control;
		var contentElement = this.options.content;

		$(document)
		.on('click', controlElement, function() {
			$(this)
				.next(contentElement)
				.slideToggle(200);
		});
	};


	// expose the library
	window.DMAccordion = DMAccordion;
})();


/**
 * The jQuery Plugin for DM Accordion
 * @public
 */
/*DMAccordion.prototype.DMAccordion = function () {
	console.log(this.options.alertString);
	return this;
};*/
$.prototype.DMAccordion = function (options) {
	var data = new DMAccordion(this, typeof option == 'object' && option);
};