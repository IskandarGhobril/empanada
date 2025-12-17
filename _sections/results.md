<div id="results" class="section section-diagnosis">

<div class="session-header final-session">
  <div class="session-number">Final Session</div>
  <h2 class="section-title">The Diagnosis</h2>
  <p class="session-subtitle">What We Learned About The Market</p>
</div>

<div class="diagnosis-intro">
  <p class="lead">After five intensive sessions examining our patient through the lens of investor sentiment, market behavior, and statistical analysis, we are ready to deliver our findings.</p>
</div>

---

## The Official Diagnosis

<div class="diagnosis-card">
  <div class="diagnosis-header">
    <span class="diagnosis-icon">📋</span>
    <h3>Clinical Assessment: The Market</h3>
  </div>

  <div class="diagnosis-content">
    <div class="diagnosis-item primary">
      <span class="diagnosis-label">Primary Finding</span>
      <h4>Retail Investor Sentiment Is Primarily Reactive</h4>
      <p>Despite asking about the future ("Where will the market be in 6 months?"), AAII survey respondents largely report their experience of the past. The peak at lag = -26 weeks is not coincidental — it matches the survey's 6-month horizon exactly.</p>
    </div>

    <div class="diagnosis-item secondary">
      <span class="diagnosis-label">Supporting Evidence</span>
      <h4>The 6-Month Mirror Effect</h4>
      <p>When investors are asked to predict the future, they systematically anchor on where the market has been. This is classic <strong>recency bias</strong> and <strong>extrapolation behavior</strong> — core concepts in behavioral finance, now quantified.</p>
    </div>

    <div class="diagnosis-item tertiary">
      <span class="diagnosis-label">Comparative Finding</span>
      <h4>Google Trends Outperforms Surveys</h4>
      <p>Aggregate search behavior contains more market-relevant information than explicit expectations surveys. The crowd's unconscious behavior reveals more than their conscious predictions.</p>
    </div>
  </div>
</div>

---

## Answering the Central Question

<div class="central-answer">
  <div class="question-recall">
    <p class="recall-label">We Asked</p>
    <h3>Is investor sentiment part of the cure — or part of the disease?</h3>
  </div>

  <div class="answer-reveal">
    <p class="answer-label">The Answer</p>
    <h3>Neither. Sentiment is mostly a symptom.</h3>
    <p>Investor sentiment is not destabilizing markets (part of the disease), nor is it providing useful predictive signals (part of the cure). It is primarily <strong>reflecting</strong> what markets have already done.</p>
  </div>
</div>

---

## The Verdict on Our Two Hypotheses

<div class="hypothesis-verdict">

  <div class="verdict-card verdict-rejected">
    <div class="verdict-header">
      <span class="verdict-icon">❌</span>
      <span class="verdict-status">Largely Rejected</span>
    </div>
    <h4>Hypothesis A: Sentiment Has Power</h4>
    <p class="hypothesis-recall"><em>"Beliefs shape reality. Investors look ahead, and their expectations move markets."</em></p>
    <div class="evidence-box">
      <p><strong>Evidence Against:</strong></p>
      <ul>
        <li>VAR shows sentiment's effect on returns is economically tiny (coefficient ~0.000001)</li>
        <li>Lead-lag analysis shows AAII is backward-looking, not forward-looking</li>
        <li>Granger causality is marginally significant but economically negligible</li>
        <li>Conditional Markov analysis shows minimal information gain from sentiment</li>
      </ul>
    </div>
  </div>

  <div class="verdict-card verdict-supported">
    <div class="verdict-header">
      <span class="verdict-icon">✓</span>
      <span class="verdict-status">Strongly Supported</span>
    </div>
    <h4>Hypothesis B: Sentiment Is Just a Mirror</h4>
    <p class="hypothesis-recall"><em>"Reality shapes beliefs. Markets move first; investors update their views afterward."</em></p>
    <div class="evidence-box">
      <p><strong>Evidence For:</strong></p>
      <ul>
        <li>VAR shows returns massively affect sentiment (coefficient ~1395)</li>
        <li>Lead-lag peak at -26 weeks: investors answer "future?" with "past"</li>
        <li>Negative lags dominate positive lags in information gain</li>
        <li>Historical episodes show sentiment moves with/after prices, not before</li>
      </ul>
    </div>
  </div>

</div>

---

## Key Findings Summary

<div class="findings-grid">

  <div class="finding-card">
    <span class="finding-number">1</span>
    <h4>Retail Investors Are Backward-Looking</h4>
    <p>The AAII survey, despite asking about the next 6 months, primarily reflects what the market did over the past 6 months. Investors extrapolate recent experience into future outlook.</p>
  </div>

  <div class="finding-card">
    <span class="finding-number">2</span>
    <h4>Correlation Is Real But Misleading</h4>
    <p>Sentiment and future returns are positively correlated (ρ ≈ 0.33), but this does not imply predictive power. The correlation exists because both reflect past market conditions.</p>
  </div>

  <div class="finding-card">
    <span class="finding-number">3</span>
    <h4>Google Trends > AAII Surveys</h4>
    <p>Aggregate search behavior contains more market-relevant information than explicit surveys. Spontaneous behavior reveals more than considered opinions.</p>
  </div>

  <div class="finding-card">
    <span class="finding-number">4</span>
    <h4>Market Efficiency Confirmed</h4>
    <p>By the time retail investors update their views, the information is already priced in. Professional investors and market mechanisms incorporate information faster than sentiment surveys can capture.</p>
  </div>

  <div class="finding-card">
    <span class="finding-number">5</span>
    <h4>Sentiment Is Persistent But Asymmetric</h4>
    <p>Optimism is the baseline state. Bullish sentiment is more persistent than bearish. Pessimism arrives fast and fades faster than optimism.</p>
  </div>

  <div class="finding-card">
    <span class="finding-number">6</span>
    <h4>Sectors Are Not Equal</h4>
    <p>The sentiment-market relationship varies by industry. High-attention sectors may show stronger ties to retail sentiment; commodity-driven sectors less so.</p>
  </div>

