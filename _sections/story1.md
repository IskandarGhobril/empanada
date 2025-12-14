
## Understanding Investor Sentiment

To understand whether investors lead markets or follow them, we first need to
understand how investor sentiment behaves on its own. Using weekly AAII survey
data, we track how investors classify their six-month outlook as **Bullish**,
**Neutral**, or **Bearish**.

Before looking at what investors actually believe, take a moment to answer the
same question they face every week.

### Where do you think the market is headed over the next six months?

<div class="sentiment-widget">
  <p class="widget-subtitle">
    Select your prediction for the market over the next six months
  </p>

  <div class="sentiment-cards">
    <div class="card bullish" onclick="selectCard(this, 'bullish')">
      <div class="card-icon">▲</div>
      <div class="card-title">Bullish</div>
      <div class="card-desc">Markets will rise</div>
    </div>

    <div class="card neutral" onclick="selectCard(this, 'neutral')">
      <div class="card-icon">━</div>
      <div class="card-title">Neutral</div>
      <div class="card-desc">Markets will stay flat</div>
    </div>

    <div class="card bearish" onclick="selectCard(this, 'bearish')">
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

{% raw %}
<script>
let selectedSentiment = null;

function selectCard(card, sentiment) {
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  selectedSentiment = sentiment;
  document.getElementById('submitButton').disabled = false;
  document.getElementById('resultBox').classList.remove('show');
}

function submitPrediction() {
  if (!selectedSentiment) return;

  const stats = {
    bullish: '63%',
    neutral: '31%',
    bearish: '6%'
  };

  const resultBox = document.getElementById('resultBox');
  resultBox.textContent =
    `Submitted! You join the ${stats[selectedSentiment]} of investors who predicted the market will be ${selectedSentiment}.`;
  resultBox.classList.add('show');
}
</script>
{% endraw %}


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

