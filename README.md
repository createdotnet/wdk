Welcome to the Create.net Web Designer's Kit Documentation.
This guide should help enable you to fully customise your site. The guide is built using jekyll for github pages. It can be contributed to, edited and improved using github.

##Adding / Editing Articles

- The mosts important thing to remember is that the layout is not determined by the file/folder structure but by the details provided in the head of each markdown file.
- The navigation grouping is determined by the 'group'. In order that the page appears under the correct section, ensure that that 'Group:' is correctly labelled at the top of each file. 
- Within each group they are sorted numerically by file name (hence the preceeding numbers).

##Page Titles
- The page title will appear as the title to each post and also as the link on the left-side navigation panel. Ensure this is capaitalised and not hyphenated.

##The Markdown language
###A full guide can be found [Here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

When writing any code, wrap it between three backwards apostrophes (next to the left shit on a mac), three on the line above and three on the line below. Code and pre elements are styled (syntax highlighting) using prism.js.

Headers can be created using # before the text. One for h2, two for h2 etc etc.

Lists are made just as you would see them, preceeded with a number or a dash.
 		1. item one
 		2. item two
 	OR
 		- item
 		- another item
 		- another....


Start a line with a `>` to create 'blockquote' this places it in a yellow box and makes it stand out on the page. Useful for warnings or "please note" text.