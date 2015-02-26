---
layout: side-nav
title: Colours
last-updated: 01-08-2014
nav-position: 1
parent: customisation
---

## Tag
`<!--WDK:display:color:your_colour-->`

## Colours
There are currently 6 standard colour tags in use across Create templates. menubg, menutxt, bodybg, bodytxt, bodylink, and pagebg.


## Custom Colour Tags
You can specify custom colour tags by using them i.e. `color: <!--WDK:display:color:brand_color-->;`. A "Brand Color" colour will now appear on the design screen for users to change.

If you are using custom colour tags in your template, specify a default colour so that if user has not yet chosen a colour, it will fallback.

You can set the default using any WDK colour tags or CSS colours as shown below;


### Colour Tags
~~~ 
<!--WDK:color:default:brand_color-->
    <!--WDK:display:color:menubg-->
<!--WDK:end:color-->
~~~

~~~ 
<!--WDK:color:default:brand_color-->
    <!--WDK:color:invert:[menubg]-->
<!--WDK:end:color-->
~~~

### CSS colours
Anything put between these tags will be output in the CSS so only use CSS colours. The Hash on a hex colour is optional

~~~ 
<!--WDK:color:default:brand_color-->red<!--WDK:end:color-->
~~~

~~~ 
<!--WDK:color:default:brand_color-->#F00<!--WDK:end:color-->
~~~

~~~ 
<!--WDK:color:default:brand_color-->FF0000<!--WDK:end:color-->
~~~

~~~
<!--WDK:color:default:brand_color-->rgba(255,0,0 0.5)<!--WDK:end:color-->
~~~