---
layout: side-nav
title: The Basics
last-updated: 08-03-2013
---


A Create WDK template should be split into three sections: header, content and footer. The absolute minimum required from a template would be the following:

## Example

~~~
<!doctype html>
<!--WDK:header:start-->
<html>
  <head> </head>
  <body>
    <!--WDK:header:end-->      Dynamic page content is automatically inserted here.    <!--WDK:footer:start-->
    <!--WDK:display:sitefooter-->
  </body>
</html>
<!--WDK:footer:end-->
~~~

The header section is opened with `<!--WDK:header:start-->` before the `<html>` tag, and closed with `<!--WDK:header:end-->`. The header section should contain all of your `<head>` information, opening `<body>` tag, site logos, menus and page title. The closing tag is used to initiate your pages dynamic content.

The footer is opened with `<!--WDK:footer:start-->`, signifying the end of your dynamic content. To close the footer use `<!--WDK:footer:end-->` after the `</html>` tag. Between the footer tags `<!--WDK:display:sitefooter-->` must be included. If it is not included, it will automatically be inserted after the `<!--WDK:footer:start-->` tag.

## Links & Further Reading

- Tag: `<!--WDK:header:start-->`
- Tag: `<!--WDK:header:end-->`
- Tag: `<!--WDK:footer:start-->`
- Tag: `<!--WDK:footer:end-->`
- Tag: `<!--WDK:display:sitefooter-->`
- Tutorial: [The Header](08the-header.html)
- Tutorial: [The Footer](09the-footer.html)