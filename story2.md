---
layout: page
title: Story2
---

<div class="chapter-header">
  <span class="chapter-icon">🔍</span>
  <h1>From Opinions to Attention: Reading the Market Through Google Searches</h1>
</div>

<div class="intro-box">
  <p>Survey data tells us what investors <strong>say</strong> they believe. But beliefs are not always fully articulated—sometimes they show up indirectly, through what people search for when they are worried, curious, or excited.</p>
</div>

## The Hidden Layer of Sentiment

To capture this more implicit layer of sentiment, we turn to **Google Trends**.

Every week, millions of searches reveal what market participants are paying attention to: concerns about **recession**, interest in **stocks**, curiosity about **ETFs**, or anxiety around **inflation**. Unlike surveys, these searches are not framed as predictions. They are spontaneous, often emotional, and can therefore reflect shifts in mood **before** they are consciously labeled as "bullish" or "bearish."

### Classifying Search Behavior

<div class="classification-grid">
  <div class="sentiment-category bullish-cat">
    <div class="cat-header">
      <span class="cat-icon">📈</span>
      <h3>Bullish Searches</h3>
    </div>
    <ul class="search-terms">
      <li>Investment</li>
      <li>Stock market</li>
      <li>Exchange-traded fund</li>
      <li>Growth stocks</li>
    </ul>
    <p class="cat-meaning">Queries associated with growth, investing, and market participation</p>
  </div>
  
  <div class="sentiment-category neutral-cat">
    <div class="cat-header">
      <span class="cat-icon">📊</span>
      <h3>Neutral Searches</h3>
    </div>
    <ul class="search-terms">
      <li>S&P 500</li>
      <li>NASDAQ</li>
      <li>Market index</li>
      <li>Federal Reserve</li>
    </ul>
    <p class="cat-meaning">Broad index-related searches showing general market attention</p>
  </div>
  
  <div class="sentiment-category bearish-cat">
    <div class="cat-header">
      <span class="cat-icon">📉</span>
      <h3>Bearish Searches</h3>
    </div>
    <ul class="search-terms">
      <li>Recession</li>
      <li>Unemployment</li>
      <li>Inflation</li>
      <li>Market crash</li>
    </ul>
    <p class="cat-meaning">Queries linked to downturns and macroeconomic stress</p>
  </div>
</div>

Aggregating these weekly search intensities gives us a **second, independent measure** of market sentiment—one that comes from behavior rather than self-reporting.

---

## Search Patterns Over Time

<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/google_trends_sentiment.png"
       alt="Google Trends sentiment classification over time"
       class="plot">
  <figcaption>Search-based sentiment measures reveal attention patterns during market cycles</figcaption>
</figure>

When plotted over time, these search-based sentiment measures show **clear structure**: optimism builds gradually during expansions, while spikes in bearish searches tend to appear sharply during periods of stress. 

<div class="insight-box">
  <p><strong>Key Observation:</strong> These spikes are often short-lived, suggesting that fear-driven attention surges quickly and then dissipates.</p>
</div>

### Two Windows Into Sentiment

<div class="comparison-table">
  <table>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>📋 Survey Data</th>
        <th>🔍 Search Data</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>What it captures</strong></td>
        <td>Stated expectations</td>
        <td>Revealed attention</td>
      </tr>
      <tr>
        <td><strong>Time orientation</strong></td>
        <td>Future (6 months ahead)</td>
        <td>Present (current concerns)</td>
      </tr>
      <tr>
        <td><strong>Nature</strong></td>
        <td>Deliberate, structured</td>
        <td>Spontaneous, emotional</td>
      </tr>
      <tr>
        <td><strong>Signal</strong></td>
        <td>What people think</td>
        <td>What people worry about</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="key-insight">When both move together, sentiment is likely <strong>strong and coordinated</strong>. When they diverge, it may signal <strong>hesitation, uncertainty, or a transition phase</strong>.</p>

---

<div class="section-transition">
  <h2>Letting the Market Define Itself</h2>
  <p class="transition-text">After tracing beliefs through surveys and attention through searches, we now ask the market to tell its own story.</p>
</div>

## Market Regimes: Data-Driven States

Using NASDAQ stocks and ETFs, we compute returns and group periods with similar behavior using **clustering**. These data-driven regimes become our definition of market states—the benchmark against which investor sentiment will be tested.

<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/favicon.png"
       alt="Market returns over time"
       class="plot">
  <figcaption>Weekly NASDAQ returns revealing distinct behavioral patterns</figcaption>
</figure>

Rather than **assuming** what a "bull" or "bear" market looks like, we use clustering on returns to uncover distinct market states directly from the data. Weeks with similar return behavior are grouped together, forming regimes that share common dynamics.

<div class="regime-cards">
  <div class="regime-card regime-bull">
    <h4>🟢 Bullish Clusters</h4>
    <p>Strong positive returns and low volatility</p>
  </div>
  
  <div class="regime-card regime-neutral">
    <h4>🟡 Neutral Clusters</h4>
    <p>Mixed performance with stagnation</p>
  </div>
  
  <div class="regime-card regime-bear">
    <h4>🔴 Bearish Clusters</h4>
    <p>Drawdowns and heightened volatility</p>
  </div>
</div>

<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/favicon.png"
       alt="Clustered market regimes"
       class="plot">
  <figcaption>Market regimes identified through unsupervised clustering</figcaption>
</figure>

Once market states are defined this way, we can place them on the **same timeline** as investor beliefs and Google search attention.

---

<div class="final-question">
  <div class="question-content">
    <p class="question-intro">From here, the question becomes concrete:</p>
    <h2 class="central-question">Is sentiment a power or a mirror?</h2>
    <div class="question-icons">
      <span class="icon-option">💪 Power: beliefs create reality</span>
      <span class="icon-divider">or</span>
      <span class="icon-option">🪞 Mirror: reality creates beliefs</span>
    </div>
  </div>
</div>

---

