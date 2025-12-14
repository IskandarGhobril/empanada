---
layout: post
title: "Do Markets Listen to Investors — or Are Investors Just Echoing the Market?"
subtitle: "A data-driven investigation into sentiment, belief, and market reality"
date: 2024-12-13
author: Your Team Name
categories: [data-science, finance, analysis]
tags: [ADA, sentiment-analysis, market-dynamics, NASDAQ, clustering, time-series]
image: /assets/plots/plot_06.png
---

## Introduction

*What came first, the chicken or the egg?* 

Financial markets are often described as forward-looking. Every week, investors confidently state what they believe the market will do over the next six months: **bullish**, **bearish**, or **neutral**. These expectations shape headlines, influence portfolio decisions, and justify billions in capital flows. But beneath this apparent foresight lies a deeper and rarely examined question: **who is actually leading whom?** Do investors’ predictions pull the market in a certain direction? or are they largely reactions to market movements that have already begun? Financial markets feel like a collective mind yet its unclear who is leading the dance.

This project dives into that tension by placing beliefs and prices on the same timeline. Using NASDAQ stock and ETF data alongside six-month investor sentiment forecasts, we follow the market and its expectations through bull, neutral, and bear regimes to see **who moves first**. Other than chasing prediction accuracy, we focus on something as revealing: **timing**. When do beliefs change relative to market regimes? When does sentiment lead, and when does it lag? 


---

## 📊 Part 1: Understanding the Market Landscape

### The Dataset: 5,884 NASDAQ Tickers

Our core dataset contains **historical daily stock and ETF prices** for all tickers currently trading on the NASDAQ. Each ticker has its own time series ending in April 2020, giving us a comprehensive view of market behavior across various economic conditions.

#### Distribution of Trading Histories

![Ticker Row Count Distribution](/assets/plots/plot_01.png)
*Figure 1: Distribution of historical data points across all NASDAQ tickers*

The dataset includes **5,884 tickers** with an average of approximately **4,112 rows each** (≈24.2M total rows). The distribution is **right-skewed**, showing many tickers with short trading histories and a small number of established companies with decades of data.

This heterogeneity is crucial: newer companies may exhibit different volatility patterns than established blue-chips, and survivorship bias could affect our conclusions.

### Data Quality: Finding the Signal in the Noise

Before any analysis, we must confront reality: **financial data is messy**. Our initial exploration revealed several systematic issues:

![Data Quality Before Cleaning](/assets/plots/plot_03.png)
*Figure 2: Price range anomalies in raw data—notice the extreme outliers*

We discovered:
- **Negative prices**: Financially impossible, indicating corrupted data
- **Extreme outliers**: Prices reaching billions of dollars (likely decimal errors or stock splits not properly adjusted)
- **Missing values**: Gaps in trading history

After rigorous cleaning protocols:

![Data Quality After Cleaning](/assets/plots/plot_04.png)
*Figure 3: Price ranges after cleaning—now within reasonable market bounds*

The cleaned dataset shows prices within economically plausible ranges, allowing us to proceed with confidence.

### Building the Market Return Index

We construct a unified market return by aggregating all ticker returns into a single daily time series. This gives us a comprehensive view of NASDAQ market behavior:

![Market Index Over Time](/assets/plots/plot_06.png)
*Figure 4: Cumulative market return index showing the overall trajectory of the NASDAQ market*

The cumulative return plot reveals the market's journey through bull runs, corrections, and the infamous dot-com crash—each regime telling its own story about investor behavior and market dynamics.

![Daily Returns Distribution](/assets/plots/plot_07.png)
*Figure 5: Distribution of daily market returns—approximately normal with fat tails*

The daily returns show a distribution centered near zero with **fat tails**, characteristic of financial markets. These tail events—the extreme movements—are precisely where investor sentiment might matter most.

---

## 🧠 Part 2: Decoding Investor Psychology

### The Sentiment Dataset: What Investors Predict

Alongside market data, we analyze the **AAII Investor Sentiment Survey**, where thousands of investors report their expectations for the market over the next **six months**. Each week, they classify themselves as:
- **Bullish** 🟢: Expecting market gains
- **Neutral** 🟡: Uncertain or expecting flat movement  
- **Bearish** 🔴: Expecting market declines

This forward-looking nature is key: we're not asking what investors think *now*, but what they *predict will happen*.

### How Sentiment Distributes

![Sentiment Distributions](/assets/plots/plot_08.png)
*Figure 6: Distribution of bullish, neutral, and bearish sentiment over time*

Three distinct patterns emerge:

1. **Bullish sentiment**: Centers around 30-40%, approximately symmetric. Investors maintain baseline optimism that fluctuates predictably.

2. **Neutral sentiment**: The widest spread (20-50%), showing high variability. Uncertainty dominates during transitional periods.

3. **Bearish sentiment**: Tightly clustered around 25-30% with a long right tail. Fear tends to be episodic—rare but intense spikes during crises.

