---
layout: side-nav
title: Menu Background Colour
last-updated: 31-07-2013
parent: customisation
---

## Tag

`<!--WDK:display:menubg-->`

## Description

Return `#<HEX>`
Use this tag to return a hex value of the menu background colour as specified on the "Colours" section on your Create "Design" screen.

## Example

In this example we're using the tag to set the a background colour for a div using CSS set in the `<head>`.

~~~
<head>
  <style type="text/css">
    #menu {
      background-color:<!--WDK:display:menubg-->;
    }
  </style>
</head>

<body>
  <div id="menu">
    <ul>
      <li></li>
    </ul>
  </div>
</body>
~~~