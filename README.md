Welcome to the Create.net Web Designer's Kit Documentation.
This guide should help enable you to fully customise your site. The guide is built using jekyll for github pages. It can be contributed to, edited and improved using github.

##Adding / Editing Articles

- Pages are organised into folders inside the 'pages' folder. These folders to not enforce the navigation layout. They could all be in one huge folder and the site would not change.
- The navigation layout is determined by the group. In order that the page appears in the correct part of the navigation pane, ensure that that 'Group:' is correctly labelled at the top of each file. Within each group they are sorted numerically by file name (hence the preceeding numbers).
- the majority of pages should be layout:main if you want a sub navigation bar, use the name of the navigation bar you want. egg. layout: side-columns.
- The pages are compiled in the 'Markup' language.

Page Titles
- The page title will appear as the title to each post and also as the link on the left-side navigation panel. Ensure this is capaitalised and not hyphenated.


##A short guide to the Markup language
###A better guide can be found at [Here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

 - When writing any code, wrap it between three backwards apostrophes (next to the left shit on a mac), three on the line above and three on the line below.

 - Headers can be created using #
 	#header1 (biggest)
 	##header2 (big)
 	###header3 (not so big)
 	etc etc
 - Lists are made just as you would in any word processor
 		1. item 1
 		2. item 3
 	OR
 		- item
 		- another item
 		- another....


code and pre elements are styled using prism.js.