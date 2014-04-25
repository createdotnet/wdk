---
layout: layout
title: Using Menus
group: tutorials
---



A template made using the WDK requires only 1 file, index.html. However, you may wish include other separate files such as: style sheets, javascript libraries, images and flash.

The index.html is used for all page layouts and is the only file you can include WDK tags on.

The WDK uses tags to determine dynamic content on your page. Tags are HTML comments which instruct our system to "do" or "fetch" information.

For example, if you wanted to place the page title within a HTML heading, you would do the following:

`<h1><!--WDK:display:pagetitle--></h1>`

Automatically, the WDK reads this tag and shows the relevant page title within the HTML heading.

This documentation will talk you through with some tutorials of using the WDK tags effectively, as well as listing the tags in a glossary. Please use the left hand navigation to read through the documentation.
