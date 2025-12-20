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
    <img src="{{ site.baseurl }}/assets/img/clustering.png"
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


<section class="evidence-section reveal">

  <!-- Title & framing -->
  <header class="section-header">
    <h2>The Initial Evidence: Correlation</h2>
    <p class="section-intro">
      We begin with a simple but essential question:
      <em>is investor sentiment related to returns at all?</em>
    </p>
  </header>

  <!-- Figure card -->
  <div class="card figure-card plot-small">
    <figure class="plot-figure">
      <img src="{{ site.baseurl }}/assets/img/joint_sentiment_vs_returns.png"
           alt="Joint distribution of sentiment and returns"
           class="plot">
      <figcaption>
        Joint distribution of investor sentiment and market returns
      </figcaption>
    </figure>

    <!-- Interpretation -->
    <div class="figure-interpretation">
      <p>
        The left panel exhibits an upward tilt from bottom-left to top-right.
        Periods of negative past returns are associated with bearish sentiment,
        while positive past returns coincide with more bullish attitudes.
        This indicates a strong relationship between sentiment and
        <strong>past performance</strong>.
      </p>

      <p>
        In contrast, the distribution linking sentiment to
        <strong>future returns</strong> appears more symmetric and dispersed.
        No clear directional pattern emerges: bullish investors do not
        systematically earn higher future returns, nor do bearish investors
        consistently experience lower ones.
      </p>
    </div>
  </div>

  <!-- Metric definition -->
  <div class="card definition-card reveal">
    <span class="card-label">Sentiment metric</span>
    <p>
      Investor sentiment is summarized by a single index:
      <strong>S = %Bullish − %Bearish</strong>,
      representing net optimism on a scale from −100 (fully bearish)
      to +100 (fully bullish).
    </p>
  </div>

  <!-- Results -->
  <div class="card results-card reveal">
    <h4>Correlation results</h4>

    <div class="stat-grid">
      <div class="stat-block">
        <span class="stat-name">Pearson correlation</span>
        <span class="stat-number">ρ ≈ 0.32</span>
        <span class="stat-meta">p &lt; 0.001</span>
      </div>

      <div class="stat-block">
        <span class="stat-name">Spearman rank correlation</span>
        <span class="stat-number">ρ<sub>s</sub> ≈ −0.09</span>
        <span class="stat-meta">p &lt; 0.001</span>
      </div>
    </div>
  </div>

  <!-- Takeaway -->
  <div class="card takeaway-card reveal">
    <p>
      <strong>Initial finding.</strong>
      Higher optimism is associated with higher future returns,
      and the relationship is statistically significant and
      robust to outliers.
    </p>

    <p class="caveat">
      Nevertheless, correlation alone cannot establish causality:
      do shifts in sentiment drive markets, or do markets
      primarily shape investor sentiment?
    </p>
  </div>

</section>



<hr class="section-divider">

<h2>The Critical Test: Granger Causality</h2>

<div class="therapist-note reveal no-box">
  <div class="note-header">
    <span class="note-icon"></span>
    <span class="note-label">Statistical Method</span>
  </div>
  <div class="note-content">
    <p><strong>Granger Causality</strong> isn't "magic." It simply asks: does knowing the past history of Variable A help us predict Variable B better than just knowing Variable B's own history?</p>
  </div>
</div>

<div class="methodology-box math-box reveal no-box">
  <h4>The Two-Way Test</h4>
  <p>To solve the "Chicken or Egg" problem, we test the relationship in <strong>both directions</strong>.</p>
  
  <div class="var-grid-wrapper" style="margin-top: 1rem;">
    <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 3px solid #c53030;">
      <h5 style="color: #c53030; margin: 0 0 0.5rem;">1. Does Sentiment predict Returns?</h5>
      <div class="equation no-box" style="font-size: 0.9rem;">
        R<sub>t</sub> = α + ... + <strong style="color: #c53030;">γ S<sub>t-lag</sub></strong> + ε<sub>t</sub>
      </div>
      <p style="font-size: 0.85rem; margin: 0.5rem 0 0;">This tests if Sentiment contains "new news" about future prices. (Represented by the <strong>RED LINE</strong>).</p>
    </div>

    <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 3px solid #2b6cb0;">
      <h5 style="color: #2b6cb0; margin: 0 0 0.5rem;">2. Do Returns predict Sentiment?</h5>
      <div class="equation no-box" style="font-size: 0.9rem;">
        S<sub>t</sub> = α + ... + <strong style="color: #2b6cb0;">γ R<sub>t-lag</sub></strong> + ε<sub>t</sub>
      </div>
      <p style="font-size: 0.85rem; margin: 0.5rem 0 0;">This tests if investors are simply reacting to past price moves. (Represented by the <strong>BLUE LINE</strong>).</p>
    </div>
  </div>
</div>

<div class="plot-figure reveal" style="margin: 2rem 0;">
  <figure class="interactive-figure" data-plot="granger-causality">
    {% include granger_causality.html %}
    <figcaption>Evolution of Causal Strength: Blue (Returns→Sentiment) vs. Red (Sentiment→Returns)</figcaption>
  </figure>
