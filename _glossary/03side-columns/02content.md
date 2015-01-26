---
layout: side-nav
title: Side Column Item - Content
last-updated: 14-02-2013
parent: 03side-columns
---

## Tag

`<!--WDK:column:item:content-->`

## Description

This tag returns the content of the current side column item.

## Example

In the following example we are displaying each side column item's content within a `<p>` tag.

~~~
<!--WDK:column:start:left-->
<aside id="sidebar-left" class="sidebar">

  <!--WDK:column:item:start-->
  <div class="item-<!--WDK:column:item:id--> item-n-<!--WDK:column:item:nth--> ">
    <h3><!--WDK:column:item:title--></h3>
    <p><!--WDK:column:item:content--></p>
  </div>
  <!--WDK:column:item:end-->

</aside>
<!--WDK:column:end:left-->
~~~