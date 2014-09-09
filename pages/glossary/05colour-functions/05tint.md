---
layout: glossary
title: Tint
group: Colour Functions
last-updated: 12-02-2013
---

## Tag

`<!--WDK:color:tint:colour1:colour2:amount-->`

## Description

Return = `#<HEX>`
This tag create's a hex colour based on 2 specified colour and an amount.

To use this tag replace "colour1" and "colour2" with a hex colour, or you may draw in a dynamic colour from the users colour scheme from the "Colours" menu on the Design screen of the Create account.

You can do this with any of the following variables:
- bodybg - Body Background
- bodytxt - Body Text
- bodylink - Body Link
- pagebg - Page Background
- menubg - Menu Background
- menutxt - Menu text

Then the "amount" is a percentage between 1 and 100 to select the tint between the two colours.

## Example

In the example below we are using Create's dynamic colours. We are using `bodybg` for the body, the `menubg` colour for the menu and creating a new colour for the header, based on the two.

~~~
<head>
  <style type="text/css">
    body {
      background-color:<!--WDK:display:bodybg-->;
    }
    .menu {
      background-color:<!--WDK:display:menubg-->;
    }
    .header {
      background-color:<!--WDK:color:tint:[bodybg]:[menubg]:50-->;
    }
  </style>
</head>
~~~