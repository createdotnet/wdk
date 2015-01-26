---
layout: side-nav
title: Page File Name Ends With
last-updated: 01-08-2013
parent: 02conditional
---


## Tag

`<!--WDK:if:pageFilenameEndsWith:value-->`

## Description

This conditional tag checks to see if the page filename ends with the specified value.

For more information, [please see the tutorial on conditional tags here.]({{ site.baseurl }}/pages/tutorials/12conditional-tags.html)

Pseudo Equivalent:
`if ( Right(pageFilename, Length(value)) == value )  {`

## Example
In this example, we are using the tag to check for page file names ending with '-full'. We are then using it to create full width pages by not displaying side columns. We would then name our desired full width pages like about-full.html or gallery-full.html.

#### Example CSS in the `<head>`.

~~~
<!--WDK:if:pageFilenameEndsWith:-full--><!--WDK:endif-->
~~~

#### Example HTML Markup
~~~
<header> </header>
<div id="main">
	<aside class="sidebar left"> </aside>
	<div id="content"> </div>
	<aside class="sidebar right"> </aside>
</div>
<footer> </footer>
~~~