---
layout: glossary
title: Else
group: Conditional
last-updated: 30-07-2013
---


##Tag

`<!--WDK:if:lastMenuItem-->`

##Description

This conditional tag checks to see if the current menu item (within the menu loop) is the current page.

For more information,

Pseudo Equivalent:
`if ( menuitem.id == menuitems.count ) {`

##Example
In the following example we have created 1px borders on the right of each menu item as a seperator. We are using the tag to apply another class (named 'last') to the last menu item which removes the right border.

```
<header>
	<nav>
		<ul>
			<!--WDK:menu:start-->
			<li class="menu-item <!--WDK:if:lastMenuItem-->last<!--WDK:endif--> "/>
				<a href="<!--WDK:menu:link-->"><!--WDK:menu:text--></a>
			</li>
			<!--WDK:menu:end-->
		</ul>
	</nav>
</header>
```