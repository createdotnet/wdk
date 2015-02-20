---
layout: side-nav
title: Page File Name Is
last-updated: 31-07-2013
parent: 02conditional
tag: <!--WDK:if:pageFilenameIs:value-->
---

This conditonal tag checks to see if the page filename is the specified value.

For more information, [please see the tutorial on conditional tags here.]({{ site.baseurl }}/tutorials/10conditional-tags.html)

Pseudo Equivalent: 
`if ( pageFilename == value ) {`

## Example

In the following example we're checking to see if we're on a page named contact, and then including a div for a map.

~~~
<!--WDK:if:pageFilenameIs:contact-->
	<div id="map"></div>
<!--WDK:endif-->
~~~

It is also worth noting that you can use a list of comma separated items.

`<!--WDK:if:pageFilenameIs:contact,home,about-->`