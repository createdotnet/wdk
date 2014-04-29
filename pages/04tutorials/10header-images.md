---
layout: layout
title: Header Images
group: tutorials
last-updated: 03-03-2013
---


##Images Explained

Create users can choose from several ways to display their logo. They may use text, or three different sized images. The image options are as follows:

- Logo - 350 x 70 px (header4)
- Small Banner - 780 x 120 px (header3)
- Large Banner - 1000 x 200 px (header3)

##Header Tags

Some header image tags allow you to specify a header image. When referring to the images above, the logo is known as 'header4' and both banners as 'header3'.

You may use the WDK tag `<!--WDK:display:header-->` to return a HTML `<h4>` tag for text and an `<img>` tag for whichever logo or banner has been selected.

If you wish to only display a specific image, you may use `<!--WDK:display:headerX-->` where X is the number of the header image you require.

##Basic Examples

If you only wanted to display a small logo, in your markup you could simply put:

```html
<div id="logo">
  <!--WDK:display:header4-->
</div>
```

You are also able to write the entire logo image code yourself. Using the following tags:

`<!--WDK:display:headerXsrc-->`
`<!--WDK:display:headerXwidth-->`
`<!--WDK:display:headerXheight-->`

Using these tags, you could create the logo to be a link to the home page:

```
<div id="logo">
  <a href="/">
    <img
      src="<!--WDK:display:header4src-->"
      width="<!--WDK:display:header4width-->"
      height="<!--WDK:display:header4height-->"
      alt="Logo Image"
    >
  </a>
</div>
```

##Conditional Tags

The Create WDK has some conditional tags which can allow you to apply different styles to different types of header images.

Using `<!--WDK:if:headerX-->` you may check to see if a specific header image is being used. In the following example, we set the width of the containing `<div>` to be the same width as the image using this tag:

```html
<div
  <!--WDK:if:header3-->
    style="min-width:750px; max-width:1000px; width:auto;"
  <!--WDK:elseif:header4-->
    style="width:350px";
  <!--WDK:else-->
    style="width:100%"
  <!--WDK:endif-->
>
  <!--WDK:display:header-->
</div>
```

As you may have noticed above, we have used and "If" and "ElseIf" tag. For more information please read the tutorial on Conditional Tags.

###Flash
Create users can have flash files for header images. 

We have conditional tags which can be used to determine this, which helps you to avoid putting a flash file url in an image source tag.

In the example below we have a conditional check to see if header 3 is a flash file.  If true, we're placing it in a HTML `<object>` tag. If false, the else condition is used and an image is diplayed instead.

```html
<div id="logo">
  <!--WDK:if:header3:isFlash-->    <object
      data="<!--WDK:display:header3src-->"
      type="application/x-shockwave-flash"
      width="<!--WDK:display:header3width-->"
      height="<!--WDK:display:header3height-->"
    >
      <param name="movie" value="<!--WDK:display:header3src-->">
    </object>
  <!--WDK:else-->    <img
      src="<!--WDK:display:header3src-->"
      width="<!--WDK:display:header3width-->"
      height="<!--WDK:display:header3height-->"
      alt="Logo Image"
    >  <!--WDK:endif-->
</div>
```

###File Type Checks
As you can check to see if a specific header image is a flash file, you may also check for file type, using the following tags, replacing "X" with your desired header number.

`<!--WDK:if:headerX:isPng-->`

`<!--WDK:if:headerX:isJpg-->`

`<!--WDK:if:headerX:isGif-->`

Links & Further Reading

Tag: `<!--WDK:display:header-->`

Tag: `<!--WDK:display:headerX-->`

Tag: `<!--WDK:display:headerXsrc-->`

Tag: `<!--WDK:display:headerXwidth-->`

Tag: `<!--WDK:display:headerXheight-->`

Tag: `<!--WDK:else-->`

Tag: `<!--WDK:endif-->`

Tag: `<!--WDK:if:headerX-->`

Tag: `<!--WDK:if:header3:isFlash-->`

Tag: `<!--WDK:if:headerX:isPng-->`

Tag: `<!--WDK:if:headerX:isJpg-->`

Tag: `<!--WDK:if:headerX:isGif-->`

Tutorial: Conditional Tags