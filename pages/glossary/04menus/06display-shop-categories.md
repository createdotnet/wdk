---
layout: glossary
title: Menu - Display Shop Categories
group: Menus
last-updated: 01-03-2013
---

##Tag

`<!--WDK:display:shopCategoryList:levels-->`

##Description

Returns a full html `<ul> <li>` structure of the shop category menus. This is great for doing drop-down shop menus.
Please note that "levels" is an optional permateter. 

##Example

This tag returns the shop category menu in the following format:

~~~
<ul class="wdk-shopCatList wdk-listLevel_1">
  <li class="wdk-shopCatList_li_123">
    <a class="wdk-shopCatList_a_123" href="/ourshop/cat_123-Top-Level.html">Top Level</a>
    <ul class="wdk-shopCatList wdk-listLevel_2">
      <li class="wdk-shopCatList_li_124">
        <a class="wdk-shopCatList_a_124" href="/ourshop/cat_124-Second-Category.html">Second Category</a>
      </li>
      <li class="wdk-shopCatList_li_125">
        <a class="wdk-shopCatList_a_125" href="/ourshop/cat_124-Third-Category.html">Third Category</a>
        <ul class="wdk-shopCatList wdk-listLevel_3">
          <li class="wdk-shopCatList_li_126">
            <a class="wdk-shopCatList_a_126" href="/ourshop/cat_126-Sub-Category.html">Sub Category</a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
~~~