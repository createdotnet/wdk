---
layout: tutorials
title: Pagebuilder 
group: Tutorials
last-updated: 18-12-2014
---

> **Please note:** As Pagebuilder is currently in beta it (and this documentation) is subject to changes.

## What is Pagebuilder
Pagebuilder is a new drag and drop interface that allows users to build content. Previously users could only build their content in a TinyMCE editor, with heavy use of tables to set the layout of the page. With Pagebuilder users no longer need to use tables to build the layour of their page, as this is now handled automatically using our responsive grid. The introduction of Pagebuilder is part of our long term strategy to fully support responsive websites.

**Note:** When a user is building their content in Pagebuilder, they will not see the template header or footer. Currently we are not including any template based CSS within the Pagebuilder interface.

## What changes do I need to make?
Pagebuilder will work in all WDK templates that have the `<!--WDK:display:headinfo-->` and `<!--WDK:base:assets-->` tags in the header. 

## Implementation
On Pagebuilder pages `<!--WDK:display:headinfo-->` will automatically load in a seperate CSS file which handles our basic Pagebuilder dependencies. 
The `<!--WDK:base:assets-->` tag loads in our **none responsive** CSS grid. As such, Pagebuilder will not be responsive on your site unless you explicitly include our responsive grid.

### Responsive Grid
Our responsive Grid is available to download [here](...), where you'll also find our break points definitions.

### Class Names
We are using the following class names on the generated markup for each Pagebuilder page - 
- container
- content-block 
- content-block--[type] (i.e. content-block--text)
- font--heading

We recommend avoid using the above classes for other elements within your template.
We also strongly discourage modifying the background or colour attributes of `.container` as Pagebuilder provides these options to the user in the interface.