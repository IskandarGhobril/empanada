<div id="story3" class="section section-mood-cycles">

<div class="session-header">
  <div class="session-number">Session 4</div>
  <h2 class="section-title">The Mood Cycles</h2>
  <p class="session-subtitle">Identifying States</p>
</div>

<!-- IMAGE: Mood Cycles -->
<figure class="hero-illustration reveal">
  <div class="image-placeholder mood-card gradient-border">
    <p class="placeholder-label">Image: mood-cycles.png</p>
    <p class="placeholder-desc">A circular/cyclical visualization showing market moods transitioning: Euphoria (bright gold) → Optimism (green) → Complacency (pale green) → Anxiety (yellow) → Fear (orange) → Panic (red) → Capitulation (dark red) → Depression (gray) → Hope (light blue) → Relief (cyan) → back to Euphoria. The cycle is shown as a glowing ring with the Market (represented as a figure or abstract form) moving along it. Style: Modern infographic meets emotional psychology chart.</p>
  </div>
  <figcaption>The Market's emotional journey — a perpetual cycle of mood states</figcaption>
</figure>

<div class="therapist-note reveal">
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

<p class="lead reveal">Rather than treating market behavior as a continuous spectrum, we identify distinct <strong>regimes</strong> — qualitatively different states with their own dynamics.</p>

<div class="methodology-box reveal">
  <h4>Markov Regime Framework</h4>
  <p>A <strong>Markov model</strong> assumes the market exists in one of several discrete states, and the probability of transitioning to the next state depends only on the current state — not the entire history.</p>
  <p>This matches our clinical intuition: the market's "mood" today tells us something about tomorrow's mood, but we don't need to know every mood from the past decade.</p>
</div>

### Unconditional Regime Transitions

<p class="reveal">First, we examine how the market transitions between states <em>without</em> considering external factors like sentiment.</p>

<!-- INTERACTIVE: Regime Transition Matrix -->
<div class="interactive-placeholder reveal" id="regime-transition-interactive">
  <div class="placeholder-header">
    <span class="placeholder-badge">Interactive Element</span>
    <h3>Market Regime Transition Matrix</h3>
  </div>
  <div class="placeholder-body">
    <p class="placeholder-desc">Animated heatmap showing transition probabilities:</p>
    <ul>
      <li>Hover cells to see exact probabilities and sample sizes</li>
      <li>Click to simulate Markov chain random walks</li>
      <li>Toggle between unconditional and conditional (by sentiment) matrices</li>
      <li>Animate transitions to show regime persistence visually</li>
    </ul>
    <div class="placeholder-mockup">
      <div class="mockup-chart">
        <span>🔥 Transition Probability Heatmap</span>
      </div>
    </div>
  </div>
  <p class="placeholder-note">Implementation: D3.js heatmap with animated transitions</p>
</div>

<div class="transition-findings reveal">
  <h4>Regime Persistence Patterns</h4>
  <div class="persistence-cards">
    <div class="persistence-card bull-persist pulse-green">
      <span class="persist-value">High</span>
      <span class="persist-label">Bull → Bull</span>
      <p>Bull markets are self-reinforcing</p>
    </div>
    <div class="persistence-card neutral-persist">
      <span class="persist-value">Moderate</span>
      <span class="persist-label">Neutral → Neutral</span>
      <p>Sideways markets are transitional</p>
    </div>
    <div class="persistence-card bear-persist pulse-red">
      <span class="persist-value">High</span>
      <span class="persist-label">Bear → Bear</span>
      <p>Downturns are sticky</p>
    </div>
  </div>
</div>

<div class="insight-box reveal">
  <p><strong>Key Pattern:</strong> Market regimes are highly persistent — once established, they tend to continue. But bull markets are typically more persistent than bear markets, reflecting the market's long-term upward drift.</p>
</div>

---

### Stationary Distribution: Where Does the Market Spend Its Time?

<div class="methodology-box math-box reveal">
  <h4>Stationary Distribution</h4>
  <p>Given the transition matrix, we can compute the <strong>long-run equilibrium</strong> — the fraction of time the market spends in each state if the process runs forever.</p>
  <p>We then compare this theoretical distribution to the <strong>empirical frequencies</strong> we actually observed.</p>
</div>

