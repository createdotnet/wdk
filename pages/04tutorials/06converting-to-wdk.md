---
layout: main
title: Converting to WDK
group: Tutorials
last-updated: 25-03-2013
---

The tutorial aims to help you convert a previous HTML page layout to be used with Creates WDK.

Firstly, here is our complete code, file structure and screenshots to illustrate our existing page.

###Files:
index.html
style.css
reset.css
images/logo.png

###Markup:
index.html

<!doctype html>

```html
<html>

<head>
    <meta charset="utf-8">
    <title>Home | My Example Website</title>
    <meta name="description" content="Welcome to my example website.">
    <meta name="keywords" content="My, Keywords, Here">
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css">
</head>

<body id="top">
    <div id="wrapper">
        <header>
            <div id="logo">
                <a href="/"><img src="images/logo.png" alt="My Example Logo" width="881" height="142"></a>
            </div><!-- /#logo -->
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="clear"></div>
        </header>
        <div id="main">
            <article>
                <h1>Welcome to my example website.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis lacus est, sed varius odio. Mauris arcu felis, scelerisque eget congue ut, semper eu enim. Proin sit amet nisi quam, porta fermentum lectus. Sed feugiat semper eros ac dignissim. Fusce elit ipsum, dapibus eget faucibus posuere, blandit non lectus. Sed odio justo, volutpat et tincidunt id, commodo et metus. Cras sit amet felis velit, id ultricies sem. Donec in consequat lorem. Integer orci elit, ultrices eget aliquam ac, luctus in diam. In auctor lacus eu lacus egestas volutpat. Proin eu tellus sed nisl elementum ultricies vitae at mi. Mauris ac sodales quam. Proin et nisi nunc, et gravida tellus.</p>
            </article>
            <aside>
                <div class="widget">
                    <h3>Recent Posts</h3>
                    <ul>
                        <li><a href="#">Some Post</a></li>
                        <li><a href="#">Another Post</a></li>
                        <li><a href="#">One More</a></li>
                    </ul>
                </div><!-- /.widget -->
                <div class="widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#">News &amp; Updates</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Rants &amp; Raves</a></li>
                    </ul>
                </div><!-- /.widget -->
                <div class="widget">
                    <h3>Archives</h3>
                    <ul>
                        <li><a href="#">2013</a></li>
                        <li><a href="#">2012</a></li>
                        <li><a href="#">2011</a></li>
                    </ul>
                </div><!-- /.widget -->
            </aside>
            <div class="clear"></div>
        </div><!-- /#main -->
        <footer>
            <small>
                &copy; 2013 My Example Website.
            </small>
            <nav>
                <ul>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="privacy.html">Privacy &amp; Cookies</a></li>
                    <li><a href="#top">Back to Top</a></li>
                </ul>
            </nav>
            <div class="clear"></div>
        </footer>
    </div><!-- /#wrapper -->
</body>

</html>
```

style.css