![Box and Violin Plots](/assets/plots/plot_09.png)
*Figure 7: Detailed view of sentiment distributions revealing asymmetries*

The violin plots reveal that **bearish sentiment has the longest tail**—when investors turn pessimistic, they can become *extremely* pessimistic. This asymmetry suggests different psychological mechanisms for optimism and fear.

### The Optimism Bias

![Sentiment Proportions](/assets/plots/plot_10.png)
*Figure 8: Overall distribution of sentiment states across the entire dataset*

**Bullish sentiment dominates**, representing the largest share of investor expectations. This reveals a fundamental truth: **investors are structurally optimistic** about market growth over six-month horizons. 

But is this optimism justified? Or does it reflect behavioral bias?

---

## 🔄 Part 3: How Sentiment Evolves

### Transitions Between States

![Sentiment State Transitions](/assets/plots/plot_11.png)
*Figure 9: Transition matrix showing how sentiment changes week-to-week*

The transition matrix reveals **strong persistence**: 
- Bullish investors tend to **stay bullish** (high diagonal values)
- Neutral sentiment shows the **least stability**—it's a transitional state
- Bearish sentiment, once established, tends to **linger**

This persistence suggests sentiment has **momentum**—but is that momentum leading the market or following it?

### Sudden Sentiment Shocks

Not all transitions are gradual. Some weeks witness dramatic shifts:

![Top Sudden Changes](/assets/plots/plot_12.png)
*Figure 10: The most dramatic weekly sentiment shifts in the dataset*

These spikes correspond to:
- **Market crashes** (immediate fear response)
- **Policy announcements** (Fed decisions, fiscal stimulus)
- **Geopolitical events** (trade wars, conflicts)

The question becomes: Do these sentiment shifts *precede* market moves, or are they *reactions* to moves that already happened?

---

## 📈 Part 4: Defining Market Regimes

### Clustering with Gaussian Mixture Models

To test whether sentiment **leads** or **follows** markets, we need an objective classification of market states. We use a **Gaussian Mixture Model (GMM)** to cluster weekly market behavior into three regimes based on returns and volatility.

Why GMM instead of k-means? Because markets don't have hard boundaries—they exist in **probabilistic states**.

![Market Returns by Regime](/assets/plots/plot_13.png)
*Figure 11: Weekly market returns colored by GMM-assigned regime (Bullish/Neutral/Bearish)*

The time series reveals clear regime shifts:
- **Green (Bullish)**: Sustained periods of positive returns
- **Yellow (Neutral)**: Mixed performance, low volatility
- **Red (Bearish)**: Negative returns, often with increased volatility

These regimes emerge **purely from market data**—no sentiment information was used in clustering. This gives us an unbiased baseline to test sentiment's predictive power.

---

## 🔍 Part 5: Google Trends—The Wisdom of the Crowd

Beyond survey data, we analyze what millions of people are **actually searching for** online. Google Trends captures revealed attention: when people search for "recession," they're not just answering a survey—they're seeking information driven by genuine concern.

### The Search Landscape

![All Google Trends Queries](/assets/plots/plot_14.png)
*Figure 12: Normalized search interest for finance-related terms over time*

We track searches across multiple economic dimensions:
- **Bearish indicators**: Recession, Unemployment, Inflation
- **Bullish indicators**: Investment, Stock market, ETF
- **Neutral indicators**: Federal Reserve, Economic growth

Each query tells a story about public attention and concern.

### Dominant Sentiment Shifts

![Sentiment Over Time from Google Trends](/assets/plots/plot_15.png)
*Figure 13: Dominant sentiment categories based on search volume, with shaded regions showing shifts*

Search behavior reveals **macro sentiment cycles**:
- **Pre-2008**: Bullish searches dominate
- **2008-2010**: Dramatic shift to bearish (recession searches spike)
- **2010-2020**: Gradual return to neutral/bullish
- **2020**: Another bearish spike (COVID-19)

These shifts happen at **inflection points**—but the critical question remains: **before or after** market moves?

### Correlation Structure

![Correlation Analysis](/assets/plots/plot_16.png)
*Figure 14: Correlation heatmaps showing intra-sentiment and inter-sentiment relationships*

**Intra-sentiment correlations** (left):
- Bearish queries strongly correlate with each other (recession ↔ unemployment)
- Bullish queries show moderate correlation
- People searching for bad news tend to search for *all* bad news

**Inter-sentiment correlations** (right):
- **Negative correlation between bearish and bullish searches**
- When recession searches rise, investment searches fall
- This inverse relationship validates our sentiment classification

---

## 🎯 The Central Analysis: Who Moves First?

Now we arrive at the core question. We have three datasets:

1. **Market regimes** (objectively clustered from returns/volatility)
2. **Survey sentiment** (investor predictions about 6 months ahead)
3. **Search sentiment** (revealed public attention)

