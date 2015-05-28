---
layout: side-nav
title: Side Column Count
last-updated: 30-03-2015
nav-position: 1
parent: side-columns
tag: <!--WDK:column:count-->
---

This tag returns the amount of side columns the user has enabled. Either 0, 1 or 2.


### Example

In the following example we are outputting the count on the body as a class. The Create templates use this method for styling the page content based on how many side columns are in use.

~~~
<body class="wdk_columnCount_<!--WDK:column:count-->">
	...
</body>
~~~

~~~
.wdk_columnCount_0 .page-wrapper {
	width: 100%
}
.wdk_columnCount_1 .page-wrapper {
	width: 80%
}
.wdk_columnCount_2 .page-wrapper {
	width: 60%
}
~~~