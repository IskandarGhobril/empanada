---
layout: page
title: Story1
---

## Understanding Investor Sentiment

To understand whether investors lead markets or follow them, we first need to understand how investor sentiment behaves on its own. Using weekly AAII survey data, we track how investors classify their six-month outlook as **Bullish**, **Neutral**, or **Bearish**.
Before looking at what investors actually believe, take a moment to answer the same question they face every week.

### Where do you think the market is headed over the next six months?

<div class="sentiment-widget">
  <p class="widget-subtitle">Select your prediction for the market over the next six months</p>
  
  <div class="sentiment-cards">
    <div class="card bullish" onclick="selectCard('bullish')">
      <div class="card-icon">▲</div>
      <div class="card-title">Bullish</div>
      <div class="card-desc">Markets will rise</div>
    </div>
    
    <div class="card neutral" onclick="selectCard('neutral')">
      <div class="card-icon">━</div>
      <div class="card-title">Neutral</div>
      <div class="card-desc">Markets will stay flat</div>
    </div>
    
    <div class="card bearish" onclick="selectCard('bearish')">
      <div class="card-icon">▼</div>
      <div class="card-title">Bearish</div>
      <div class="card-desc">Markets will fall</div>
    </div>
  </div>
  
  <div class="submit-section">
    <button class="submit-btn" id="submitButton" onclick="submitPrediction()" disabled>
      Submit
    </button>
  </div>
  
  <div class="result" id="resultBox"></div>
</div>

<script>
let selectedSentiment = null;

function selectCard(sentiment) {
  // Remove active class from all cards
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  
  // Add active class to selected card
  event.currentTarget.classList.add('active');
  
  // Store selection
  selectedSentiment = sentiment;
  
  // Enable submit button
  document.getElementById('submitButton').disabled = false;
  
  // Hide result
  document.getElementById('resultBox').classList.remove('show');
}

function submitPrediction() {
  if (!selectedSentiment) return;
  
  const stats = {
    'bullish': '63%',
    'neutral': '31%',
    'bearish': '6%'
  };
  
  const resultBox = document.getElementById('resultBox');
  resultBox.textContent = `Submitted! You join the ${stats[selectedSentiment]} of investors who predicted the market will be ${selectedSentiment}.`;
  resultBox.classList.add('show');
}
</script>
---

Whatever your choice, you've just joined millions of investors who make this call regularly. What's interesting is not just whether they're right, but **which answer most people tend to give**. When we look across decades of survey data, a clear pattern emerges: investors are, on average, more optimistic than pessimistic.

---

## A Market That Leans Optimistic

<div class="plot-text-container">
  <div class="plot-side">
    <figure>
      <img src="{{ site.baseurl }}/assets/img/sentiment_state_pie_chart.png"
           alt="Pie chart showing distribution of sentiment states">
      <figcaption>Distribution of investor sentiment across all observations</figcaption>
    </figure>
  </div>
  
  <div class="text-side">
    <p>Across the full sample, <strong>bullish sentiment is the most common state</strong>, accounting for roughly 38% of all observations, while neutral and bearish views each represent about 31%.</p>
    
    <p>This asymmetry suggests a structural optimism: investors tend to expect growth more often than decline. The pie chart clearly shows this baseline tilt toward optimism that persists across decades of data.</p>
  </div>
</div>

<div class="plot-text-container reverse">
  <div class="plot-side">
    <figure>
      <img src="{{ site.baseurl }}/assets/img/sentiment_box_violin_plots.png"
           alt="Sentiment distribution boxplot">
      <figcaption>Distribution of sentiment levels showing median and spread</figcaption>
    </figure>
  </div>
  
  <div class="text-side">
    <p>Distributional plots reinforce this picture. <strong>Bullish sentiment has a higher median and a wider spread</strong>, with occasional surges above 60%.</p>
    
    <p>Bearish sentiment, while present, is typically more contained, with extreme pessimism appearing only in isolated episodes rather than persisting over time. The boxplot reveals that optimism is not just more common—it's also more variable.</p>
  </div>
</div>

---

## How Sentiment Transitions

<div class="section-intro-text">
  <p>To move beyond levels, we study how sentiment transitions from week to week. By assigning each week to its dominant sentiment state, we construct a transition matrix that reveals how sticky beliefs are.</p>
</div>

<div class="plot-text-container">
  <div class="plot-side">
    <figure>
      <img src="{{ site.baseurl }}/assets/img/sentiment_state_transition_matrix.png"
           alt="Sentiment state transition matrix">
      <figcaption>Week-to-week sentiment transition probabilities</figcaption>
    </figure>
  </div>
  
  <div class="text-side">
    <p>The results show <strong>strong persistence</strong>: bullish sentiment remains bullish 77% of the time, neutral stays neutral 59%, and bearish remains bearish 64%.</p>
    
    <p>However, when sentiment does change, pessimism is less sticky than optimism. Bearish states are more likely to flip directly to bullish than the reverse, suggesting that negative beliefs tend to unwind faster than positive ones.</p>
    
    <p>This persistence matters: it means that large sentiment changes are rare, and therefore <strong>informative</strong>.</p>
  </div>
</div>

---

## Identifying Critical Moments

<div class="section-intro-text">
  <p>If most weeks look similar, the most revealing moments are the exceptions. To capture these, we identify the largest week-to-week changes in bullish, neutral, and bearish sentiment. These jumps represent moments when investors rapidly reassess their outlook.</p>
</div>

<div class="plot-text-container reverse">
  <div class="plot-side">
    <figure>
      <img src="{{ site.baseurl }}/assets/img/sentiment_distribution.png"
           alt="Largest sentiment changes over time">
      <figcaption>Top sudden sentiment shifts identifying critical market moments</figcaption>
    </figure>
  </div>
  
  <div class="text-side">
    <p>Bar charts of the largest sentiment jumps allow us to pinpoint exact calendar dates where beliefs shifted abruptly.</p>
    
    <p>These dates become <strong>critical reference points</strong> for the rest of the analysis: they let us compare when beliefs move relative to when markets move.</p>
    
    <p>By identifying these inflection points, we can test whether sentiment shifts preceded market regime changes—or simply reacted to them.</p>
  </div>
</div>

---

<style>
/* Section intro text */
.section-intro-text {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: rgba(102, 126, 234, 0.05);
  border-left: 4px solid #667eea;
  border-radius: 4px;
}

.section-intro-text p {
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.7;
  color: #4a5568;
}

/* Plot with text side-by-side layout */
.plot-text-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  margin: 3rem 0;
}

.plot-side {
  display: flex;
  flex-direction: column;
}

.plot-side figure {
  margin: 0;
}

.plot-side img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.plot-side figcaption {
  margin-top: 1rem;
  font-style: italic;
  color: #718096;
  font-size: 0.95rem;
  text-align: center;
}

.text-side {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-side p {
  margin-bottom: 1.25rem;
  line-height: 1.8;
  text-align: justify;
}

.text-side p:last-child {
  margin-bottom: 0;
}

/* Reverse layout (text left, plot right) */
.plot-text-container.reverse {
  grid-template-columns: 1fr 1fr;
}

.plot-text-container.reverse .plot-side {
  order: 2;
}

.plot-text-container.reverse .text-side {
  order: 1;
}

/* Responsive */
@media (max-width: 968px) {
  .plot-text-container,
  .plot-text-container.reverse {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .plot-text-container.reverse .plot-side,
  .plot-text-container.reverse .text-side {
    order: initial;
  }
  
  .text-side {
    padding: 0;
  }
  
  .text-side p {
    text-align: left;
  }
}
</style>
