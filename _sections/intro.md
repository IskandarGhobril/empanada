<div id="intro" class="section section-intake">

<div class="session-header">
  <h2 class="section-title">
    <span class="session-label">Session 1:</span> The Intake
  </h2>
  <p class="session-subtitle">Meet the Patient</p>
</div>

<div class="therapy-layout">

  <!-- LEFT COLUMN -->
  <div class="therapy-text-column">
    <div class="dramatic-stats reveal">
      <div class="data-highlight">
        <span class="value stat-counter">34%</span>
        <span class="label">Drop in 23 days</span>
      </div>
      <div class="data-highlight">
        <span class="value stat-counter">33</span>
        <span class="label">Years of data</span>
      </div>
      <div class="data-highlight">
        <span class="value stat-counter">5,884</span>
        <span class="label">Stocks analyzed</span>
      </div>
    </div>

    <div class="therapist-note">
      <div class="note-header">
        <span class="note-label">Initial Assessment Notes</span>
      </div>
      <div class="note-content">
        <p><strong>Date:</strong> March 2020. <strong>Presenting symptoms:</strong> Severe mood swings. Patient experienced a 34% decline in just 23 trading days. Investors reported extreme bearish sentiment. Google searches for "market crash" and "recession" spiked to unprecedented levels.</p>
        <p><strong>Clinical question:</strong> Did the collective anxiety cause the crash, predict it, or simply react to it?</p>
      </div>
    </div>
  </div>

  <!-- RIGHT COLUMN -->
  <figure class="hero-illustration reveal">
    <img src="{{ site.baseurl }}/assets/img/the-patient-market1.png"
         alt="The Market personified as a patient on a therapy couch">
    <figcaption>The Market: our most complex patient</figcaption>
  </figure>

</div>


<p class="lead reveal">
They call us when nobody else can figure it out. We're <strong>empanADA</strong>: the best behavioral psychologists in the world. But nothing prepared us for this patient.
<strong>The Market</strong> doesn't talk. It doesn't sit on our couch and tell us about its childhood. Instead, it communicates through price movements, volatility spikes, and regime shifts. To understand it, we must observe the people in its life: the ones who interact with it daily and claim to know what it's thinking.
</p>

<figure class="plot-figure reveal">
  <div class="flip-card-container" onclick="this.classList.toggle('flipped')">
    <div class="flip-card-inner">
      
      <div class="flip-card-front">
        <div class="interactive-figure" data-plot="market-returns">
          <img src="{{ site.baseurl }}/assets/img/daily_market_ret.png"
               alt="Market returns over time"
               class="plot">
          <figcaption>
            Weekly NASDAQ returns - The heart beat of the market
            <br>
            <span class="flip-instruction">
              <span class="icon">↺</span> Click to view calculation details
            </span>
          </figcaption>
        </div>
      </div>

      <div class="flip-card-back">
        <div class="back-content compact-back">
          <h4>Methodology: Equally Weighted Returns</h4>
          
          <div class="formula-box compact-formula">
            <p>We compute the market-level return at time <em>t</em> as an equal-weighted average of individual stock returns:</p>
            
            <div class="custom-html-math">
              <span class="variable">total_return</span><sub>t</sub>
              <span class="operator">=</span>
              
              <div class="fraction">
                <span class="numerator">1</span>
                <span class="denominator">N<sub>t</sub></span>
              </div>
              
              <span class="sigma">∑</span>
              
              <div class="fraction">
                <span class="numerator">P<sub>i,t</sub> − P<sub>i,t-1</sub></span>
                <span class="denominator">P<sub>i,t-1</sub></span>
              </div>
            </div>
            
            <p class="formula-legend">
              Where <strong>N<sub>t</sub></strong> is the number of stocks with valid returns on date <em>t</em>, and <strong>P<sub>i,t</sub></strong> is the adjusted closing price of stock <em>i</em>.
            </p>
          </div>

          <span class="flip-hint">↺ Click to flip back to plot</span>
        </div>
      </div>

    </div>
  </div>
</figure>



<hr class="section-divider">

<h3>The Patient's Support Network</h3>

<p>We can't interview The Market directly. But we can study the two groups who spend the most time with it:</p>

<div class="witness-cards">

  <div class="witness-card inner-circle">
    <h4>The Inner Circle</h4>
    <p class="witness-source">AAII Weekly Sentiment Survey</p>
    <p>Active investors who interact with the patient every week. They report their expectations directly: <em>"Where do you think the market will be in 6 months?"</em></p>
    <ul class="witness-traits">
      <li>Informed </li>
      <li>Explicit predictions</li>
      <li>Weekly frequency</li>
      <li>Since 1987</li>
    </ul>
  </div>

  <div class="witness-card general-public">
    <h4>The General Public</h4>
    <p class="witness-source">Google Trends Search Behavior</p>
    <p>Society at large: their collective search behavior reveals unconscious fears and hopes about the economy. They don't know they're being observed.</p>
    <ul class="witness-traits">
      <li>Spontaneous</li>
      <li>Implicit sentiment</li>
      <li>Real-time signals</li>
      <li>Massive scale</li>
    </ul>
  </div>

</div>

<!-- <div class="clinical-question">
  <p class="question-label">The Central Clinical Question</p>
  <h3 class="big-question">Do investors’ predictions pull the market in a certain direction? or are they largely reactions to market movements that have already begun? </h3>
  <p class="question-subtext">Are the millions of people trying to read the market actually destabilizing it? Is the patient's support system... <em>toxic</em>?</p>
</div> -->
<section class="central-question">
  <span class="central-label">THE CENTRAL CLINICAL QUESTION</span>

  <h2 class="central-title">
    Do investors’ predictions pull the market in a certain direction, or are they
    largely reactions to market movements that have already begun?
  </h2>

  <div class="central-divider"></div>

  <p class="central-subtext">
    Are the millions of people trying to read the market actually destabilizing it?
    Is the patient's support system… <em>toxic</em>?
  </p>
</section>


<hr class="section-divider">

<h3>Two Competing Hypotheses</h3>

<p>Before we begin our analysis, we must acknowledge two fundamentally different ways this relationship could work:</p>

<div class="hypothesis-cards">

  <div class="hypothesis-card hypothesis-a">
    <div class="hypothesis-title-row">
      <h4>Sentiment Has Power</h4>
      <span class="hypothesis-label">Hypothesis A</span>
    </div>
    <p>Investors look ahead. Their collective expectations shape capital flows, which move prices. Beliefs become self-fulfilling prophecies.</p>
    <div class="hypothesis-implication">
      <strong>Implication:</strong> Sentiment should <em>lead</em> market movements. We'd see investors turn bearish <em>before</em> crashes.
    </div>
  </div>

  <div class="hypothesis-card hypothesis-b">
    <div class="hypothesis-title-row">
      <h4>Sentiment Is Just a Mirror</h4>
      <span class="hypothesis-label">Hypothesis B</span>
    </div>
    <p>Markets move because of fundamentals, shocks, and institutional flows. Retail investors simply update their views afterward, explaining what already happened.</p>
    <div class="hypothesis-implication">
      <strong>Implication:</strong> Sentiment should <em>lag</em> market movements. Investors turn bearish <em>after</em> seeing losses.
    </div>
  </div>


</div>

<div class="session-transition">
  <p class="transition-label">Session Notes</p>
  <p class="transition-text">Only one of these hypotheses can dominate in the data. Armed with decades of price history, sentiment surveys, and search data (plus statistical tools sharper than any scalpel) we're going in.</p>
  <p class="transition-cta">Let's meet the witnesses.</p>
</div>

</div>
