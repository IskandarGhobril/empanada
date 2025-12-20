<div id="story2" class="section section-timeline">

<div class="session-header">
  <h2 class="section-title">
    <span class="session-label">Session 3:</span> The Timeline
  </h2>
  <p class="session-subtitle">Who Moves First?</p>
</div>

<div class="therapist-note dramatic reveal no-box">
  <div class="note-header">
    <span class="note-icon"></span>
    <span class="note-label">Critical Session</span>
  </div>
  <div class="note-content">
    <p>Everything we've learned leads here. We have two witnesses (AAII and Google) and one patient (The Market). Now we determine the direction of causality: <strong>Does sentiment lead, follow, or move with the market?</strong></p>
  </div>
</div>

<hr class="section-divider">

<h2>First, Define the Patient's Moods</h2>

<p class="lead reveal">Before testing if sentiment predicts the market, we need an objective way to classify the market's own states. We let the data speak for itself.</p>

<div class="methodology-box reveal">
  <h4>Clustering Methodology: Gaussian Mixture Model</h4>
  <p>We use a <strong>Gaussian Mixture Model (GMM)</strong> with 3 components to identify distinct market regimes. Unlike simple thresholds, GMM:</p>
  <ul>
    <li>Provides <em>soft membership probabilities</em> — how confident are we in each classification?</li>
    <li>Handles elliptical clusters — real market states don't have sharp boundaries</li>
    <li>Allows uncertainty quantification — transitional periods show lower confidence</li>
  </ul>
  <p><strong>Features used:</strong> 6-month forward returns, realized volatility, market momentum, cross-sectional statistics</p>
</div>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="market-returns">
    <img src="{{ site.baseurl }}/assets/img/daily_market_ret.png"
         alt="Market returns over time"
         class="plot">
    <figcaption>Weekly NASDAQ returns — the raw material for regime classification</figcaption>
    <!-- INTERACTIVE: Zoomable timeline, hover for exact dates/values, brush to select periods -->
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

<h2>The Initial Evidence: Correlation</h2>

<p class="lead reveal">Let's start with the obvious question: Are sentiment and future returns related at all?</p>

<div class="methodology-box reveal">
  <h4>Sentiment Metric</h4>
  <p>We define a single sentiment measure: <strong>S = %Bullish − %Bearish</strong></p>
  <p>This captures net optimism on a scale from -100 (completely bearish) to +100 (completely bullish).</p>
</div>

<div class="plot-figure reveal">
  <story class="interactive-figure" data-plot="sentiment-scatter">
    {% include granger_causality.html %}
    <figcaption>Sentiment (S) versus 6-month forward returns — is there a relationship?</figcaption>
  </figure>
</div>

<div class="stats-results reveal">
  <h4>Correlation Results</h4>
  <div class="stat-row">
    <div class="stat-item pulse-green">
      <span class="stat-name">Pearson Correlation</span>
      <span class="stat-value positive">ρ ≈ 0.33</span>
      <span class="stat-pvalue">p < 0.001</span>
    </div>
    <div class="stat-item pulse-green">
      <span class="stat-name">Spearman Rank Correlation</span>
      <span class="stat-value positive">ρₛ ≈ 0.28</span>
      <span class="stat-pvalue">p << 0.001</span>
    </div>
  </div>
</div>

<div class="insight-box reveal">
  <p><strong>Initial Finding:</strong> Yes! Higher optimism is associated with higher future returns. The relationship is positive, statistically significant, and robust to outliers (Spearman confirms).</p>
  <p><em>But wait...</em> correlation doesn't tell us direction. Does sentiment <strong>cause</strong> higher returns, or does something else cause both?</p>
</div>

<hr class="section-divider">

<h2>The Critical Test: Granger Causality</h2>

