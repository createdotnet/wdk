---
layout: side-nav
title: Page File Name
last-updated: 08-02-2013
nav-position: 1
parent: page-specific-tags
---

## Tag

`<!--WDK:display:pagefilename-->`

## Description

Use this tag to return the current page's file name as defined on the "Page Options" screen.

## Example

In this example we're using the tag to create a download link for the current page. The first instance sets the url of the file in the link and the second displays the file name.

~~~
<p>Right click and select "Save As" on the link below to download this page.<br />
<a href="<!--WDK:display:pagefilename-->"><!--WDK:display:pagefilename--></a></p>
~~~