<div id="story3" class="section section-mood-cycles">

<div class="session-header">
  <h2 class="section-title">
    <span class="session-label">Session 4:</span> The Mood Cycles
  </h2>
  <p class="session-subtitle">Identifying States</p>
</div>

<div class="therapist-note reveal no-box">
  <div class="note-header">
    <span class="note-icon"></span>
    <span class="note-label">Behavioral Analysis</span>
  </div>
  <div class="note-content">
    <p>Patients don't exist in a single mood, they cycle through distinct psychological states. Our patient, The Market, is no different. This session examines these mood cycles using <strong>Markov regime models</strong> and tests whether investor sentiment affects state transitions.</p>
  </div>
</div>

<hr class="section-divider">

<h2>First, Define the Patient's Moods</h2>

<p class="lead reveal">Before analyzing mood cycles, we need an objective way to classify the market's own states. We let the data speak for itself.</p>

<p class="reveal">We use a <strong>Gaussian Mixture Model (GMM)</strong> with 3 components to identify distinct market regimes. Unlike simple thresholds, GMM provides soft membership probabilities and handles the fuzzy boundaries between real market states. Features include 6-month forward returns, realized volatility, and market momentum.</p>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="market-returns">
    <img src="{{ site.baseurl }}/assets/img/clustering.png"
         alt="GMM clustering of market regimes"
         class="plot">
    <figcaption>GMM clustering reveals three distinct market regimes. Each color represents a different regime, with the model capturing natural boundaries between bullish, neutral, and bearish states.</figcaption>
  </div>
</figure>

<div class="regime-cards reveal">
  <div class="regime-card regime-bull">
    <h4>Bullish Regime</h4>
    <p>Higher returns, moderate volatility. The market is trending upward with confidence.</p>
  </div>

  <div class="regime-card regime-neutral">
    <h4>Neutral Regime</h4>
    <p>Mixed performance, sideways movement. The market is indecisive.</p>
  </div>

  <div class="regime-card regime-bear">
    <h4>Bearish Regime</h4>
    <p>Lower/negative returns, heightened volatility. Stress and drawdowns.</p>
  </div>
</div>

<hr class="section-divider">

<h2>Regime Transitions</h2>

<p class="lead reveal">A <strong>Markov model</strong> assumes the market exists in one of several discrete states, and the probability of transitioning to the next state depends only on the current state, not the entire history. The market's "mood" today tells us something about tomorrow's mood.</p>

<h3>Unconditional Transitions</h3>

<p class="reveal">First, we examine how the market transitions between states <em>without</em> considering external factors like sentiment.</p>

<div class="transition-layout">
  <!-- Left side: Plot -->
  <div class="transition-plot-side">
    <div class="plot-figure reveal">
      <figure class="interactive-figure" data-plot="transition-matrix">
        <img src="{{ site.baseurl }}/assets/img/unconditional_transition_matrix.png"
             alt="Unconditional Market Regime Transition Matrix"
             class="transition-matrix-img">
        <figcaption>Market regime transition probabilities</figcaption>
      </figure>
    </div>
  </div>

  <!-- Right side: Explanation -->
  <div class="transition-explanation-side">
    <div class="transition-matrix-explanation reveal">
      <h4>Regime Persistence Patterns</h4>
      <p class="matrix-intro">Each cell shows the probability of moving from one market state (row) to another (column):</p>

      <div class="matrix-highlights">
        <div class="matrix-stat">
          <span class="stat-value">84%</span>
          <span class="stat-label">Bull → Bull</span>
          <span class="stat-meaning">Bull markets are self-reinforcing</span>
        </div>
        <div class="matrix-stat">
          <span class="stat-value">90%</span>
          <span class="stat-label">Neutral → Neutral</span>
          <span class="stat-meaning">Neutral states are most persistent</span>
        </div>
        <div class="matrix-stat">
          <span class="stat-value">88%</span>
          <span class="stat-label">Bear → Bear</span>
          <span class="stat-meaning">Downturns are sticky</span>
        </div>
      </div>
    </div>
  </div>
</div>

<p class="reveal"><strong>Key Pattern:</strong> All three regimes show high persistence (84-90%), meaning once established, they tend to continue. Interestingly, neutral regimes are the most persistent at 90%, while bull markets persist at 84%. This suggests the market often stays in "wait-and-see" mode before committing to a direction.</p>

<hr class="section-divider">

<h3>Next: Where Does the Market Spend Its Time?</h3>

<p class="reveal">A key property of Markov chains is that, under certain conditions, they converge to a <strong>stationary distribution</strong> — a stable long-run probability distribution over states that no longer changes with additional transitions.

<strong>Why does this matter for our analysis?</strong>

If the empirical (observed) distribution of market regimes closely matches the theoretical stationary distribution, it suggests:
1. The market has been observed long enough to reflect its equilibrium behavior
2. The Markov model provides a reasonable description of regime dynamics
3. The regime frequencies we observe are representative of long-term expectations</p>

