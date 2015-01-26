---
layout: side-nav
title: Page Title Tag
last-updated: 08-02-2013
parent: 07page-specific-tags
---

## Tag

`<!--WDK:display:titletag-->`

## Description

Use this tag to return the current page's meta `<title>` tag, as defined on the "Page Options" screen in your Create account.

## Example

In this example we're using the tag to set the title in the `<head>` section of the document.

~~~
<head>
  <title><!--WDK:display:titletag--></title>
</head>
~~~