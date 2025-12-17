<div id="story3" class="section section-mood-cycles">

<div class="session-header">
  <div class="session-number">Session 4</div>
  <h2 class="section-title">The Mood Cycles</h2>
  <p class="session-subtitle">Identifying States</p>
</div>

<div class="therapist-note">
  <div class="note-header">
    <span class="note-icon">🔄</span>
    <span class="note-label">Behavioral Analysis</span>
  </div>
  <div class="note-content">
    <p>Patients don't exist in a single mood — they cycle through distinct psychological states. Our patient, The Market, is no different. This session examines these mood cycles using <strong>Markov regime models</strong> and tests whether investor sentiment affects state transitions.</p>
  </div>
</div>

---

## The Patient's Mood States

<p class="lead">Rather than treating market behavior as a continuous spectrum, we identify distinct <strong>regimes</strong> — qualitatively different states with their own dynamics.</p>

<div class="methodology-box">
  <h4>Markov Regime Framework</h4>
  <p>A <strong>Markov model</strong> assumes the market exists in one of several discrete states, and the probability of transitioning to the next state depends only on the current state — not the entire history.</p>
  <p>This matches our clinical intuition: the market's "mood" today tells us something about tomorrow's mood, but we don't need to know every mood from the past decade.</p>
</div>

### Unconditional Regime Transitions

<p>First, we examine how the market transitions between states <em>without</em> considering external factors like sentiment.</p>

<!-- IMAGE PLACEHOLDER: Market regime transition matrix -->
<div class="image-placeholder">
  <p class="placeholder-label">Plot: Market Regime Transition Matrix</p>
  <p class="placeholder-desc">Heatmap showing transition probabilities between Bullish, Neutral, and Bearish market regimes. Diagonal should be darkest (persistence). Include actual probability values in cells.</p>
</div>

<div class="transition-findings">
  <h4>Regime Persistence Patterns</h4>
  <div class="persistence-cards">
    <div class="persistence-card bull-persist">
      <span class="persist-value">High</span>
      <span class="persist-label">Bull → Bull</span>
      <p>Bull markets are self-reinforcing</p>
    </div>
    <div class="persistence-card neutral-persist">
      <span class="persist-value">Moderate</span>
      <span class="persist-label">Neutral → Neutral</span>
      <p>Sideways markets are transitional</p>
    </div>
    <div class="persistence-card bear-persist">
      <span class="persist-value">High</span>
      <span class="persist-label">Bear → Bear</span>
      <p>Downturns are sticky</p>
    </div>
  </div>
</div>

<div class="insight-box">
  <p><strong>Key Pattern:</strong> Market regimes are highly persistent — once established, they tend to continue. But bull markets are typically more persistent than bear markets, reflecting the market's long-term upward drift.</p>
</div>

---

### Stationary Distribution: Where Does the Market Spend Its Time?

<div class="methodology-box math-box">
  <h4>Stationary Distribution</h4>
  <p>Given the transition matrix, we can compute the <strong>long-run equilibrium</strong> — the fraction of time the market spends in each state if the process runs forever.</p>
  <p>We then compare this theoretical distribution to the <strong>empirical frequencies</strong> we actually observed.</p>
</div>

<!-- IMAGE PLACEHOLDER: Stationary vs empirical distribution comparison -->
<div class="image-placeholder">
  <p class="placeholder-label">Plot: Theoretical vs. Observed Regime Frequencies</p>
  <p class="placeholder-desc">Side-by-side bar chart comparing the stationary distribution from the Markov model to the actual observed frequencies of Bullish, Neutral, and Bearish regimes.</p>
</div>

<div class="distribution-result">
  <h4>Finding: Close Match</h4>
  <p>The theoretical and empirical distributions align well, suggesting the market process is approximately <strong>stationary</strong> over our sample period. The market hasn't fundamentally changed its mood cycling behavior.</p>
</div>

---

### How Long Do Moods Last?

<div class="duration-analysis">
  <h4>State Duration Analysis</h4>
  <p>We measure the typical duration of each market regime before transitioning:</p>

  <div class="duration-cards">
    <div class="duration-card bull-duration">
      <span class="duration-icon">📈</span>
      <h5>Bullish Regime</h5>
      <p class="duration-desc">Bull markets tend to be <strong>longer-lasting</strong>. The market's natural drift is upward, so bullish states have natural staying power.</p>
    </div>
    <div class="duration-card neutral-duration">
      <span class="duration-icon">➡️</span>
      <h5>Neutral Regime</h5>
      <p class="duration-desc">Neutral states are <strong>transitional</strong>. The market rarely stays sideways for long — it either recovers or declines.</p>
    </div>
    <div class="duration-card bear-duration">
      <span class="duration-icon">📉</span>
      <h5>Bearish Regime</h5>
      <p class="duration-desc">Bear markets are <strong>shorter but intense</strong>. Crashes happen fast; recoveries happen faster (in calendar time, not in magnitude).</p>
    </div>
  </div>
</div>

---

## The Key Question: Does Sentiment Affect Transitions?

<div class="therapist-note dramatic">
  <div class="note-header">
    <span class="note-icon">❓</span>
    <span class="note-label">The Critical Test</span>
  </div>
  <div class="note-content">
    <p>This is where we test Hypothesis A vs. Hypothesis B at the regime level. If sentiment has power, knowing it should change our predictions about state transitions. If sentiment is just a mirror, conditioning on it should add little information.</p>
  </div>
</div>

### Conditional Markov Analysis: AAII Sentiment