<div class="transition-layout">
  <!-- Left side: Plot -->
  <div class="transition-plot-side">
    <div class="plot-figure reveal">
      <figure class="interactive-figure" data-plot="stationary-dist">
        <img src="{{ site.baseurl }}/assets/img/empirical_stationary_dist.png"
             alt="Empirical vs Stationary Distribution"
             class="transition-matrix-img">
        <figcaption>Empirical vs. theoretical distribution</figcaption>
      </figure>
    </div>
  </div>

  <!-- Right side: Explanation -->
  <div class="transition-explanation-side">
    <div class="transition-matrix-explanation reveal">
      <h4>What Are We Comparing?</h4>
      <p><strong>Stationary (theoretical):</strong> Given the transition probabilities, math tells us how often the market <em>should</em> be in each state if we ran the process forever.</p>
      <p><strong>Empirical (observed):</strong> How often the market <em>actually was</em> in each state. In our data: Neutral (829 weeks), Bullish (413 weeks), Bearish (412 weeks) across 1,654 total observations.</p>
      <p><strong>Why it matters:</strong> If these match, our Markov model is a good fit. The market's mood cycling has been consistent over time.</p>
      <p class="reveal"><strong>Finding:</strong> Close match. The market spends roughly half its time in neutral territory, with bullish and bearish periods roughly equal—consistent with the theoretical prediction.</p>
    </div>
  </div>
</div>

<hr class="section-divider">

<h3>How Long Do Moods Last?</h3>

<p class="reveal">We measure the typical duration of each market regime before transitioning:</p>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="duration-dist">
    <img src="{{ site.baseurl }}/assets/img/dist_state_durations.png"
         alt="Distribution of State Durations"
         class="plot">
    <figcaption>Distribution of regime durations. Bull markets last longest; bear markets are shorter but more intense.</figcaption>
  </div>
</figure>

<div class="duration-cards reveal">
  <div class="duration-card bull-duration pulse-green">
    <span class="duration-icon">📈</span>
    <h5>Bullish Regime</h5>
    <p class="duration-desc">Bull markets tend to be the <strong>shortest-lasting</strong>. Upward drifts are the rarest.</p>
  </div>
  <div class="duration-card neutral-duration">
    <span class="duration-icon">➡️</span>
    <h5>Neutral Regime</h5>
    <p class="duration-desc">Neutral states are <strong>transitional</strong> yet the most presistent. The market tends to stay sideways for long before committing to a direction.</p>
  </div>
  <div class="duration-card bear-duration pulse-red">
    <span class="duration-icon">📉</span>
    <h5>Bearish Regime</h5>
    <p class="duration-desc">Bear markets last <strong>longer</strong> than bullish states. Market downturns typically persist longer than bull runs.</p>
  </div>
</div>

<hr class="section-divider">

<h2>Does Sentiment Affect Transitions?</h2>

<p class="lead reveal">This is where we test Hypothesis A vs. Hypothesis B at the regime level. If sentiment has power, knowing it should change our predictions about state transitions. If sentiment is just a mirror, conditioning on it should add little information.</p>

<p class="reveal">We measure <strong>information gain</strong>: how much knowing sentiment reduces uncertainty about the next market state. Higher information gain means sentiment is more useful for prediction.</p>

<div class="reveal">

**Information gain** measures how much additional information (in bits) the AAII sentiment or Google Trends provide for predicting the next market state, beyond what we already know from the current state.

$$
\text{Information Gain}
=
H(\text{next} \mid \text{current})
-
H(\text{next} \mid \text{current}, \text{AAII/Google Trends})
$$

where $H$ denotes entropy (uncertainty). Higher information gain indicates a greater reduction in uncertainty.

</div>

<h3>AAII Sentiment</h3>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="conditional-sentiment">
    <img src="{{ site.baseurl }}/assets/img/transition_matrices_sentiment.png"
         alt="Conditional Transition Matrices by AAII Sentiment"
         class="plot">
    <figcaption>Transition matrices conditioned on AAII sentiment. Despite splitting by bullish, neutral, and bearish sentiment, the matrices look remarkably similar.</figcaption>
  </div>
</figure>

<p class="reveal"><strong>AAII Result:</strong> Information gain of only <strong>0.002 – 0.018 bits</strong>. Knowing investor sentiment barely changes our predictions about the next market state.</p>

<hr class="section-divider">

<h3>Google Trends</h3>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="conditional-google">
    <img src="{{ site.baseurl }}/assets/img/transition_matrices_google.png"
         alt="Conditional Transition Matrices by Google Trends"
         class="plot">
    <figcaption>Transition matrices conditioned on Google Trends sentiment. Unlike AAII, these matrices show more visible differences across sentiment conditions.</figcaption>
  </div>
</figure>

