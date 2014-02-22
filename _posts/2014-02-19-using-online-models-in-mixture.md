---
layout: default
title: Using Online Models in Mixture
tags: [Tip]
---

Did you know you can create models in [Mixture](http://mixture.io) from any online source that returns json data? There are two ways to go about this.

1. In your <code>mixture.json</code> file, specify the url of the <code>source</code> property like this: <code>"modelSource:" "path/to/jsondata"</code>
2. In your template (for instance <code>index.liquid</code>), specify it at the very top and outside of your content block like this:

{% highlight html %}
{% raw %}{% model 'path/to/json' %}{% endraw %} 
{% endhighlight %} 

Let's try this with a service I just found out about recently, [Random User Generator](http://randomuser.me). This is a service that returns a randomly generated user profile via JSON that you can use while mocking up websites and webapps. 

![RandomUser]({{baseurl}}/public/img/post_assets/randomuser/randomuserbanner.png)

By pointing your browser at [http://api.randomuser.me](http://api.randomuser.me), You will be provided with a JSON object similir to this:

{% highlight javascript %}
{
  results: [{
    user: {
      gender: "female",
      name: {
        title: "ms",
        first: "mary",
        last: "torres"
      },
      location: {
        street: "6193 mockingbird ln",
        city: "scurry",
        state: "delaware",
        zip: "83497"
      },
        email: "mary.torres71@example.com",
        username: "heavybutterfly514",
        password: "eeee",
        salt: "y+W^SrK$",
        md5: "adc1ba271db5de5b79c37251334043d0",
        sha1: "929a925b147c511ebbbed0878b83a8284e5d19a3",
        sha256: "c9303983071f93b12907b322f83bc5c330151cb267e4eb4be59260210f263409",
        registered: "922202704",
        dob: "242833337",
        phone: "(117)-374-9599",
        cell: "(225)-714-4100",
        SSN: "525-20-3862",
        picture: "http://api.randomuser.me/0.3/portraits/women/15.jpg"
      },
      seed: "blackOstrich"
      version: "0.3"
    }]
}
{% endhighlight %}

To start, include the <code>http://api.randomuser.me</code> url in your mixture project using one of the above techniques. Once you plug in the url, the data can be accessed by looping through it just as you would any other model. 

{% highlight html %}
{% raw %}
{% for result in model.results %}         
	<h3>
	    {{ result.user.name.first | capitalize }}
	    {{ result.user.name.last | capitalize }}
	</h3>
	<p>{{ result.user.email }}</p>
	<img src="{{ result.user.picture }}" alt="">
{% endfor %}
{% endraw %}
{% endhighlight %}

This will be output to:

### Mary Torres  
mary.torres71@example.com  
![Random User Image]({{baseurl}}/public/img/post_assets/randomuser/randomuser.jpg)