<!-- IMAGE: Stationary Distribution -->
<figure class="mood-illustration reveal">
  <div class="image-placeholder mood-card">
    <p class="placeholder-label">Image: stationary-distribution.png</p>
    <p class="placeholder-desc">Side-by-side comparison visualization: Left shows "Theoretical" equilibrium distribution as elegant pie/bar chart, right shows "Observed" actual frequencies. The two should look very similar. Use green for Bull (largest slice), gray for Neutral, red for Bear (smallest slice). Style: Clean data visualization with subtle glow effects.</p>
  </div>
  <figcaption>Theory meets reality: The Markov model accurately describes market behavior</figcaption>
</figure>

<div class="distribution-result reveal">
  <h4>Finding: Close Match</h4>
  <p>The theoretical and empirical distributions align well, suggesting the market process is approximately <strong>stationary</strong> over our sample period. The market hasn't fundamentally changed its mood cycling behavior.</p>
</div>

---

### How Long Do Moods Last?

<div class="duration-analysis reveal">
  <h4>State Duration Analysis</h4>
  <p>We measure the typical duration of each market regime before transitioning:</p>

  <div class="duration-cards">
    <div class="duration-card bull-duration pulse-green">
      <span class="duration-icon">📈</span>
      <h5>Bullish Regime</h5>
      <p class="duration-desc">Bull markets tend to be <strong>longer-lasting</strong>. The market's natural drift is upward, so bullish states have natural staying power.</p>
    </div>
    <div class="duration-card neutral-duration">
      <span class="duration-icon">➡️</span>
      <h5>Neutral Regime</h5>
      <p class="duration-desc">Neutral states are <strong>transitional</strong>. The market rarely stays sideways for long — it either recovers or declines.</p>
    </div>
    <div class="duration-card bear-duration pulse-red">
      <span class="duration-icon">📉</span>
      <h5>Bearish Regime</h5>
      <p class="duration-desc">Bear markets are <strong>shorter but intense</strong>. Crashes happen fast; recoveries happen faster (in calendar time, not in magnitude).</p>
    </div>
  </div>
</div>

---

## The Key Question: Does Sentiment Affect Transitions?

<div class="therapist-note dramatic reveal">
  <div class="note-header">
    <span class="note-icon">❓</span>
    <span class="note-label">The Critical Test</span>
  </div>
  <div class="note-content">
    <p>This is where we test Hypothesis A vs. Hypothesis B at the regime level. If sentiment has power, knowing it should change our predictions about state transitions. If sentiment is just a mirror, conditioning on it should add little information.</p>
  </div>
</div>

### Conditional Markov Analysis: AAII Sentiment

<div class="methodology-box math-box reveal">
  <h4>Chi-Square Independence Test</h4>
  <p>We test whether market transitions are <strong>independent</strong> of AAII sentiment:</p>
  <ul>
    <li><strong>H₀:</strong> Transition probabilities are the same regardless of sentiment</li>
    <li><strong>H₁:</strong> Transition probabilities differ by sentiment class</li>
  </ul>
  <p>A significant result means sentiment contains information about regime changes.</p>
</div>

<div class="methodology-box math-box reveal">
  <h4>Likelihood Ratio Test</h4>
  <p>We compare two Markov models:</p>
  <ul>
    <li><strong>Model 1 (Unconditional):</strong> P(next state | current state)</li>
    <li><strong>Model 2 (Conditional):</strong> P(next state | current state, sentiment)</li>
  </ul>
  <p>If Model 2 fits significantly better, sentiment adds predictive value for regime transitions.</p>
</div>

<div class="methodology-box math-box reveal">
  <h4>Information Gain Metric</h4>
  <p>We measure how much sentiment reduces uncertainty about the next state:</p>
  <div class="equation">
    <p><strong>IG = H(next | current) − H(next | current, sentiment)</strong></p>
  </div>
  <p>Where H is entropy (uncertainty). Higher IG means sentiment is more informative.</p>
</div>

<!-- INTERACTIVE: Conditional Transition Comparison -->
<div class="interactive-placeholder reveal" id="conditional-matrices-interactive">
  <div class="placeholder-header">
    <span class="placeholder-badge">Interactive Element</span>
    <h3>Conditional Transition Matrices (AAII)</h3>
  </div>
  <div class="placeholder-body">
    <p class="placeholder-desc">Three side-by-side heatmaps comparing transitions under different sentiment conditions:</p>
    <ul>
      <li>Matrix 1: Transitions when AAII is Bullish</li>
      <li>Matrix 2: Transitions when AAII is Neutral</li>
      <li>Matrix 3: Transitions when AAII is Bearish</li>
      <li>Hover to compare: highlight differences between matrices</li>
      <li>Animation: morphing between matrices to show (lack of) differences</li>
    </ul>
    <div class="placeholder-mockup">
      <div class="mockup-chart triple">
        <span>🟢 Bullish</span>
        <span>⚪ Neutral</span>
        <span>🔴 Bearish</span>
      </div>
    </div>
  </div>
  <p class="placeholder-note">Implementation: D3.js with synchronized hover and transition animations</p>
