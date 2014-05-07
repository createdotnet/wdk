---
layout: glossary
title: User Is logged In Else
group: Conditional
last-updated: 01-03-2013
---


##Tag

`<!--WDK:isloggedin:else-->`


##Description

This conditional tag is the equivelent of the <a href="#">else tags</a> if used (optionally) between `<!--WDK:isloggedin:start-->` and `<!--WDK:isloggedin:end-->`.
Please note that his tag must only be used be inbetween `<!--WDK:isloggedin:start-->` and `<!--WDK:isloggedin:end-->`
For more information, <a href="http://www.create.net/wdk?p=conditional---header-x-is-gif" target="_blank">please see the tutorial on conditional tags here.</a>

Pseudo Equivalent:
`} else {`

##Example
In this example we're using the tag to promt a user to log in to view their account if they are not already logged in.

```
<!--WDK:isloggedin:start-->
		<p>Welcome back, <a href"#">view your account</a>.
	<!--WDK:isloggedin:else-->
		<p>Please <a href="#">sign in</a>, to view your account.</p>
<!--WDK:isloggedin:end-->