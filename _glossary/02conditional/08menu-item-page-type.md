---
layout: side-nav
title: Menu Item Page Type
last-updated: 03-03-2013
parent: 02conditional
---


## Tag

`<!--WDK:if:menuItemPageType:value-->`

## Description

This conditional tag can only be used inside of a `<!--WDK:menu:start-->` and `<!--WDK:menu:end-->`. It  will return true if the current menu item's page type equals the value you specify.

For more information, [please see the tutorial on conditional tags here.]({{ site.baseurl }}/pages/tutorials/12conditional-tags.html)

## Example
In the following example we are using the tag to check if we're on a shop page then if true, list the shop categories.

~~~
<header>
	<nav>
		<!--WDK:menu:start-->
			<!--WDK:if:menuItemPageType:shop-->
				<!--WDK:display:shopCategoryList-->
			<!--WDK:endif-->
		<!--WDK:menu:end-->
	</nav>
</header>
~~~