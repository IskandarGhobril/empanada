---
layout: default
title: "Methods"
---

## Data sources (high level)
- NASDAQ daily data from a stock + ETF universe  
- Investor expectation data (weekly or periodic), with 6-month market-state forecasts

## Building market regimes
We convert daily market information into a **market state** (bullish / neutral / bearish) using:
- market returns and volatility features,
- a consistent labeling rule or clustering approach,
- and validation via regime return/volatility characteristics.

## Directionality
We use timing-aware tools:
- lead–lag correlation profiles (visual and quantitative),
- directionality tests (e.g., Granger-style tests),
- and regime-conditional comparisons.

The goal is to separate **anticipation** from **reaction**.
