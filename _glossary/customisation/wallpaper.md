---
layout: side-nav
title: Site Wallpaper
last-updated: 08-03-2013
nav-position: 6
parent: customisation
tag: <!--WDK:templateoption:templatebg-->  
---

Use this tag will return the CSS required to display the wallpaper, select by the user in the design studio.

## Example

~~~
<head>
  <style type="text/css">
    body {
      <!--WDK:display:bgimage-->
    }
  </style>
</head>
~~~

## Returns

~~~
<head>
  <style type="text/css">
    body {
    	background-image: url('https://create-cdn.net/siteimages/_templates/bg/full-beech.jpg');
    }
  </style>
</head>
~~~