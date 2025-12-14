
## Understanding Investor Sentiment

To understand whether investors lead markets or follow them, we first need to
understand how investor sentiment behaves on its own. Using weekly AAII survey
data, we track how investors classify their six-month outlook as **Bullish**,
**Neutral**, or **Bearish**.

Before looking at what investors actually believe, take a moment to answer the
same question they face every week.

### Where do you think the market is headed over the next six months?


{% include click.html %}

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
    <p>Across the full sample, <strong>bullish sentiment is the most common state</strong>, accounting for roughly 38% of all observations, while neutral and bearish views each represent about 31%.
    This asymmetry suggests a structural optimism: investors tend to expect growth more often than decline. The pie chart clearly shows this baseline tilt toward optimism that persists across decades of data.</p>
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
    <p>Distributional plots reinforce this picture. Bullish sentiment has a higher median and a wider spread, with occasional surges above 60%. Bearish sentiment, while present, is typically more contained, with extreme pessimism appearing only in isolated episodes rather than persisting over time.</p>
  </div>
</div>

---

## How Sentiment Transitions

<div class="section-intro-text">
  <p>To move beyond levels, we study how sentiment transitions from week to week. By assigning each week to its dominant sentiment state, we construct a transition matrix that reveals how sticky beliefs are.</p>
</div>

<div class="plot-figure">
    <figure>
      <img src="{{ site.baseurl }}/assets/img/sentiment_state_transition_matrix.png"
           alt="Sentiment state transition matrix">
      <figcaption>Week-to-week sentiment transition probabilities</figcaption>
    </figure>
  </div>

The results show **strong persistence**: bullish sentiment remains bullish 77% of the time, neutral stays neutral 59%, and bearish remains bearish 64%.
However, when sentiment does change, pessimism is less sticky than optimism. Bearish states are more likely to flip directly to bullish than the reverse, suggesting that negative beliefs tend to unwind faster than positive ones.
This persistence matters: it means that large sentiment changes are rare, and therefore **informative**.


---

## Identifying Critical Moments

<div class="section-intro-text">
  <p>If most weeks look similar, the most revealing moments are the exceptions. To capture these, we identify the largest week-to-week changes in bullish, neutral, and bearish sentiment. These jumps represent moments when investors rapidly reassess their outlook.</p>
</div>

<div class="plot-figure">
    <figure>
      <img src="{{ site.baseurl }}/assets/img/sentiment_distribution.png"
           alt="Largest sentiment changes over time">
      <figcaption>Top sudden sentiment shifts identifying critical market moments</figcaption>
    </figure>
  </div>
  

Bar charts of the largest sentiment jumps allow us to pinpoint exact calendar dates where beliefs shifted abruptly.
These dates become **critical reference points** for the rest of the analysis: they let us compare when beliefs move relative to when markets move.
By identifying these inflection points, we can test whether sentiment shifts preceded market regime changes.

---

