---
layout: side-nav
title: Colours
nav-position: 1
last-updated: 04-03-2015
---

### The Basics

Allowing a templates colours to be changed by the user is a fundamental part of the Create system. By using a WDK tag, and not hard coding the colours, we can give users the opportunity to change the template colours to whatever they wish, using the Design Studio colour picker.

As always with WDK tags, they must be placed in the index.html template file and cannot be used in a CSS file. The best way to do this is to declare all colours at in the `<head>` of the file, within `<style></style>` tags.

A basic colour tag looks like this; `background-color: <!--WDK:display:color:brand_color-->;`
You are free to name the colour whatever you wish, spaces should be replaced with underscores.

Using a new colour tag in your index.html file will add it to the Design Studio colours panel. For example, the above will create a "Brand Color" colour in the design studio

A good place to start would be declaring these 6 basic colours, although you are of course free to do whatever you wish.

- body_background
- content_background
- content_text
- content_link
- menu_background
- menu_text

### Example
~~~
<head>
  <style type="text/css">
    body {
      background-color:<!--WDK:display:body_background-->; /* Set the body background colour */
      color:<!--WDK:display:content_text-->; /* Set the font colour for all text */
    }

    a {
      color:<!--WDK:display:content_link-->; /* Set the colour for all links */
    }

    #page {
      background-color:<!--WDK:display:content_background-->; /* Set the background colour of a div */
    }

    .navigation {
      background-color:<!--WDK:display:menubg-->; /* Set the menu background-colour */
    }

    .navigation a {
      color:<!--WDK:display:menu_text-->; /* Set the colour of links located within #menu */
    }
  </style>
</head>

<body>
  <div id="page">
  <div class="navigation">
    <ul>
      <li><a href="link">Menu Item</a></li>
    </ul>
  </div>
  </div>
</body>
~~~


### Defaults

You may wish to create default colours for when a user visits your template and hasn't yet customised the colours. If this is not included in your index.html file, each colour will default to white and may cause your template to appear broken.

Anything put between these tags will be output in the CSS so only use CSS colours. The Hash on a hex colour is optional. Any of the following will work;

`<!--WDK:color:default:brand_color-->red<!--WDK:end:color-->`
`<!--WDK:color:default:brand_color-->#F00<!--WDK:end:color-->`
`<!--WDK:color:default:brand_color-->FF0000<!--WDK:end:color-->`
`<!--WDK:color:default:brand_color-->rgba(255,0,0 0.5)<!--WDK:end:color-->`


### Further Reading

To customise the chosen colours with functions such as darken, lighten and invert, see the [Advanced Colour Functions](advanced-colour-functions.html) Tutorial
