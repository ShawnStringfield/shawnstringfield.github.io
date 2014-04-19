---
layout: default
title: Quick Tip - Using Online Models in Mixture
tags: [Tip]
---

Did you know you can create models in Mixture from any online source that returns json data? There are two ways to go about this.

1. In your `mixture.json` file, specify the url of the source property like this: `"modelSource:" "path/to/jsondata"` 

2. In your template (for instance index.liquid), specify it at the very top and outside of your content block like this: {% raw %}`{% model 'path/to/json' %}`{% end raw %} 

Once you have established the data set you would like to work with, everything else is business as usual. 
