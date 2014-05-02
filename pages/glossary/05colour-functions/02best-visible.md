---
layout: glossary
title: Best Visable
group: Colour Functions
last-updated: 31-07-2013
---

{{ page.title }}

##Tag

`<!--WDK:column:item:id-->`

##Description

Returns `<Integer>`
This tag returns the actual ID of the current side column item. This is useful for giving unique ID's or classes to side column items.

##Example

In the following example we using the tag to give each side column item a unique class.

```
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
```