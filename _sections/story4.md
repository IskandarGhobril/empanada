<div id="story4" class="section section-sectors">

<div class="session-header">
  <h2 class="section-title">
    <span class="session-label">Session 5:</span> Sector Breakdown
  </h2>
  <p class="session-subtitle">Differential Diagnosis</p>
</div>


<div class="therapist-note reveal no-box">
  <div class="note-header">
    <span class="note-icon"></span>
    <span class="note-label">Specialized Analysis</span>
  </div>
  <div class="note-content">
    <p>So far, we've treated The Market as a monolithic patient. But markets are complex systems with many sub-personalities. Does investor sentiment relate differently to Technology vs. Healthcare vs. Energy? This session performs a <strong>differential diagnosis</strong> across market sectors.</p>
  </div>
</div>

<hr class="section-divider">

<h2>Why Sector Analysis Matters</h2>

<p class="lead reveal">Retail investors don't hold "the market", they hold specific stocks in specific sectors. Their sentiment may be driven by, or influence, particular industries more than others.</p>

<div class="sector-hypotheses reveal">
  <div class="hypothesis-item pulse-on-hover">
    <span class="hypothesis-icon"></span>
    <h4>Hypothesis: Sector Bias</h4>
    <p>Investors may overweight certain "exciting" sectors (like Technology) when forming their market outlook, making sentiment more predictive for those sectors.</p>
  </div>

  <div class="hypothesis-item pulse-on-hover">
    <span class="hypothesis-icon"></span>
    <h4>Hypothesis: Sector Heterogeneity</h4>
    <p>The sentiment-return relationship may differ structurally across sectors, with some showing lead effects and others showing only reactive patterns.</p>
  </div>
</div>

<hr class="section-divider">

<h2>Sector Synchronization</h2>

<p class="lead reveal">First, let's examine how different sectors move together. The heatmap below shows correlation between sector returns, revealing which sectors tend to rise and fall in unison.</p>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="sector-sync">
    <iframe src="{{ site.baseurl }}/assets/img/sector_synchronization_heatmap.html"
            width="100%" height="500" frameborder="0"></iframe>
    <figcaption>Sector synchronization heatmap: darker colors indicate stronger correlation between sector returns.</figcaption>
  </div>
</figure>

<p class="reveal">Technology and Consumer sectors show high correlation—when retail investors are bullish, they often pile into both. Energy shows lower correlation with other sectors, driven more by commodity prices than general sentiment.</p>

<hr class="section-divider">

<h2>Sector Returns Analysis</h2>

<p class="lead reveal">How do sector returns compare across different market conditions? The scatter plot reveals the relationship between overall market sentiment and individual sector performance.</p>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="sector-returns">
    <iframe src="{{ site.baseurl }}/assets/img/sector_returns_scatter.html"
            width="100%" height="500" frameborder="0"></iframe>
    <figcaption>Sector returns scatter: comparing sector performance under different sentiment conditions.</figcaption>
  </div>
</figure>

<hr class="section-divider">

<h2>Sentiment vs. Sector Returns</h2>

<p class="lead reveal">Does investor sentiment predict sector returns differently across industries? This visualization shows the relationship between sentiment measures and subsequent sector performance.</p>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="sentiment-vs-returns">
    <iframe src="{{ site.baseurl }}/assets/img/sector_sentiment_vs_returns.html"
            width="100%" height="500" frameborder="0"></iframe>
    <figcaption>Sentiment vs. sector returns: exploring predictive relationships across industries.</figcaption>
  </div>
</figure>

<hr class="section-divider">

<h2>Sector Lead-Lag Analysis</h2>

<p class="lead reveal">Just as we tested whether sentiment leads or lags the overall market, we now apply the same analysis to each sector individually. Does sentiment predict Technology differently than Energy?</p>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="sector-leadlag">
    <iframe src="{{ site.baseurl }}/assets/img/sector_leadlag_analysis.html"
            width="100%" height="500" frameborder="0"></iframe>
    <figcaption>Lead-lag analysis by sector: information gain at different time offsets for each industry.</figcaption>
  </div>
</figure>

<p class="reveal">The pattern varies significantly by sector. High-attention sectors like Technology show stronger relationships at all lags, while defensive sectors like Utilities show flatter profiles—sentiment matters less for them.</p>

<hr class="section-divider">

<h2>Sector Comparison</h2>

<p class="lead reveal">How do sectors rank in terms of sentiment predictability? The bar chart below compares information gain across all sectors.</p>

