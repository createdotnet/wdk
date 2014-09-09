---
layout: side-nav
title: Page Meta Description
group: Page Specific Tags
last-updated: 08-02-2013
---

## Tag

`<!--WDK:display:metadesc-->`

## Description

Use this tag to return the current page's `<meta>` description as defined on the "Page Options" screen.

## Example

In this example we're using the tag to set the meta description the `<head>` section of the document.

~~~
<head>
  <meta name="description" content="<!--WDK:display:metadesc-->">
</head>
~~~