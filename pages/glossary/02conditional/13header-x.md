---
layout: glossary
title: Header X
group: Conditional
last-updated: 31-07-2013
---


##Tag

##Description

type , id 
This tag can be used to place dynamic content such as a widgets within your template.

The "type" can be any of the following:

-widget
-slideshow
-gallery
-customform
-htmlfragment
-The "id" can be the id of a specific item, or a specific widget type, for example: `<!--WDK:dynamic:widget:youtube-->` or `<!--WDK:dynamic:widget:49857-->`.

##Example

In this example, the Create account has a "Product Search" widget with an id of 12567, here we are using the tag to place it in our header along side our logo.

```
<header>
	<div id="logo">
		<!--WDK:display:header-->
	</div>
	<div class="widget">
		<!--WDK:dynamic:widget:49857-->
	</div>
</header>
```