```html
/* Typography */<br />body {<br />    font-size: 16px;<br />    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;<br />    color: #686B6E;<br />}<br /><br />p {<br />    line-height: 20px;<br />    margin-bottom: 10px;<br />}<br /><br />strong {<br />    font-weight: 800;<br />}<br /><br />em {<br />    font-style: italic;<br />}<br /><br />h1, h2, h3, h4, h5, h6 {<br />    font-family: Georgia, Times, "Times New Roman", serif;<br />    margin-bottom: 10px;<br />    color: #18191A;<br />}<br /><br />h1 {<br />    font-size: 28px;<br />}<br /><br />h2 {<br />    font-size: 26px;<br />}<br /><br />h3 {<br />    font-size: 24px;<br />}<br /><br />h4 {<br />    font-size: 22px;<br />}<br /><br />h5 {<br />    font-size: 20px;<br />}<br /><br />h6 {<br />    font-size: 18px;<br />}<br /><br />a {<br />    text-decoration: none;<br />    color: #54B2FF;<br />}<br /><br />a:hover {<br />    text-decoration: underline;<br />    color: #4FA7F0;<br />}<br /><br />ul {<br />    <br />}<br /><br />ul li {<br />    list-style-type: circle;<br />    margin: 0 0 3px 15px;<br />}<br /><br />/* Layout */<br />body {<br />    width: 100%;<br />    height: 100%;<br />    padding: 0;<br />    margin: 0;<br />    background-color: #F5F5F5;<br />}<br /><br />body#top {<br />    /* Used as page anchor */<br />}<br /><br />#wrapper {<br />    width: 1000px;<br />    margin: 30px auto;<br />    padding: 10px;<br />    background-color: #FFFFFF;<br />    border-radius: 5px;<br />    border: 1px solid #E8E8E8;<br />    box-shadow: 0px 0px 20px #EBEBEB;<br />}<br /><br />header {<br />    <br />}<br /><br />header #logo {<br />    width: 1000px;<br />}<br /><br />header nav {<br />    font-family: "Arial Narrow", Arial, sans-serif;<br />    text-transform: uppercase;<br />    font-size: 14px;<br />    line-height: 20px;<br />    margin-top: 10px;<br />    border-top: 1px solid #F7F7F7;<br />    border-bottom: 1px solid #F7F7F7;<br />    padding: 20px 10px;<br />    height: 20px;<br />    <br />}<br /><br />header nav ul {<br />    <br />}<br /><br />header nav ul li {<br />    list-style-type: none;<br />    float: left;<br />    padding: 0 15px;<br />    border-left: 1px solid #F7F7F7;<br />    margin: 0;<br />}<br /><br />header nav ul li a {<br /><br />}<br /><br />header nav ul li:first-child {<br />    border-left: 0;<br />    padding-left: 0;<br />}<br /><br />div#main {<br />    margin: 20px 0;<br />}<br /><br />article {<br />    float: left;<br />    padding: 0 20px 0 10px;<br />    width: 750px;<br />}<br /><br />aside {<br />    width: 189px;<br />    padding: 0 10px 0 20px;<br />    float: right;<br />    border-left: 1px solid #E6E6E6;<br />    font-size: 14px;<br />}<br /><br />.widget {<br />    margin-bottom: 20px;<br />}<br /><br />footer {<br />    border-top: 1px solid #F7F7F7;<br />    height: 20px;<br />    line-height: 20px;<br />    padding: 20px 10px 10px;<br />}<br /><br />footer small {<br />    width: 480px;<br />    margin-right: 10px;<br />    float: left;<br />    font-size: 12px;<br />}<br /><br />footer nav {<br />    font-family: "Arial Narrow", Arial, sans-serif;<br />    width: 480px;<br />    margin-left: 10px;<br />    float: right;<br />    text-transform: uppercase;<br />    font-size: 12px;<br />}<br /><br />footer nav ul {<br />    <br />}<br /><br />footer nav ul li {<br />    list-style-type: none;<br />    float: right;<br />    padding: 0 10px;<br />    border-right: 1px solid #F7F7F7;<br />    margin: 0;<br />}<br /><br />footer nav ul li a {<br />    <br />}<br /><br />footer nav ul li:first-child {<br />    border-right: 0;<br />    padding-right: 0;<br />}<br /><br />.clear {<br />    clear: both;<br />}
```

reset.css

```html
/* http://meyerweb.com/eric/tools/css/reset/ <br />   v2.0 | 20110126<br />   License: none (public domain)<br />*/<br /><br />html, body, div, span, applet, object, iframe,<br />h1, h2, h3, h4, h5, h6, p, blockquote, pre,<br />a, abbr, acronym, address, big, cite, code,<br />del, dfn, em, img, ins, kbd, q, s, samp,<br />small, strike, strong, sub, sup, tt, var,<br />b, u, i, center,<br />dl, dt, dd, ol, ul, li,<br />fieldset, form, label, legend,<br />table, caption, tbody, tfoot, thead, tr, th, td,<br />article, aside, canvas, details, embed, <br />figure, figcaption, footer, header, hgroup, <br />menu, nav, output, ruby, section, summary,<br />time, mark, audio, video {<br />    margin: 0;<br />    padding: 0;<br />    border: 0;<br />    font-size: 100%;<br />    font: inherit;<br />    vertical-align: baseline;<br />}<br />/* HTML5 display-role reset for older browsers */<br />article, aside, details, figcaption, figure, <br />footer, header, hgroup, menu, nav, section {<br />    display: block;<br />}<br />body {<br />    line-height: 1;<br />}<br />ol, ul {<br />    list-style: none;<br />}<br />blockquote, q {<br />    quotes: none;<br />}<br />blockquote:before, blockquote:after,<br />q:before, q:after {<br />    content: '';<br />    content: none;<br />}<br />table {<br />    border-collapse: collapse;<br />    border-spacing: 0;<br />}
```

