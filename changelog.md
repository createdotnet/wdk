---
layout: index
title: Change Log
---

## 13th April 2015 - Search Results Styling
For users on version 1.1, the shop search results will no longer be styled and will require styling in your css file. This is to allow great flexibilty of the styling of your site. Users on 1.0 (or do not have a version tag in the template index.html file) will continue to recieve the same styling.

## 10th April 2015 - Introduce versioning to the WDK
Introduced a versioning system to allow upgrades to WDK fuctionality without changing existing / live sites. See the tutorial on [setting your version]({{ site.baseurl }}/tutorials/setting-your-version.html).

## 30th March 2015 - Column Count Tag
Add documentation for `<!--WDK:column:count-->`, required for the default styling of the new re-sizeable category grid layout.

## 4th March 2015 - Colours
Updates to how colour tags are used as the Design Studio handles these slightly differently to before.

## 5 January 2015 - Pagebuilder
Pagebuilder is a new drag and drop interface that allows users to build content. Previously users could only build their content in a TinyMCE editor, with heavy use of tables to set the layout of the page. With Pagebuilder users no longer need to use tables to build the layour of their page, as this is now handled automatically using our responsive grid. 
[Read more]({{ site.baseurl }}/tutorials/page-builder.html)

## 1 October 2014 - Design Studio
1. Options available for the user to change (i.e colours, fonts and wallpaper) are only shown if the template has the related WDK Tags.
2. You can now add your own colours with the `<!--WDK:display:color:[colour key]-->` tag, and these will be shown in the colours list. For example, `<!--WDK:display:color:footerIcons-->` would be displayed as “Footer Icons” in the colour settings panel.