<figure class="plot-figure reveal">
  <div class="interactive-figure" data-plot="sector-comparison">
    <iframe src="{{ site.baseurl }}/assets/img/sector_comparison_bars.html"
            width="100%" height="500" frameborder="0"></iframe>
    <figcaption>Sector comparison: ranking sectors by sentiment-related information gain.</figcaption>
  </div>
</figure>

<div class="sector-grid reveal">

  <div class="sector-card tech-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon"></span>
      <h4>Technology</h4>
    </div>
    <p class="sector-interpretation">Tech stocks are highly visible and drive retail investor attention. Shows the <strong>strongest sentiment correlation</strong>—when retail investors are bullish, they're often thinking about tech.</p>
  </div>

  <div class="sector-card healthcare-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon"></span>
      <h4>Healthcare</h4>
    </div>
    <p class="sector-interpretation">Healthcare is defensive, less tied to general market sentiment. Returns are driven more by sector-specific factors like drug approvals and regulatory changes.</p>
  </div>

  <div class="sector-card consumer-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon"></span>
      <h4>Consumer</h4>
    </div>
    <p class="sector-interpretation">Consumer sectors reflect economic sentiment directly—when people search for "recession," they're often worried about their spending, which impacts these stocks.</p>
  </div>

  <div class="sector-card energy-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon"></span>
      <h4>Energy</h4>
    </div>
    <p class="sector-interpretation">Energy is commodity-driven. Retail sentiment matters less here—global supply/demand factors and geopolitics dominate.</p>
  </div>

  <div class="sector-card financials-sector pulse-on-hover">
    <div class="sector-header">
      <span class="sector-icon"></span>
      <h4>Financials</h4>
    </div>
    <p class="sector-interpretation">Financials are economically sensitive. They show stronger ties to macroeconomic searches like "recession" and "interest rates."</p>
  </div>

</div>

<hr class="section-divider">

<h2>Do Sectors Differ Significantly?</h2>

<p class="reveal">The visualizations above suggest clear differences, but are they statistically significant? We test whether the sentiment-return relationship varies meaningfully across sectors using interaction terms in regression models.</p>

<p class="reveal"><strong>Result:</strong> Yes, sectors differ significantly. The null hypothesis (that all sectors respond equally to sentiment) is rejected. High-attention sectors like Technology show 2-3x stronger sentiment effects compared to defensive sectors like Utilities.</p>

<hr class="section-divider">

<h2>Are Investors Sector-Biased?</h2>

<p class="reveal">When forming their market outlook, do retail investors overweight certain sectors? The data suggests yes: AAII sentiment correlates more strongly with "exciting" sectors like Technology than with "boring" sectors like Utilities.</p>

<p class="reveal">This has important implications: retail investor sentiment may be a poor proxy for overall market conditions and a better proxy for a specific subset of high-visibility stocks they're actually paying attention to.</p>

<hr class="section-divider">

<h2>The Sector Story: A Nuanced Picture</h2>

<p class="reveal">The sector breakdown reveals that <strong>"the market"</strong> is really many markets. The sentiment-return relationship varies:</p>

<p class="reveal"><strong>Strongest</strong> in high-attention sectors (Tech, Consumer Discretionary) where retail investors concentrate their attention and trading.</p>

<p class="reveal"><strong>Weakest</strong> in institutional/commodity-driven sectors (Energy, Utilities) where fundamentals dominate and retail sentiment has little impact.</p>

<p class="reveal"><strong>Mixed</strong> in economically sensitive sectors (Financials, Industrials) which respond to both sentiment and macroeconomic conditions.</p>

<p class="reveal">This heterogeneity is important: investor sentiment, even when it contains information, is not uniformly relevant across a diversified portfolio.</p>

<hr class="section-divider">

<div class="session-summary reveal">
  <h3>Session 5 Summary: Differential Diagnosis</h3>
  <div class="summary-points">
    <div class="summary-point">
      <span class="point-number">1</span>
      <p><strong>Sectors differ.</strong> The sentiment-market relationship is not uniform: it varies by industry.</p>
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
      <p><strong>Implications for trading.</strong> Any sentiment-based strategy needs to be sector-aware, blanket approaches miss important heterogeneity.</p>
    </div>
  </div>
</div>

<div class="session-transition final reveal">
  <p class="transition-label">Final Session</p>
  <p class="transition-text">We've completed our examination. Time to synthesize everything we've learned and deliver our <strong>final diagnosis</strong>.</p>
  <p class="transition-cta pulse-purple">What did we learn about The Market?</p>
</div>

</div>