Screenshot

Existing Webpage Screenshot

##WDK Basics

First of all, we must insert our required tags as described in The Basics tutorial.

At the start of your template you'll need open with insert `<!--WDK:header:start-->`.

Your page content is written within Create's system, and dynamically inserted into your template. You'll only need 1 template for all of your pages, so remove your content and use the header end and footer start tags to indicate where it should go.

Replacing:

```html
<article>
  <h1>Welcome to my example website.</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis lacus est, sed varius odio. Mauris arcu felis, scelerisque eget congue ut, semper eu enim. Proin sit amet nisi quam, porta fermentum lectus. Sed feugiat semper eros ac dignissim. Fusce elit ipsum, dapibus eget faucibus posuere, blandit non lectus. Sed odio justo, volutpat et tincidunt id, commodo et metus. Cras sit amet felis velit, id ultricies sem. Donec in consequat lorem. Integer orci elit, ultrices eget aliquam ac, luctus in diam. In auctor lacus eu lacus egestas volutpat. Proin eu tellus sed nisl elementum ultricies vitae at mi. Mauris ac sodales quam. Proin et nisi nunc, et gravida tellus.</p>
</article>
```

With:

```html
<article>
  <h1>Welcome to my example website.</h1>
  <!--WDK:header:end-->
  <!--WDK:footer:start-->
</article>
```

At the end of your template you must insert the `<!--WDK:footer:end-->` tag, to close your documents.

The last required tag we must insert is the `<!--WDK:display:sitefooter-->` tag. Much like page content, Create's footers are dynamic and can be found in the "Edit Site Information" section on the "Site Content" screen. So we'll remove our footer content from here and insert the tag.

Replacing:

```html
<footer>
  <small>
    &copy; 2013 My Example Website.
  </small>
  <nav>
    <ul>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="privacy.html">Privacy &amp; Cookies</a></li>
      <li><a href="#top">Back to Top</a></li>
    </ul>
  </nav>
  <div class="clear"></div>
</footer>
```

With:

```html
<footer>
  <!--WDK:display:sitefooter-->
</footer>
```

That is the first step we need to take in order to make our page WDK compatible.

##Meta Title, Description & Keywords

To display our sites meta values, we're going to use the `<!--WDK:display:headinfo-->` tag, which replaces our `<title>` and `<meta>` keywords and description.

Replacing:

```html
<title>Home | My Example Website</title>
<meta name="description" content="Welcome to my example website.">
<meta name="keywords" content="My, Keywords, Here">
```

With:

`<!--WDK:display:headinfo-->`

##Linking External Files

We are linking to a few external stylesheets. We will be uploading these along with our index.html, but we'll need to insert some path tags so these link up properly, using the `<!--WDK:path:template-->` tag.

Replacing:

```html
<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="style.css">
```

With:

```html
<link rel="stylesheet" href="<!--WDK:path:template-->reset.css">
<link rel="stylesheet" href="<!--WDK:path:template-->style.css">
```

##Logo

We can upload our logo image to the "Design Screen". We can display this using the `<!--WDK:display:header-->` tag.

Replacing:

```html
<div id="logo">
  <a href="/">
    <img src="images/logo.png" alt="My Example Logo" width="881" height="142">
  </a>
</div><!-- /#logo -->
```

With:

```html
<div id="logo">
  <a href="/">
    <!--WDK:display:header-->
  </a>
</div><!-- /#logo -->
```