<div class="therapist-note reveal no-box">
  <div class="note-header">
    <span class="note-icon"></span>
    <span class="note-label">Statistical Method</span>
  </div>
  <div class="note-content">
    <p><strong>Granger Causality</strong> tests whether knowing past values of X helps predict future values of Y, beyond what past values of Y alone can predict. It's not true causality — but it reveals predictive information content.</p>
  </div>
</div>

<div class="methodology-box math-box reveal no-box">
  <h4>The Granger Causality Test</h4>
  <p>We test: <em>"Does knowing past sentiment help forecast future returns?"</em></p>
  <p>Formally, we compare two models:</p>
  <div class="equation no-box">
    <p><strong>Restricted:</strong> R<sub>t</sub> = α + β₁R<sub>t-1</sub> + ... + β<sub>p</sub>R<sub>t-p</sub> + ε<sub>t</sub></p>
    <p><strong>Unrestricted:</strong> R<sub>t</sub> = α + β₁R<sub>t-1</sub> + ... + γ₁S<sub>t-1</sub> + ... + γ<sub>p</sub>S<sub>t-p</sub> + ε<sub>t</sub></p>
  </div>
  <p>If the unrestricted model fits significantly better, sentiment "Granger-causes" returns.</p>
</div>

<div class="test-result-box reveal gradient-border">
  <h4>Granger Causality Result</h4>
  <div class="result-highlight">
    <span class="result-label">p-value</span>
    <span class="result-value pulse-green">0.047</span>
    <span class="result-verdict verdict-positive">Significant at 5% level</span>
  </div>
  <p>Sentiment does Granger-cause future returns. Past investor sentiment contains predictive information about market performance beyond what past returns alone explain.</p>
  <p class="result-caveat"><strong>However:</strong> The effect is modest — p-value is close to the threshold. This is not a strong signal.</p>
</div>

<hr class="section-divider">

<h2>The Full Picture: Vector Autoregression (VAR)</h2>

<div class="therapist-note reveal no-box">
  <div class="note-header">
    <span class="note-icon"></span>
    <span class="note-label">Advanced Analysis</span>
  </div>
  <div class="note-content">
    <p>VAR models allow us to estimate <strong>bidirectional relationships</strong> — not just whether sentiment predicts returns, but also whether returns predict sentiment. Both directions can be true simultaneously.</p>
  </div>
</div>

<div class="methodology-box math-box reveal no-box">
  <h4>Vector Autoregression Model</h4>
  <p>We estimate a system of two equations:</p>
  <div class="equation no-box">
    <p><strong>Sentiment equation:</strong> S<sub>t</sub> = α₁ + β₁S<sub>t-1</sub> + γ₁R<sub>t-1</sub> + ε<sub>1t</sub></p>
    <p><strong>Returns equation:</strong> R<sub>t</sub> = α₂ + β₂R<sub>t-1</sub> + γ₂S<sub>t-1</sub> + ε<sub>2t</sub></p>
  </div>
  <p>The coefficients tell us: How much does lagged sentiment affect current returns? And vice versa?</p>
</div>

<div class="var-results reveal">
  <h3>VAR Model Results</h3>

  <div class="var-grid-wrapper">

    <div class="var-equation">
      <h4>What Predicts Sentiment?</h4>
      <div class="var-coefficients">
        <div class="var-coef">
          <span class="coef-name">Lagged Sentiment (S<sub>t-1</sub>)</span>
          <span class="coef-value">0.652</span>
          <span class="coef-pvalue">p < 0.001</span>
          <span class="coef-meaning">Strong persistence — sentiment is sticky</span>
        </div>
        <div class="var-coef highlight-coef pulse-green">
          <span class="coef-name">Lagged Returns (R<sub>t-1</sub>)</span>
          <span class="coef-value">1394.83</span>
          <span class="coef-pvalue">p < 0.001</span>
          <span class="coef-meaning">Sentiment strongly responds to past returns</span>
        </div>
      </div>
    </div>

    <div class="var-equation">
      <h4>What Predicts Returns?</h4>
      <div class="var-coefficients">
        <div class="var-coef">
          <span class="coef-name">Lagged Returns (R<sub>t-1</sub>)</span>
          <span class="coef-value">0.965</span>
          <span class="coef-pvalue">p < 0.001</span>
          <span class="coef-meaning">Strong autocorrelation (overlapping windows)</span>
        </div>
        <div class="var-coef highlight-coef-weak pulse-red">
          <span class="coef-name">Lagged Sentiment (S<sub>t-1</sub>)</span>
          <span class="coef-value">0.000001</span>
          <span class="coef-pvalue">p = 0.047</span>
          <span class="coef-meaning">Tiny but significant effect</span>
        </div>
      </div>
    </div>

  </div> 
  </div>