</div>

<div class="conditional-results aaii-conditional reveal">
  <h3>AAII Conditional Analysis Results</h3>
  <div class="result-stats">
    <div class="result-stat pulse-red">
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

<!-- IMAGE: Google Trends Conditional Matrices -->
<figure class="mood-illustration reveal">
  <div class="image-placeholder mood-card gradient-border">
    <p class="placeholder-label">Image: google-conditional-matrices.png</p>
    <p class="placeholder-desc">Same three-panel heatmap format as AAII, but for Google Trends sentiment. The matrices should show MORE visible differences between panels (indicating Google has more predictive power). Highlight the cells where probabilities differ most dramatically. Style: Data visualization with emphasis on the contrast.</p>
  </div>
  <figcaption>Google Trends shows more variation in conditional transitions</figcaption>
</figure>

<div class="conditional-results google-conditional reveal">
  <h3>Google Trends Conditional Analysis Results</h3>
  <div class="result-stats">
    <div class="result-stat pulse-green">
      <span class="stat-label">Information Gain</span>
      <span class="stat-value">0.05 – 0.07 bits</span>
    </div>
    <div class="result-stat">
      <span class="stat-label">Interpretation</span>
      <span class="stat-value">Meaningfully higher than AAII — search behavior is more informative</span>
    </div>
  </div>
</div>

<div class="comparison-insight reveal">
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

<!-- INTERACTIVE: Historical Timeline -->
<div class="interactive-placeholder reveal" id="historical-timeline-interactive">
  <div class="placeholder-header">
    <span class="placeholder-badge pulse-purple">Key Interactive Element</span>
    <h3>Historical Market Regimes with Sentiment Overlay</h3>
  </div>
  <div class="placeholder-body">
    <p class="placeholder-desc">Interactive timeline spanning 1987-2020:</p>
    <ul>
      <li>Background bands showing market regime (green=bull, gray=neutral, red=bear)</li>
      <li>AAII sentiment line overlaid</li>
      <li>Zoomable with brush selection</li>
      <li>Click events for annotated historical moments</li>
      <li>Hover to see exact dates, values, and regime probabilities</li>
      <li>Toggle Google Trends overlay</li>
    </ul>
    <div class="placeholder-mockup">
      <div class="mockup-chart timeline-mockup">
        <div class="regime-band bull">2003-2007</div>
        <div class="regime-band bear">2008</div>
        <div class="regime-band bull">2009-2020</div>
        <span>📈 Click any event to explore</span>
      </div>
    </div>
  </div>
  <p class="placeholder-note">Implementation: Plotly.js with annotations, brush zoom, and regime band backgrounds</p>
</div>

<div class="historical-events reveal">
  <h4>Key Episodes in the Patient's History</h4>

  <div class="event-card pulse-red">
    <span class="event-date">2000-2002</span>
    <span class="event-name">Dot-Com Crash</span>
    <p>Extended bearish regime. Sentiment turned negative <em>after</em> the decline was well underway.</p>
  </div>

  <div class="event-card pulse-red">
    <span class="event-date">2008-2009</span>
    <span class="event-name">Global Financial Crisis</span>
    <p>Sharp regime transition. Bearish sentiment peaked <em>after</em> the worst of the drawdown.</p>
  </div>

  <div class="event-card pulse-red">
    <span class="event-date">March 2020</span>
    <span class="event-name">COVID Crash</span>
    <p>Fastest transition on record. Sentiment collapsed in sync with prices — no lead time.</p>
  </div>
</div>

---

<div class="session-summary reveal">
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

<div class="session-transition reveal">
  <p class="transition-label">Next Session Preview</p>
  <p class="transition-text">We've treated The Market as a single entity. But does the same pattern hold across <strong>different sectors</strong>? Is tech sentiment different from energy sentiment? Time for a differential diagnosis.</p>
  <p class="transition-cta pulse-purple">Let's break it down by sector.</p>
</div>

</div>
