---
layout: page
title: ""
body-class: longform-page
css:
  - assets/css/style.css
  - assets/css/index.css
---

<!-- HERO: THE THERAPY OFFICE -->
<section class="therapy-hero">
  <div class="therapy-hero-overlay"></div>
  <div class="therapy-hero-content">
    <div class="clinic-badge">empanADA Behavioral Finance Clinic</div>
    <h1 class="therapy-title">The Market Goes to Therapy</h1>
    <p class="therapy-tagline">A behavioral diagnosis of investor sentiment and market dynamics</p>
    <div class="scroll-indicator">
      <span>Begin Session</span>
      <div class="scroll-arrow"></div>
    </div>
  </div>
</section>

<!-- CASE FILE INTRO -->
<section class="case-file-banner">
  <div class="case-file-content">
    <div class="case-stamp">CONFIDENTIAL</div>
    <div class="case-details">
      <span class="case-label">Patient:</span> <span class="case-value">The Market (NASDAQ)</span>
      <span class="case-divider">|</span>
      <span class="case-label">Data Period:</span> <span class="case-value">1987 - 2020</span>
      <span class="case-divider">|</span>
      <span class="case-label">Lead Analysts:</span> <span class="case-value">empanADA Research Team</span>
    </div>
  </div>
</section>

<!-- NORMAL LONGFORM CONTENT -->
<div class="longform">

{% capture s %}{% include_relative _sections/intro.md %}{% endcapture %}
{{ s | markdownify }}

{% capture s %}{% include_relative _sections/story1.md %}{% endcapture %}
{{ s | markdownify }}

{% capture s %}{% include_relative _sections/story2.md %}{% endcapture %}
{{ s | markdownify }}

{% capture s %}{% include_relative _sections/story3.md %}{% endcapture %}
{{ s | markdownify }}

{% capture s %}{% include_relative _sections/story4.md %}{% endcapture %}
{{ s | markdownify }}

{% capture s %}{% include_relative _sections/results.md %}{% endcapture %}
{{ s | markdownify }}

</div>

<!-- FOOTER SIGNATURE -->
<section class="clinic-footer">
  <div class="clinic-footer-content">
    <div class="clinic-logo-footer">empanADA</div>
    <p class="clinic-motto">"Understanding markets through the lens of behavior"</p>
    <p class="clinic-credits">A data story created for EPFL CS-401 Applied Data Analysis</p>
  </div>
</section>
