---
layout: page
title: ""
body-class: longform-page
css:
  - assets/css/style.css
  - assets/css/index.css
---


<!-- FULL-WINDOW IMAGE -->
<section class="index-hero">
  <img src="{{ site.baseurl }}/assets/img/title.jpg"
       alt="Clustered market regimes"
       class="hero-image">
</section>

<!-- TITLE BELOW IMAGE -->
<section class="index-title">
  <h1>Do Markets Listen to Investors  or Are Investors Just Echoing the Market?</h1>
</section>

<!-- NORMAL LONGFORM CONTENT -->
<div class="longform">

{% capture s %}{% include_relative _sections/intro.md %}{% endcapture %}
{{ s | markdownify }}

{% capture s %}{% include_relative _sections/story1.md %}{% endcapture %}
{{ s | markdownify }}

{% capture s %}{% include_relative _sections/story2.md %}{% endcapture %}
{{ s | markdownify }}

{% capture s %}{% include_relative _sections/results.md %}{% endcapture %}
{{ s | markdownify }}

</div>
