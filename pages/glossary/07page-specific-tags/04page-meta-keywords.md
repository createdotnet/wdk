---
layout: glossary
title: Page Meta Keywords
group: Page Specific Tags
last-updated: 08-02-2013
---

## Tag

`<!--WDK:display:metakeys-->`

## Description

Use this tag to return the current page's `<meta>` keywords as defined on the "Page Options" screen from within your Create account.

## Example

In this example we're using the tag to set the meta keywords the `<head>` section of the document.

~~~
<head>
  <meta name="keywords" content="<!--WDK:display:metakeys-->">
</head>
~~~