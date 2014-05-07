---
layout: glossary
title: Header X
group: Conditional
last-updated: 03-03-2013
---


##Tag

`<!--WDK:if:header<strong>X</strong>-->`

##Description

This conditional tag checks that returns true if headerX (<a href="#" target="_blank">header3 or header4</a>) is the selected header.
For more information, <a href="http://www.create.net/wdk?p=conditional---header-x-is-gif" target="_blank">please see the tutorial on conditional tags here.</a>

Pseudo Equivalent:
`if ( header.selected == headerX ) {`

##Example
In the following example we are using the tag to determine which header image is being used, then setting the width of the containing div.

```
<div style="
	<!--WDK:if:header3--> 
		width:1000px;
	<!--WDK:elseif:header4-->
		width:350px;
	<!--WDK:else-->
		width:100%;
	<!--WDK:endif-->
	">
</div>
```