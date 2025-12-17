<div id="story1" class="section section-witnesses">

<div class="session-header">
  <div class="session-number">Session 2</div>
  <h2 class="section-title">The Witness Profiles</h2>
  <p class="session-subtitle">Two Perspectives on the Patient</p>
</div>

<div class="therapist-note">
  <div class="note-header">
    <span class="note-icon">🔍</span>
    <span class="note-label">Observation Method</span>
  </div>
  <div class="note-content">
    <p>To understand our patient, we interview two key witness groups separately. First, the Inner Circle (AAII survey respondents) — investors who explicitly report their expectations. Then, the General Public — whose unconscious fears and hopes are revealed through Google search behavior.</p>
  </div>
</div>

---

## Part A: The Inner Circle Speaks

<p class="lead">Every week since 1987, members of the American Association of Individual Investors have answered one simple question:</p>

<div class="survey-question-box">
  <p class="survey-label">AAII Weekly Sentiment Survey</p>
  <h3 class="survey-question">"Where do you think the market will be in the next 6 months?"</h3>
  <div class="survey-options">
    <span class="option bullish">Bullish</span>
    <span class="option neutral">Neutral</span>
    <span class="option bearish">Bearish</span>
  </div>
</div>

<p>Before we look at what investors actually believe, take a moment to answer the same question they face every week:</p>

#### Where do you think the market is headed over the next six months?

{% include click.html %}

<p>Whatever your choice, you've just joined millions of investors who make this call regularly. Now let's see what the data reveals about their collective psychology.</p>

---

### Finding 1: A Baseline of Optimism

<div class="plot-text-container">
  <div class="plot-side">
    <figure>
      <img src="{{ site.baseurl }}/assets/img/sentiment_state_pie_chart.png"
           alt="Pie chart showing distribution of sentiment states">
      <figcaption>Distribution of investor sentiment across all observations (1987-2020)</figcaption>
    </figure>
  </div>

  <div class="text-side">
    <div class="finding-box">
      <h4>Clinical Observation</h4>
      <p>Across 33 years of data, <strong>bullish sentiment is the baseline state</strong>, accounting for 37.6% of all observations. Neutral and bearish views each represent about 31%.</p>
    </div>
    <p>This asymmetry reveals something fundamental about investor psychology: <strong>optimism is the default</strong>. Even accounting for recessions, crashes, and bear markets, investors expect growth more often than decline.</p>
    <p>This isn't irrational — markets have historically trended upward. But it raises a question: when investors turn bearish, is it because they're seeing something, or because they just saw something?</p>
  </div>
</div>

<div class="plot-text-container reverse">
  <div class="plot-side">
    <figure>
      <img src="{{ site.baseurl }}/assets/img/sentiment_box_violin_plots.png"
           alt="Sentiment distribution boxplot">
      <figcaption>Distribution of sentiment levels showing median, spread, and outliers</figcaption>
    </figure>
  </div>

  <div class="text-side">
    <p>The violin plots tell us more. <strong>Bullish sentiment</strong> centers around 35-40% with occasional surges above 60%. It's symmetric — optimism can be extreme in either direction.</p>
    <p><strong>Bearish sentiment</strong> is different. It clusters around 25-30% but shows a right skew — deep pessimism is rare, appearing only in acute stress episodes.</p>
    <p><strong>Neutral sentiment</strong> is the most stable, consistently hovering near 30%.</p>
  </div>
</div>

---

### Finding 2: Beliefs Are Sticky

<div class="section-intro-text">
  <p>Levels tell us what investors believe. But to understand behavior, we need to study <strong>transitions</strong> — how sentiment changes from week to week.</p>
</div>

<div class="plot-figure">
  <figure>
    <img src="{{ site.baseurl }}/assets/img/sentiment_state_transition_matrix.png"
         alt="Sentiment state transition matrix">
    <figcaption>Week-to-week sentiment transition probabilities</figcaption>
  </figure>
</div>

<div class="transition-matrix-explanation">
  <h4>Reading the Transition Matrix</h4>
  <p>Each cell shows the probability of moving from one sentiment state (row) to another (column) in a single week:</p>

  <div class="matrix-highlights">
    <div class="matrix-stat">
      <span class="stat-value">77%</span>
      <span class="stat-label">Bullish → Bullish</span>
      <span class="stat-meaning">Optimism is highly persistent</span>
    </div>
    <div class="matrix-stat">
      <span class="stat-value">64%</span>
      <span class="stat-label">Bearish → Bearish</span>
      <span class="stat-meaning">Pessimism is sticky too, but less so</span>
    </div>
    <div class="matrix-stat">
      <span class="stat-value">23%</span>
      <span class="stat-label">Bearish → Bullish</span>
      <span class="stat-meaning">Recovery from pessimism is relatively fast</span>
    </div>
    <div class="matrix-stat">
      <span class="stat-value">11%</span>
      <span class="stat-label">Bullish → Bearish</span>
      <span class="stat-meaning">Falls into pessimism are rare</span>
    </div>
  </div>
</div>

<div class="insight-box">
  <p><strong>Key Insight:</strong> Sentiment states are highly persistent. When investors are optimistic, they tend to stay optimistic. But crucially, <strong>pessimism is less sticky than optimism</strong> — bad moods pass faster than good ones. This asymmetry will matter when we study market regimes.</p>
</div>

---

### Finding 3: Critical Moments — When Beliefs Shift Suddenly

<div class="section-intro-text">
  <p>If most weeks look similar, the exceptions become revealing. We identified the largest week-to-week sentiment jumps — moments when investors rapidly reassessed their outlook.</p>
</div>

