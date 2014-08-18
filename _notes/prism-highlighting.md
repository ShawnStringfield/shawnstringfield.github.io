---
title: Issues with Prism Highlighting
layout: default
---

Welcome to the docs wiki!

### Dev Notes
I came across a issue with using prism syntax highligting today. To force prism.js not to strip html tags, you have to do one of the following:

1. Use html entities for the open and close brackets like this: ```html <code class="language-markup">&lt;p class="hey">This is a paragraph&lt;/p></code>```
2. Use the file highlight plugin and call the file into the code like this: ```<pre data-src="templates/includes/test.html"></pre>```