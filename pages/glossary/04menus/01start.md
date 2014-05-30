---
layout: glossary
title: Menu - Start
group: Menus
last-updated: 31-07-2013
---

##Tag

`<!--WDK:menu:start(start,end)-->`

##Description

Use this tag to start a loop through the site's menu items. 
You can optionally specify a range to include in the loop so that it beings at the nth(start) item and ends at the nth(end) item. 

The parameters are optional, you can just use: `<!--WDK:menu:start-->` to list all menu items.

`<!--WDK:menu:start(4)-->` will list all items after and including the 4th.

Pseudo Equivalent:
`foreach ( i = start; i < end; i++ ) {`

Please note that this tag must be ended with `<!--WDK:menu:end-->` to end the loop.

##Example

In this example we are looping through all of the menu items using a `<ul> <li>` structure.

```
<header>
  <nav>
    <ul>
      <!--WDK:menu:start-->
        <li id="menu-item-<!--WDK:menu:id-->">
          <a href="<!--WDK:menu:link-->">
            <!--WDK:menu:text-->
          </a>
        </li>
      <!--WDK:menu:end-->
    </ul>
  </nav>
</header>
```

In the following example we are displaying items 2-8 from the menu.

```
<header>
  <nav>
    <ul>
      <!--WDK:menu:start(2,8)-->
        <li id="menu-item-<!--WDK:menu:id-->">
          <a href="<!--WDK:menu:link-->">
            <!--WDK:menu:text-->
          </a>
        </li>
      <!--WDK:menu:end-->
    </ul>
  </nav>
</header>
```