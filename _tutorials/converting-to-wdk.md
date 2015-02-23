---
layout: side-nav
title: Converting to WDK
nav-position: 12
last-updated: 25-03-2013
---

The tutorial aims to help you convert a previous HTML page layout to be used with Creates WDK.

Firstly, here is our complete code, file structure and screenshots to illustrate our existing page.

#### Files:
- index.html
- style.css
- reset.css
- images/logo.png

#### Markup:
index.html

<!doctype html>

~~~
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
~~~

style.css

~~~
/* Typography */

body {
  font-size: 16px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #686B6E;
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

h1 { font-size: 28px; }
h2 { font-size: 26px; }
h3 { font-size: 24px; }
h4 { font-size: 22px; }
h5 { font-size: 20px; }
h6 { font-size: 18px; }

a {
  text-decoration: none;
  color: #54B2FF;
}

a:hover {
  text-decoration: underline;
  color: #4FA7F0;
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
    background-color: #F5F5F5;
  }

body#top {
    /* Used as page anchor */
  }

#wrapper {
    width: 1000px;
    margin: 30px auto;
    padding: 10px;
    background-color: #FFFFFF;
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

footer small {
    width: 480px;
    margin-right: 10px;
    float: left;
    font-size: 12px;
  }

footer nav {
    font-family: "Arial Narrow", Arial, sans-serif;
    width: 480px;
    margin-left: 10px;
    float: right;
    text-transform: uppercase;
    font-size: 12px;
  }

footer nav ul {

}

footer nav ul li {
    list-style-type: none;
    float: right;
    padding: 0 10px;
    border-right: 1px solid #F7F7F7;
    margin: 0;
  }

footer nav ul li a {

}

footer nav ul li:first-child {
    border-right: 0;
    padding-right: 0;
  }

.clear {
    clear: both;
  }
~~~

reset.css

~~~
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
   */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
  }
body {
    line-height: 1;
  }
ol, ul {
    list-style: none;
  }
blockquote, q {
    quotes: none;
  }
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
  }
table {
    border-collapse: collapse;
    border-spacing: 0;
  }
~~~

Screenshot

![alt text](/images/converting_to_wdk_screenshot.png "Site Screenshot")



## WDK Basics

First of all, we must insert our required tags as described in The Basics tutorial.

At the start of your template you'll need open with insert `<!--WDK:header:start-->`.

Your page content is written within Create's system, and dynamically inserted into your template. You'll only need 1 template for all of your pages, so remove your content and use the header end and footer start tags to indicate where it should go.

Replacing:

~~~
<article>
  <h1>Welcome to my example website.</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis lacus est, sed varius odio. Mauris arcu felis, scelerisque eget congue ut, semper eu enim. Proin sit amet nisi quam, porta fermentum lectus. Sed feugiat semper eros ac dignissim. Fusce elit ipsum, dapibus eget faucibus posuere, blandit non lectus. Sed odio justo, volutpat et tincidunt id, commodo et metus. Cras sit amet felis velit, id ultricies sem. Donec in consequat lorem. Integer orci elit, ultrices eget aliquam ac, luctus in diam. In auctor lacus eu lacus egestas volutpat. Proin eu tellus sed nisl elementum ultricies vitae at mi. Mauris ac sodales quam. Proin et nisi nunc, et gravida tellus.</p>
</article>
~~~

With:

~~~
<article>
  <h1>Welcome to my example website.</h1>
  <!--WDK:header:end-->
  <!--WDK:footer:start-->
</article>
~~~

At the end of your template you must insert the `<!--WDK:footer:end-->` tag, to close your documents.

The last required tag we must insert is the `<!--WDK:display:sitefooter-->` tag. Much like page content, Create's footers are dynamic and can be found in the "Edit Site Information" section on the "Site Content" screen. So we'll remove our footer content from here and insert the tag.

Replacing:

~~~
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
~~~

With:

~~~
<footer>
  <!--WDK:display:sitefooter-->
</footer>
~~~

That is the first step we need to take in order to make our page WDK compatible.

## Meta Title, Description & Keywords

To display our sites meta values, we're going to use the `<!--WDK:display:headinfo-->` tag, which replaces our `<title>` and `<meta>` keywords and description.

Replacing:

~~~
<title>Home | My Example Website</title>
<meta name="description" content="Welcome to my example website.">
<meta name="keywords" content="My, Keywords, Here">
~~~

With:

`<!--WDK:display:headinfo-->`

## Linking External Files

We are linking to a few external stylesheets. We will be uploading these along with our index.html, but we'll need to insert some path tags so these link up properly, using the `<!--WDK:path:template-->` tag.

Replacing:

~~~
<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="style.css">
~~~

With:

~~~
<link rel="stylesheet" href="<!--WDK:path:template-->reset.css">
<link rel="stylesheet" href="<!--WDK:path:template-->style.css">
~~~

## Logo

We can upload our logo image to the "Design Screen". We can display this using the `<!--WDK:display:header-->` tag.

Replacing:

~~~
<div id="logo">
  <a href="/">
    <img src="images/logo.png" alt="My Example Logo" width="881" height="142">
  </a>
</div><!-- /#logo -->
~~~

With:

~~~
<div id="logo">
  <a href="/">
    <!--WDK:display:header-->
  </a>
</div><!-- /#logo -->
~~~

## Menus

For the navigation, we can write a loop to process all of the menus items on a Create site. We can keep the `<ul> <li>` structure exactly the same, only having to start and stop the loop, insert the menu item text, and the menu link.

Replacing:

~~~
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
~~~

With:

~~~
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
~~~

## Page Title

Just as our page content is dynamic, so is the page title. We just need one tag to display this: `<!--WDK:display:pagetitle-->`.

Replacing:

`<h1>Welcome to my example website.</h1>`

With:

`<h1><!--WDK:display:pagetitle--></h1>`

## Sidebars

Sidebar content is managed using Side Columns from the "Design Screen". Sidebars work in a similar way to Menus using loops to cycle through items, so we will only have to write the code for one item, which will be applied to all. For more informtaion, view our [Side Columns & Content Width]({{ site.baseurl }}/tutorials/side-columns-content-width.html) tutorial.

Replacing:

~~~
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
~~~

With:

~~~
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
~~~

## Dynamic Styling

The Create WDK only processes tags on the index.html file. As we'll need to use some of these tags to style our site, let's move the contents of the external style.css sheet, and insert it into the `<head>` section of our page.

Replacing:

`<link rel="stylesheet" href="style.css">`
With:

~~~
<style type="text/css">
    (style.css content here)
</style>
~~~

From the "Design Screen", Create users can select dynamic colours for use within their template. To make our existing page compatible with this, we'll need to use a few tags to set the styles. Please see our tutorials for a more in depth look at [Dynamic Styling](dynamic-styling.html) and [Advanced Colour]({{ site.baseurl }}/tutorials/advanced-colour-functions.html) Functions.

Replacing:

~~~
/* Typography */
body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #686B6E;
  }

a {
    color: #54B2FF;
  }

a:hover {
    color: #4FA7F0;
  }

/* Layout */
body {
    background-color: #F5F5F5;
  }

#wrapper {
    background-color: #FFFFFF;
  }

header nav {
}

header nav ul li a {

}

~~~

With:

~~~css
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
~~~

##The Completed WDK Template

We now have our existing webpage compatible with Create's WDK. Heres a final overview of our index.html file.

~~~
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
~~~