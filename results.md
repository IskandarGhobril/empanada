---
layout: default
title: "Results"
---

## What we test
We test directionality between two time series:
1) **Market state / returns** (from NASDAQ stocks + ETFs)  
2) **Investor expectations** (bullish / neutral / bearish, 6-month horizon)

We’re not only asking “are they related?” but “**who tends to move first**?”

---

{% include plot_card.html
  title="Directionality tests: sentiment → market vs market → sentiment"
  tag="Causality"
  src="assets/plots/granger_bars.html"
  caption="Compact summary: stronger evidence in one direction suggests one series contains incremental forecasting information about the other."
%}

---

{% include plot_card.html
  title="When sentiment matters most (regime-conditional)"
  tag="Regime dependence"
  src="assets/plots/future_returns_by_sentiment.html"
  caption="Distributions of future returns conditioned on prior sentiment. Useful for asymmetric behavior (bull vs bear vs neutral)."
%}

---

## Interpretation (reader-friendly)
- If the strongest evidence is **market → sentiment**, it supports the “echo” story: beliefs update after moves.  
- If we see **sentiment → market**, it supports the “beliefs create reality” story: expectations help shape future outcomes.  
- If both appear, we likely have a **feedback loop** (with one direction typically stronger).

(We keep robustness checks and diagnostics in the notebook; the website stays focused on the story.)
