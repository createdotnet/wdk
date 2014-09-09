---
layout: glossary
title: Side Column Item - Title
group: Side Columns
last-updated: 14-02-2013
---

## Tag

`<!--WDK:column:item:title-->`

## Description

This tag returns the title of the current side column item.

## Example

In the following example we are displaying each side column item's title within a `<h3>` tag.

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