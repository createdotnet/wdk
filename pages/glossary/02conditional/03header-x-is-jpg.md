---
layout: glossary
title: Header X Is Jpg
group: Conditional
last-updated: 03-03-2013
---


##Tag

`<!--WDK:if:header<strong>X</strong>:isJpg-->`

##Description

This conditional tag checks to see if headerX (header3, header4) is a jpg file.

For more information, <a href="http://www.create.net/wdk?p=conditional---header-x-is-gif" target="_blank">please see the tutorial on conditional tags here.</a>

Pseudo Equivalent:
`if ( headerX.type == "jpg" ) {`

##Example
In the following example we are using the tag to determine if header 3 is a jpg file, then if it is it will show as an image in the header area.

```
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
```