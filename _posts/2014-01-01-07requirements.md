---
title: Requirements and Restrictions
---

<h1>{{ page.title }}</h1>

There are certain elements of the WDK that are required so that your template can be processed correctly.

• The template must contain both the header and footer tags.

• Within either the header or footer tags, the display:sitefooter must also be present, if you do not place this tag within your template, it will automatically get added to the begining of your footer area.

• Any WDK:if and WDK:ifnot tags MUST be closed with WDK:endif.

• Any WDK:menu:start and WDK:column:start tags MUST be closed with the appropriate WDK:menu:end and WDK:column:end tags respectively.

When uploading your index.html the system will check the syntax of your template, providing you with any errors(fatal) and warnings(non-fatal).