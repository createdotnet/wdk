---
layout: layout
title: Using Menus
group: tutorials
last-updated: 31-05-2013
---

The Create WDK offers two possible methods to display your website's menu:

- Menu loops
- Drop down menu tags

The Menu loops require manually writing whereas the drop down menu tags return a complete `<ul> <li>` levelled structure.

##Menu Loops

To write a menu, we must use `<!--WDK:menu:start-->` with `<!--WDK:menu:end-->` to start and stop the loop. Between these tags we can write the code to be repeated for each menu item.

Using this method we are able to apply our own id's and classes.

###Restrictions
It is important to note that if you've included `<!--WDK:templateoption:dropdownMenu:[top]-->` the for drop down menus, your menu loop will not be processed.

Also, sub pages, as they are set up on the Create account, will be not be processed as part of the menu. If you wish to use subpages, the Drop Down Menu tags should be used. Alternatively, you could set up the sub page side column item in the Create account, which will show any current sub pages on the website's side menu.

###Example
In the following example, we are creating a menu loop with a `<ul> <li>` structure.

```html
<nav>
  <ul>
    <!--WDK:menu:start-->

      <li id="menu-item-<!--WDK:menu:id-->" class="menu-item">
        <a href="<!--WDK:menu:link-->">
          <!--WDK:menu:text-->
        </a>
      </li>

    <!--WDK:menu:end-->
  </ul>
</nav>
```

In our loop we are using `<!--WDK:menu:id-->` to obtain a unique id for each menu item. `<!--WDK:menu:link-->` is used to provide the URL for the menu item and `<!--WDK:menu:text-->` is used to to display the text for each menu item. 

If there were 5 items in the menu: Home, About, Shop, Services & Contact, the markup would be returned like this:

```html
<nav>
  <ul>
    <li id="menu-item-1" class="menu-item">
      <a href="home.html">
        Home
      </a>
    </li>
    <li id="menu-item-2" class="menu-item">
      <a href="about.html">
        About
      </a>
    </li>
    <li id="menu-item-3" class="menu-item">
      <a href="shop.html">
        Shop
      </a>
    </li>
    <li id="menu-item-4" class="menu-item">
      <a href="services.html">
        Services
      </a>
    </li>
    <li id="menu-item-5" class="menu-item">
      <a href="contact.html">
        Contact
      </a>
    </li>
  </ul>
</nav>
```

###Further Usage
There are a few extra conditional tags which can allow for further functionality and styling. Using `<!--WDK:if:firstMenuItem-->` we can determine if the current menu item in the loop is the first. We can also do the same for the last item in the menu with `<!--WDK:if:lastMenuItem-->`. 

Another useful conditional tag is `<!--WDK:if:currentMenuItem-->`. This tag can be used to check if the current menu item in the loop, is the current page being viewed.
In the example below we're using these checks to apply additional classes to the `<li>`.

```html
<nav>
  <ul>
    <!--WDK:menu:start-->

      <li
        id="menu-item-<!--WDK:menu:id-->"
        class="menu-item
          <!--WDK:if:firstMenuItem-->
            first
          <!--WDK:endif-->

          <!--WDK:if:lastMenuItem-->
            last
          <!--WDK:endif-->

          <!--WDK:if:currentMenuItem-->
            current
          <!--WDK:endif-->
      ">
        <a href="<!--WDK:menu:link-->">
          <!--WDK:menu:text-->
        </a>
      </li>

    <!--WDK:menu:end-->
  </ul>
</nav>
```

So, as before, for example there are 5 items in the menu and if the user is now viewing the shop page, the markup would be returned like this:

```html
<nav>
  <ul>
    <li id="menu-item-1" class="menu-item first">
      <a href="home.html">
        Home
      </a>
    </li>
    <li id="menu-item-2" class="menu-item">
      <a href="about.html">
        About
      </a>
    </li>
    <li id="menu-item-3" class="menu-item current">
      <a href="Shop.html">
        Shop
      </a>
    </li>
    <li id="menu-item-4" class="menu-item">
      <a href="Services.html">
        Services
      </a>
    </li>
    <li id="menu-item-5" class="menu-item last">
      <a href="contact.html">
        Contact
      </a>
    </li>
  </ul>
</nav>
```

###Example Usage of Additional Classes

We can use these additional classes to help style the menu.
In the following styling we are floating the menu items left so that they display inline. We have also created a left border to look like a separator between the menu text. 

The class "first" removes the left border on the first item, so that the borders/separators only appear between each item. 

The class "current" changes the background colour and text colour, indicating which menu item page the user is currently viewing.

``` css
<style type="text/css">
  li.menu-item {
    padding: 0 10px;
    border-left: 1px solid #000;
    float:left;
    background-color:#fff;
    color:#000;
  }

  li.first {
    border-left:none;
  }

  li.current {
    background-color:#757575;
    color:#fff;
  }
</style>
```

##Drop Down Menus

