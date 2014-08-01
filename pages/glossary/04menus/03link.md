---
layout: glossary
title: Menu - Link
group: Menus
last-updated: 13-02-2013
---

##Tag

`<!--WDK:menu:link-->`

##Description

This tag will return the URL of the current menu item within the loop.

##Example

In the following example we are using the tag to provide a link to each menu items url.

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