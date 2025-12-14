
<div id="story2"></div>

## From Opinions to Attention: Reading the Market Through Google Searches


<div class="intro-box">
  <p>Survey data tells us what investors <strong>say</strong> they believe. But beliefs are not always fully articulated—sometimes they show up indirectly, through what people search for when they are worried, curious, or excited.</p>
</div>

### The Hidden Layer of Sentiment

To capture this more implicit layer of sentiment, we turn to **Google Trends**.

Every week, millions of searches reveal what market participants are paying attention to: concerns about **recession**, interest in **stocks**, curiosity about **ETFs**, or anxiety around **inflation**. Unlike surveys, these searches are not framed as predictions. They are spontaneous, often emotional, and can therefore reflect shifts in mood **before** they are consciously labeled as "bullish" or "bearish."

To make this usable, we classify search queries into three sentiment categories based on their economic meaning. Queries associated with growth, investing, and markets are labeled bullish; those linked to downturns and macroeconomic stress are labeled bearish; and broad index-related searches are treated as neutral. 
<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/bull.jpg"
       alt="Bull vs Bear Google Trends word cloud"
       class="plot">
  <figcaption>Search-based sentiment measures reveal attention patterns during market cycles</figcaption>
</figure>

Aggregating these weekly search intensities gives us a second, independent measure of market sentiment, one that comes from behavior rather than self-reporting.

---

### Search Patterns Over Time

When plotted over time, these search-based sentiment measures show **clear structure**: optimism builds gradually during expansions, while spikes in bearish searches tend to appear sharply during periods of stress. 
<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/sentiment_over_time.png"
       alt="Google Trends sentiment classification over time"
       class="plot">
  <figcaption>Search-based sentiment measures reveal attention patterns during market cycles</figcaption>
</figure>


<p class="key-insight">Google Trends does not replace investor surveys, it complements them. Surveys capture stated expectations about the future; search behavior captures attention in the present. When both move together, sentiment is likely <strong>strong and coordinated</strong>. When they diverge, it may signal <strong>hesitation, uncertainty, or a transition phase</strong>.</p>

---

<div class="section-transition">
  <h2>Letting the Market Define Itself</h2>
  <p class="transition-text">After tracing beliefs through surveys and attention through searches, we now ask the market to tell its own story.</p>
</div>

### Market Regimes: Data-Driven States

Using NASDAQ stocks and ETFs, we compute returns and group periods with similar behavior using **clustering**. These data-driven regimes become our definition of market states, the benchmark against which investor sentiment will be tested.

<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/daily_market_ret.png"
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
    <h4>⚪ Neutral Clusters</h4>
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

<div class="thesis-break">
  <p class="thesis-label">From here, the question becomes concrete</p>
  <p class="thesis-text">Is sentiment a power — or a mirror?</p>

  <p class="thesis-sub">
    Power: beliefs create reality. <span class="dot">•</span>
    Mirror: reality creates beliefs.
  </p>
</div>


---
