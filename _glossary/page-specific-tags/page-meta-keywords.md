---
layout: side-nav
title: Page Meta Keywords
last-updated: 08-02-2013
nav-position: 4
parent: page-specific-tags
tag: <!--WDK:display:metakeys-->
---

Use this tag to return the current page's `<meta>` keywords as defined on the "Page Options" screen from within your Create account.

## Example

In this example we're using the tag to set the meta keywords the `<head>` section of the document.

~~~
<head>
  <meta name="keywords" content="<!--WDK:display:metakeys-->">
</head>
~~~