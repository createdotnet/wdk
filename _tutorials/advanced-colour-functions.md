---
layout: side-nav
title: Advanced Colour Functions
nav-position: 6
last-updated: 04-03-2015
---

The WDK provides a series of tags that allow you to customise the users colours. This may be helpful for creating hover colours for example.

For each of these tag you may use a hex colour, or a colour variable as created in the [colours tutorial](colours.html).

#### Tint
This tag returns a hex reference that is a mix of colour1 and colour 2 at amount % (0 - 100).

`<!--WDK:color:tint:colour1:colour2:amount-->`
This tag could be used for heading titles, mixing the text and background colour.

~~~
<style type="text/css">
  body {
    background-color:<!--WDK:display:bodybg-->;
    color:<!--WDK:display:bodytxt-->;
  }
  h1, h2, h3, h4, h5, h6 {
    color:<!--WDK:color:tint:[bodybg]:[bodytxt]:50-->;
  }
</style>
~~~

#### Highlight

This tag returns a hex reference that is a highlighted version of a colour by a specified amount. If the supplied colour can't be highlighted by the specified amount, it will be darkened instead. Amount should be integer between 0 - 255.

`<!--WDK:color:highlight:colour:amount-->`
This tag could be useful for creating highlighted hover states for links.

~~~
<style type="text/css">
  a {
    color:<!--WDK:display:bodylink-->;
  }
  a:hover {
    color:<!--WDK:color:highlight:[bodylink]:50-->;
  }
</style>
~~~

#### Lowlight

The opposite of Highlight. Useful for when darken does not give the desired effect. 
`<!--WDK:color:lowlight:colour:amount-->`

#### Invert

This tag returns a hex reference that is an inverted version of the supplied colour.

`<!--WDK:color:invert:colour-->`
This tag is useful for generating colours that stand out. Here we're using it for setting the colours of heading tags from the background.

~~~
<style type="text/css">
  body {
    background-color: <!--WDK:display:bodybg-->;
  }
  h1, h2, h3, h4, h5, h6 {
    color: <!--WDK:color:invert:[bodybg]-->;
  }
</style>
~~~

#### Brighten

This tag returns a hex reference that is a brighten version of supplied colour. Amount should be integer between 0 - 255.

`<!--WDK:color:brighten:colour:amount-->`
This tag could be used to create an outer glow around links.

~~~
<style type="text/css">
  a {
    color: <!--WDK:display:bodylink-->;
    text-shadow: 0px 0px 5px <!--WDK:color:brighten:[bodylink]:50-->;
  }
</style>
~~~

Please note 'text-shadow' is a CSS3 property and is currently not supported in Internet Explorer.


#### Darken

This tag returns a hex reference that is a darkened version of supplied colour. Amount should be integer between 0 - 255.

`<!--WDK:color:darken:colour:amount-->`
This tag could be used to create a drop shadow on headings.

~~~
<style type="text/css">
  h1, h2, h3, h4, h5, h6 {
    color: <!--WDK:display:bodytext-->;
    text-shadow: 1px 1px 3px <!--WDK:color:darken:[bodytxt]:50-->;
  }
</style>
~~~

Please note 'text-shadow' is a CSS3 property and is currently not supported in Internet Explorer.

#### Best Visible

This tag returns a hex reference that is the bets visible colour for reading text on the supplied colour.

`<!--WDK:color:bestvisible:colour-->`
If in your template you only allow the user to select a background colour, this tag could generate the best colour for the text.

~~~
<style type="text/css">
  body {
    background-color:<!--WDK:display:bodybg-->;
    color:<!--WDK:color:bestvisible:[bodybg]-->;
  }
</style>
~~~

### Links & Further Reading

- Tag: `<!--WDK:color:tint-->`
- Tag: `<!--WDK:color:highlight-->`
- Tag: `<!--WDK:color:lowlight-->`
- Tag: `<!--WDK:color:invert-->`
- Tag: `<!--WDK:color:brighten-->`
- Tag: `<!--WDK:color:darken-->`
- Tag: `<!--WDK:color:bestvisible-->`
- Tutorial: [Colours Basics](colours.html)