The other method of creating menus is using the drop down menu tags. 

You'll only need 3 tags and these include all of the markup required. 

Firstly you need to insert 2 tags into your `<head>`. You will need to include jQuery using `<!--WDK:javascript:jquery-->` (which you could do from an external source if you so wish) and `<!--WDK:templateoption:dropdownMenu:[top]-->`.

The final tag you will need to use is `<!--WDK:display:navigation-->` which should be placed where you require your menu to appear.

###Example

```html
<head>
  <!--WDK:javascript:jquery-->
  <!--WDK:templateoption:dropdownMenu:[top]-->
</head>

<nav>
  <!--WDK:display:navigation-->
</nav>
```

If there were 5 items in the menu: Home, About, Services, Shop & Contact, with Services as a sub page of About, the markup would be returned like this:

```html
<nav>
  <ul class="wdk_menu-ul wdk_tier_1">

    <li class="wdk_home-page wdk_menu-item wdk_menu-firstitem wdk_level_1">
      <a href="/">
        <span>Home</span>
      </a>
    </li>

    <li class="wdk_menu-item wdk_level_1">
      <a href="/about.html">
        <span>About</span>
      </a>
      <ul class="wdk_sub_menu wdk_tier_2" style="visibility: hidden;">
        <li class="wdk_menu-item wdk_level_2">
          <a href="/services.html">
            <span>Services</span>
          </a>
        </li>
      </ul>
    </li>

    <li class="wdk_menu-item wdk_level_1">
      <a href="/ourshop/">
        <span>Shop</span>
      </a>
    </li>

    <li class="wdk_menu-item wdk_menu-lastitem wdk_level_1">
      <a href="/contact.html">
        <span>Contact</span>
      </a>
    </li>

  </ul>
</nav>
```

###How Drop Down Menus Work
Drop down menus work by placing the second `<ul>` within it's parent `<li>`, using CSS to hide and reveal them on hover states. 

For a basic example:

```html
<ul>
  <li>
    Main Menu Item
    <ul>
      <li>
        Sub Menu Item
      </li>
    </ul>
  </li>
</ul>
```

We can style our first menu level as usual with:

`ul {<br />}<br /><br />ul li {<br />}`

As the second level menu is placed within the `<li>` it can be styled with the following:

`ul li ul {<br />}<br /><br />ul li ul li {<br />}`
To hide our submenu initially, lets use the CSS property display:none.

`ul li ul {<br />  display:none;<br />}<br /><br />ul li ul li {<br />}`
We can then make use of the CSS :hover selector to display the hidden `<ul>`.

`ul li ul {<br />  display:none;<br />}<br /><br />ul li ul li {<br />}<br /><br />ul li:hover > ul {<br />  display:block;<br />}`
When the user is hovering over the `<li>` containing the `<ul>`, it will be displayed.

Thats the basic principle into displaying drop down menus. You will also need to use some positioning properties to style your menus, but this will be unique to each design.

###Useful Classes

The first level of menu `<ul>` are given the following classes: wdk_menu-ul and wdk_tier_1, and should be styled with:

`ul.wdk_menu-ul {<br />}<br /><br />ul.wdk_tier_1 {<br />}`
All first level menu items `<li>` are given the following classes: "wdk_menu-item" and "wdk_level_1".

These should be styled with:

`ul li.wdk_menu-item {<br />}<br /><br />ul li.wdk_level_1 {<br />}`
First and last items in the menu are given "wdk_menu-firstitem" and "wdk_menu-lastitem" classes and should be styled with:

`ul li.wdk_menu-firstitem {<br />}<br /><br />ul li.wdk_menu-lastitem {<br />}`
The second level of menu `<ul>` are given the following classes: "wdk_sub_menu" and "wdk_tier_2" and should be styled with:

`ul li ul.wdk_sub_menu {<br />}<br /><br />ul li ul.wdk_tier_2 {<br />}`
All second level menu items `<li>` are given the following classes: "wdk_menu-item" and "wdk_level_2", and should be styled with:

`ul li ul li.wdk_menu-item {<br />}<br /><br />ul li ul li.wdk_level_2 {<br />}`

##Links & Further Reading

Tag: `<!--WDK:menu:start-->`
Tag: `<!--WDK:menu:id-->`
Tag: `<!--WDK:menu:link-->`
Tag: `<!--WDK:menu:text-->`
Tag: `<!--WDK:menu:end-->`
Tag: `<!--WDK:if:firstMenuItem-->`
Tag: `<!--WDK:if:lastMenuItem-->`
Tag: `<!--WDK:if:currentMenuItem-->`
Tag: `<!--WDK:else-->`
Tag: `<!--WDK:endif-->`
Tag: `<!--WDK:javascript:jquery-->`
Tag: `<!--WDK:templateoption:dropdownMenu:[top]-->`
Tag: `<!--WDK:display:navigation-->`
Tutorial: Conditional Tags