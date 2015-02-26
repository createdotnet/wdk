---
layout: side-nav
title: Best Visable
last-updated: 12-02-2013
nav-position: 3
parent: colour-functions
---

## Tag

`<!--WDK:color:bestvisible:colour-->`

## Description

This tag creates a colour that will be easiest to see when placed over the specifed colour.

To use this tag, replace "colour" with a hex reference. Or, you can draw in a selected colour from the "Colours" menu on the Design screen of the Create account.

You can do this with any of the following variables:
- bodybg - Body Background
- bodytxt - Body Text
- bodylink - Body Link
- pagebg - Page Background
- menubg - Menu Background
- menutxt - Menu Text

## Example

In the example below we are using Create's dynamic colours. We are using the `pagebg` to generate the best visible colour for use with heading tags.

~~~
<head>
  <style type="text/css">
    #page {
      background-color: <!--WDK:display:pagebg-->;
    }
    h1, h2, h3, h4, h5, h6 {
      color: <!--WDK:color:bestvisible:[pagebg]-->;
    }
  </style>
</head>
~~~