---
layout: layout
title: The Footer
group: tutorials
last-updated: 03-03-2013
---


The Create footer section is opened with `<!--WDK:footer:start-->` and starts directly after your `<!--WDK:header:end-->` tag. 

The footer section is closed after your </html> tag using `<!--WDK:footer:end-->`.

Between these you should close any divs, tables or elements previously left open in the header section. You must also include the `<!--WDK:display:sitefooter-->` tag. 

This loads in the dynamic footer content found in the Create account: "Site Content" > "Edit Site Information" > "Footer". 

If you do not put this tag in, it will automatically inserted immediately after the `<!--WDK:footer:start-->` tag.

##Example

Following on from our example template we started in the header tutorial. Let's finish up the template:

```
          <!--WDK:footer:start-->

        </div><!-- /.content -->

        <!--WDK:column:start:right-->
          <aside class="sidebar right"> </aside>
        <!--WDK:column:end:right-->

      </div><!-- /.main -->

      <footer>
        <!--WDK:display:sitefooter-->
      </footer>

    </div><!-- /#site -->
  </body>

</html>
<!--WDK:footer:end-->
```

After opening our footer, we close the `</div>` thats holding the main page content. We have then outlined our right side column and closed our main `</div>` for the page.

Next the site footer is displayed and finally our remaining `</div>`, `</body>` and `</html>` tags are closed, along with the `<!--WDK:footer:end-->` tag.

Links & Further Reading

Tag: `<!--WDK:footer:start-->`
Tag: `<!--WDK:column:start:right-->`
Tag: `<!--WDK:column:end:right-->`
Tag: `<!--WDK:display:sitefooter-->`
Tag: `<!--WDK:footer:end-->`
Tutorial: The Basics
Tutorial: The Header
Tutorial: Creating Side Columns
Tutorial: Requirements & Restrictions