---
layout: glossary
title: User Is logged In
group: Conditional
last-updated: 03-03-2013
---


## Tag

`<!--WDK:if:headerX:isFlash-->`

## Description

This conditional tag checks to see if header<span style="text-decoration: underline;">X</span> (<a href="#" target="_blank">header3, header4</a>) is a flash file.

For more information, [please see the tutorial on conditional tags here.]({{ site.baseurl }}/pages/tutorials/12conditional-tags.html)

Pseudo Equivalent:
`if ( headerX.type == "swf" ) {`

## Example
In the following example we are using the tag to determine if header 3 is a flash file, then if it is it will show as a flash animation in the header area.


~~~
<header>
	<div id="logo">
		<!--WDK:if:header3:isFlash-->
			<object data="<!--WDK:display:header3src-->" type="application/x-shockwave-flash" width="" height="">
				<param name="movie" value="<!--WDK:display:header3src-->">
			</object>
		<!--WDK:elseif:header3:isPng-->
			<img src="<!--WDK:display:header3src-->" alt="Logo Image" />
		<!--WDK:endif-->
	</div>
</header>
~~~