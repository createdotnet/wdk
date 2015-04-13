---
layout: side-nav
title: User Is logged In End
last-updated: 03-04-2015
nav-position: 16
parent: conditional
tag: <!--WDK:isloggedin:end-->
deprecated: 1.1
---

This conditional tag will end the "if" that checks whether a website user is logged in.
Please note that this tag must only end `<!--WDK:isloggedin:start-->`.
For more information, [please see the tutorial on conditional tags here.]({{ site.baseurl }}/tutorials/conditional-tags.html)

## Example
In this example we're using the tag to end the logged in condition.

~~~
<!--WDK:isloggedin:start-->
	<p>Welcome back, <a href"#">view your account</a>.</p>
	<!--WDK:isloggedin:else-->
	<p>Please <a href="#">sign in</a>, to view your account.</p>
<!--WDK:isloggedin:end-->
~~~