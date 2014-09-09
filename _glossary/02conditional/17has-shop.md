---
layout: side-nav
title: Has Shop
group: Conditional
last-updated: 01-03-2013
---


## Tag

`<!--WDK:if:hasShop-->`

## Description
This conditional tag does a check that returns true if a shop exists and the account level allows it.
For more information, [please see the tutorial on conditional tags here.](/pages/tutorials/12conditional-tags.html)

Pseudo Equivalent:
`if ( shop_exists() && allowed_shop() ) {`

## Example
In the following example we are using the tag to determine if the site has a shop, then displaying a shop search widget that was previously created on the Site Content > "Widgets" screen.

~~~
<header>
	<div id="logo"> </div>
	<!--WDK:if:hasShop-->
		<div class="widget"><!--WDK:dynamic:widget:134534--></div>
	<!--WDK:endif-->
</header>
~~~