<div class="revelation-box reveal no-box">
  <p>The VAR reveals a <strong>striking asymmetry</strong>:</p>
  <ul>
    <li><strong>Returns → Sentiment:</strong> HUGE effect (coefficient ~1395). Past market performance massively shifts investor sentiment.</li>
    <li><strong>Sentiment → Returns:</strong> TINY effect (coefficient ~0.000001). Sentiment has almost no impact on future returns.</li>
  </ul>
  <p class="revelation-conclusion">The relationship is bidirectional in a statistical sense, but <strong>economically one-sided</strong>. Markets move investors far more than investors move markets.</p>
</div>

<hr class="section-divider">

<h2>The Lead-Lag Analysis: The Smoking Gun</h2>

<div class="therapist-note dramatic reveal no-box">
  <div class="note-header">
    <span class="note-icon"></span>
    <span class="note-label">Key Analysis</span>
  </div>
  <div class="note-content">
    <p>This is where the case breaks open. We extend our analysis to test sentiment at various time lags — not just whether sentiment predicts, but <strong>when</strong> the relationship is strongest.</p>
  </div>
</div>

<div class="methodology-box reveal no-box">
  <h4>Lead-Lag Information Gain</h4>
  <p>We measure <strong>information gain</strong> — how much knowing sentiment at different lags reduces uncertainty about the next market state.</p>
  <ul>
    <li><strong>Positive lag (k > 0):</strong> Using sentiment from k weeks AGO to predict next market state</li>
    <li><strong>Negative lag (k < 0):</strong> Testing if sentiment REFLECTS market state from |k| weeks ago</li>
  </ul>
  <p>If sentiment is predictive, positive lags should dominate. If sentiment is reactive, negative lags should dominate.</p>
</div>

<!-- CRITICAL INTERACTIVE: Lead-Lag Analysis -->
<div class="interactive-placeholder reveal" id="lead-lag-interactive">
  <div class="placeholder-header">
    <span class="placeholder-badge pulse-purple">Key Interactive Element</span>
    <h3>Lead-Lag Information Gain Explorer</h3>
  </div>
  <div class="placeholder-body">
    <p class="placeholder-desc">This is the most important visualization in the analysis:</p>
    <ul>
      <li>X-axis: Lag in weeks (-52 to +52)</li>
      <li>Y-axis: Information gain (bits)</li>
      <li>Toggle between AAII and Google Trends</li>
      <li>Hover to see exact values at each lag</li>
      <li>Animated highlight of the -26 week peak</li>
      <li>Click to zoom into specific lag ranges</li>
    </ul>
    <div class="placeholder-mockup">
      <div class="mockup-chart lead-lag-mockup">
        <span>📈 Lead-Lag Information Gain Plot</span>
        <div class="lag-indicator">Peak at -26 weeks = 6-month mirror effect</div>
      </div>
    </div>
  </div>
  <p class="placeholder-note">Implementation: Plotly.js with dual traces, crosshair tooltips, and annotation highlighting</p>
</div>

