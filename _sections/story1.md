<div id="story1" class="section section-witnesses">

<div class="session-header">
  <h2 class="section-title">
    <span class="session-label">Session 2:</span> The Witness Profiles
  </h2>
  <p class="session-subtitle">Two Perspectives on the Patient</p>
</div>

<div class="therapist-note reveal no-box">
  <div class="note-header">
    <span class="note-icon"></span>
    <span class="note-label">Observation Method</span>
  </div>
  <div class="note-content">
    <p>To understand our patient, we interview two key witness groups separately. First, the Inner Circle (AAII survey respondents) — investors who explicitly report their expectations. Then, the General Public, whose unconscious fears and hopes are revealed through Google search behavior.</p>
  </div>
</div>

<hr class="section-divider">

<h2>Part A: The Inner Circle Speaks</h2>

<p class="lead reveal">Every week since 1987, members of the American Association of Individual Investors have answered one simple question:</p>

<div class="survey-question-box reveal pulse-on-hover no-box">
  <p class="survey-label">AAII Weekly Sentiment Survey</p>
  <h3 class="survey-question">"Where do you think the market will be in the next 6 months?"</h3>
  <div class="survey-options">
    <button class="option bullish" data-sentiment="bullish">
      <span class="option-title">Bullish</span>
      <span class="option-desc">The market will rise</span>
    </button>
    <button class="option neutral" data-sentiment="neutral">
      <span class="option-title">Neutral</span>
      <span class="option-desc">Markets will stay flat</span>
    </button>
    <button class="option bearish" data-sentiment="bearish">
      <span class="option-title">Bearish</span>
      <span class="option-desc">The market will fall</span>
    </button>

  </div>
  <button class="submit-btn" id="submitSentiment" disabled>Submit</button>
  <p class="response-message" id="responseMessage"></p>
</div>

<p>Whatever your choice, you've just joined millions of investors who make this call regularly. Now let's see what the data reveals about their collective psychology.</p>

<hr class="section-divider">

<h3>Finding 1: A Baseline of Optimism</h3>

<div class="plot-text-container reveal">
  <div class="plot-side">
    <figure class="interactive-figure" data-plot="sentiment-pie">
      {% include sentiment_pie_plot.html %}
      <figcaption>Distribution of investor sentiment across all observations (1987-2020)</figcaption>
    </figure>
  </div>

  <div class="text-side">
    <div class="finding-box">
      <h4>Clinical Observation</h4>
      <p>Across 33 years of data, <strong>bullish sentiment is the baseline state</strong>, accounting for 37.6% of all observations. Neutral and bearish views each represent about 31%.</p>
    </div>
    <p>This asymmetry reveals something fundamental about investor psychology: <strong>optimism is the default</strong>. Even accounting for recessions, crashes, and bear markets, investors expect growth more often than decline.</p>
    <p>This isn't irrational: markets have historically trended upward. But it raises a question: when investors turn bearish, is it because they're seeing something, or because they just saw something?</p>
  </div>
</div>

<div class="text-side">
  <p>The violin plots tell us more. <strong>Bullish sentiment</strong> centers around 35-40% with occasional surges above 60%. It's symmetric: optimism can be extreme in either direction.<strong>Bearish sentiment</strong> is different. It clusters around 25-30% but shows a right skew. This indicates that deep pessimism is rare, appearing only in acute stress episodes.<strong>Neutral sentiment</strong> is the most stable, consistently hovering near 30%.</p>
</div>

<div class="plot-side">
  <figure class="interactive-figure" data-plot="sentiment-violin">
    {% include sentiment_box_violin.html %}
    <figcaption>Distribution of sentiment levels showing median, spread, and outliers</figcaption>
  </figure>
</div>

<hr class="section-divider">

<h3>Finding 2: Beliefs Are Sticky</h3>

<p class="reveal">
  <p>Levels tell us what investors believe. But to understand behavior, we need to study <strong>transitions</strong> — how sentiment changes from week to week.</p>

