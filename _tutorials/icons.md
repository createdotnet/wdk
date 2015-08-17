---
layout: side-nav
title: Using Icons
last-updated: 17-08-2015
---

We use icon fonts to display icons.

To display icons on your WDK template you will need to place the following tags in the templates `<head>`;
- `<!--WDK:base:css:icons-->`
- `<!--WDK:base:css:fonts--> `

To place an icon on your template you should create a `<span>` with a class of `i` and `i-[icon-name]`. For example `<span class="i i-menu"></span>` will output a menu icon. There is no need to put anything between the span tags, infact its best if you dont.

Each of the icon sets contain the following icons;

- i-home
- i-account
- i-up
- i-down
- i-right--heavy
- i-down--heavy
- i-menu
- i-search
- i-basket
- i-checkout
- i-plus
- i-info
- i-rss
- i-youtube
- i-twitter
- i-facebook
- i-pinterest
- i-instagram
- i-linkedin
- i-google-plus
- i-left
- i-right

If you wish to add more icons you will need to find your own way of doing this.

Bare in mind that you can use WDK tags wherever you wish in the template. For example we create the footer social icons by outputting the following inside the `<!--WDK:plugin:socialprofile:start-->` / `<!--WDK:plugin:socialprofile:end-->` loop - `<span class="i i-<!--WDK:plugin:socialprofile:type-->"></span>`. More details can be found in the [footer tutorial]({{ site.baseurl }}/tutorials/the-footer.html)