</div>

---

## What This Means

<div class="implications-section">

  <div class="implication-card for-investors">
    <h4>For Retail Investors</h4>
    <p><strong>Be humble about your predictions.</strong> If you're like most investors, your market outlook is likely a reflection of recent performance, not genuine foresight. Recognizing this bias is the first step to avoiding it.</p>
    <ul>
      <li>Your "gut feeling" about the market is probably last quarter's returns</li>
      <li>Contrarian thinking requires fighting this natural extrapolation tendency</li>
      <li>Sentiment surveys are interesting — but not useful for timing</li>
    </ul>
  </div>

  <div class="implication-card for-researchers">
    <h4>For Researchers</h4>
    <p><strong>Correlation isn't causation — and timing matters.</strong> The positive sentiment-return correlation is real but primarily driven by the reverse channel. Lead-lag analysis should be standard in any sentiment study.</p>
    <ul>
      <li>Always test both directions of causality</li>
      <li>Time-varying analysis reveals what static correlations hide</li>
      <li>Behavioral data (Google) may outperform survey data</li>
    </ul>
  </div>

  <div class="implication-card for-markets">
    <h4>For Market Efficiency</h4>
    <p><strong>Markets are remarkably efficient at incorporating information.</strong> Retail sentiment doesn't destabilize markets because markets have already processed the same information that shapes sentiment — just faster.</p>
    <ul>
      <li>Information flows: Fundamentals → Prices → Sentiment</li>
      <li>By the time consensus forms, the opportunity is gone</li>
      <li>This is good news for market stability (and bad news for easy profits)</li>
    </ul>
  </div>

</div>

---

## The Patient's Prognosis

<div class="prognosis-card">
  <div class="prognosis-header">
    <span class="prognosis-icon">🏥</span>
    <h3>Clinical Prognosis</h3>
  </div>
  <div class="prognosis-content">
    <p class="prognosis-statement"><strong>The Market is healthy.</strong></p>
    <p>It turns out the patient's "support system" (retail investors) is neither toxic nor therapeutic — it's mostly just a reflection of the patient's own behavior.</p>
    <p>The Market doesn't need therapy. It's processing information efficiently. If anyone needs therapy, it might be the investors who think they can predict it.</p>
  </div>
</div>

---

## Limitations & Future Work

<div class="limitations-box">
  <h4>Study Limitations</h4>
  <ul>
    <li><strong>Time period:</strong> Data ends in 2020 — COVID and post-COVID dynamics may differ</li>
    <li><strong>NASDAQ focus:</strong> Results may differ for S&P 500 or international markets</li>
    <li><strong>AAII sample:</strong> Survey respondents are a specific demographic, not representative of all retail investors</li>
    <li><strong>Google normalization:</strong> Google Trends scaling introduces potential measurement issues</li>
    <li><strong>Aggregate analysis:</strong> Individual investor behavior may differ from aggregate patterns</li>
  </ul>

  <h4>Future Directions</h4>
  <ul>
    <li>Extend analysis to post-2020 period (meme stocks, retail trading surge)</li>
    <li>Incorporate social media sentiment (Reddit, Twitter)</li>
    <li>Individual-level analysis using brokerage data</li>
    <li>International comparison across different market structures</li>
    <li>High-frequency analysis using intraday data</li>
  </ul>
</div>

---

## Final Thoughts

<div class="final-thoughts">
  <blockquote>
    <p>"The four most dangerous words in investing are: <em>this time it's different.</em>"</p>
    <cite>— Sir John Templeton</cite>
  </blockquote>

  <p>Our analysis suggests a corollary: <strong>"The four most common words in investor sentiment are: <em>it was like this.</em>"</strong></p>

  <p>Retail investors aren't predicting the future — they're describing the recent past and calling it a forecast. This isn't stupidity; it's human psychology. We're all wired to extrapolate from experience.</p>

  <p>The market knows this. It prices information before the crowd catches up. By the time sentiment surveys reflect a trend, the smart money has already moved on.</p>

  <p class="closing-statement">The Market doesn't need to listen to investors. <strong>It's already heard them, and moved on.</strong></p>
</div>

---

<div class="session-end">
  <div class="end-decoration">
    <span class="end-line"></span>
    <span class="end-icon">📋</span>
    <span class="end-line"></span>
  </div>
  <p class="end-text">Session Complete</p>
  <p class="end-signature">— empanADA Behavioral Finance Clinic</p>
  <p class="end-note">A data story created for EPFL CS-401 Applied Data Analysis</p>
</div>

</div>