<p class="reveal"><strong>Google Result:</strong> Information gain of <strong>0.05 – 0.07 bits</strong>—roughly 3-5x higher than AAII. Search behavior is more informative about regime transitions.</p>

<p class="reveal"><strong>Why does Google outperform AAII?</strong> Google captures everyone (not just the ~1,000 AAII survey respondents), searches are spontaneous and unfiltered, and they happen in real-time rather than as considered weekly survey responses.</p>

<hr class="section-divider">

<h2>The Lead-Lag Analysis: The Smoking Gun</h2>

<p class="lead reveal">This is where the case breaks open. We test sentiment at various time lags, not just whether sentiment predicts, but <strong>when</strong> the relationship is strongest.</p>

<p class="reveal">We measure information gain at different lags. <strong>Positive lags</strong> mean using sentiment from weeks ago to predict today's market state. <strong>Negative lags</strong> test if sentiment reflects past market states. If sentiment is predictive, positive lags should dominate. If reactive, negative lags should dominate.</p>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="lead-lag">
    <img src="{{ site.baseurl }}/assets/img/pred_power_lag.png"
         alt="Lead-Lag Information Gain Analysis"
         class="plot">
    <figcaption>Lead-lag analysis. AAII peaks at negative lags (reflecting past returns). Google Trends shows a more balanced pattern.</figcaption>
  </div>
</figure>

<h3>AAII: The 6-Month Mirror</h3>

<p class="reveal">AAII shows peak information at <strong>lag = -1 week</strong> as well as at <strong>lag = -26 weeks (6 months)</strong>. This is striking—and not coincidental.</p>

<p class="reveal">Remember the AAII survey question: <em>"Where do you think the market will be in the next 6 months?"</em> Investors answering this question appear to be anchoring on <strong>"where has the market been for the past 6 months?"</strong> and extrapolating that experience into their future outlook. They're essentially looking in the rearview mirror to predict the road ahead.</p>

<p class="reveal"><strong>Verdict: AAII sentiment is more REACTIVE than predictive.</strong></p>

<h3>Google Trends: Mixed Signal</h3>

<p class="reveal">Google Trends peaks at <strong>+26 weeks</strong> with information gain of <strong>0.05–0.07 bits</strong>, more symmetric across positive and negative lags. Search behavior captures both response to events and some anticipation of market moves.</p>

<hr class="section-divider">

<h2>Head-to-Head: AAII vs. Google Trends</h2>

<div class="comparison-table reveal">
  <table>
    <thead>
      <tr>
        <th>Aspect</th>
        <th>AAII Sentiment</th>
        <th>Google Trends</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Dominant Signal</strong></td>
        <td class="negative-cell">Reactive (negative lags)</td>
        <td class="neutral-cell">Mixed (symmetric)</td>
      </tr>
      <tr>
        <td><strong>Best Lag</strong></td>
        <td class="negative-cell">-1 week / -26 weeks</td>
        <td class="positive-cell">+26 weeks</td>
      </tr>
      <tr>
        <td><strong>Information Gain</strong></td>
        <td class="negative-cell">Lower (0.002–0.018 bits)</td>
        <td class="positive-cell">Higher (0.05–0.07 bits)</td>
      </tr>
      <tr>
        <td><strong>Implied Behavior</strong></td>
        <td class="negative-cell">Backward-looking extrapolation</td>
        <td class="neutral-cell">Mixed reactive/predictive</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="key-insight reveal gradient-border no-box">
  <h4>The 6-Month Mirror Effect</h4>
  <p>When AAII investors are asked <em>"Where will the market be in 6 months?"</em>, they appear to answer <em>"Where has the market been for the past 6 months?"</em></p>
  <p>This is classic <strong>recency bias</strong> and <strong>extrapolation behavior</strong>, fundamental concepts in behavioral finance, now quantified in our data.</p>
</div>

<hr class="section-divider">

<div class="session-summary reveal">
  <h3>Session 4 Summary: Mood Cycle Findings</h3>
  <div class="summary-points">
    <div class="summary-point">
      <span class="point-number">1</span>
      <p><strong>Regimes are persistent.</strong> Once in a mood, the market tends to stay there.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">2</span>
      <p><strong>AAII adds little to regime prediction.</strong> Knowing investor sentiment barely improves our ability to forecast state transitions.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">3</span>
      <p><strong>Google Trends does better.</strong> Search behavior contains more regime-relevant information than explicit surveys.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">4</span>
      <p><strong>The 6-month mirror effect.</strong> AAII sentiment peaks at -26 weeks lag, investors answer "where will markets go?" by looking at where they've been.</p>
    </div>
  </div>
</div>

<div class="session-transition reveal">
  <p class="transition-label">Next Session Preview</p>
  <p class="transition-text">We've treated The Market as a single entity. But does the same pattern hold across <strong>different sectors</strong>? Is tech sentiment different from energy sentiment? Time for a differential diagnosis.</p>
  <p class="transition-cta">Let's break it down by sector.</p>
</div>

</div>
