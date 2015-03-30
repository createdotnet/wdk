---
layout: side-nav
title: Header X
last-updated: 03-03-2013
nav-position: 10
parent: conditional
tag: <!--WDK:if:headerX-->
---

This conditional tag checks that returns true if headerX (header3 or header4) is the selected header.
For more information, [please see the tutorial on conditional tags here.]({{ site.baseurl }}/tutorials/conditional-tags.html)

Pseudo Equivalent:
`if ( header.selected == headerX ) {`

## Example
In the following example we are using the tag to determine which header image is being used, then setting the width of the containing div.

~~~
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
~~~