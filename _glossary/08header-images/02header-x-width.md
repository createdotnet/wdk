---
layout: side-nav
title: Header X Width
last-updated: 31-07-2013
parent: 08header-images
---

## Tag

`<!--WDK:display:headerXwidth-->`

## Description

Use this tag to return the width of a specific header (1, 2 or 3). To find out more, please read our [Logos & Headers]({{ site.baseurl }}/tutorials/08header-images) tutorial.

## Example

In this example we're using three tags to return the url, width and height of header 1.

~~~
<div id="logo">
  <img
    src="<!--WDK:display:header1src-->"
    alt="Company Logo"
    width="<!--WDK:display:header1width-->"
    height="<!--WDK:display:header1height-->"
  />
</div>
~~~