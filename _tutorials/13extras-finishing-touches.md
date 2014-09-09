---
layout: side-nav
title: Extras & Finishing Touches
group: Tutorials
last-updated: 03-03-2013
---

The WDK has a dynamic tag which enables you to include widgets, slide shows, galleries, custom forms and html fragments, anywhere in your template.

`<!--WDK:dynamic:type:id-->`
When using this tag, replace 'type' with one of the following: widget, slideshow, gallery, customform or htmlfragment. Then you need to replace 'id' with the specific id of an item, or if your including a widget, the type of widget.

## Obtaining ID's

To obtain the id of a widget, login to your Create account and click on Site Content. From the left hand menu, select Widgets. Once you have created your widget click on 'View' to open the widget. The ID will be the last part of the url, typically the 5 or 6 digits after 'id='.

To obtain the id of a gallery or slideshow, login to your Create account and click on Site Content. From the left hand menu, select Galleries & Slideshows. Once you have created your gallery or slideshow click 'Preview as' and either gallery or slideshow, the id is the same. The ID will be the last part of the url, typically the 5 or 6 digits after 'id='.

To obtain the id of a custom form, login to your Create account and click on Site Content. From the left hand menu, select Add/Edit/Delete Forms. Once you have created your form click 'Preview This Form'. The ID will be the last part of the url, typically the 5 or 6 digits after 'id='.

To obtain the id of a HTML fragment, login to your Create account and click on Site Content. From the left hand menu, select HTML Fragments. Once you have created your HTML fragment click 'Click here to view this HTML fragment'. The ID will be the last part of the url, typically the 5 or 6 digits after 'viewfrag='.

## Example Usage

For example we may wish to include a shopping basket in our header, next to the logo instead of the side column. After creating a Widget and obtaining its id, we could write our markup like the following:

~~~
<header>
  <div id="logo"> </div>
  <div class="widget">
    <!--WDK:dynamic:widget:87654-->
  </div>
</header>
~~~

When using widget a type, you may also use a secondary type, instead of an id. In the next example we're using the tag to display a YouTube widget.

`<!--WDK:dynamic:widget:youtube-->`


## Links & Further Reading

- Tag: `<!--WDK:dynamic:type:id-->`
- Tag: `<!--WDK:dynamic:widget:youtube-->`