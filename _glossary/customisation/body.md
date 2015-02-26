---
layout: side-nav
title: Body Colour
last-updated: 08-03-2013
nav-position: 2
parent: customisation
tag: <!--WDK:display:bodybg-->
---

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