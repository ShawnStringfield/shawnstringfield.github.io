---
layout: default
title: Blogging with Mixture
---

Yesterday I began working on my portfolio site and using Mixture for the Front-End work. I'm using collections to store each client's project. It's been a while sense I used collections in a mixture project and was a bit confused about the collection structure and which data points are displayed in which templates so I decided to jot down the proccess I used to get this all working correctly. 

My folder structure consisted of:

- collections
  - portfolio
    - client.md
- templates
  - layouts
    - client.liquid
  - index.liquid

In Mixture, the master layout page (whatever you'd like to call it) holds the main structure for a site or a given section within a site. Each collection item's data gets piped directly to this master layout via the collection page's Frontmatter. 

As an example:

{% highlight yaml %}
---
title: TItle of Collection Item
date: February 17, 2014
---
{% endhighlight %}

The above is an example of Frontmatter within a given collection item. Then, you can access that data directly in your master layout file like so:

{% highlight html %}
{% raw %}
{{ model.title }}
{{ model.date }}
{% endraw %}
{% endhighlight %}

It's as simple as that. These two pages will give you the desired look and feel for a particular collection item's detailed page. In order to reference a list of collection items similiar to what you may see on a homepage of a blog, you will loop through collection items in a index.iquid file. The index.liquid file can use any master layout you wish. You can pull in the default layout (which is layout.liquid) or you can create your own for this purpose. 

If you wre to use the default <code>layout.liquid</code>, just add the following:

{% highlight html %}
{% raw %}
{% block content %}{% endblock %}
{% endraw %}
{% endhighlight %}

You may wish to name the block however you see fit but a standard biolerplate from mitxure will contain the name of "content". You can use as many blocks as you wish per template but I won't go into too much detail here as blocks are not the topic of this discussion. 

Back inside the <code>index.liquid</code> file, you will loop through the collection like so:

{% highlight html %}
{% raw %}
{% block content %}
  {% collection 'collection_name' %}
    {% for item in collection.items %}
      ... loop through collection using standard liquid variables
    {% endfor %}
  {% endcollection %}
{% endblock %}
{% endraw %}
{% endhighlight %}
