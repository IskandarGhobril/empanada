# Image & Interactive Elements Plan
## "The Market Goes to Therapy" - Visual Assets Guide

---

## Overview

This data story website focuses on **presenting data analysis results** through plots and statistical findings. We use **1 AI-generated image** as the opening visual, with the actual data visualizations carrying the story.

---

## AI-GENERATED IMAGE (1 Total)

### The Patient (Opening Image)
**Filename:** `the-patient-market1.png`
**Location:** `assets/img/the-patient-market1.png`
**Used in:** `_sections/intro.md` - Opening illustration

**Status:** Uploaded and implemented.

---

## DATA PLOTS (Primary Visual Content)

The following plots from your analysis are the main visual elements:

### Existing Plots (in `assets/img/`)
1. `sentiment_state_pie_chart.png` - Distribution of sentiment states
2. `sentiment_box_violin_plots.png` - Sentiment distributions
3. `sentiment_state_transition_matrix.png` - Week-to-week transitions
4. `top_sudden_sentiment_changes.png` - Critical sentiment shifts
5. `bull.png` - Word cloud for Google Trends
6. `sentiment_over_time.png` - Timeline of sentiment
7. `sentiment_correlation_matrices.png` - Correlation heatmaps
8. `daily_market_ret.png` - Market returns over time
9. `sentiment_vs_returns.png` - Scatter plot of sentiment vs returns

---

## Interactive Plots (Optional Enhancement)

### Priority 1: Lead-Lag Explorer
The most important visualization - shows information gain at different lag values.
- X-axis: Lag in weeks (-52 to +52)
- Y-axis: Information gain (bits)
- Highlight the -26 week peak for AAII
- Toggle between AAII and Google Trends

### Priority 2: Regime Transition Visualizer
Three-node diagram showing Bull/Neutral/Bear transition probabilities.

### Priority 3: Sector Dashboard
Dropdown to compare sentiment-return relationships across sectors.

---

## Summary

| Location | Type | Filename | Status |
|----------|------|----------|--------|
| intro.md | AI Image | `the-patient-market.png` | Done |

**Total AI images: 1**
**Focus: Data plots and analysis results**

---

*Document created for empanADA Data Story Project*
*EPFL CS-401 Applied Data Analysis*
