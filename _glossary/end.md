---
layout: side-nav
title: Menu - End
last-updated: 13-02-2013
nav-position: 2
parent: menus
tag: <!--WDK:menu:end-->
---

This tag is used to end a menu loop. You must use this if you have used the `<!--WDK:menu:start-->` tag.

Pseudo Equivalent:
`}`

## Example

In the following example we are closing the loop tag.

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