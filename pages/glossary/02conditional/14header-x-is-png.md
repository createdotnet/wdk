---
layout: glossary
title: Header X Is Png
group: Conditional
last-updated: 03-03-2013
---


##Tag

`<!--WDK:if:headerX:isPng-->`

##Description

This conditional tag checks to see if headerX ([header3, header4](13header-x.html)) is a png file.

For more information, [please see the tutorial on conditional tags here.](/pages/tutorials/12conditional-tags.html)

Pseudo Equivalent:
`if ( headerX.type == "png" ) {`

##Example
In the following example we are using the tag to determine if header 3 is a png, then if it is it will show as an image in the header area.

```
<header>
	<div id="logo">
		<!--WDK:if:header3:isPng-->
			<img src="<!--WDK:display:header3src-->" alt="Logo Image" />
		<!--WDK:elseif:header3:isFlash-->
			<object data="<!--WDK:display:header3src-->" type="application/x-shockwave-flash" width="" height="">
				<param name="movie" value="<!--WDK:display:header1src-->">
			</object><br /><br />
		<!--WDK:endif-->
	</div>
</header>
```