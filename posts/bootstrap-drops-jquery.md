---
title: Bootstrap is Dropping its jQuery Dependency!
description: I definitely feel that it's the right time for Bootstrap to say goodbye to jQuery and move to rely solely on the powerful capabilities of modern web browsers.
date: "2020-08-20"
readTime: 3
keywords:
    - bootstrap
    - jquery
    - dependency
    - css
    - js
    - javascript
    - framework
    - library
containsCodeBlocks: false
tags:
    - News
    - JavaScript
    - Framework
    - jQuery
    - Bootstrap
---

Bootstrap's dependence on jQuery has been a relatively large factor in my reason to stop using it in recent years. Now, with the Bootstrap 5 alpha, they're ditching jQuery in preference of using the APIs provided by modern browsers. This is a big step, but one that I feel is beneficial and necessary to encourage developers like me to use it again on future projects.

## Lets Not Hate on jQuery

I would like to clarify that I don't hate jQuery.\* I think that jQuery has done an incredible job over the years at making front-end web development a significantly less painful endeavour. The reality these days is that it's not as relevant and necessary anymore. Browser support is far less of an issue because they are much better at keeping up with standards and other libraries and frameworks have been developed which render jQuery less useful. Nevertheless, we can still appreciate that jQuery has served it's purpose extremely well since it was first released all the way back in 2006 and I will forever be thankful for it and all the work people put in to building and maintaining it.

<p class="text-sm">*I personally don't like it when developers talk trash about older tech, languages, libraries, frameworks etc. just because it's a little dated. It's always good to be mindful that people still like use these technologies and it is a perfectly valid choice if it suits their use case.</p>

## Light as a Feather

So lets take a look and see what impact dropping jQuery has on Bootstrap's file size:

<div class="overflow-scroll w-full mt-4 mb-8">
    <table>
        <thead>
            <tr>
                <th>Bootstrap Version</th>
                <th>Files</th>
                <th>Size (Original)</th>
                <th>Size (Gzip)</th>
                <th>Total (Gzip)</th>
            </tr>
        </thead>
        <tbody>
            <!-- 4.5 -->
            <tr>
                <td rowspan="2">v4.5 (latest)</td>
                <td>Bootstrap</td>
                <td>60.0 kB</td>
                <td>14.9 kB</td>
                <td rowspan="2">39.8 kB</td>
            </tr>
            <tr>
                <td>jQuery</td>
                <td>72.4 kB</td>
                <td>24.9 kB</td>
            </tr>
            <!-- 5 -->
            <tr>
                <td rowspan="2">v5 (alpha)</td>
                <td>Bootstrap</td>
                <td>63.5 kB</td>
                <td>16.2 kB</td>
                <td rowspan="2">16.2 kB</td>
            </tr>
            <tr>
                <td>jQuery</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
</div>

<p class="text-sm">Note: I've excluded Popper.js from this because it is the same for both versions of Bootstrap.</p>

We can see that there's only a very small increase (1.3 mB Gzipped) in Bootstrap's file size to compensate for completely removing jQuery!\*\* Less data down the wire means faster page loads which is great for improved SEO and user experiences.

<p class="text-sm">**This file size will also be affected by changes other than dealing with the removal of jQuery, i.e. new features, so in reality removing jQuery made even less of a difference in Bootstrap's size!</p>

## What Else is New?

There are some other new features of Bootstrap 5 which include:

-   New CSS custom properties
-   Updated forms & form controls
-   New utilities API
-   Enhanced grid system with a new XXL tier for really large screens

I won't go into detail about any of these, but if you're interested you can <a href="https://blog.getbootstrap.com/2020/06/16/bootstrap-5-alpha/" target="_blank" rel="noopener">head over to the Bootstrap blog to read all about them</a>.

## Bootstrap Icons

Whilst on the subject of Bootstrap I thought I should mention that they have recently released a great set of over 1,000 SVG icons which you can use on any project (you don't need to be using Bootstrap to use them). <a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener">Take a look at Bootstrap Icons</a> and see what you think!
