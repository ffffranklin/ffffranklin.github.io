---
layout: post
title: "Posting with Jekyll"
date: 2015-09-06 20:14:55
tags:
 - jekyll
 - blog
 - writing 
---

Posting with Jekyll is probably my least favorite way to post content on the web it's cumbersome and weird.  The flexibility it provides, on the other hand, is bar-none the best feature about the whole process. In order to automate the process I've created a small script I use to generate new posts:

{% highlight bash %}
touch `date +"%Y"`-`date +"%m"`-`date +"%d"`-the-title.md
{% endhighlight %}

will initialize a file named:  

{{ 'now' | date: '%Y-%m-%d-the-title.md' }}
