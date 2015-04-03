---
layout: index
title: Change Log
---

## Version 1.1
The following tags have been deprecated and should be phased out of templates.

- `<!--WDK:editor:bgcolor:#value-->`
- `<!--WDK:editor:linkcolor:#value-->`
- `<!--WDK:editor:txtcolor:#value-->`
- `<!--WDK:editor:font:value-->`
- `<!--WDK:if:headerX:isFlash-->`

The following tags have been deprecated and we advise you use the alternatives instead.

- `<!--WDK:isloggedin:start-->` - alternative: `<!--WDK:if:loggedIn-->`
- `<!--WDK:isloggedin:else-->` - alternative: `<!--WDK:if:loggedIn-->...<!--WDK:else-->...`
- `<!--WDK:isloggedin:end-->` -  - alternative: `<!--WDK:if:loggedIn-->...<!--WDK:endif-->`

## 4th March 2015 - Colours
Updates to how colour tags are used as the Design Studio handles these slightly differently to before.

## 5 January 2015 - Pagebuilder
Pagebuilder is a new drag and drop interface that allows users to build content. Previously users could only build their content in a TinyMCE editor, with heavy use of tables to set the layout of the page. With Pagebuilder users no longer need to use tables to build the layour of their page, as this is now handled automatically using our responsive grid. 
[Read more]({{ site.baseurl }}/tutorials/page-builder.html)

## 1 October 2014 - Design Studio
1. Options available for the user to change (i.e colours, fonts and wallpaper) are only shown if the template has the related WDK Tags.
2. You can now add your own colours with the `<!--WDK:display:color:[colour key]-->` tag, and these will be shown in the colours list. For example, `<!--WDK:display:color:footerIcons-->` would be displayed as "Footer Icons" in the colour settings panel.
