---
title: Building a template
---

<h1>{{ page.title }}</h1>

We have created an example template for you to use either as a base for your template, or just for reference. It uses a variety of tags so that you can see them in use.

Included in the example templates is a file called index.html which contains an HTML5 template which was then converted to be run using the WDK. Also included are the corresponding CSS Stylesheets and Javascript files.

1. The Basics
Each template is split into 3 areas; Header, Content and Footer.

Within your template, you will need to have the following basic structure;

`<!--WDK:header:start-->`
    `<html>`
    `<head> </head>`
    `<body>`
    `YOUR MENU HTML`
    `YOUR PAGE TITLE`
`<!--WDK:header:end-->`

Content is automatically put between the header and footer.

`<!--WDK:footer:start-->`
    `FOOTER INFORMATION`
    `</body>`
    `</html>`
`<!--WDK:footer:end-->`