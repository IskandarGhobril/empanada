---
layout: page
title: ""
---
<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/title.jpg"
       alt="Clustered market regimes"
       class="plot">
  <figcaption>Market regimes identified through unsupervised clustering</figcaption>
</figure>

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
