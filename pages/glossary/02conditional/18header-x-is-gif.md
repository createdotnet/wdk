---
layout: glossary
title: Header X Is Gif
group: Conditional
last-updated: 03-03-2013
---

##Tag

`<!--WDK:if:headerX:isGif-->`

##Description

This conditional tag returns true if <a href="#">header 3</a> or <a href="#">header 4</a> is a Gif file.

For more information, [please see the tutorial on conditional tags here.](/pages/tutorials/12conditional-tags.html)

Pseudo Equivalent:
`/>if ( headerX.type == "gif" ) {`

##Example
In the following example, we are using the tag to determine if header 3 is a gif, if it is it will show as an image in the header area.

```
<header>
	<div id="logo">
		<!--WDK:if:header3:isGif-->
		<img src="<!--WDK:display:header3src-->" alt="Logo Image" />
		<!--WDK:elseif:header3:isFlash-->
		<object data="<!--WDK:display:header3src-->" type="application/x-shockwave-flash" width="" height="">
			<param name="movie" value="<!--WDK:display:header1src-->"><br />
		</object>
		<!--WDK:endif-->
	</div>
</header>
```