</div>

<div class="reveal" style="margin-bottom: 2rem;">
  
  <p class="lead">The results tell a story of complete asymmetry. By looking at the plot above, we can trace the flow of information:</p>

  <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.1rem; color: #c53030;">❌ The Red Line (Right Side): Sentiment fails to predict</h4>
  <p>Look at the <strong>Red Line</strong> on the right side of the graph (positive lags). It represents our ability to predict market returns using past sentiment. The line stays flat near zero, far below the dashed significance threshold. <strong>Result: 0 out of 26 lags are significant.</strong> High optimism today tells us <em>nothing</em> about returns next week.</p>

  <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.1rem; color: #2b6cb0;">✅ The Blue Line (Left Side): Returns strongly drive Sentiment</h4>
  <p>Now look at the <strong>Blue Line</strong> on the left side (negative lags). It skyrockets upwards, reaching values between 15 and 18 on the Y-axis (which is a logarithmic scale of significance). <strong>Result: All 26 lags are highly significant (p < 0.01).</strong></p> 
  
  <p><strong>Reading the Blue Curve:</strong></p>
  <ul>
    <li><strong>The Dip at -1:</strong> At lag -1 (the most recent week), the signal is slightly weaker. This suggests it takes more than a single week for a trend to fully "soak in" to investor psychology.</li>
    <li><strong>The Plateau:</strong> From lag -2 to -8, the signal is strongest. This confirms that investors are forming their views based on a rolling window of the past 1-2 months of market performance.</li>
  </ul>

  <div class="insight-box reveal no-box" style="border-left: 3px solid #667eea; padding-left: 1.5rem; margin-top: 2rem;">
    <p><strong>The Conclusion:</strong> This confirms <strong>Extrapolative Expectations</strong>. Investors assume that "what just happened" is "what will happen." When markets rise, they become bullish. When markets fall, they become bearish. They are not forecasting; they are reacting.</p>
  </div>

</div>

<hr class="section-divider">

<h2>The Full Picture: Vector Autoregression (VAR)</h2>

<div class="var-layout-container">

  <div class="var-content-left">
    <p class="section-intro" style="margin-top: 0;">
      To understand whether sentiment and returns influence each other, we estimate a
      <strong>Vector Autoregression (VAR)</strong>, which captures bidirectional dynamics
      between the two variables.
    </p>

    <div class="var-model">
      <h4>Model specification</h4>

      <div class="var-equations">
        <div class="var-eq">
          <span class="eq-label">Sentiment</span>
          <span class="eq-formula">
            S<sub>t</sub> = α₁ + β₁S<sub>t−1</sub> + γ₁R<sub>t−1</sub> + ε<sub>1t</sub>
          </span>
        </div>

        <div class="var-eq">
          <span class="eq-label">Returns</span>
          <span class="eq-formula">
            R<sub>t</sub> = α₂ + β₂R<sub>t−1</sub> + γ₂S<sub>t−1</sub> + ε<sub>2t</sub>
          </span>
        </div>
      </div>

      <p class="var-note">
        The coefficients quantify how past sentiment affects returns — and how past
        returns affect sentiment.
      </p>
    </div>
  </div>

 


<!-- VAR results -->
<h3 class="results-title">VAR Results</h3>

<div class="var-grid">
  <div class="var-card">
    <h4>Predicting Sentiment</h4>

    <div class="coef-row">
      <span>Lagged sentiment (S<sub>t−1</sub>)</span>
      <span class="coef-value">0.652</span>
    </div>
    <div class="coef-meta">p &lt; 0.001 · strong persistence</div>

    <div class="coef-row strong">
      <span>Lagged returns (R<sub>t−1</sub>)</span>
      <span class="coef-value">1394.83</span>
    </div>
    <div class="coef-meta">p &lt; 0.001 · sentiment reacts strongly to returns</div>
  </div>

  <div class="var-card">
    <h4>Predicting Returns</h4>

    <div class="coef-row">
      <span>Lagged returns (R<sub>t−1</sub>)</span>
      <span class="coef-value">0.965</span>
    </div>
    <div class="coef-meta">p &lt; 0.001 · autocorrelation</div>

    <div class="coef-row weak">
      <span>Lagged sentiment (S<sub>t−1</sub>)</span>
      <span class="coef-value">0.000001</span>
    </div>
    <div class="coef-meta">p = 0.047 · economically negligible</div>
  </div>
</div>

<!-- Key insight -->
<div class="var-insight">
  <h4>Key insight</h4>

  <div class="insight-compare">
    <div class="insight-item strong">
      <span class="direction">Returns → Sentiment</span>
      <span class="magnitude">Large effect</span>
      <span class="detail">Coefficient ≈ 1395</span>
    </div>

    <div class="insight-item weak">
      <span class="direction">Sentiment → Returns</span>
      <span class="magnitude">Tiny effect</span>
      <span class="detail">Coefficient ≈ 0.000001</span>
    </div>
  </div>

  <p class="final-takeaway">
    The relationship is statistically bidirectional, but
    <strong>economically one-sided</strong>:
    markets move investors far more than investors move markets.
  </p>
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
