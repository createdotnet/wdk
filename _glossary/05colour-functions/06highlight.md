---
layout: side-nav
title: Highlight
last-updated: 12-02-2013
parent: 05colour-functions
---

## Tag

`<!--WDK:color:highlight:colour:amount-->`

## Description

Return = `#<HEX>`
This tag creates a highlighted version of a colour by a specified amount. 

This is different to using the color:brighten tag, as if there is not a bright enough version of the colour, it will actually darken. 

To use this tag, replace "colour" with a hex colour, or you may draw in a dynamic colour from the users colour scheme from the "Colours" menu on the Design screen of the Create account.

You can do this with any of the following variables:
- bodybg - Body Background
- bodytxt - Body Text
- bodylink - Body Link
- pagebg - Page Background
- menubg - Menu Background
- menutxt - Menu Text

Then the "amount" is a intensity between 1 and 255 to select the difference from the original colour (this may be darker or lighter depending on the orginial shade).

## Example

In the example below we are using Create's dynamic colours. We are using `bodybg` to generate a highlighted colour to use with heading tags. 

~~~
<head>
  <style type="text/css">
    body {
      background-color:<!--WDK:display:bodybg-->;
    }
    h1, h2, h3, h4, h5, h6 {
      color:<!--WDK:color:highlight:[bodybg]:200-->;
    }
  </style>
</head>
~~~