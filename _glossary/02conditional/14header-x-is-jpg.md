---
layout: side-nav
title: Header X Is Jpg
last-updated: 03-03-2013
parent: 02conditional
---


## Tag

`<!--WDK:if:headerX:isJpg-->`

## Description

This conditional tag checks to see if headerX (header3, header4) is a jpg file.

For more information, [please see the tutorial on conditional tags here.]({{ site.baseurl }}/pages/tutorials/12conditional-tags.html)

Pseudo Equivalent:
`if ( headerX.type == "jpg" ) {`

## Example
In the following example we are using the tag to determine if header 3 is a jpg file, then if it is it will show as an image in the header area.

~~~
<header>
	<div id="logo">
		<!--WDK:if:header3:isJpg-->
			<img src="<!--WDK:display:header3src-->" alt="Logo Image" />
		<!--WDK:elseif:header3:isFlash-->
			<object data="<!--WDK:display:header3src-->" type="application/x-shockwave-flash" width="" height="">
				<param name="movie" value="<!--WDK:display:header1src-->"><br />
			</object>
		<!--WDK:endif-->
	</div>
</header>
~~~