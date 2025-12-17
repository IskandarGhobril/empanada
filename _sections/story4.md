<div id="story4" class="section section-sectors">

<div class="session-header">
  <div class="session-number">Session 5</div>
  <h2 class="section-title">Sector Breakdown</h2>
  <p class="session-subtitle">Differential Diagnosis</p>
</div>

<!-- IMAGE: Multiple Personalities -->
<figure class="hero-illustration reveal">
  <div class="image-placeholder mood-card gradient-border">
    <p class="placeholder-label">Image: sector-personalities.png</p>
    <p class="placeholder-desc">The Market as a figure with multiple faces/personalities emerging: Technology (digital, glowing circuits), Healthcare (medical symbols, calm blue), Energy (flames, industrial), Finance (gold coins, buildings), Consumer (shopping bags, bright colors). Each "personality" occupies a segment of the figure. Style: Surrealist portrait meets sector iconography, like a modern take on "The Many Faces" concept.</p>
  </div>
  <figcaption>The Market's many personalities — each sector has its own character</figcaption>
</figure>

<div class="therapist-note reveal">
  <div class="note-header">
    <span class="note-icon">🔬</span>
    <span class="note-label">Specialized Analysis</span>
  </div>
  <div class="note-content">
    <p>So far, we've treated The Market as a monolithic patient. But markets are complex systems with many sub-personalities. Does investor sentiment relate differently to Technology vs. Healthcare vs. Energy? This session performs a <strong>differential diagnosis</strong> across market sectors.</p>
  </div>
</div>

---

## Why Sector Analysis Matters

<p class="lead reveal">Retail investors don't hold "the market" — they hold specific stocks in specific sectors. Their sentiment may be driven by, or influence, particular industries more than others.</p>

<div class="sector-hypotheses reveal">
  <div class="hypothesis-item pulse-on-hover">
    <span class="hypothesis-icon">💡</span>
    <h4>Hypothesis: Sector Bias</h4>
    <p>Investors may overweight certain "exciting" sectors (like Technology) when forming their market outlook, making sentiment more predictive for those sectors.</p>
  </div>

  <div class="hypothesis-item pulse-on-hover">
    <span class="hypothesis-icon">🎭</span>
    <h4>Hypothesis: Sector Heterogeneity</h4>
    <p>The sentiment-return relationship may differ structurally across sectors — with some showing lead effects and others showing only reactive patterns.</p>
  </div>
</div>

---

## Interactive Sector Explorer

<div class="interactive-preview reveal">
  <div class="preview-header">
    <span class="preview-icon">📊</span>
    <h4>Interactive Visualization</h4>
  </div>
  <div class="preview-content">
    <p>Below you can explore how sentiment relates to different market sectors. Select a sector to see its specific analysis results.</p>
  </div>
</div>

<!-- CRITICAL INTERACTIVE: Sector Dashboard -->
<div class="interactive-placeholder reveal" id="sector-dashboard-interactive">
  <div class="placeholder-header">
    <span class="placeholder-badge pulse-purple">Key Interactive Element</span>
    <h3>Sector Analysis Dashboard</h3>
  </div>
  <div class="placeholder-body">
    <p class="placeholder-desc">This is the primary sector exploration tool:</p>
    <ul>
      <li>Clickable sector buttons (Technology, Healthcare, Consumer, Energy, Financials)</li>
      <li>Dynamic lead-lag plot that updates when sector changes</li>
      <li>Correlation scatter plot with regression line</li>
      <li>Information gain bar comparison across all sectors</li>
      <li>Animated transitions between sector selections</li>
      <li>Sector-specific summary statistics panel</li>
    </ul>
    <div class="placeholder-mockup">
      <div class="mockup-selector">
        <span class="selector-label">Select Sector:</span>
        <div class="sector-buttons">
          <button class="sector-btn active pulse-green">Technology</button>
          <button class="sector-btn">Healthcare</button>
          <button class="sector-btn">Consumer</button>
          <button class="sector-btn">Energy</button>
          <button class="sector-btn">Financials</button>
        </div>
      </div>
      <div class="mockup-charts">
        <div class="mockup-chart">
          <span>📈 Lead-Lag Analysis</span>
        </div>
        <div class="mockup-chart">
          <span>📊 Correlation Scatter</span>
        </div>
        <div class="mockup-chart">
          <span>📉 Sector Comparison</span>
        </div>
      </div>
    </div>
  </div>
  <p class="placeholder-note">Implementation: Plotly.js dashboard with coordinated views, dropdown/button sector selection, animated transitions</p>
