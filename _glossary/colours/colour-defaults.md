---
layout: side-nav
title: Colour Defaults
last-updated: 04-03-2015
nav-position: 2
parent: colours
tag: <!--WDK:color:default:[you_colour]-->[The fallback]<!--WDK:end:color-->
---

If you are using custom colour tags in your template, specify a default colour so that if user has not yet chosen a colour, it will fallback.

Anything put between these tags will be output in the CSS so only use CSS colours. The Hash on a hex colour is optional

`<!--WDK:color:default:brand_color-->red<!--WDK:end:color-->`
`<!--WDK:color:default:brand_color-->#F00<!--WDK:end:color-->`
`<!--WDK:color:default:brand_color-->FF0000<!--WDK:end:color-->`
`<!--WDK:color:default:brand_color-->rgba(255,0,0 0.5)<!--WDK:end:color-->`