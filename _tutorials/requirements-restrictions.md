---
layout: side-nav
title: Requirements & Restrictions
nav-position: 1
last-updated: 03-03-2013
---

## Files

Building a website using the WDK requires only 1 file - **index.html**. 

This file is used for all page layouts and is the only file you can process any `<!--WDK-->` tags on.

Although you can use external stylesheets for styling, any CSS selectors that use `<!--WDK-->` tags must be declared within the `<head>` section of index.html.

## Permitted File Types

You are permitted to use other files outside of index.html. These can be Stylesheets, Javascript or jQuery libraries, flash (swf) files and xml sheets.

Permitted extensions are:

- .png 
- .jpg 
- .gif 
- .css 
- .js 
- .swf 
- .xml

To use external files or images you will need to use the following path tags:

- Tag: `<!--WDK:path:template-->`
- Tag: `<!--WDK:path:images-->`
- Tag: `<!--WDK:path:file-->`



## Required Tags

There are a few tags that are required in order for your template to be processed correctly. 
These are listed below.


### Core Styling

To style the core components, patterns and widgets in the Create.net system we provide a vanilla (un-themed) version of our CSS boilerplate. This tag should be placed in the head of your document in order to import the default CSS styling. Your custom CSS stylesheet(s) should be placed below this tag.

Tag: `<!--WDK:base:assets-->`

This file includes a build of the [inuit.css CSS framework](https://github.com/csswizardry/inuit.css/) and includes the following optional components:

* Nav
* Island
* Matrix
* Block list
* Breadcrumb
* Link complex
* Pagination

> *__N.B.__ We are working toward abstracting these components into separate tags, see __Component Modules__ below*

### Component Modules

#### Grid

We utilize css-wizardry’s grid framework [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) for the Create.net frontend. See [csswizardry-grids in action](http://csswizardry.com/csswizardry-grids/)

Build settings: the `$gutter` value is set to `24px` by default.

**N.B.** The framework requires all whitespace to be removed form between `grid__item` elements, the recommended way of doing this is by using HTML comments.

Example:

```
<div class="grid">
	<div class="grid__item">
		[…]
	</div><!--
	--><div class="grid__item">
		[…]
	</div>
</div>
```

**Fluid build**

Place this tag in the `<head>` before your custom CSS.

Tag: `<!--WDK:base:css:grid:fluid-->`

**Responsive build**

> **N.B.** We will be releasing a default responsive build of csswizardry-grids shortly.

**Custom build**

Alternatively you can upload your own version of [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) that will utilize the responsive classes across the system.

### Header & Footer
Your index.html file must contain all of the header and footer tags. These tags help us to identify your templates layout and instruct us where to put the main page content. 

These tags are:

- Tag: `<!--WDK:header:start-->`
- Tag: `<!--WDK:header:end-->`
- Tag: `<!--WDK:footer:start-->`
- Tag: `<!--WDK:footer:end-->`

For more information please see the basics tutorial.


### Display Site Footer
This tag may be placed anywhere within the header or footer tags, if you leave it out, it will automatically be placed at the opening of your footer tag.

Tag: `<!--WDK:display:sitefooter-->`
For more information please see the footer tutorial.



### Menu Loops
We offer 2 methods for creating menus: our drop down menu tag returns a full `<ul> <li>` structure, however we also offer a manual method for creating your own menu loops. 

If you opt to build your own, you must include the `<!--WDK:menu:start-->` and `<!--WDK:menu:end-->` tags.

- Tag: `<!--WDK:menu:start-->`
- Tag: `<!--WDK:menu:end-->`

Please see the glossary for examples on individual tags and for more information please read the tutorial on creating menu loops.



### Side Column Loops
Similar to menu loops, when writing a side column, you must include the `<!--WDK:column:start-->` and `<!--WDK:column:end-->` tags.

- Tag: `<!--WDK:column:start-->`
- Tag: `<!--WDK:column:end-->`

For more information please see the Creating Side Columns tutorial.



### Conditional Tags
The WDK supports conditional statements. Any `<!--WDK:if-->` tag must be ended with `<!--WDK:endif-->`.

- Tag: `<!--WDK:if-->`
- Tag: `<!--WDK:else-->`
- Tag: `<!--WDK:endif-->`

For more information, please read the [Using Conditional Tags]({{ site.baseurl }}/tutorials/conditional-tags.html) tutorial.
