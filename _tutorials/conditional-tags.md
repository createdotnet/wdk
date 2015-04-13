---
layout: side-nav
title: Conditional Tags
nav-position: 10
last-updated: 03-04-2015
---


Creates WDK offers conditional tags equivalent to php if statements.

~~~
<!--WDK:if-->
<!--WDK:else-->
<!--WDK:endif-->
~~~

## Usage

Here is a list of the ways you may use our tags and their pseudo equivalents.

~~~
<!--WDK:if:statement-->
~~~

~~~
<!--WDK:ifnot-->
~~~

 
~~~
<!--WDK:else-->
~~~

~~~
<!--WDK:elseif:statement-->
~~~

~~~
<!--WDK:elseifnot:statement-->
~~~

~~~
<!--WDK:endif-->
~~~

## Complete Conditional Tag List

- Tag: `<!--WDK:if:pageFilenameIs:value-->`
- Tag: `<!--WDK:if:pageFilenameStartsWith:value-->`
- Tag: `<!--WDK:if:pageFilenameEndsWith:value-->`
- Tag: `<!--WDK:if:pageFilenameContains:value-->`
- Tag: `<!--WDK:if:firstMenuItem-->`
- Tag: `<!--WDK:if:currentMenuItem-->`
- Tag: `<!--WDK:if:lastMenuItem-->`
- Tag: `<!--WDK:if:menuItemPageType:value-->`
- Tag: `<!--WDK:if:headerX-->`
- Tag: `<!--WDK:if:headerX:isPng-->`
- Tag: `<!--WDK:if:headerX:isJpg-->`
- Tag: `<!--WDK:if:headerX:isGif-->`
- Tag: `<!--WDK:if:hasShop-->`
- Tag: `<!--WDK:else-->`
- Tag: `<!--WDK:endif-->`