---
layout: tutorials
title: Side Columns & Content Width
group: Tutorials
last-updated: 03-03-2013
---


Create supports 2 side columns. To use these in your WDK template, you'll need to write a loop.

Side columns must be opened and closed with `<!--WDK:column:start-->` and `<!--WDK:column:end-->` respectively. Looping through items with `<!--WDK:column:item:start-->` and `<!--WDK:column:item:end-->`.

##Example

The example below is suitable markup for the left side column.

```html
<!--WDK:column:start:left-->
  <!--WDK:column:width:150-->
  <aside class="sidebar left">

    <!--WDK:column:item:start-->
      <div id="column-item-<!--WDK:column:item:id-->" class="column-item column-item-n-<!--WDK:column:item:nth-->">
        <h5><!--WDK:column:item:title--></h5>
        <!--WDK:column:item:content-->
      </div>
    <!--WDK:column:item:end-->

  </aside>
<!--WDK:column:end:left-->
```

After opening our side column we're using `<!--WDK:column:width-->` to set the width of the side column to 150px. Between the starting and ending tags we have our `<aside>` container. Within our `<aside>` tag we indicate the start and end of our loop. The code between these tags is our loop used to process every time in the column.

If we had 2 items in our side columns, a product search and shopping basket the markup returned would be (the widget contents have been shortened):

```html
<aside class="sidebar left">

  <div id="column-item-id-1" class="column-item column-item-n-1">
    <h5>Product Search</h5>
    <div class="wdk_sidecolumn-type-shopsearch"> </div>
  </div>

  <div id="column-item-id-2" class="column-item column-item-n-2">
    <h5>Shopping Basket</h5>
    <div class="wdk_sidecolumn-type-basket"> </div>
  </div>

</aside>
```

We're using the tag `<!--WDK:column:item:id-->` to create a unique id for each menu item. `<!--WDK:column:item:nth-->` is used to give each side column item the nth number of item, please take note that this applies the same number to both left and right side columns items. E.g. providing we used the same markup for both side columns, the first item on the left and right side column would be given the class column-item-n-1.

##Content Width

The Create WDK has a tag to return the number of side columns being used. This is useful in making sure your content is the appropriate width. A simplified version of our markup would be:

```html
<div id="main">
  <aside class="sidebar left"> </aside>

  <div id="content" class="column-count-<!--WDK:column:count-->"> </div>

  <aside class="sidebar right"> </aside>
</div>
```

If the user had no side columns, the markup returned would be:
`<div id="content" class="column-count-0"> </div>`

If the user had one side column, the markup returned would be:
`<div id="content" class="column-count-1"> </div>`

If the user had two side columns, the markup returned would be:
`<div id="content" class="column-count-2"> </div>`

If our template is 1000px wide and the sidebars are 150px each, heres how we could set the width by using the .column-count- classes.

```
div#content {
}

div.column-count-0 {
  width:1000px;
}

div.column-count-1 {
  width:850px;
}

div.column-count-2 {
  width:700px;
}
```

All other styling for this should be applied to our #content. The `<aside>` and content `<div>` could be displayed inline or floated so they sit next to each other.

```
aside.sidebar,
div#content {
  float:left;
}

aside.sidebar, 
div#content {
  display:inline;
}
```

##Links & Further Reading

- Tag: `<!--WDK:column:start-->`
- Tag: `<!--WDK:column:end-->`
- Tag: `<!--WDK:column:width-->`
- Tag: `<!--WDK:column:item:start-->`
- Tag: `<!--WDK:column:item:end-->`
- Tag: `<!--WDK:column:item:id-->`
- Tag: `<!--WDK:column:item:nth-->`
- Tag: `<!--WDK:column:item:title-->`
- Tag: `<!--WDK:column:item:cont- ent-->`
- Tag: `<!--WDK:column:count-->`