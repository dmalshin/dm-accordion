# DM Accordion

![version](https://img.shields.io/badge/version-2.0.0-brightgreen.svg?style=flat-square "Version")
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

Simple but powerful jquery accordion script

## Installation

Include core css file
```html
<link rel="stylesheet" href="dm-accordion-core.css" />
```

Include accordion script and jQuery (if not included already)
```html
<script src="jquery.min.js"></script>
<script src="jquery.dm-accordion.js"></script>
```


## Initialization

Call accordion function for your markup:

```javascript
dmAccordion({
  headings: '.some-heading', // Accordion heading elements
  contents: '.some-content' // Accordion content elements
});
```

Use rewrite default parameters to customize an accordion:
dmAccordion({
  headings: '.dm-accordion-heading', // Accordion heading elements
  contents: '.dm-accordion-content', // Accordion content elements
  openSingle: false, // Only one section can be opened at a time
  openFirst: false, // First section is opened initially
  speed: '300', // Opening/closing speed
});

