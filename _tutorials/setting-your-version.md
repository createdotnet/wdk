---
layout: side-nav
title: Setting your version
nav-position: 1
last-updated: 10-04-2015
---

In order to allow upgrades to the WDK withouth breaking live sites, we use a versioning system. To set your version, place `<!--WDK:version:value-->` immediately after `<!--WDK:header:start-->`. For example - to set the version to 1.1, use `<!--WDK:version:1.1-->`.

If this tag is not included in you index.html file, the site will default to version 1.0.

The current version is {{ site.wdk_version }}.
