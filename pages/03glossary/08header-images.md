---
layout: layout
title: Header Images
group: glossary
last-updated: 07-02-2013
---


###Tag

```
<!--WDK:display:header-->
```

###Description

Return = `<String(HTML)>`
This tag returns a complete header image tag for header3. Alternatively it will return a table with both header1 and header2 images together, depending on what is selected on the 'Add, Update or Remove Your Company Logos' screen.

###Example

In this example, we output our header image within a designated div for our image.

```
<div id="header">
  <!--WDK:display:header-->
</div>
```