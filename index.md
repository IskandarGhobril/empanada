---
layout: page
title: ""
body-class: longform-page
hide_header: true
hide_footer: true
css:
  - assets/css/style.css
  - assets/css/animations.css
  - assets/css/index.css
---

<!-- HERO: THE THERAPY OFFICE -->
<section class="therapy-hero">
  <!-- Floating stock symbol particles -->
  <div class="particles-container">
    <span class="particle" style="left: 10%; animation-delay: 0s;">AAPL</span>
    <span class="particle" style="left: 20%; animation-delay: 2s;">MSFT</span>
    <span class="particle" style="left: 30%; animation-delay: 4s;">GOOGL</span>
    <span class="particle" style="left: 40%; animation-delay: 1s;">AMZN</span>
    <span class="particle" style="left: 50%; animation-delay: 3s;">TSLA</span>
    <span class="particle" style="left: 60%; animation-delay: 5s;">META</span>
    <span class="particle" style="left: 70%; animation-delay: 2.5s;">NVDA</span>
    <span class="particle" style="left: 80%; animation-delay: 4.5s;">JPM</span>
    <span class="particle" style="left: 90%; animation-delay: 1.5s;">V</span>
  </div>
  <div class="therapy-hero-overlay"></div>
  <div class="therapy-hero-content">
    <div class="clinic-badge pulse-purple">empanADA Behavioral Finance Clinic</div>
    <h1 class="therapy-title glow-text-subtle">The Market Goes to Therapy</h1>
    <p class="therapy-tagline">A behavioral diagnosis of investor sentiment and market dynamics</p>

    <!-- Emotion Meter Preview -->
    <div class="hero-emotion-meter">
      <div class="emotion-meter">
        <div class="meter-segment fear"></div>
        <div class="meter-segment worry"></div>
        <div class="meter-segment neutral"></div>
        <div class="meter-segment hope"></div>
        <div class="meter-segment greed"></div>
      </div>
      <div class="meter-labels">
        <span>Fear</span>
        <span>Greed</span>
      </div>
    </div>

    <div class="scroll-indicator">
      <span>Begin Session</span>
      <div class="scroll-arrow"></div>
    </div>
  </div>
</section>

<!-- STOCK TICKER TAPE -->
<div class="ticker-tape">
  <div class="ticker-content">
    <div class="ticker-item">
      <span class="ticker-symbol">SENTIMENT</span>
      <span class="ticker-price">Bullish 37.6%</span>
      <span class="ticker-change up">▲ baseline</span>
    </div>
    <div class="ticker-item">
      <span class="ticker-symbol">CORRELATION</span>
      <span class="ticker-price">ρ = 0.33</span>
      <span class="ticker-change up">significant</span>
    </div>
    <div class="ticker-item">
      <span class="ticker-symbol">LEAD-LAG</span>
      <span class="ticker-price">-26 weeks</span>
      <span class="ticker-change down">▼ reactive</span>
    </div>
    <div class="ticker-item">
      <span class="ticker-symbol">VAR</span>
      <span class="ticker-price">Returns → Sentiment</span>
      <span class="ticker-change up">▲ 1394.83</span>
    </div>
    <div class="ticker-item">
      <span class="ticker-symbol">GRANGER</span>
      <span class="ticker-price">p = 0.047</span>
      <span class="ticker-change up">* sig</span>
    </div>
    <div class="ticker-item">
      <span class="ticker-symbol">DIAGNOSIS</span>
      <span class="ticker-price">REACTIVE</span>
      <span class="ticker-change down">not predictive</span>
    </div>
    <!-- Duplicate for seamless loop -->
    <div class="ticker-item">
      <span class="ticker-symbol">SENTIMENT</span>
      <span class="ticker-price">Bullish 37.6%</span>
      <span class="ticker-change up">▲ baseline</span>
    </div>
    <div class="ticker-item">
      <span class="ticker-symbol">CORRELATION</span>
      <span class="ticker-price">ρ = 0.33</span>
      <span class="ticker-change up">significant</span>
    </div>
    <div class="ticker-item">
      <span class="ticker-symbol">LEAD-LAG</span>
      <span class="ticker-price">-26 weeks</span>
      <span class="ticker-change down">▼ reactive</span>
    </div>
    <div class="ticker-item">
      <span class="ticker-symbol">VAR</span>
      <span class="ticker-price">Returns → Sentiment</span>
      <span class="ticker-change up">▲ 1394.83</span>
    </div>
  </div>
</div>

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
