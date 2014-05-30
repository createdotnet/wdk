---
layout: glossary
title: Side Column - Start
group: Side Columns
last-updated: 31-05-2013
---

##Tag

`<!--WDK:column:start:value-->`

##Description

This tag marks the start of a specified side column. This is used to denote the location of the side column item on your site.

This must be used with `<!--WDK:column:end:value-->` tag.
The "value" should also be "right" or "left" accordingly.

##Example

In the example below we are using the tag twice to start a left side column.

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