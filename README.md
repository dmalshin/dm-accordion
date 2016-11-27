# DM Accordion

![version](https://img.shields.io/badge/version-2.0.0-brightgreen.svg?style=flat-square "Version")
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

Simple but powerful jquery accordion script

## Installation

Include core css file and optional theme
```html
<link rel="stylesheet" href="dm-accordion-core.css" />
<link rel="stylesheet" href="dm-accordion-theme.css" />
```

Include accordion script and jQuery (if not included already)
```html
<script src="jquery.min.js"></script>
<script src="jquery.dm-accordion.js"></script>
```


## Initialization

Call accordion function with optional parameters:

```javascript
dmAccordion({
  headings: '.some-heading',    // Accordion heading elements
  contents: '.some-content'     // Accordion content elements
});
```
