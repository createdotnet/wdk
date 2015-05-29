---
layout: side-nav
title: The Footer
nav-position: 4
last-updated: 30-05-2015
---


The Create footer section is opened with `<!--WDK:footer:start-->` and starts directly after your `<!--WDK:header:end-->` tag. 

The footer section is closed after your `</html>` tag using `<!--WDK:footer:end-->`.

Between these you should close any divs, tables or elements previously left open in the header section. You must also include the `<!--WDK:display:sitefooter-->` tag.

This loads in the dynamic footer content found in the Create account: "Site Content" > "Edit Site Information" > "Footer". 

If you do not put this tag in, it will automatically inserted immediately after the `<!--WDK:footer:start-->` tag.

Please note the difference between these two footer tags. `<!--WDK:footer:start-->` marks the end of the pages user customised content, `<!--WDK:display:sitefooter-->` is the site footer that outputs on every page.

## Example

Following on from our example template we started in the [Header Tutorial](the-header.html), let's finish up the template:

~~~

  <!--WDK:footer:start-->
      
      </div><!-- /.content -->

      <!--WDK:column:start:right-->
            <aside class="sidebar right"> </aside>
      <!--WDK:column:end:right-->

    </div><!-- /.main -->

    <footer>
      <!--WDK:display:sitefooter-->
          <p>Custom Content</p>
      <!--WDK:display:sitefooterend-->
    </footer>

  </div><!-- /#site -->

</body>

</html>
<!--WDK:footer:end-->
~~~

After opening our footer, we close the `</div>` thats holding the main page content. We have then outlined our right side column and closed our main `</div>` for the page.

Next the site footer is displayed - note that we are also using the `<!--WDK:display:sitefooterend-->` tag, this allows us to insert additional content in to the footer and still have the 'Powered by Create' link diplay at the bottom of the page. Without this tag, the message will apear ABOVE any custom content.

Finally our remaining `</div>`, `</body>` and `</html>` tags are closed, along with the `<!--WDK:footer:end-->` tag.


## Additional Footer Content

It is also possible to include an additional three blocks of content in the footer. A newsletter sign up form, social media icons / links and a list of the accepted payment methods (displayed as the providers logos). These options can again be configured by the user in the  "Site Content" > "Edit Site Information" > "Footer" area. 

Each of these can be placed wherever you wish in the footer using the following tags (We've been using them in a responsive grid on our new responsive templates.).

#### Social Media Icons
Heres an example of the social profile WDK tags generating an unorder list of the user enabled links. It is contained within some if tags that ensure the code is not outputted if the user has turned the function off.

~~~
<!--WDK:if:plugin:socialprofile:enabled-->
  <ul class="social-profile">
    <!--WDK:plugin:socialprofile:start-->
      <li class="social-profile__item">
        <a href="<!--WDK:plugin:socialprofile:link-->"><!--WDK:plugin:socialprofile:type--></a>
      </li>
    <!--WDK:plugin:socialprofile:end-->
  </ul>
<!--WDK:endif-->
~~~

#### Accepted Payment Methods
This markup follows pretty much the same format as the social media markup above.

~~~
<!--WDK:if:plugin:paymentcards:enabled-->
  <ul>
    <!--WDK:plugin:paymentcards:start-->
      <li>
        <img src="/shop/images/checkout/cards/<!--WDK:plugin:paymentcards:type-->.png" alt="<!--WDK:plugin:paymentcards:type-->">
      </li>
    <!--WDK:plugin:paymentcards:end-->
  </ul>
<!--WDK:endif-->

~~~

#### Newsletter Sign Up
The following code generates the form element with a input and submit button. Feel free to add labels, container divs with styling etc etc.

~~~
<!--WDK:if:plugin:newsletter:enabled-->

    <!--WDK:plugin:newsletter:start-->
      <!--WDK:plugin:newsletter:input-->
      <button type="submit" class="form__submit">Sign Up</button>
    <!--WDK:plugin:newsletter:end-->

<!--WDK:endif-->
~~~

**Validation**

On submission of the form, one of three classes is added to the `<form>` element. 
These are;
- `.form--success`
- `.form--failed`
- `.form--progress`

For our templates, we have three validation messages (nested in the form) that are hidden with CSS. They are set to display based on the helper class on the form. e.g.
```
.form__feedback--success,
.form__feedback--failed,
.form__feedback--progress {
  display: none;
}
.form--success .form__feedback--success,
.form--failed .form__feedback--failed,
.form--progress .form__feedback--progress {
  display: block;
}
```
The `.form--failed`,  `.form--progress` and `.form--success` classes are added by javascript that is included with the WDK tag.


#### Copyright
This outputs plain text - "&copy; [company name] 20[XX]". Again, this is contained in an if statement so that it only displays when the users has enabled it.

~~~
<!--WDK:if:copyrightEnabled-->
  <!--WDK:display:copyright-->
<!--WDK:endif-->
~~~



## Links & Further Reading

- Tag: `<!--WDK:footer:start-->`
- Tag: `<!--WDK:column:start:right-->`
- Tag: `<!--WDK:column:end:right-->`
- Tag: `<!--WDK:display:sitefooter-->`
- Tag: `<!--WDK:footer:end-->`
- Tutorial: [Requirements & Restrictions](requirements-restrictions.html)
- Tutorial: [The Basics](the-basics.html)
- Tutorial: [The Header](the-header.html)
- Glossary: [Creating Side Columns]({{ site.baseurl }}/glossary/side-columns/id.html)

