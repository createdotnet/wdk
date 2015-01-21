---
layout: side-nav
title: Page Background Colour
last-updated: 08-03-2013
parent: 06customisation
---

## Tag

`<!--WDK:display:pagebg-->`

## Description

Return `#<HEX>`
Use this tag to return a hex value of the page background colour as specified on the "Colours" section on your Create "Design" screen.

## Example

In this example we're using the tag to set the a background colour for a div using CSS set in the `<head>`. This would allow us to have different page and body background colours.

~~~
<head>
  <style type="text/css">
    body {
      background-color:<!--WDK:display:bodybg-->;
    }
    #page {
      background-color:<!--WDK:display:pagebg-->;
      width:1000px;
      margin:0 auto;
    }
  </style>
</head>

<body>
  <div id="page">
  </div>
</body>
~~~