---
layout: side-nav
title: Fonts
last-updated: 08-03-2013
nav-position: 8
parent: customisation
tag: <!--WDK:display:font:[logo, heading, content, icon]-->
---

## Requirements

This tag requires the `<!--WDK:base:css:fonts-->` to be included once in the `<head>` element. 
This tag creates four classes - `.font--content`, `.font--heading`, `.font--logo` and `.i` which you can add to elements within your template. It also loads in the font files, set by the user in the Design Studio.

~~~
<head>
  <style type="text/css">
	<!--WDK:base:css:fonts-->
  </style>
</head>
~~~

## Example

~~~
<head>
  <style type="text/css">
	h1, h2, h3 {
		font-family: <!--WDK:display:font:heading-->;
	}
	.icon {
		font-family: <!--WDK:display:font:icon-->;
	}
	.logo {
		font-family: <!--WDK:display:font:logo-->;
	}
  </style>
</head>
~~~