<div class="transition-layout">
  <!-- Left side: Plot -->
  <div class="transition-plot-side">
    <div class="plot-figure reveal">
      <figure class="interactive-figure" data-plot="transition-matrix">
        <img src="{{ site.baseurl }}/assets/img/sentiment_state_transition_matrix.png"
             alt="Sentiment state transition matrix"
             class="transition-matrix-img">
        <figcaption>Week-to-week sentiment transition probabilities</figcaption>
      </figure>
    </div>
  </div>

  <!-- Right side: Explanation with vertically stacked cards -->
  <div class="transition-explanation-side">
    <div class="transition-matrix-explanation reveal">
      <h4>Reading the Transition Matrix</h4>
      <p class="matrix-intro">Each cell shows the probability of moving from one sentiment state (row) to another (column) in a single week:</p>

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
  </div>
</div>

<div class="insight-box reveal">
  <p><strong>Key Insight:</strong> Sentiment states are highly persistent. When investors are optimistic, they tend to stay optimistic. But crucially, <strong>pessimism is less sticky than optimism:</strong>  bad moods pass faster than good ones. This asymmetry will matter when we study market regimes.</p>
</div>

<hr class="section-divider">

<h3>Finding 3: Critical Moments — When Beliefs Shift Suddenly</h3>

<div class="section-intro-text reveal">
  <p>If most weeks look similar, the exceptions become revealing. We identified the largest week-to-week sentiment jumps: moments when investors rapidly reassessed their outlook.</p>
</div>

<div class="plot-figure reveal">
  <figure class="interactive-figure" data-plot="sentiment-shifts">
    {% include pct_change_prediction.html %}
    <figcaption>Top sudden sentiment shifts: critical moments in market psychology</figcaption>
  </figure>
</div>

<p class="reveal"><strong>Bearish sentiment shows the most sensitivity to shocks.</strong> When fear arrives, it arrives fast. These dates become our reference points. We'll compare them against market regime changes to see if sentiment shifted <em>before</em> or <em>after</em> the market moved.</p>

<hr class="section-divider">

<h2>Part B: The General Public Under the Microscope</h2>

<div class="therapist-note reveal no-box">
  <div class="note-header">
    <span class="note-icon"></span>
    <span class="note-label">Methodology Note</span>
  </div>
  <div class="note-content">
    <p>Survey data tells us what investors <strong>say</strong> they believe. But beliefs aren't always articulated. Sometimes they show up through what people search when worried, curious, or excited. Google Trends provides this unconscious pulse.</p>
  </div>
</div>

<h3>Search Query Classification</h3>

<p>Every week, millions of searches reveal what market participants are paying attention to. Unlike surveys, these searches are spontaneous, unfiltered, and often emotional.
We classified Google search queries into three sentiment categories based on their economic meaning:</p>

<div class="classification-layout">
  <!-- Left side: Buttons and Table -->
  <div class="classification-left">
    <div class="sentiment-switch-buttons">
      <button class="switch-btn active" data-sentiment="bullish">Bullish</button>
      <button class="switch-btn" data-sentiment="neutral">Neutral</button>
      <button class="switch-btn" data-sentiment="bearish">Bearish</button>
    </div>

    <div class="search-classification">
      <!-- Bullish (shown by default) -->
      <div class="search-category bullish-search active" data-category="bullish">
        <h4>Bullish Indicators</h4>
        <ul>
          <li>"Investment"</li>
          <li>"Stock market"</li>
          <li>"Exchange-traded fund"</li>
        </ul>
        <p class="search-meaning">Growth-oriented, opportunity-seeking</p>
      </div>

      <!-- Neutral (hidden by default) -->
      <div class="search-category neutral-search" data-category="neutral">
        <h4>Neutral Indicators</h4>
        <ul>
          <li>"Dow Jones"</li>
          <li>"Nasdaq"</li>
          <li>"S&P 500"</li>
        </ul>
        <p class="search-meaning">Information-seeking, monitoring</p>
      </div>

      <!-- Bearish (hidden by default) -->
      <div class="search-category bearish-search" data-category="bearish">
        <h4>Bearish Indicators</h4>
        <ul>
          <li>"Recession"</li>
          <li>"Unemployment"</li>
          <li>"Inflation"</li>
        </ul>
        <p class="search-meaning">Fear-driven, risk-focused</p>
      </div>
    </div>
  </div>

  <!-- Right side: Image -->
  <div class="classification-right">
    <figure class="plot-figure reveal">
      <img id="sentimentImage" 
           src="{{ site.baseurl }}/assets/img/bull.png"
           alt="Bull vs Bear Google Trends word cloud"
           class="sentiment-wordcloud">
      <figcaption>Word clouds showing the language of optimism versus pessimism in search behavior</figcaption>
    </figure>
  </div>
