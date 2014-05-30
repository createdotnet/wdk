---
layout: glossary
title: Side Column Item - Start
group: Side Columns
last-updated: 14-02-2013
---

##Tag

`<!--WDK:column:item:start-->`

##Description

This tag starts the side column item loop. This must be used with <!--WDK:column:item:end-->. Between these tags you can create the structure for a side column item, this will then be applied to all side column items.

##Example

In the example below the tag starts off the loop for repeating items.

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