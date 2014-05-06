---
layout: tutorials
title: Dynamic Styling
group: Tutorials
last-updated:  24-03-2013
---

From the the "Design" screen, Create users can customise their website's look by editing colour shemes, fonts backgrounds and more.

You'll need to use our WDK Tags to make your template compatible with Create's dynamic styling.

WDK Tags are only processed on index.html so you'll need to declare the CSS in the `<head>` of your document.

##Example

In this example we declare the styles and elements in the `<head>` and have included the relevant elements in the `<body>` for you to see.

```html
<head>
  <style type="text/css">
    body {
      background-color:<!--WDK:display:bodybg-->; /* Set the body background colour */
      background-image: url('<!--WDK:display:bgimage-->'); /* Set the background image */
      color:<!--WDK:display:bodytxt-->; /* Set the font colour for all text */
      font-family:<!--WDK:display:font-->; /* Set the font family for all text */
    }

    a {
      color:<!--WDK:display:bodylink-->; /* Set the colour for all links */
    }

    #page {
      background-color:<!--WDK:display:pagebg-->; /* Set the background colour of a div */
    }

    #menu {
      background-color:<!--WDK:display:menubg-->; /* Set the menu background-colour */
    }

    #menu a {
      color:<!--WDK:display:menutxt-->; /* Set the colour of links located within #menu */
    }
  </style>
</head>

<body>
  <div id="page">

    <div id="header">
      <div id="logo"> </div>
      <div id="menu">
        <ul>
          <li><a href="link">Menu Item</a></li>
        </ul>
      </div>
    </div>

    <div id="content">
      <div id="page-title"> </div>
      <div id="page-content"> </div>
    </div>

  </div>
</body>
```

Although we are using these tags with selectors such as #menu and #page, they can be applied to anything you like. For example you could use the HTML5 `<nav>` tag with `<!--WDK:display:menubg-->`.

```html
<head>
  <style type="text/css">
    nav {
      background-color:<!--WDK:display:menubg-->; /* Set the menu background-colour */
    }
  </style>
</head>

<body>
  <nav>
    <ul>
      <li><a href="link">Menu Item</a></li>
    </ul>
  </nav
</body>
```