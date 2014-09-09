---
layout: tutorials
title: Using jQuery
group: Tutorials
last-updated: 05-04-2013
---


Create websites utilise the Javascript library <a href="http://jquery.com/" target="_blank">jQuery</a> for various dynamic features. 

In the `<!--WDK:display:headstuff-->` tag is a `<script>` tag loading in "**loader.js**" which is what we use to include jQuery in the page.

/include/js/loader.js

~~~
function jsload( src ) {
	document.write(unescape('%3Cscript src="' + src + '"%3E%3C/script%3E'));
}

var jqv = "1.9.1";
if (typeof jQuery == "undefined") {
	jsload('//ajax.googleapis.com/ajax/libs/jquery/' + jqv + '/jquery.min.js');
	jsload('http://code.jquery.com/jquery-migrate-1.1.1.js');
}
~~~

If you need to use jQuery in your own template, you should not include it again, simply use it normally below the headstuff WDK tag.

## Versions

You can check the current version of jQuery that your Create is using by looking at **loader.js** and referring to the jqv variable.

If you need to use a different version of jQuery, you will need to namespace it and include it above the headstuff WDK tag. You can do this using jQuery's built in noConflict method. <a href="http://api.jquery.com/jQuery.noConflict/" target="_blank">Read More</a>