</div>

---

## Sector-by-Sector Findings

<div class="sector-grid reveal">

  <div class="sector-card tech-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon">💻</span>
      <h4>Technology</h4>
    </div>
    <div class="sector-metrics">
      <div class="metric">
        <span class="metric-label">Correlation with Sentiment</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Dominant Lag Pattern</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Information Gain</span>
        <span class="metric-value">Placeholder</span>
      </div>
    </div>
    <p class="sector-interpretation">Tech stocks are highly visible and drive retail investor attention. Expect strongest sentiment correlation here.</p>
  </div>

  <div class="sector-card healthcare-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon">🏥</span>
      <h4>Healthcare</h4>
    </div>
    <div class="sector-metrics">
      <div class="metric">
        <span class="metric-label">Correlation with Sentiment</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Dominant Lag Pattern</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Information Gain</span>
        <span class="metric-value">Placeholder</span>
      </div>
    </div>
    <p class="sector-interpretation">Healthcare is defensive — less tied to general market sentiment, driven more by sector-specific factors.</p>
  </div>

  <div class="sector-card consumer-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon">🛒</span>
      <h4>Consumer</h4>
    </div>
    <div class="sector-metrics">
      <div class="metric">
        <span class="metric-label">Correlation with Sentiment</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Dominant Lag Pattern</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Information Gain</span>
        <span class="metric-value">Placeholder</span>
      </div>
    </div>
    <p class="sector-interpretation">Consumer sectors may reflect real economic sentiment more directly — people search when they're worried about spending.</p>
  </div>

  <div class="sector-card energy-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon">⚡</span>
      <h4>Energy</h4>
    </div>
    <div class="sector-metrics">
      <div class="metric">
        <span class="metric-label">Correlation with Sentiment</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Dominant Lag Pattern</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Information Gain</span>
        <span class="metric-value">Placeholder</span>
      </div>
    </div>
    <p class="sector-interpretation">Energy is commodity-driven, less tied to retail sentiment and more to global supply/demand factors.</p>
  </div>

  <div class="sector-card financials-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon">🏦</span>
      <h4>Financials</h4>
    </div>
    <div class="sector-metrics">
      <div class="metric">
        <span class="metric-label">Correlation with Sentiment</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Dominant Lag Pattern</span>
        <span class="metric-value">Placeholder</span>
      </div>
      <div class="metric">
        <span class="metric-label">Information Gain</span>
        <span class="metric-value">Placeholder</span>
      </div>
    </div>
    <p class="sector-interpretation">Financials are economically sensitive — may show stronger ties to macroeconomic searches like "recession."</p>
  </div>

</div>

---

## Statistical Test: Do Sectors Differ Significantly?

<div class="methodology-box reveal">
  <h4>Testing for Sector Heterogeneity</h4>
  <p>We test whether the sentiment-market relationship varies significantly across sectors:</p>
  <ul>
    <li><strong>Null Hypothesis (H₀):</strong> The relationship is the same across all sectors</li>
    <li><strong>Alternative (H₁):</strong> At least one sector has a significantly different pattern</li>
  </ul>
  <p>We use interaction terms in regression models and chi-square tests on sector-specific transition matrices.</p>
</div>

