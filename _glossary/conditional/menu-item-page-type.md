---
layout: side-nav
title: Menu Item Page Type
last-updated: 03-03-2013
nav-position: 8
parent: conditional
tag: <!--WDK:if:menuItemPageType:value-->
---

This conditional tag can only be used inside of a `<!--WDK:menu:start-->` and `<!--WDK:menu:end-->`. It  will return true if the current menu item's page type equals the value you specify.

For more information, [please see the tutorial on conditional tags here.]({{ site.baseurl }}/tutorials/conditional-tags.html)

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