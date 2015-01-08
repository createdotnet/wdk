---
layout: glossary
title: Page File Name Starts With
group: Conditional
last-updated: 08-03-2013
---


## Tag

`<!--WDK:if:pageFilenameStartsWith:value-->`

## Description
This conditional tag checks to see if the page filename starts with the specified value.

For more information, [please see the tutorial on conditional tags here.]({{ site.baseurl }}/pages/tutorials/12conditional-tags.html)

Pseudo Equivalent:
`if ( Left(pageFilename, Length(value)) == value ) {`

## Example
In the following example we are using the tag to check for page file names beginning with 'male' or 'female'. We are then using this to change our background colour to pink and blue.

~~~
<!--WDK:if:pageFilenameStartsWith:female-->
	<style type="text/css">
		body { background-color: #F7A8C8;}
	</style>
<!--WDK:elseif:pageFilenameStartsWith:male-->
	<style type="text/css">
		body { background-color: #B5BEFF;}
	</style><br />
<!--WDK:endif-->
~~~