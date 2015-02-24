---
layout: side-nav
title: Menu - Text
last-updated: 13-02-2013
nav-position: 5
parent: menus
---

### Tag

`<!--WDK:menu:text-->`

### Description

This tag returns the text of the current menu item within the loop.

### Example

In the following example we are using the tag to display each menu items text within a link.

~~~
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
~~~