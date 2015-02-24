---
layout: side-nav
title: Header - Start
last-updated: 31-07-2013
nav-position: 8
parent: basics
---

## Tag

`<!--WDK:header:start-->`

## Description

This is a required tag that starts the header section of your template.

For more information, please see the [header tutorial]({{ site.baseurl }}/tutorials/the-header.html).

## Example

~~~
<!--WDK:header:start-->
<html>
  <head></head>
  <body>
    <!--WDK:header:end-->

      Dynamic page content is automatically inserted here.

    <!--WDK:footer:start-->
    <!--WDK:display:sitefooter-->
  </body>
</html>
<!--WDK:footer:end-->
~~~