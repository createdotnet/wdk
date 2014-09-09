---
layout: tutorials
title: The Header
group: Tutorials
last-updated: 03-03-2013
---


Your Header will start your WDK template. It should contain your doctype declaration, `<head>` information, your logo, menu and page title. 

It can also optionally contain styling for Create's dynamic colours, side columns, widgets and more.

## Example

Below is a simplified version of a header.

~~~
<!DOCTYPE html>
<!--WDK:header:start-->
<html>

  <head>
    <!--WDK:display:headinfo-->

    <meta charset="UTF-8">

    <!-- Base Styling -->
    <!--WDK:base:assets-->
    
    <!-- Custom Styling -->
    <link rel="stylesheet" type="text/css" media="screen" href="<!--WDK:path:template-->style.css" />

    <!-- Create dynamic colours -->
    <style type="text/css" media="screen"> </style>
  </head>

  <body>
    <div id="site">

      <header>
        <div id="logo"> </div>
        <nav> </nav>
      </header>

      <div class="main">

        <!--WDK:column:start:left-->
          <aside class="sidebar left"> </aside>
        <!--WDK:column:end:left-->

        <div class="content columncount-<!--WDK:column:count-->">
          <h1><!--WDK:display:pagetitle--></h1>

          <!--WDK:header:end-->
~~~

In this example, we've declared our doctype and opened our `<!--WDK:header:start-->`. In our `<head>` section, we've used `<!--WDK:display:headinfo-->` to display our site meta title and description. We have also linked an external stylesheet and allocated a space for using Create's dynamic styling.

For more information on please see the dynamic styling tutorial.

Within the `<body>`, we have a `<header>` with space for the site's logo, banner or title, and the site's menu.

Next we have created the outline for our left side column and then our main content `<div>`. 

Within our main content `<div>` we are using `<!--WDK:display:pagetitle-->` to display the current page title before finally the closing tag `<!--WDK:header:end-->`.

As the dynamic page content is automatically inserted between the `<!--WDK:header:end-->` tag and `<!--WDK:footer:start-->` tag, we have left the main content `<div>` open as this will be closed later in the `<footer>`.

## Links & Further Reading

- Tag: `<!--WDK:header:start-->`
- Tag: `<!--WDK:display:headinfo-->`
- Tag: `<!--WDK:path:template-->`
- Tag: `<!--WDK:column:start:left-->`
- Tag: `<!--WDK:column:end:left-->`
- Tag: `<!--WDK:column:count-->`
- Tag: `<!--WDK:display:pagetitle-->`
- Tag: `<!--WDK:header:end-->`
- Tutorial: [The Basics](07the-basics.html)
- Tutorial: [Create's Dynamic Styling](05dynamic-styling.html)
- Tutorial: [Logos, Banners & Header Images](/pages/glossary/08header-images/01header-image.html)
- Tutorial: [Creating Side Columns](/pages/glossary/03side-columns/01id.html)
- Tutorial: [The Footer](09the-footer.html)