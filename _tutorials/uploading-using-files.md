---
layout: side-nav
title: Uploading & Using Files
last-updated: 18-06-2015
---

## WDK Editor

Files uploaded via the WDK editor are meant to relate directly to the template e.g. style sheets, javascript etc.

We recommend that these files are:

* No longer than ~2,000 lines (while in development)
* Minified (particularly frameworks)
* Not content files e.g. blog post images

### Supported File Types

The following file extensions can be uploaded via the WDK editor:

* `.css`
* `.js`
* `.swf`
* `.xml`
* `.png` *
* `.jpg` *
* `.gif` *

\* However, for template specific images we recommend using either the `<!--WDK:display:header-->` for logos [read more »](http://developers.create.net/wdk/glossary.html#HeaderImage) or `<!--WDK:templateoption:templatebg-->` for background images [read more »](http://developers.create.net/wdk/glossary.html#SiteWallpaper).

### Using WDK Uploaded Files

Tag: `<!--WDK:path:template-->`

Example:

To link a style sheet named `global.min.css` uploaded via the WDK editor.

`<link rel="stylesheet" href="<!--WDK:path:template-->/global.min.css">`

---

## Files Area

The [Files area](https://login.create.net/frameset.phtml#site_content_files.phtml) found in `Content > Files` enables the upload of small, non image, file types.

> N.B. Currently these files cannot be renamed in the system once uploaded.

### Using Files Area Uploaded Files

Tag: `<!--WDK:path:files-->`

Example:

To link to a zip file named `documentation.zip` uploaded via the Files area.

`<a href="<!--WDK:path:files-->/documentation.zip">download the docs</a>`

---

## Images Area

The [Images area](https://login.create.net/frameset.phtml#site_content_images.phtml) found in `Content > Images` enables the upload of general images.

> N.B. Currently these files are renamed by the Create system upon upload and cannot be renamed once uploaded. We are aware of [this issue](https://github.com/createdotnet/wdk/issues/63).

### Using Images Area Uploaded Files

Tag: `<!--WDK:path:images-->`

Example:

To embed an image file named `1234567.jpg` uploaded via the Files area.

`<img src="<!--WDK:path:images-->/1234567.jpg">`
