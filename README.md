# Create.net WDK (Web Designer's Kit) Documentation.
[View Live Site](http://developers.create.net/wdk/)

This is the the customer and developer facing documentation for the Create.net WDK (Web Designers Kit) that allows for customisation of templates and websites. Find out more [here](http://www.create.net/web_designers_kit.phtml).

The guide is built using jekyll for github pages. It can be contributed to, edited and improved using github.

## Adding / Editing Articles
- Posts are written in the [Markdown language](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Tutorials and glossary post are sorted using Jekyll collections, anything in the `_glossary' folder will appear under Glossary in the main nav for example.
- Within each collection they are sorted numerically by file name (hence the preceeding numbers).
- The page title will appear as the title to each post and also as the link on the left-side navigation panel.
- Create a code block by placing ~~~~~~~~~ above and below the code. Code blocks are styled (syntax highlighting) using prism.js.
- Start a line with a `>` to create 'blockquote' this places it in a yellow box and makes it stand out on the page. Useful for warnings or "please note" text.

## Local Testing
Pushing changes to the `gh-pages` branch will put them live immediatley. If you wish to test your changes locally, clone the repo and run `jekyll serve --watch` in the root. It may be slow so be patient!

If you serve to localhost (set in the _config.yml) then you can check for broken links with `wget --spider -r http://localhost:4012/wdk/`