<div class="plot-figure">
  <figure>
    <img src="{{ site.baseurl }}/assets/img/top_sudden_sentiment_changes.png"
         alt="Largest sentiment changes over time">
    <figcaption>Top sudden sentiment shifts — critical moments in market psychology</figcaption>
  </figure>
</div>

<p><strong>Bearish sentiment shows the most sensitivity to shocks.</strong> When fear arrives, it arrives fast. These dates become our reference points — we'll compare them against market regime changes to see if sentiment shifted <em>before</em> or <em>after</em> the market moved.</p>

<!-- IMAGE PLACEHOLDER: therapy-themed illustration of an anxious investor looking at screens -->
<div class="image-placeholder">
  <p class="placeholder-label">Suggested Image</p>
  <p class="placeholder-desc">Illustration: A nervous investor surrounded by screens showing red numbers — representing the acute stress moments when sentiment flips</p>
</div>

---

## Part B: The General Public Under the Microscope

<div class="therapist-note">
  <div class="note-header">
    <span class="note-icon">🧠</span>
    <span class="note-label">Methodology Note</span>
  </div>
  <div class="note-content">
    <p>Survey data tells us what investors <strong>say</strong> they believe. But beliefs aren't always articulated — sometimes they show up through what people search when worried, curious, or excited. Google Trends provides this unconscious pulse.</p>
  </div>
</div>

<p class="lead">Every week, millions of searches reveal what market participants are paying attention to. Unlike surveys, these searches are spontaneous, unfiltered, and often emotional.</p>

### Search Query Classification

<p>We classified Google search queries into three sentiment categories based on their economic meaning:</p>

<div class="search-classification">
  <div class="search-category bullish-search">
    <h4>Bullish Indicators</h4>
    <ul>
      <li>"Investment"</li>
      <li>"Stock market"</li>
      <li>"Exchange-traded fund"</li>
    </ul>
    <p class="search-meaning">Growth-oriented, opportunity-seeking</p>
  </div>

  <div class="search-category neutral-search">
    <h4>Neutral Indicators</h4>
    <ul>
      <li>"Dow Jones"</li>
      <li>"Nasdaq"</li>
      <li>"S&P 500"</li>
    </ul>
    <p class="search-meaning">Information-seeking, monitoring</p>
  </div>

  <div class="search-category bearish-search">
    <h4>Bearish Indicators</h4>
    <ul>
      <li>"Recession"</li>
      <li>"Unemployment"</li>
      <li>"Inflation"</li>
    </ul>
    <p class="search-meaning">Fear-driven, risk-focused</p>
  </div>
</div>

<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/bull.png"
       alt="Bull vs Bear Google Trends word cloud"
       class="plot">
  <figcaption>Word clouds showing the language of optimism versus pessimism in search behavior</figcaption>
</figure>

---

### Search Patterns Across Market Cycles

<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/sentiment_over_time.png"
       alt="Google Trends sentiment classification over time"
       class="plot">
  <figcaption>Dominant search sentiment over time — the crowd's unconscious mood</figcaption>
</figure>

<div class="pattern-observation">
  <h4>Pattern Observed</h4>
  <p><strong>Bullish searches build gradually</strong> during expansions — people slowly become more interested in investing as confidence grows.</p>
  <p><strong>Bearish searches spike sharply</strong> during stress — fear triggers immediate information-seeking. The asymmetry mirrors what we saw in AAII sentiment.</p>
</div>

---

### Correlation: Do the Two Witnesses Agree?

<figure class="plot-figure">
  <img src="{{ site.baseurl }}/assets/img/sentiment_correlation_matrices.png"
       alt="Correlation between sentiment measures"
       class="plot">
  <figcaption>Correlation matrices showing relationships between search queries and AAII sentiment</figcaption>
</figure>

<div class="correlation-findings">
  <h4>Key Correlations</h4>
  <ul>
    <li><strong>Within-category queries correlate strongly</strong> — "Recession" and "Unemployment" move together, as do bullish terms</li>
    <li><strong>Bearish and Bullish searches show some negative correlation</strong> — when fear rises, optimism falls</li>
    <li><strong>AAII and Google sentiment are related but distinct</strong> — they capture different aspects of the same underlying psychology</li>
  </ul>
</div>

<div class="key-insight">
  <p>Google Trends does not replace investor surveys — it <strong>complements</strong> them. Surveys capture stated expectations about the future; search behavior captures attention in the present. When both move together, sentiment is <strong>strong and coordinated</strong>. When they diverge, it may signal <strong>hesitation, uncertainty, or a transition phase</strong>.</p>
</div>

---

<div class="session-summary">
  <h3>Session 2 Summary: What the Witnesses Told Us</h3>
  <div class="summary-points">
    <div class="summary-point">
      <span class="point-number">1</span>
      <p><strong>Optimism is the baseline.</strong> Investors are bullish more often than bearish — this is their natural state.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">2</span>
      <p><strong>Beliefs are sticky.</strong> Once in a sentiment state, investors tend to stay there — but pessimism fades faster than optimism.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">3</span>
      <p><strong>Fear arrives suddenly.</strong> Bearish sentiment shows the largest and fastest changes during market stress.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">4</span>
      <p><strong>Two signals, same psychology.</strong> AAII surveys and Google searches capture different but related aspects of investor sentiment.</p>
    </div>
  </div>
</div>

<div class="session-transition">
  <p class="transition-label">Next Session Preview</p>
  <p class="transition-text">We've profiled the witnesses. Now comes the critical question: <strong>Who moves first?</strong> Does sentiment lead market movements, or does it simply follow them?</p>
  <p class="transition-cta">Time for the timeline analysis.</p>
</div>

</div>
