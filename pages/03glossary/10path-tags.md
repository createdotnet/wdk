---
layout: layout
title: Path Tags
group: glossary
last-updated: 07-02-2013
---


###Tag

```
<!--WDK:path:images-->
```

###Description

Return `<String>`
Use this tag to retreive the full relative path to your images directory.

###Example

In this example we're using the tag to include an image previously uploaded named 'logo.png'.

```html
<img alt="Company Logo" src="<!--WDK:path:images-->logo.png" />
```