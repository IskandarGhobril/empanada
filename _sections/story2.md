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
  <div class="card figure-card plot-small" style="max-width: 800px; margin: 2rem auto;">
  <figure class="plot-figure">
    <img src="{{ site.baseurl }}/assets/img/joint_sentiment_vs_returns.png"
         alt="Joint distribution of sentiment and returns"
         class="plot"
         style="width: 100%; height: auto;">
    <figcaption>
      Joint distribution of investor sentiment and market returns
    </figcaption>
  </figure>
</div>


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


 <h4 class="section-subtitle">Sentiment metric</h4>

<p class="metric-text">
  Investor sentiment is summarized by a single index,
  <strong>S = %Bullish − %Bearish</strong>, capturing net optimism
  on a scale from −100 (fully bearish) to +100 (fully bullish).
</p>


  <!-- Results -->
  <h4>Correlation with market returns</h4>

  <div class="stat-grid">

    <div class="stat-block">
      <span class="stat-name">Past 6-month returns (Pearson)</span>
      <span class="stat-number">ρ ≈ 0.32</span>
      <span class="stat-meta">p &lt; 0.001</span>
      <p class="stat-text">
        Sentiment is strongly and positively correlated with recent
        market performance. Investors tend to become more optimistic
        following periods of rising prices, consistent with
        trend-chasing behavior.
      </p>
    </div>

    <div class="stat-block">
      <span class="stat-name">Future 6-month returns (Spearman)</span>
      <span class="stat-number">ρ<sub>s</sub> ≈ −0.09</span>
      <span class="stat-meta">p &lt; 0.001</span>
      <p class="stat-text">
        Looking forward, the relationship weakens and reverses sign.
        High levels of optimism are followed by slightly lower
        future returns, suggesting that excessive bullishness
        may precede periods of underperformance.
      </p>
    </div>

  <!-- Takeaway -->
  <p class="analysis-takeaway">
    <strong>Overall interpretation.</strong>
    Sentiment appears to respond strongly to past returns but provides
    limited predictive power for future performance. Although both
    correlations are statistically significant, their modest magnitude
    indicates that sentiment explains only a small share of market
    return variation.
  </p>

</div>

  <!-- Takeaway -->
  <div class="insight-box reveal">
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
    <p><strong>Granger Causality</strong> asks a specific question: Does adding past values of Variable X reduce the prediction error of Variable Y, compared to predicting Y using only its own history?</p>
  </div>
</div>

<div class="methodology-box math-box reveal no-box">
  <h4>The Formal Test</h4>
  <p>To test if <strong>Sentiment (S) causes Returns (R)</strong>, we compare two models using an F-test:</p>
  
  <div class="var-grid-wrapper" style="margin-top: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
    
    <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 3px solid #718096;">
      <h5 style="color: #4a5568; margin: 0 0 0.5rem;">1. Restricted Model (Null Hypothesis)</h5>
      <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">We try to predict Returns using <em>only</em> past Returns.</p>
      <div class="equation no-box" style="font-size: 1rem;">
        R<sub>t</sub> = α + <span style="color: #718096;">∑ β<sub>i</sub> R<sub>t-i</sub></span> + ε<sub>t</sub>
      </div>
    </div>

    <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 3px solid #c53030;">
      <h5 style="color: #c53030; margin: 0 0 0.5rem;">2. Unrestricted Model (Alternative Hypothesis)</h5>
      <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">We add past Sentiment to see if predictions improve.</p>
      <div class="equation no-box" style="font-size: 1rem;">
        R<sub>t</sub> = α + <span style="color: #718096;">∑ β<sub>i</sub> R<sub>t-i</sub></span> + <strong style="color: #c53030;">∑ γ<sub>i</sub> S<sub>t-i</sub></strong> + ε<sub>t</sub>
      </div>
    </div>
    
  </div>
  
  <p style="margin-top: 1rem; font-size: 0.95rem;">
    <strong>The Test:</strong> We check if the coefficients <strong>γ</strong> (the effect of sentiment) are jointly different from zero. <br>
    If <strong>γ ≠ 0</strong>, then Sentiment "Granger-causes" Returns.
  </p>
</div>

<div class="plot-figure reveal" style="margin: 2rem 0; max-width: 900px; margin-left: auto; margin-right: auto;">
  <figure class="interactive-figure" data-plot="granger-causality">
    {% include granger_causality.html %}
    <figcaption>
      Evolution of Causal Strength: Blue (Returns→Sentiment) vs. Red (Sentiment→Returns)
    </figcaption>
  </figure>
</div>


<div class="reveal" style="margin-bottom: 2rem;">
  
  <p class="lead">The results tell a story of complete asymmetry. By looking at the plot above, we can trace the flow of information:</p>

  <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.1rem; color: #c53030;">The Red Line (Right Side): Sentiment fails to predict</h4>
  <p>This tests the <strong>Unrestricted Model</strong> above. The coefficient sum (<strong>∑ γ</strong>) is effectively zero. Knowing past sentiment adds <strong>no predictive power</strong> to the model. The line stays flat near zero, far below the dashed significance threshold.</p>

  <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.1rem; color: #2b6cb0;">The Blue Line (Left Side): Returns strongly drive Sentiment</h4>
  <p>Here we flip the equation: attempting to predict <em>Sentiment</em> using past <em>Returns</em>. The blue line skyrockets, reaching huge significance levels (p < 0.01). This confirms that yesterday's market performance is the primary driver of today's investor mood.</p> 

  <div class="insight-box reveal">
    <p><strong>The Conclusion:</strong> This confirms <strong>Extrapolative Expectations</strong>. Investors assume that "what just happened" is "what will happen." When markets rise, they become bullish. When markets fall, they become bearish. They are not forecasting; they are reacting.</p>
  </div>

</div>

<style>
@media (max-width: 768px) {
  .var-grid-wrapper {
    grid-template-columns: 1fr !important;
  }
}
</style>

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
        The coefficients quantify how past sentiment affects returns and how past
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
  </div>
</div>

<div class="session-transition reveal">
  <p class="transition-label">Next Session Preview</p>
  <p class="transition-text">We've established the direction of causality. Now let's examine the patient's <strong>mood cycles</strong>: distinct behavioral states and how sentiment affects transitions between them.</p>
  <p class="transition-cta">Time for the mood analysis.</p>
</div>

</div>
