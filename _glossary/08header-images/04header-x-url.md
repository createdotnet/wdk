---
layout: side-nav
title: Header X URL
last-updated: 31-07-2013
parent: 08header-images
---

## Tag

`<!--WDK:display:headerXsrc-->`

## Description

Use this tag to return the full url of a specific header (1, 2 or 3). To find out more, please read our [Logos & Headers]({{ site.baseurl }}/tutorials/10header-images) tutorial.

## Example

In this example we're using the tag to provide the url for an image tag within a div.

~~~
<div id="logo">
  <img src="<!--WDK:display:header1src-->" alt="Company Logo" />
</div>
~~~