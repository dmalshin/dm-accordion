# DM Accordion

![version](https://img.shields.io/badge/version-1.0.2-brightgreen.svg?style=flat-square "Version")
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

Accordion script mostly for educational purposes


## Installation

Include core css file and optional theme
```html
<link rel="stylesheet" href="dm-accordion-core.css" />
<link rel="stylesheet" href="dm-accordion-theme.css" />
```

Include accordion script and jQuery (if not done already)
```html
<script src="jquery.min.js"></script>
<script src="jquery.dm-accordion.js"></script>
```


## Initialization

Initialize accordion script for your accordion container class with optional parameters:

```javascript
$(document).ready(function(){
	$('.accordion-container').DMAccordion({
		control: '.accordion-control',		// Accordion control(heading) elements
		content: '.accordion-content',		// Accordion content elements
		speed: 200,							// Opening/closing speed
		openSinge: false,					// Only one item can be opened at the time
	});
});
```