### Two Competing Hypotheses

**Hypothesis 1: Sentiment Leads Markets** 🔮
- Investors sense regime changes before they fully manifest
- Bullish sentiment rises *before* bullish regimes
- Bearish searches spike *before* market crashes
- Sentiment is a **leading indicator**

**Hypothesis 2: Sentiment Follows Markets** 🪞
- Investors rationalize what already happened
- Sentiment shifts *after* regime transitions
- Searches respond to realized volatility
- Sentiment is a **lagging indicator**

### The Test: Lag Analysis

We compute cross-correlations between sentiment measures and market regimes at various time lags:

- **Negative lag**: Sentiment precedes market (predictive)
- **Zero lag**: Contemporaneous relationship
- **Positive lag**: Sentiment follows market (reactive)

*(Note: Full lag analysis results would be shown here with additional plots from the analysis)*

---

## 💡 Key Insights

From our comprehensive analysis, several patterns emerge:

### 1. **Structural Optimism**
Investors exhibit persistent bullish bias. Even after corrections, bullish sentiment rebounds quickly. This could reflect:
- Rational long-term growth expectations
- Behavioral overconfidence
- Survivorship bias (pessimists exit the survey)

### 2. **Asymmetric Fear**
Bearish sentiment shows distinct characteristics:
- **Episodic**: Rare but intense spikes
- **Persistent**: Once established, hard to shake
- **Fat-tailed**: Extreme pessimism more common than extreme optimism

This asymmetry aligns with **prospect theory**: losses loom larger than gains.

### 3. **Sentiment Momentum**
Strong state persistence suggests sentiment has its own dynamics. Once investors commit to a view, they maintain it for weeks. This creates:
- **Herding potential**: Sentiment cascades
- **Regime stickiness**: Markets can remain "irrationally" bullish or bearish
- **Reversal opportunities**: Extremes don't last

### 4. **The Search-Survey Gap**
Google Trends and AAII surveys sometimes diverge:
- Surveys measure **stated beliefs** (what investors claim to think)
- Searches measure **revealed concerns** (what they actually worry about)

When these align, signals strengthen. When they diverge, it suggests **cognitive dissonance**.

---

## 🔬 Methodological Strengths

Our analysis builds reliability through:

- ✅ **Scale**: 24.2M data points, 5,884 tickers
- ✅ **Multiple data sources**: Market prices, surveys, web searches
- ✅ **Rigorous cleaning**: Removed aberrant data systematically
- ✅ **Unsupervised clustering**: Market regimes defined objectively
- ✅ **Temporal alignment**: Careful handling of weekly vs. daily data
- ✅ **Probabilistic models**: GMM captures regime uncertainty

---

## 🤔 Open Questions

Our investigation raises as many questions as it answers:

1. **Does sentiment causality change across market cycles?**  
   Perhaps investors lead during normal times but follow during crises?

2. **What about individual sectors?**  
   Tech stocks might respond differently to sentiment than utilities.

3. **How do retail vs. institutional investors differ?**  
   AAII surveys capture retail sentiment—institutional flows might tell a different story.

4. **What's the role of news media?**  
   Does financial journalism amplify sentiment or create it?

5. **Can sentiment be traded?**  
   If it leads markets, can contrarian strategies exploit it?

---

## 🎬 The Verdict

Markets don't just move—**they tell stories**.

Through three complementary lenses (market data, sentiment surveys, and search behavior), we've mapped the relationship between belief and reality in financial markets.

The question of whether investors are **authors** or **commentators** of market narratives doesn't have a simple answer. Our evidence suggests:

> **Investors are both—but the balance shifts with context.**

During stable periods, sentiment may provide weak leading signals. During shocks, it largely reacts. The wisdom of crowds exists, but it's noisy, biased, and context-dependent.

What remains clear: **understanding this dynamic reshapes how we interpret market forecasts, financial news, and our own confidence in "knowing what comes next."**

The data has spoken. Now, it's up to us to listen.

---

## 📚 Next Steps

This analysis opens several avenues for deeper investigation:

- **Causal inference**: Granger causality tests to formalize lead/lag relationships
- **Machine learning**: Can we predict regime transitions from sentiment features?
- **Portfolio construction**: Building trading strategies informed by sentiment dynamics
- **Behavioral modeling**: Formalizing investor psychology in agent-based models

---

<div style="text-align: center; margin-top: 3rem; padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px;">
  <h3 style="margin-top: 0;">Explore the Full Analysis</h3>
  <p>Dive deeper into our methodology, code, and interactive visualizations.</p>
  <a href="#" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 2rem; background: white; color: #667eea; text-decoration: none; border-radius: 5px; font-weight: bold;">View Repository →</a>
</div>

---

*This analysis was conducted as part of the Applied Data Analysis course. All code and data processing pipelines are available in our GitHub repository.*
