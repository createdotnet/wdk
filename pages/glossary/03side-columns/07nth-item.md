---
layout: glossary
title: Side Columns - Nth Item
group: Side Columns
last-updated: 14-02-2013
---

##Tag

`<!--WDK:column:item:nth-->`

##Description

This tag returns the nth number of the current column item 1, 2, 3. This can be useful for giving unique ID's or classes to columns. This tag returns the same for both left and right side columns. If you wanted to separate them, add a column prefix to any ID or class.

##Example

In the following example we using the tag to give each side column item a number.

```
<!--WDK:column:start:left-->
<aside id="sidebar-left" class="sidebar">

  <!--WDK:column:item:start-->
  <div class="item-<!--WDK:column:item:id--> item-n-<!--WDK:column:item:nth-->">
    <h3><!--WDK:column:item:title--></h3>
    <p><!--WDK:column:item:content--></p>
  </div>
  <!--WDK:column:item:end-->

</aside>
<!--WDK:column:end:left-->
```