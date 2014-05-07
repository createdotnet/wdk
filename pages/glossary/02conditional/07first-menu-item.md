---
layout: glossary
title: First Menu Item
group: Conditional
last-updated: 31-07-2013
---


##Tag

`<!--WDK:if:firstMenuItem-->`

##Description
This conditional tag checks to see if the current menu item (within the menu loop) is the first item.

For more information, [please see the tutorial on conditional tags here.](http://www.create.net/wdk?p=conditional---header-x-is-gif) 

Pseudo Equivalent:
`if ( menuitem.id == 1 ) {`

##Example
In the following example we have created 1px borders on the left of each menu item as a seperator. We are using the tag to apply another class to the first menu item which removes the left border.

```
<header>
	<nav>
		<ul>
			<!--WDK:menu:start-->
			<li class="menu-item <!--WDK:if:firstMenuItem--> first <!--WDK:endif-->">
				<a href="<!--WDK:menu:link-->"><!--WDK:menu:text--></a>
			</li>
			<!--WDK:menu:end-->
		</ul>
	</nav>
</header>
```