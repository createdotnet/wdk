---
layout: side-nav
title: Invert
group: Colour Functions
last-updated: 12-02-2013
---

## Tag

`<!--WDK:color:invert:colour-->`

## Description

Return = `#<HEX>`
This tag creates a inverted colour version to your specified colour.

For example, if black is specified, the 'invert' will generate white.

To use this tag, replace "colour" with a hex reference. Or, you can draw in a selected colour from the "Colours" menu on the Design screen of the Create account.

You can do this with any of the following variables:
- bodybg - Body Background
- bodytxt - Body Text
- bodylink - Body Link
- pagebg - Page Background
- menubg - Menu Background
- menutxt - Menu Text

## Example

In the example below we are using Create's dynamic colours. We are using `bodybg` to generate an inverted colour to use with heading tags. 

~~~
<head>
  <style type="text/css">
    body {
      background-color:<!--WDK:display:bodybg-->;
    }
    h1, h2, h3, h4, h5, h6 {
      color:<!--WDK:color:invert:[bodybg]-->;
    }
  </style>
</head>
~~~