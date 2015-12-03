# DM Accordion

![version](https://img.shields.io/badge/version-1.0.1-brightgreen.svg?style=flat-square "Version")
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

Accordion script mostly for educational purposes


## Installation

Include core css file and theme (optional)
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

Quick:
Add accordion classes to your elements like on example below.

```html
<div class="accordion-container">
	<div class="accordion-control">Lorem ipsum dolor</div>
	<div class="accordion-content">
		Lorem ipsum dolor sit amet, consectetur adipisicing
	</div>
	<div class="accordion-control">Lorem ipsum dolor</div>
	<div class="accordion-content">
		Lorem ipsum dolor sit amet, consectetur adipisicing
	</div>
	<div class="accordion-control">Lorem ipsum dolor</div>
	<div class="accordion-content">
		Lorem ipsum dolor sit amet, consectetur adipisicing
	</div>
</div>
```

Full:
Initialize accordion script with optional parameters:

```javascript
$(document).ready(function(){
	$('.accordion-class').DMAccordion({
		control: '.accordion-control',		// Accordion control(heading) elements
		content: '.accordion-content',		// Accordion content elements
		speed: 200,							// Opening/closing speed
		openSinge: false,					// Only one item can be opened at the time
	});
});
```