---
layout: side-nav
title: Background Image
last-updated: 08-03-2013
nav-position: 6
parent: customisation
tag: <!--WDK:display:bgimage-->
deprecated: 1.1
useInstead: <!--WDK:templateoption:templatebg-->
useInsteadLink: glossary/customisation/wallpaper.html
---

Use this tag to return the URL of the background image specified on the "Wallpaper" section on your Create "Design" screen.

## Example

In this example we're using the tag to set the background image of the `<body>` tag using CSS set in the `<head>`.

~~~
<head>
  <style type="text/css">
    body {
      background-image: url('<!--WDK:display:bgimage-->');
    }
  </style>
</head>

<body>
</body>
~~~