</div>

<hr class="section-divider">

<h3>Search Patterns Across Market Cycles</h3>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="sentiment-timeline">
    {% include google_over_time.html %}
    <figcaption>Dominant search sentiment over time: the crowd's unconscious mood</figcaption>
    <!-- INTERACTIVE: Zoomable timeline with brushing, hover to see specific search terms dominating each period, click periods to see breakdown -->
  </div>
</figure>

<div class="pattern-observation reveal">
  <h4>Pattern Observed</h4>
  <p><strong>Bullish searches build gradually</strong> during expansions; people slowly become more interested in investing as confidence grows.</p>
  <p><strong>Bearish searches spike sharply</strong> during stress; fear triggers immediate information-seeking. The asymmetry mirrors what we saw in AAII sentiment.</p>
</div>
<hr class="section-divider">

<h3>Correlation: Do the Two Witnesses Agree?</h3>

<div class="correlation-layout">
  <!-- Left side: Plot with buttons -->
  <div class="correlation-plot-container">

    <div class="sentiment-filter-buttons">
      <button class="filter-btn active" data-category="all">All Categories</button>
      <button class="filter-btn" data-category="bearish">Bearish</button>
      <button class="filter-btn" data-category="bullish">Bullish</button>
      <button class="filter-btn" data-category="neutral">Neutral</button>
    </div>

    <figure class="plot-figure reveal">
      <div class="interactive-figure" data-plot="correlation-matrix">
        <img
          id="correlationImage"
          data-baseurl="{{ site.baseurl }}"
          src="{{ site.baseurl }}/assets/img/sentiment_correlation_all.png"
          alt="Correlation between sentiment measures"
          class="plot"
        >
        <figcaption>
          Correlation matrices showing relationships between search queries and AAII sentiment
        </figcaption>
      </div>
    </figure>

  </div>

  <!-- Right side: Explanation box -->
  <div class="correlation-explanation">
    <h4 id="explanationTitle">Understanding the Correlations</h4>
    <p id="explanationText">
      These correlation matrices reveal how different Google search terms align with investor sentiment. 
      Red cells indicate strong positive correlations, while blue cells show negative correlations. 
      Click on a category above to explore specific sentiment patterns.
    </p>

    <div class="correlation-findings reveal">
    <h4>Key Correlations</h4>
    <ul>
      <li><strong>Within-category queries correlate strongly</strong> — "Recession" and "Unemployment" move together, as do bullish terms</li>
      <li><strong>Bearish and Bullish searches show some negative correlation</strong> — when fear rises, optimism falls</li>
      <li><strong>AAII and Google sentiment are related but distinct</strong> — they capture different aspects of the same underlying psychology</li>
    </ul>
    </div>
  </div>
</div>



<div class="key-insight reveal gradient-border no-box">
  <p>Google Trends does not replace investor surveys — it <strong>complements</strong> them. Surveys capture stated expectations about the future; search behavior captures attention in the present. When both move together, sentiment is <strong>strong and coordinated</strong>. When they diverge, it may signal <strong>hesitation, uncertainty, or a transition phase</strong>.</p>
</div>

<hr class="section-divider">

<div class="session-summary reveal">
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

<div class="session-transition reveal">
  <p class="transition-label">Next Session Preview</p>
  <p class="transition-text">We've profiled the witnesses. Now comes the critical question: <strong>Who moves first?</strong> Does sentiment lead market movements, or does it simply follow them?</p>
  <p class="transition-cta">Time for the timeline analysis.</p>
</div>
