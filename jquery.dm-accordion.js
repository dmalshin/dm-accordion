function dmAccordion(userOptions) {
	// options
	var options = {
		// user options
		headings: '.dm-accordion-heading',
		contents: '.dm-accordion-content',
		speed: 400,
		// internal options
		headingClass: 'dm-accordion-heading',
		contentClass: 'dm-accordion-content',
		separatorHTML: '<div class="dm-accordion-separator"></div>'
	};
	$.extend(options, userOptions);

	// initialization
	var $headings = $(options.headings);
	var $contents = $(options.contents);

	$headings.addClass(options.headingClass);

	$contents
			.hide()
			.addClass(options.contentClass)
			.after(options.separatorHTML);

	// functions
	function slide(event) {
		$(event.target).next($contents).slideToggle(options.speed);
	}

	// events
	$headings.on('click', function() {
		slide(event);
	});
}