---
layout: side-nav
title: Menu - Start
last-updated: 31-07-2013
nav-position: 1
parent: menus
tag: <!--WDK:menu:start(start,end)-->
---

Use this tag to start a loop through the site's menu items. 
You can optionally specify a range to include in the loop so that it beings at the nth(start) item and ends at the nth(end) item. 

The parameters are optional, you can just use: `<!--WDK:menu:start-->` to list all menu items.

`<!--WDK:menu:start(4)-->` will list all items after and including the 4th.

Please note that this tag must be ended with `<!--WDK:menu:end-->` to end the loop.
