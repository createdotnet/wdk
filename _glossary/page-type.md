---
layout: side-nav
title: Page Type
last-updated: 08-02-2013
nav-position: 5
parent: page-specific-tags
tag: <!--WDK:display:pagetype-->
---

Use this tag to return the current page type. This will return one of the following values: 
`standard` (for the "Normal page"), `pagebuilder`, `shop`, `contact` (for the contact us page), `guestbook`, `events`, `links` and `password` (for the user login pages).

## Example

~~~
<body class="page-type--<!--WDK:display:pagetype-->">
~~~

Which would output

~~~
<body class="page-type--shop">
~~~