##Menus

For the navigation, we can write a loop to process all of the menus items on a Create site. We can keep the `<ul> <li>` structure exactly the same, only having to start and stop the loop, insert the menu item text, and the menu link.

Replacing:

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

With:

```html
<nav>
  <ul>
    <!--WDK:menu:start-->
      <li>
        <a href="<!--WDK:menu:link-->">
          <!--WDK:menu:text-->
        </a>
      </li>
    <!--WDK:menu:end-->
  </ul>
</nav>
```

##Page Title

Just as our page content is dynamic, so is the page title. We just need one tag to display this: `<!--WDK:display:pagetitle-->`.

Replacing:

`<h1>Welcome to my example website.</h1>`

With:

`<h1><!--WDK:display:pagetitle--></h1>`

##Sidebars

Sidebar content is managed using Side Columns from the "Design Screen". Sidebars work in a similar way to Menus using loops to cycle through items, so we will only have to write the code for one item, which will be applied to all. For more informtaion, view our Side Columns & Content Width tutorial.

Replacing:

```html
<aside>
  <div class="widget">
    <h3>Recent Posts</h3>
    <ul>
      <li><a href="#">Some Post</a></li>
      <li><a href="#">Another Post</a></li>
      <li><a href="#">One More</a></li>
    </ul>
  </div><!-- /.widget -->
</aside>
```

With:

```html
<!--WDK:column:start:right-->
<!--WDK:column:width:189-->
<aside>
  <!--WDK:column:item:start-->
  <div class="widget">
    <h3><!--WDK:column:item:title--></h3>
    <!--WDK:column:item:content-->
  </div>
  <!--WDK:column:item:end-->
</aside>
<!--WDK:column:end:right-->
```

##Dynamic Styling

The Create WDK only processes tags on the index.html file. As we'll need to use some of these tags to style our site, let's move the contents of the external style.css sheet, and insert it into the `<head>` section of our page.

Replacing:

`<link rel="stylesheet" href="style.css">`
With:

```html
<style type="text/css">
    (style.css content here)
</style>
```

From the "Design Screen", Create users can select dynamic colours for use within their template. To make our existing page compatible with this, we'll need to use a few tags to set the styles. Please see our tutorials for a more in depth look at Dynamic Colours and Advanced Colour Functions.

Replacing:

```html
/* Typography */<br />body {<br />    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;<br />    color: #686B6E;<br />}<br /><br />a {<br />    color: #54B2FF;<br />}<br /><br />a:hover {<br />    color: #4FA7F0;<br />}<br /><br />/* Layout */<br />body {<br />    background-color: #F5F5F5;<br />}<br /><br />#wrapper {<br />    background-color: #FFFFFF;<br />}<br /><br />header nav {<br />}<br /><br />header nav ul li a {<br /><br />}<br />
```

With:

```css
/* Typography */
body {
    font-family: <!--WDK:display:font-->;
    color: <!--WDK:display:bodytxt-->;
}

a {
    color: <!--WDK:display:bodylink-->;
}

a:hover {
    color: <!--WDK:color:darken:[bodylink]:50-->;
}

/* Layout */
body {
    background-color: <!--WDK:display:bodybg-->;
}

#wrapper {
    background-color: <!--WDK:display:pagebg-->;
}

header nav {
    background-color: <!--WDK:display:menubg-->;
}

header nav ul li a {
    color: <!--WDK:display:menutxt-->;
}
```

##The Completed WDK Template

We now have our existing webpage compatible with Create's WDK. Heres a final overview of our index.html file.

