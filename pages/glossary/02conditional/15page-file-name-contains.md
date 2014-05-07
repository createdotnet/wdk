---
layout: glossary
title: Page File Name Contains
group: Conditional
last-updated: 31-05-2013
---


##Tag

``<!--WDK:if:pageFilenameContains:<strong>value</strong>-->``

##Description
This conditional tag checks to see if the page filename contains the specified value.
For more information, <a href="http://www.create.net/wdk?p=conditional---header-x-is-gif" target="_blank">please see the tutorial on conditional tags here.</a>

Pseudo Equivalent:
`/>if ( InString(pageFilename, value) ) {`

##Example
In the following example we're checking to see if we're on a page named contact, and including a div for a map

```
<!--WDK:if:pageFilenameContains:contact-->
<!--WDK:dynamic:widget:map-->
<!--WDK:endif-->
```