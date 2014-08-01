---
layout: glossary
title: Brighten
group: Colour Functions
last-updated: 12-02-2013
---

##Tag

`<!--WDK:color:brighten:colour:amount-->`

##Description

Return = `#<HEX>`
This tag create's a brighter version of a colour by a specified amount.

To use this tag, replace "colour" with a hex reference. Or, you can draw in a selected colour from the "Colours" menu on the Design screen of the Create account.

You can do this with any of the following variables:
- bodybg - Body Background
- bodytxt - Body Text
- bodylink - Body Link
- pagebg - Page Background
- menubg - Menu Background
- menutxt - Menu Text

Then the "amount" is an intensity level between 1 and 255 to select the brightness increase of the colour.

##Example

In the example below we are using Create's dynamic colours. We are using the `bodybg` to generate a brighter colour we can use to set borders on images.

~~~
<head>
  <style type="text/css">
    body {
      background-color:<!--WDK:display:bodybg-->;
    }
    img {
      border: 5px solid <!--WDK:color:brighten:[bodybg]:100-->;
    }
  </style>
</head>
~~~