<div class="lead-lag-grid-wrapper reveal">

  <div class="lead-lag-results aaii-results">
    <h3>AAII Sentiment: Lead-Lag Results</h3>

    <div class="result-stats">
      <div class="result-stat pulse-red">
        <span class="stat-label">Best Lag</span>
        <span class="stat-value negative">-1 week (and strong signal at -26 weeks)</span>
      </div>
      <div class="result-stat">
        <span class="stat-label">Information Gain Range</span>
        <span class="stat-value">0.002 – 0.018 bits</span>
      </div>
      <div class="result-stat">
        <span class="stat-label">Pattern</span>
        <span class="stat-value">Strongly asymmetric — negative lags dominate</span>
      </div>
    </div>

    <div class="interpretation-box critical gradient-border">
      <h4>What This Means</h4>
      <p>The peak at <strong>lag = -26 weeks (≈ 6 months)</strong> is striking and not coincidental.</p>
      <p>Remember the AAII survey question: <em>"Where do you think the market will be in the next 6 months?"</em></p>
      <p>Investors answering this question appear to be anchoring on <strong>"where has the market been for the past 6 months?"</strong> and extrapolating that experience into their future outlook.</p>
      <p class="critical-finding"><strong>AAII sentiment is REACTIVE, not predictive.</strong></p>
    </div>
  </div>

  <div class="lead-lag-results google-results">
    <h3>Google Trends: Lead-Lag Results</h3>

    <div class="result-stats">
      <div class="result-stat pulse-green">
        <span class="stat-label">Best Lag</span>
        <span class="stat-value positive">+26 weeks</span>
      </div>
      <div class="result-stat">
        <span class="stat-label">Information Gain Range</span>
        <span class="stat-value">0.05 – 0.07 bits</span>
      </div>
      <div class="result-stat">
        <span class="stat-label">Pattern</span>
        <span class="stat-value">More symmetric across positive and negative lags</span>
      </div>
    </div>

    <div class="interpretation-box reveal">
      <h4>What This Means</h4>
      <p>Google Trends shows a <strong>mixed reactive and predictive signal</strong>. Search behavior captures both:</p>
      <ul>
        <li>Response to events (negative lags)</li>
        <li>Anticipation of market moves (positive lags)</li>
      </ul>
      <p>The higher baseline information gain suggests Google captures <strong>more market-relevant information</strong> than AAII surveys.</p>
    </div>
  </div>

</div>

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

<div class="key-insight dramatic reveal gradient-border">
  <h4>The 6-Month Mirror Effect</h4>
  <p>When AAII investors are asked <em>"Where will the market be in 6 months?"</em>, they appear to answer <em>"Where has the market been for the past 6 months?"</em></p>
  <p>This is classic <strong>recency bias</strong> and <strong>extrapolation behavior</strong> — fundamental concepts in behavioral finance, now quantified in our data.</p>
</div>

<hr class="section-divider">

<div class="session-summary reveal">
  <h3>Session 3 Summary: The Timeline Verdict</h3>
  <div class="summary-points">
    <div class="summary-point">
      <span class="point-number">1</span>
      <p><strong>Correlation exists but is misleading.</strong> Sentiment and returns are correlated (ρ ≈ 0.33), but this doesn't mean sentiment predicts returns.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">2</span>
      <p><strong>Causality is asymmetric.</strong> Returns massively affect sentiment; sentiment barely affects returns.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">3</span>
      <p><strong>AAII is backward-looking.</strong> The 6-month survey horizon matches a 6-month backward-looking pattern — investors extrapolate the past.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">4</span>
      <p><strong>Google contains more information.</strong> Search behavior captures both reactive and anticipatory signals, outperforming explicit surveys.</p>
    </div>
  </div>
</div>

<div class="session-transition reveal">
  <p class="transition-label">Next Session Preview</p>
  <p class="transition-text">We've established the direction of causality. Now let's examine the patient's <strong>mood cycles</strong> — distinct behavioral states and how sentiment affects transitions between them.</p>
  <p class="transition-cta">Time for the mood analysis.</p>
</div>

</div>
