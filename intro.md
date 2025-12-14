---
layout: page
title: Introduction
---

<div class="hero-intro">
  <p class="lead-question">What came first, the chicken or the egg?</p>
</div>

## Introduction

Financial markets are often described as forward-looking. Every week, investors confidently state what they believe the market will do over the next six months: **bullish**, **bearish**, or **neutral**. These expectations shape headlines, influence portfolio decisions, and justify billions in capital flows.

But beneath this apparent foresight lies a deeper and rarely examined question: **who is actually leading whom?**

Do investors' predictions pull the market in a certain direction? Or are they largely reactions to market movements that have already begun? Understanding this relationship has profound implications for how we interpret market forecasts, investment strategies, and our confidence in predicting financial outcomes.

---

### Our Investigation

This project investigates the temporal relationship between investor sentiment and market regimes by placing beliefs and prices on the same timeline. We combine three complementary datasets:

<div class="data-sources">
  <div class="data-card">
    <h4>📊 NASDAQ Market Data</h4>
    <p><strong>24.2M data points</strong> tracking objective price movements and returns across 5,884 tickers</p>
  </div>
  
  <div class="data-card">
    <h4>📈 AAII Sentiment Survey</h4>
    <p>Weekly six-month forecasts from <strong>thousands of retail investors</strong></p>
  </div>
  
  <div class="data-card">
    <h4>🔍 Google Trends Data</h4>
    <p>Revealed attention patterns for economic terms (recession, unemployment, stock market)</p>
  </div>
</div>

By tracking these signals through bull, neutral, and bear regimes, we aim to answer one fundamental question: **who moves first?**

Rather than chasing prediction accuracy, we focus on something more revealing: **timing**. When do beliefs change relative to market regimes? When does sentiment lead, and when does it lag?

---

## Two Competing Stories

<p class="section-intro">There are two radically different worlds hiding in the data:</p>

<div class="competing-worlds">
  <div class="world-card world-1">
    <div class="world-header">
      <span class="world-icon">🔮</span>
      <h3>World 1 — Beliefs Create Reality</h3>
    </div>
    <div class="world-content">
      <p>Investors look ahead.<br>
      Their expectations influence today's decisions.<br>
      Capital flows turn forecasts into self-fulfilling prophecies.</p>
      <p class="world-conclusion"><strong>In this world, sentiment is power.</strong></p>
    </div>
  </div>
  
  <div class="world-card world-2">
    <div class="world-header">
      <span class="world-icon">🪞</span>
      <h3>World 2 — Reality Creates Beliefs</h3>
    </div>
    <div class="world-content">
      <p>Markets react to fundamentals, shocks, and liquidity.<br>
      Investors adjust their outlook afterward.<br>
      Predictions are rationalizations, not signals.</p>
      <p class="world-conclusion"><strong>In this world, sentiment is a mirror.</strong></p>
    </div>
  </div>
</div>

<p class="conclusion-text">Only one of these worlds can dominate — and the data reveals which one.</p>

---

<style>
/* Hero Introduction */
.hero-intro {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 12px;
  margin: 2rem 0 3rem 0;
}

.lead-question {
  font-size: 1.8rem;
  font-style: italic;
  color: #667eea;
  font-weight: 500;
  margin: 0;
}

/* Section Introduction */
.section-intro {
  font-size: 1.3rem;
  text-align: center;
  color: #4a5568;
  margin: 2rem 0;
  font-weight: 500;
}

/* Data Sources Grid */
.data-sources {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0;
}

.data-card {
  background: #f8f9fa;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.data-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border-color: #667eea;
}

.data-card h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.data-card p {
  color: #4a5568;
  margin: 0;
  line-height: 1.6;
}

/* Competing Worlds */
.competing-worlds {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
}

.world-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.world-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
}

.world-1:hover {
  border-color: #667eea;
  box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
}

.world-2:hover {
  border-color: #764ba2;
  box-shadow: 0 12px 24px rgba(118, 75, 162, 0.15);
}

.world-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.world-icon {
  font-size: 2rem;
}

.world-header h3 {
  color: #1a202c;
  margin: 0;
  font-size: 1.3rem;
}

.world-content p {
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.world-conclusion {
  color: #667eea;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid #e2e8f0;
}

.conclusion-text {
  text-align: center;
  font-size: 1.3rem;
  color: #2d3748;
  font-weight: 600;
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 8px;
}

/* Responsive */
@media (max-width: 768px) {
  .lead-question {
    font-size: 1.4rem;
  }
  
  .data-sources,
  .competing-worlds {
    grid-template-columns: 1fr;
  }
  
  .hero-intro {
    padding: 2rem 1.5rem;
  }
}
</style>