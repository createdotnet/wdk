---
layout: glossary
title: Links Colour
group: Customisation
last-updated: 04-07-2013
---

##Tag

`<!--WDK:display:bodylink-->`

##Description

Return `#<HEX>`
Use this tag to return a hex value of  the body link colour as specified on the "Colours" section on your Create "Design" screen.

##Example

In this example we're using the tag to set the `<a>` text colour using CSS set in the `<head>`.

~~~
<head>
    <style type="text/css">
    a {
        color: <!--WDK:display:bodylink-->;
        text-decoration: underline;
    }
    </style>
</head>
~~~