```html
<!doctype html>
<!--WDK:header:start-->
<html>

<head>
    <meta charset="utf-8">
    <!--WDK:display:headinfo-->
    <link rel="stylesheet" href="<!--WDK:path:template-->reset.css">
    <style type="text/css">
        /* Typography */
        body {
            font-size: 16px;
            font-family: <!--WDK:display:font-->;
            color: <!--WDK:display:bodytxt-->;
        }
        
        p {
            line-height: 20px;
            margin-bottom: 10px;
        }
        
        strong {
            font-weight: 800;
        }
        
        em {
            font-style: italic;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: Georgia, Times, "Times New Roman", serif;
            margin-bottom: 10px;
            color: #18191A;
        }
        
        h1 {
            font-size: 28px;
        }
        
        h2 {
            font-size: 26px;
        }
        
        h3 {
            font-size: 24px;
        }
        
        h4 {
            font-size: 22px;
        }
        
        h5 {
            font-size: 20px;
        }
        
        h6 {
            font-size: 18px;
        }
        
        a {
            text-decoration: none;
            color: <!--WDK:display:bodylink-->;
        }
        
        a:hover {
            text-decoration: underline;
            color: <!--WDK:color:darken:[bodylink]:50-->;
        }
        
        ul {
            
        }
        
        ul li {
            list-style-type: circle;
            margin: 0 0 3px 15px;
        }
        
        /* Layout */
        body {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            background-color: <!--WDK:display:bodybg-->;
        }
        
        body#top {
            /* Used as page anchor */
        }
        
        #wrapper {
            width: 1000px;
            margin: 30px auto;
            padding: 10px;
            background-color: <!--WDK:display:pagebg-->;
            border-radius: 5px;
            border: 1px solid #E8E8E8;
            box-shadow: 0px 0px 20px #EBEBEB;
        }
        
        header {
            
        }
        
        header #logo {
            width: 1000px;
        }
        
        header nav {
            font-family: "Arial Narrow", Arial, sans-serif;
            text-transform: uppercase;
            font-size: 14px;
            line-height: 20px;
            margin-top: 10px;
            border-top: 1px solid #F7F7F7;
            border-bottom: 1px solid #F7F7F7;
            padding: 20px 10px;
            height: 20px;
            background-color:<!--WDK:display:menubg-->;
        }
        
        header nav ul {
            
        }
        
        header nav ul li {
            list-style-type: none;
            float: left;
            padding: 0 15px;
            border-left: 1px solid #F7F7F7;
            margin: 0;
        }
        
        header nav ul li a {
            color: <!--WDK:display:menutxt-->;
        }
        
        header nav ul li:first-child {
            border-left: 0;
            padding-left: 0;
        }
        
        div#main {
            margin: 20px 0;
        }
        
        article {
            float: left;
            padding: 0 20px 0 10px;
            width: 750px;
        }
        
        aside {
            width: 189px;
            padding: 0 10px 0 20px;
            float: right;
            border-left: 1px solid #E6E6E6;
            font-size: 14px;
        }
        
        .widget {
            margin-bottom: 20px;
        }
        
        footer {
            border-top: 1px solid #F7F7F7;
            height: 20px;
            line-height: 20px;
            padding: 20px 10px 10px;
        }
        
        .clear {
            clear: both;
        }
    </style>
</head>

<body id="top">
    <div id="wrapper">
    
        <header>
            <div id="logo">
                <a href="/"><!--WDK:display:header--></a>
            </div><!-- /#logo -->
            <nav>
                <ul>
                <!--WDK:menu:start-->
                    <li>
                        <a href="<!--WDK:menu:link-->">
                            <!--WDK:menu:text-->
                        </a>
                    </li>
                <!--WDK:menu:end-->
                </ul>
            </nav>
            
            <div class="clear"></div>
        </header>
        
        <div id="main">
            <article>
                <h1><!--WDK:display:pagetitle--></h1>
                <!--WDK:header:end-->
                <!--WDK:footer:start-->
            </article>            
            <!--WDK:column:start:right-->
            <!--WDK:column:width:189-->
            <aside>
                <!--WDK:column:item:start-->
                <div class="widget">
                    <h3><!--WDK:column:item:title--></h3>
                    <!--WDK:column:item:content-->
                </div>
                <!--WDK:column:item:end-->
            </aside>
            <!--WDK:column:end:right-->
            <div class="clear"></div>
        </div><!-- /#main -->
        
        <footer>
            <!--WDK:display:sitefooter-->
        </footer>
        
    </div><!-- /#wrapper -->
</body>

</html>
<!--WDK:footer:end-->
```