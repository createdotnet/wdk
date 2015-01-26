---
layout: side-nav
title: Side Column - End
last-updated: 14-02-2013
parent: 03side-columns
---

## Tag

`<!--WDK:column:end:value-->`

## Description

This tag will end the column loop. This tag must be included if `<!--WDK:column:start:value-->` is used.

## Example

In the example below we are closing the left side column.

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