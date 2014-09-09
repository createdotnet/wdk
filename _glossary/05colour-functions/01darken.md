---
layout: side-nav
title: Darken
group: Colour Functions
last-updated: 12-02-2013
---

## Tag

`<!--WDK:color:darken:colour:amount-->`

## Description

This tag creates a darker version of a colour by a specified amount.

To use this tag, replace "colour" with a hex reference. Or, you can draw in a selected colour from the "Colours" menu on the Design screen of the Create account.

You can do this with any of the following variables:
- bodybg - Body Background
- bodytxt - Body Text
- bodylink - Body Link
- pagebg - Page Background
- menubg - Menu Background
- menutxt - Menu Text

Then the "amount" is an intensity level between 1 and 255 to select the darkness increase of the colour.

## Example

In the example below we are using Create's dynamic colours. We are using the `bodylink` to generate a darker colour to use as a border.

~~~
<head>
  <style type="text/css">
    a {
      color: <!--WDK:display:bodylink-->;
      border-bottom: 1px solid <!--WDK:color:darken:[bodylink]:100-->;
    }
  </style>
</head>
~~~