<div class="methodology-box math-box">
  <h4>Chi-Square Independence Test</h4>
  <p>We test whether market transitions are <strong>independent</strong> of AAII sentiment:</p>
  <ul>
    <li><strong>H₀:</strong> Transition probabilities are the same regardless of sentiment</li>
    <li><strong>H₁:</strong> Transition probabilities differ by sentiment class</li>
  </ul>
  <p>A significant result means sentiment contains information about regime changes.</p>
</div>

<div class="methodology-box math-box">
  <h4>Likelihood Ratio Test</h4>
  <p>We compare two Markov models:</p>
  <ul>
    <li><strong>Model 1 (Unconditional):</strong> P(next state | current state)</li>
    <li><strong>Model 2 (Conditional):</strong> P(next state | current state, sentiment)</li>
  </ul>
  <p>If Model 2 fits significantly better, sentiment adds predictive value for regime transitions.</p>
</div>

<div class="methodology-box math-box">
  <h4>Information Gain Metric</h4>
  <p>We measure how much sentiment reduces uncertainty about the next state:</p>
  <div class="equation">
    <p><strong>IG = H(next | current) − H(next | current, sentiment)</strong></p>
  </div>
  <p>Where H is entropy (uncertainty). Higher IG means sentiment is more informative.</p>
</div>

<!-- IMAGE PLACEHOLDER: Conditional transition matrices by AAII sentiment -->
<div class="image-placeholder large">
  <p class="placeholder-label">Plot: Conditional Transition Matrices (AAII)</p>
  <p class="placeholder-desc">Three side-by-side heatmaps showing market transition probabilities when AAII sentiment is Bullish, Neutral, and Bearish respectively. If sentiment matters, these matrices should look noticeably different.</p>
</div>

<div class="conditional-results aaii-conditional">
  <h3>AAII Conditional Analysis Results</h3>
  <div class="result-stats">
    <div class="result-stat">
      <span class="stat-label">Information Gain</span>
      <span class="stat-value">0.002 – 0.018 bits</span>
    </div>
    <div class="result-stat">
      <span class="stat-label">Interpretation</span>
      <span class="stat-value">Very small — sentiment adds minimal information</span>
    </div>
  </div>
</div>

---

### Conditional Markov Analysis: Google Trends

<!-- IMAGE PLACEHOLDER: Conditional transition matrices by Google Trends sentiment -->
<div class="image-placeholder large">
  <p class="placeholder-label">Plot: Conditional Transition Matrices (Google Trends)</p>
  <p class="placeholder-desc">Same format as AAII, but for Google Trends sentiment classification. Should show more visible differences between matrices.</p>
</div>

<div class="conditional-results google-conditional">
  <h3>Google Trends Conditional Analysis Results</h3>
  <div class="result-stats">
    <div class="result-stat">
      <span class="stat-label">Information Gain</span>
      <span class="stat-value">0.05 – 0.07 bits</span>
    </div>
    <div class="result-stat">
      <span class="stat-label">Interpretation</span>
      <span class="stat-value">Meaningfully higher than AAII — search behavior is more informative</span>
    </div>
  </div>
</div>

<div class="comparison-insight">
  <h4>Why Does Google Outperform AAII?</h4>
  <p>Possible explanations:</p>
  <ul>
    <li><strong>Broader population:</strong> Google captures everyone, not just AAII members</li>
    <li><strong>Unfiltered signal:</strong> Searches are spontaneous, not filtered through survey framing</li>
    <li><strong>Real-time behavior:</strong> Search happens in the moment; surveys ask about considered opinions</li>
    <li><strong>Mixed signal:</strong> Google captures both reactive and anticipatory behavior</li>
  </ul>
</div>

---

## Visualizing Mood Cycles Over Time

<!-- IMAGE PLACEHOLDER: Market regimes over time with sentiment overlay -->
<div class="image-placeholder large">
  <p class="placeholder-label">Timeline Plot: Market Regimes with Sentiment Overlay</p>
  <p class="placeholder-desc">Time series showing market regime classification (colored background bands: green=bull, gray=neutral, red=bear) with AAII sentiment line overlaid. Key historical events (2000 dot-com, 2008 crisis, 2020 COVID) should be annotated.</p>
</div>

<div class="historical-events">
  <h4>Key Episodes in the Patient's History</h4>

  <div class="event-card">
    <span class="event-date">2000-2002</span>
    <span class="event-name">Dot-Com Crash</span>
    <p>Extended bearish regime. Sentiment turned negative <em>after</em> the decline was well underway.</p>
  </div>

  <div class="event-card">
    <span class="event-date">2008-2009</span>
    <span class="event-name">Global Financial Crisis</span>
    <p>Sharp regime transition. Bearish sentiment peaked <em>after</em> the worst of the drawdown.</p>
  </div>

  <div class="event-card">
    <span class="event-date">March 2020</span>
    <span class="event-name">COVID Crash</span>
    <p>Fastest transition on record. Sentiment collapsed in sync with prices — no lead time.</p>
  </div>
</div>

---

<div class="session-summary">
  <h3>Session 4 Summary: Mood Cycle Findings</h3>
  <div class="summary-points">
    <div class="summary-point">
      <span class="point-number">1</span>
      <p><strong>Regimes are persistent.</strong> Once in a mood, the market tends to stay there — especially in bull markets.</p>
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
      <p><strong>Historical pattern confirms reactivity.</strong> In major market events, sentiment moves with or after prices — not before.</p>
    </div>
  </div>
</div>

<div class="session-transition">
  <p class="transition-label">Next Session Preview</p>
  <p class="transition-text">We've treated The Market as a single entity. But does the same pattern hold across <strong>different sectors</strong>? Is tech sentiment different from energy sentiment? Time for a differential diagnosis.</p>
  <p class="transition-cta">Let's break it down by sector.</p>
</div>

</div>
