function dmAccordion(userOptions) {
	var $headings;
	var $contents;
	// options
	var options = {
		// user options
		headings: '.dm-accordion-heading',
		contents: '.dm-accordion-content',
		openSingle: false,
		openFirst: false,
		speed: 300,
		// internal options
		headingClass: 'dm-accordion-heading',
		contentClass: 'dm-accordion-content',
		separatorHTML: '<div class="dm-accordion-separator"></div>',
		openedClass: 'dm-accordion-opened',
		closedClass: 'dm-accordion-closed',
	};
	$.extend(options, userOptions);

	// init accordion
	dmAccordionInit();

	// initialization
	function dmAccordionInit() {
		$headings = $(options.headings);
		$contents = $(options.contents);

		$headings.addClass(options.headingClass);
		$contents
				.addClass(options.contentClass)
				.after(options.separatorHTML);

		if (options.openFirst) {
			$contents.not(':first').hide();
			$headings.not(':first').addClass(options.closedClass);
			$headings.first().addClass(options.openedClass);
		}
		else {
			$contents.hide();
			$headings.addClass(options.closedClass);
		}
	}

	// toggle accordion section
	function dmAccordionSlide(event) {
		var $targetHeading = $(event.target);
		var $targetContent = $targetHeading.next();

		if (options.openSingle) {
			$contents.not($targetContent)
				.slideUp(options.speed)
				.prev().addClass(options.closedClass);
		}

		$targetContent.slideToggle(options.speed);
		$targetHeading.toggleClass(options.openedClass + ' ' + options.closedClass);
	}

	// events
	$headings.on('click', function() {
		dmAccordionSlide(event);
	});
}