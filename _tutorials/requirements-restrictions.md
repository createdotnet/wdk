---
layout: side-nav
title: Requirements & Restrictions
nav-position: 1
last-updated: 30-04-2015
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

To style the core Create.net frontend components, patterns and widgets we provide a vanilla (un-themed) version of our CSS boilerplate. This tag should be placed in the head of your document in order to import the default CSS styling. Your custom CSS stylesheet(s) should be placed below this tag.

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

#### Modernizr

Tag: `<!--WDK:base:js:modernizr-->`

Modernizr is a feature detection javascript library that enables you to provide fallbacks for modern browser features. It’s important to note that Modernizr doesn’t fix, or polyfill, unsupported features. [Read the Modernizr documentation](http://modernizr.com/docs/)

**What’s included in our custom build**

* Feature Detects
	* @font-face
	* Border Radius
	* CSS Gradients
	* CSS rgba
	* details Element
	* Inline SVG
	* SVG
* Extra
	* Add CSS classes
* APIs
	* Modernizr.testStyles()
	* Modernizr.testProp()
	* Modernizr.testAllProps()
	* Modernizr._prefixes
	* Modernizr._domPrefixes

[View our custom build on the Modernizr site](http://v3.modernizr.com/download/#-borderradius-cssgradients-details-fontface-inlinesvg-rgba-svg-domprefixes-prefixes-testallprops-testprop-teststyles-dontmin)

#### html5shiv

* `<!--WDK:base:js:html5shiv-->`

This script is the defacto way to enable use of HTML5 sectioning elements in legacy Internet Explorer. For more info [view the forked repository on GitHub](https://github.com/createdotnet/html5shiv).

#### Shop

We are providing a selection of base styles for the shop in the `<!--WDK:base:css:shop-->` tag. Although it is not essential that you include these base styles, they are every minimal and are required for some of the shop functionality. It is recommended that you add your own shop CSS to compliment these styles.

**Included Styles**
* Tiled Category Layout widths (non-responsive)


#### Grid

* `<!--WDK:base:css:grid:fluid-->`
* `<!--WDK:base:css:grid:responsive-->`

At least one grid tag must be used with your WDK template, unless you want to roll your own CSS grid framework.

We utilize css-wizardry’s grid framework [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) for the Create.net frontend. See [csswizardry-grids in action](http://csswizardry.com/csswizardry-grids/)

Build settings: the `$gutter` value is set to `24px` by default.

HTML classes:

* `.grid` - grid wrapper
* `.grid__item` - grid item, must be direct decedents of the `.grid` item

**N.B.** The framework requires all whitespace to be removed form between `grid__item` elements, the recommended way of doing this is by using HTML comments.

HTML example:

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
Sizing the grid items is a simple as adding the fractional classes e.g. `one-third`.

HTML example:

```
<div class="grid">
	<div class="grid__item one-third">
		[…]
	</div><!--
	--><div class="grid__item two-thirds">
		[…]
	</div>
</div>
```
We recommend reading the [csswizardry-grids docs](https://github.com/csswizardry/csswizardry-grids) for more information.

**Fluid build**

Place this tag in the `<head>` before your custom CSS.

Tag: `<!--WDK:base:css:grid:fluid-->`

**Responsive build**

Tag: `<!--WDK:base:css:grid:responsive-->`

The responsive build has extra classes based on the major breakpoints set in the build. Similar to the above sizing classes, the responsive classes are prefixed to enable you to resize the grid based on the major breakpoints e.g. `lap-one-half` would size the grid item to `width: 50%;` and `desk-one-quarter` would resize to `width: 25%;`.

The major breakpoints values are as follows.

Sass example:

```
$breakpoints: (
    'palm' '(max-width: 480px)',
    'lap' '(min-width: 481px)',
    'lap-mid' '(min-width: 719px)',
    'desk' '(min-width: 1024px)'
);
```

> **_Please note:_** We have extended the grid responsive grid classes to include one hyphen rather than two e.g. `lap-one-half` instead of the default `lap--one-half`.

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