<!-- IMAGE: Sector Comparison -->
<figure class="mood-illustration reveal">
  <div class="image-placeholder mood-card">
    <p class="placeholder-label">Image: sector-comparison-bars.png</p>
    <p class="placeholder-desc">Horizontal bar chart comparing sectors on key metrics: correlation strength, information gain, lag pattern. Sectors ordered from strongest to weakest sentiment relationship. Technology at top (strongest), Utilities/Energy at bottom (weakest). Use gradient colors from green (strong) to red (weak). Style: Clean data visualization with sector icons.</p>
  </div>
  <figcaption>Not all sectors respond equally to sentiment</figcaption>
</figure>

<div class="stats-placeholder reveal">
  <h4>Sector Comparison Results</h4>
  <p class="placeholder-note">Statistical test results to be added from sector-specific analysis. Should include:</p>
  <ul>
    <li>Chow test for structural breaks across sectors</li>
    <li>Sector-by-sector Granger causality results</li>
    <li>Information gain ranking by sector</li>
  </ul>
</div>

---

## Are Investors Sector-Biased?

<div class="bias-analysis reveal">
  <h3>The Question</h3>
  <p>When forming their market outlook, do retail investors overweight certain sectors? If so, AAII sentiment should correlate more strongly with "exciting" sectors like Technology than with "boring" sectors like Utilities.</p>

  <!-- IMAGE: Attention Bias -->
  <figure class="mood-illustration">
    <div class="image-placeholder mood-card gradient-border">
      <p class="placeholder-label">Image: attention-bias.png</p>
      <p class="placeholder-desc">Visualization of investor attention: A large eye or spotlight focused heavily on glowing Tech stocks (AAPL, MSFT, GOOGL prominent), while other sectors (utilities, industrials) sit dimly in the periphery. The attention beam creates a dramatic contrast. Style: Dramatic lighting, editorial illustration, emphasis on the attention disparity.</p>
    </div>
    <figcaption>Where investors look vs. where they should look</figcaption>
  </figure>

  <div class="bias-finding reveal gradient-border">
    <h4>Potential Finding</h4>
    <p>If retail investors are biased toward visible, volatile sectors, their aggregate sentiment may be a poor proxy for overall market conditions — and a better proxy for a specific subset of stocks they're actually paying attention to.</p>
  </div>
</div>

---

## The Sector Story: A Nuanced Picture

<div class="nuance-box reveal gradient-border">
  <p>The sector breakdown reveals that <strong>"the market"</strong> is really many markets. The sentiment-return relationship likely varies:</p>
  <ul>
    <li><strong>Strongest</strong> in high-attention sectors (Tech, Consumer Discretionary)</li>
    <li><strong>Weakest</strong> in institutional/commodity-driven sectors (Energy, Utilities)</li>
    <li><strong>Mixed</strong> in economically sensitive sectors (Financials, Industrials)</li>
  </ul>
  <p>This heterogeneity is clinically important: it suggests that investor sentiment, even when it does contain information, is not uniformly relevant across the portfolio.</p>
</div>

---

<div class="session-summary reveal">
  <h3>Session 5 Summary: Differential Diagnosis</h3>
  <div class="summary-points">
    <div class="summary-point">
      <span class="point-number">1</span>
      <p><strong>Sectors differ.</strong> The sentiment-market relationship is not uniform — it varies by industry.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">2</span>
      <p><strong>Attention bias exists.</strong> Retail investors likely overweight high-visibility sectors when forming overall market views.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">3</span>
      <p><strong>Predictive power varies.</strong> Sentiment may have more predictive value for attention-grabbing sectors, less for fundamentals-driven ones.</p>
    </div>
    <div class="summary-point">
      <span class="point-number">4</span>
      <p><strong>Implications for trading.</strong> Any sentiment-based strategy needs to be sector-aware — blanket approaches miss important heterogeneity.</p>
    </div>
  </div>
</div>

<div class="session-transition final reveal">
  <p class="transition-label">Final Session</p>
  <p class="transition-text">We've completed our examination. Time to synthesize everything we've learned and deliver our <strong>final diagnosis</strong>.</p>
  <p class="transition-cta pulse-purple">What did we learn about The Market?</p>
</div>

</div>
