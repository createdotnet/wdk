---
layout: side-nav
title: Side Column - Width
last-updated: 31-07-2013
parent: 03side-columns
---

## Tag


## Description

This tag sets the internal width of current columns content.

## Example

In this example we're using the tag directly after the side column opening tag to set the width to 150px.

~~~
<!--WDK:column:start:left-->
	<!--WDK:column:width:150-->
	<aside id="sidebar-left" class="sidebar">
		<!--WDK:column:item:start-->
		<div class="item-<!--WDK:column:item:id--> item-n-<!--WDK:column:item:nth-->">
			<h3><!--WDK:column:item:title--></h3>
			<p><!--WDK:column:item:content--></p>
		</div>
		<!--WDK:column:item:end-->
	</aside>
<!--WDK:column:end:left-->
~~~

Please note, you can set the width to "none" if you do not want a fixed pixel width on your side column items.