---
layout: side-nav
title: Font Family
last-updated: 08-03-2013
nav-position: 8
parent: customisation
tag: <!--WDK:display:font-->
---

Use this tag to return the font specified on the "Font" section on your Create "Design" screen.

## Example

In this example we're using the tag to set the font family of the `<body>` tag using CSS set in the `<head>`.

~~~
<head>
  <style type="text/css">
    body {
      font-family: <!--WDK:display:font-->;
    }
  </style>
</head>

<body>
</body>
~~~