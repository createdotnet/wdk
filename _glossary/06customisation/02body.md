---
layout: side-nav
title: Body Colour
last-updated: 08-03-2013
parent: 06customisation
---

## Tag

`<!--WDK:display:bodybg-->`

## Description

Return `#<HEX>`
Use this tag to return a hex value of the body background colour as specified on the "Colours" section on your Create "Design" screen.

## Example

In this example we're using the tag to set the `<body>` background colour using CSS set in the `<head>`.

~~~
<head>
  <style type="text/css">
    body {
      background-color:<!--WDK:display:bodybg-->;
    }
  </style>
</head>
~~~