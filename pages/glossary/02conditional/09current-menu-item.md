---
layout: glossary
title: Current Menu Item
group: Conditional
last-updated: 03-03-2013
---


##Tag

`<!--WDK:if:currentMenuItem-->`

##Description

This conditional tag checks to see if the current menu item (within the menu loop) is the current page.
For more information, [please see the tutorial on conditional tags here.](/pages/tutorials/12conditional-tags.html)

Pseudo Equivalent:
`/>if ( menuitem.link == currentpage.link ) {`

##Example
In the following example our standard menu items use white text on a black background. We are using this tag to add a class to the current menu item we are viewing. This class then makes the background white and the text black, indicating to the viewer which page they are currently viewing.

~~~
<style type="text/css">
	li.menu-item {
		background-color:#000;
		color:#fff;
	}
	li.current {
		background-color:#fff;
		color:#000;
	}
</style>

<header>
	<nav>
		<ul>
			<!--WDK:menu:start-->
			<li class="menu-item <!--WDK:if:currentMenuItem--> current <!--WDK:endif-->">
				<a href="<!--WDK:menu:link-->"><!--WDK:menu:text--></a>
			</li>
			<!--WDK:menu:end-->
		</ul>
	</nav>
</header>
~~~