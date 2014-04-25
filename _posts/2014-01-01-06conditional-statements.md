---
title: Logic and Conditional Statements
---

<h1>{{ page.title }}</h1>

To help with creating a more dynamic and reliable template, the WDK contains various logic / conditional tags.

You can use our collection of if, ifnot, elseif, elsifnot, else and endif to allow your template to act according to the way the site is set up.

Example 1
You want to prevent flash banners on your template. You could use the following statement to check if a flash header is selected or not, and display either the full width image, or just the site title.

`<!--WDK:comment:If header 3 is flash... -->`
`<!--WDK:if:header3:isFlash-->`

    `<!--WDK:comment:... just display the site name-->`
    `<h1><!--WDK:display:site_name--></h1>`
    
`<!--WDK:else-->`

    `<!--WDK:comment:... display the header as an image-->`
    `<!--WDK:display:header3-->`

`<!--WDK:endif-->`

As in the majority of programming languages, each if statement, MUST have a matching endif statement.

Example 2
You wish to give menu items a "selected" style when on that page.

    `<!--WDK:comment:Loop through all the menu items-->`
    `<!--WDK:menu:start-->`
    
        `<!--WDK:comment:If the current item isn't the first, show a '|' seperator-->`
        `<!--WDK:ifnot:firstMenuItem--> | <!--WDK:endif-->`
    	
        `<!--WDK:comment:Display the link with the text - if it is the current menu item, add the 'selected' class-->`
    	`<a <!--WDK:if:currentMenuItem--> class='selected' <!--WDK:endif--> href="<!--WDK:menu:link-->">`
            `<!--WDK:menu:text-->`
    	`</a>`
    	
    `<!--WDK:comment:End the menu loop-->`
    `<!--WDK:menu:end-->`

Similarly, each loop (menu:start / column:start), MUST have a matching (menu:end / column:end) statement.

Refer to the Glossary for a full list of tags and conditional tags.