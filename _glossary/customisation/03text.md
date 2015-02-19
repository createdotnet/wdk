---
layout: side-nav
title: Text Colour
last-updated: 31-07-2013
parent: customisation
---

## Tag

`<!--WDK:display:bodytxt-->`

## Description

Return `#<HEX>`
Use this tag to return a hex value of the body text colour as specified on the "Colours" section on your Create "Design" screen.

## Example

In this example we're using the tag to set the `<p>` text colour using CSS set in the `<head>`.

~~~
<head>
  <style type="text/css">
    p {
      color:<!--WDK:display:bodytxt-->;
    }
  </style>
</head>
~~~