---
layout: default
title: "Story"
---

## Opening Hook
Every week, investors confidently declare what the market will do over the next six months: **bullish**, **bearish**, or **neutral**.  
These predictions shape headlines, fuel strategies, and justify billions in trades.

{% include callout.html text="<strong>The uncomfortable question:</strong> what if investors aren’t predicting the future at all — but narrating the past? Or are those predictions a force that can tilt the market’s path?" %}

---

## The Mystery
Financial markets feel like a collective mind: prices move, beliefs shift, confidence rises, fear spreads.  
Yet it’s unclear who is leading this dance.

- Do investors’ expectations **pull** the market in a certain direction?  
- Or do markets move first, with investors scrambling to explain what already happened?

This project treats the market not as a black box, but as a **conversation between belief and reality**.

{% include plot_card.html
  title="The market has moods (regimes)"
  tag="Regime view"
  src="assets/plots/regimes_overlay.html"
  caption="NASDAQ index (or a return-index) with bull/neutral/bear regimes overlaid. This makes “market state” tangible."
%}

---

## Two Competing Stories
There are two radically different worlds hiding in the data.

<div class="grid">
  <div class="col-6">
    {% include callout.html text="<strong>World 1 — Beliefs Create Reality.</strong><br/>Investors look ahead. Their expectations influence today’s decisions. Capital flows can turn forecasts into self-fulfilling prophecies. In this world, sentiment is <em>power</em>." %}
  </div>
  <div class="col-6">
    {% include callout.html text="<strong>World 2 — Reality Creates Beliefs.</strong><br/>Markets react to shocks, fundamentals, and liquidity. Investors update their outlook afterward. Predictions are rationalizations, not signals. In this world, sentiment is a <em>mirror</em>." %}
  </div>
</div>

Only one of these worlds can dominate — and the data should reveal which one is more consistent with timing and direction.

---

## The Data as a Time Machine
We combine:
- **NASDAQ stock and ETF data**, capturing how the market actually moved  
- **Investor sentiment forecasts**, looking six months into the future

By aligning beliefs and outcomes on a timeline, we ask a simple but powerful question:

{% include callout.html text="<strong>Who moves first?</strong><br/>If expectations consistently shift <em>before</em> market regimes change, investors lead. If expectations shift <em>after</em>, investors follow." %}

{% include plot_card.html
  title="Investors have beliefs — and they swing"
  tag="Beliefs"
  src="assets/plots/sentiment_area.html"
  caption="Stacked area: % bullish / neutral / bearish over time. This shows the belief system is dynamic, not static."
%}

---

## What Makes This Interesting
This isn’t just about prediction accuracy. It’s about psychology under uncertainty:

- Do investors sense danger before crashes — or panic late?  
- Do they chase optimism after rallies — or anticipate them?  
- Are bearish beliefs early warnings, or simply a reaction to drawdowns?

{% include plot_card.html
  title="Beliefs vs reality on the same timeline"
  tag="Confrontation"
  src="assets/plots/returns_vs_sentiment.html"
  caption="Market returns/regime compared with sentiment (e.g., bullish minus bearish). The visual question: who turns first?"
%}

---

## Timing the Conversation
To go beyond “they correlate,” we look at **lead–lag patterns**: does sentiment correlate most with *future* returns (leading), or *past* returns (lagging)?

{% include plot_card.html
  title="Lead–lag correlation profile"
  tag="Timing"
  src="assets/plots/lead_lag_heatmap.html"
  caption="Heatmap across lags: negative lag means sentiment leads, positive lag means market leads. Peaks indicate who tends to move first."
%}

---

## Why You Should Care
If investor sentiment truly leads markets, it becomes a **strategic signal**.  
If it follows markets, sentiment-based strategies may be little more than hindsight dressed as insight.

Understanding this dynamic reshapes how we interpret:
- market forecasts,
- financial news,
- and our own confidence in “knowing what comes next.”

---

## Final Thought
Markets don’t just move — they tell stories.  
The question is whether investors are the **authors** of those stories… or just their loudest commentators.

This project lets the data decide.
