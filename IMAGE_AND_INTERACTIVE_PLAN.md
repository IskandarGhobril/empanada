# Image & Interactive Elements Plan
## "The Market Goes to Therapy" - Visual Assets Guide

---

## TABLE OF CONTENTS
1. [Hero & Banner Images](#1-hero--banner-images)
2. [Section Illustrations](#2-section-illustrations)
3. [Decorative Elements](#3-decorative-elements)
4. [Interactive Plots Specifications](#4-interactive-plots-specifications)
5. [Implementation Guide](#5-implementation-guide)

---

## 1. HERO & BANNER IMAGES

### IMAGE 1: Hero Background
**Filename:** `hero-therapy-room.jpg`
**Location:** `assets/img/hero-therapy-room.jpg`
**Used in:** `index.md` - Hero section background

**AI IMAGE PROMPT:**
```
A moody, cinematic therapy office with dark blue and purple lighting. A leather therapy couch faces a large window showing an abstract stock market chart with candlesticks floating like constellations in a night sky. The room has warm amber accent lighting from a desk lamp. Style: digital art, atmospheric, professional, slightly surreal. Colors: deep navy blue, purple, amber gold accents. Mood: mysterious, sophisticated, introspective. 16:9 aspect ratio, high resolution.
```

**CSS Implementation:**
```css
.therapy-hero {
  background-image: url('/assets/img/hero-therapy-room.jpg');
  background-size: cover;
  background-position: center;
}
```

---

### IMAGE 2: Case File Texture
**Filename:** `case-file-texture.png`
**Location:** `assets/img/case-file-texture.png`
**Used in:** Case file banner background

**AI IMAGE PROMPT:**
```
A subtle paper texture resembling a vintage manila folder or case file. Slightly yellowed, with faint coffee ring stains and barely visible grid lines. Include a very subtle watermark pattern. Style: texture, seamless tile, subtle. Colors: cream, beige, very light tan. Should be tileable. 512x512 pixels.
```

---

## 2. SECTION ILLUSTRATIONS

### IMAGE 3: The Patient (The Market)
**Filename:** `the-patient-market.png`
**Location:** `assets/img/the-patient-market.png`
**Used in:** `intro.md` - After "Meet the Patient" header

**AI IMAGE PROMPT:**
```
An abstract humanoid figure made entirely of stock charts, candlesticks, and financial data. The figure sits on a therapy couch, head slightly bowed. Where the heart would be, there's a glowing bull and bear symbol intertwined. The figure appears contemplative, almost melancholic. Digital tendrils of green (profit) and red (loss) data streams flow from its body. Style: digital art, conceptual, emotional. Colors: dark background with glowing greens, reds, blues, and golds. Mood: vulnerable, complex, powerful.
```

**Placement in intro.md:**
```html
<figure class="hero-illustration">
  <img src="{{ site.baseurl }}/assets/img/the-patient-market.png"
       alt="The Market personified as a patient">
</figure>
```

---

### IMAGE 4: The Inner Circle (AAII Investors)
**Filename:** `inner-circle-investors.png`
**Location:** `assets/img/inner-circle-investors.png`
**Used in:** `intro.md` - Witness card for AAII

**AI IMAGE PROMPT:**
```
A group of 5-6 sophisticated investors in a circle, seen from above, looking at a glowing holographic market display in the center. They wear business attire but their faces show various emotions: hope, worry, confidence, doubt. The holographic display shows stock charts. Style: digital illustration, top-down perspective, warm lighting. Colors: warm ambers, professional blues, with the central hologram in cyan/teal. Mood: intimate, serious, focused. Square format.
```

---

### IMAGE 5: The General Public (Google Searches)
**Filename:** `general-public-searches.png`
**Location:** `assets/img/general-public-searches.png`
**Used in:** `intro.md` - Witness card for Google Trends

**AI IMAGE PROMPT:**
```
Thousands of tiny glowing search bars and query bubbles floating in a vast dark space, forming a loose crowd shape. Some bubbles contain visible text like "recession?" "should I sell?" "market crash" "best stocks". The bubbles glow in different colors based on sentiment: red/orange for fear, green for hope, blue for neutral. Style: digital art, particle effect aesthetic. Colors: dark background with multicolored glowing elements. Mood: vast, anonymous, collective consciousness. Square format.
```

---

### IMAGE 6: Hypothesis A - Crystal Ball
**Filename:** `hypothesis-crystal-ball.png`
**Location:** `assets/img/hypothesis-crystal-ball.png`
**Used in:** `intro.md` - Hypothesis A card

**AI IMAGE PROMPT:**
```
Hands holding a glowing crystal ball that shows a clear upward-trending stock chart inside. The hands belong to someone in investor attire (visible cuff of suit). The crystal ball emanates confident golden light. Around it, faint symbols of money, bulls, and growth float upward. Style: digital illustration, mystical but professional. Colors: deep purple background, golden glow, emerald green chart line. Mood: confident, prophetic, powerful. Square format.
```

---

### IMAGE 7: Hypothesis B - Mirror
**Filename:** `hypothesis-mirror.png`
**Location:** `assets/img/hypothesis-mirror.png`
**Used in:** `intro.md` - Hypothesis B card

**AI IMAGE PROMPT:**
```
An ornate mirror reflecting a stock chart, but the reflection is slightly delayed/lagging behind - you can see both the "real" chart and its slightly-behind mirror image. The mirror frame is elegant but cracked in places. The reflection appears to be chasing the reality but never quite catching up. Style: digital illustration, surreal, conceptual. Colors: silver mirror, cool blues and purples, with warm amber for the "real" side. Mood: revealing, slightly melancholic, truth-seeking. Square format.
```

---

### IMAGE 8: Optimism Baseline
**Filename:** `optimism-baseline.png`
**Location:** `assets/img/optimism-baseline.png`
**Used in:** `story1.md` - After "A Baseline of Optimism" section

**AI IMAGE PROMPT:**
```
A stylized balance scale where the "bullish" side (green, with a bull symbol) naturally tips lower/heavier than the "bearish" side (red, with bear symbol). The scale sits on a pedestal made of stacked years (1987-2020 visible). Golden coins and upward arrows subtly flow toward the bullish side. Style: clean digital illustration, infographic-inspired. Colors: emerald green, crimson red, gold accents, white background. Mood: analytical, revealing, balanced presentation of imbalance.
```

---

### IMAGE 9: Sticky Beliefs
**Filename:** `sticky-beliefs.png`
**Location:** `assets/img/sticky-beliefs.png`
**Used in:** `story1.md` - Transition matrix section

**AI IMAGE PROMPT:**
```
Three glass jars labeled "BULLISH", "NEUTRAL", and "BEARISH", each containing glowing orbs. The orbs in each jar are trying to jump to other jars but most are stuck/bouncing back to their original jar. The BULLISH jar has the stickiest orbs (almost none escaping), while BEARISH orbs are more likely to escape to BULLISH. Arrows show movement probabilities. Style: whimsical but informative, 3D render look. Colors: green jar, gray jar, red jar, glowing orbs. Mood: playful explanation of a serious concept.
```

---

### IMAGE 10: Fear Arrives Fast
**Filename:** `fear-arrives-fast.png`
**Location:** `assets/img/fear-arrives-fast.png`
**Used in:** `story1.md` - Critical moments section

**AI IMAGE PROMPT:**
```
A dramatic scene of a calm office suddenly being invaded by a red storm/wave. An investor sits at a desk, papers flying everywhere. The red wave contains falling stock symbols, downward arrows, and the word "SELL" repeated. The transition from calm to chaos is captured in a single frame, split diagonally. Style: dynamic digital illustration, motion blur effects. Colors: calm blue/beige on one side, aggressive red/black on the other. Mood: dramatic, urgent, visceral.
```

---

### IMAGE 11: The 6-Month Mirror Effect
**Filename:** `six-month-mirror.png`
**Location:** `assets/img/six-month-mirror.png`
**Used in:** `story2.md` - Key finding about backward-looking

**AI IMAGE PROMPT:**
```
A person looking into a mirror, but instead of seeing their reflection, they see a calendar/timeline showing "6 MONTHS AGO". The mirror frame has financial symbols carved into it. The person thinks they're looking forward (speech bubble with "FUTURE?") but the mirror clearly shows the past. A subtle arrow goes from present backwards to the mirror showing the past. Style: conceptual illustration, clean and impactful. Colors: muted present tones, slightly warmer/golden past in mirror. Mood: revelation, irony, insight.
```

---

### IMAGE 12: The Revelation - Returns Lead Sentiment
**Filename:** `returns-lead-sentiment.png`
**Location:** `assets/img/returns-lead-sentiment.png`
**Used in:** `story2.md` - VAR results revelation

**AI IMAGE PROMPT:**
```
Two figures in a dance: a large, powerful figure labeled "RETURNS" (made of candlestick charts) confidently leading, while a smaller figure labeled "SENTIMENT" (made of thought bubbles and question marks) follows behind, mimicking the leader's movements. The setting is a grand ballroom floor that looks like a stock chart. Style: elegant digital illustration, metaphorical. Colors: the Returns figure in strong golds and greens, Sentiment in softer blues and purples. Mood: clear hierarchy, elegant visualization of relationship.
```

---

### IMAGE 13: Market Mood Cycles
**Filename:** `mood-cycles.png`
**Location:** `assets/img/mood-cycles.png`
**Used in:** `story3.md` - Header illustration

**AI IMAGE PROMPT:**
```
A circular diagram showing three distinct "rooms" that flow into each other: a bright green optimistic room with sunshine and growth, a gray uncertain room with fog, and a dark red stressed room with storms. Small figure representations of "The Market" walk between rooms. Arrows show the circular flow and probabilities. The style resembles a beautiful infographic or museum exhibit. Style: isometric digital illustration, clean and educational. Colors: distinct green, gray, red zones with smooth transitions. Mood: cyclical, explanatory, engaging.
```

---

### IMAGE 14: Sector Personalities
**Filename:** `sector-personalities.png`
**Location:** `assets/img/sector-personalities.png`
**Used in:** `story4.md` - Header for sector analysis

**AI IMAGE PROMPT:**
```
Five distinct character portraits arranged in a row, each representing a market sector: TECH (a cool, trendy figure with VR glasses and digital aura), HEALTHCARE (a steady, reliable figure with a medical cross), ENERGY (a rugged, volatile figure with lightning), CONSUMER (a relatable, everyday figure with shopping bags), FINANCE (a suited figure with dollar sign monocle). Each has a different emotional expression. Style: character design, consistent art style, personality-driven. Colors: each sector has its own color scheme. Mood: diverse, characterful, memorable.
```

---

### IMAGE 15: The Diagnosis Certificate
**Filename:** `diagnosis-certificate.png`
**Location:** `assets/img/diagnosis-certificate.png`
**Used in:** `results.md` - Final diagnosis section

**AI IMAGE PROMPT:**
```
An official-looking medical/psychological diagnosis certificate with ornate borders. The header reads "OFFICIAL DIAGNOSIS" with the empanADA clinic logo. The main text area shows "PATIENT: The Market" and "CONDITION: Reactive Sentiment Syndrome - Beliefs primarily reflect past performance rather than predict future movements." Has official stamps, a wax seal, and signature lines. Style: vintage certificate design, official documents. Colors: cream paper, gold foil accents, navy blue text, red wax seal. Mood: official, conclusive, authoritative.
```

---

### IMAGE 16: The Prognosis - Healthy Market
**Filename:** `healthy-market.png`
**Location:** `assets/img/healthy-market.png`
**Used in:** `results.md` - Prognosis section

**AI IMAGE PROMPT:**
```
The Market figure from Image 3, but now standing tall and confident on top of a mountain of data. The figure is radiating healthy green light, with a strong heartbeat line (like an EKG) running through it showing a healthy pattern. The bull and bear in the heart area are now in harmony. Small investor figures below look up in awe. Style: triumphant digital illustration, epic feel. Colors: healthy greens, confident golds, dawn lighting. Mood: resolution, health, understanding.
```

---

## 3. DECORATIVE ELEMENTS

### IMAGE 17: Bull Icon (Animated)
**Filename:** `bull-icon.svg`
**Location:** `assets/img/icons/bull-icon.svg`

**DESCRIPTION:** Simple, clean bull silhouette icon for bullish indicators. Should be SVG for animation.

---

### IMAGE 18: Bear Icon (Animated)
**Filename:** `bear-icon.svg`
**Location:** `assets/img/icons/bear-icon.svg`

**DESCRIPTION:** Simple, clean bear silhouette icon for bearish indicators. Should be SVG for animation.

---

### IMAGE 19: Heartbeat/EKG Line
**Filename:** `heartbeat-line.svg`
**Location:** `assets/img/icons/heartbeat-line.svg`

**DESCRIPTION:** Continuous EKG/heartbeat line pattern for animated backgrounds. Should be seamless and tileable.

---

### IMAGE 20: Section Dividers
**Filename:** `divider-bull-bear.svg`
**Location:** `assets/img/dividers/divider-bull-bear.svg`

**AI IMAGE PROMPT:**
```
A horizontal decorative divider featuring a stylized bull head on the left and bear head on the right, connected by an elegant line with small stock chart patterns. Symmetrical design. Style: line art, elegant, minimal. Colors: single color (will be styled with CSS). Format: SVG vector.
```

---

## 4. INTERACTIVE PLOTS SPECIFICATIONS

### INTERACTIVE PLOT 1: Sentiment Time Machine
**Location:** `story1.md` - After the interactive click widget
**Technology:** Plotly.js or D3.js

**FUNCTIONALITY:**
- Timeline from 1987-2020
- User can scrub through time
- Shows simultaneous view of:
  - AAII Bullish/Neutral/Bearish percentages (stacked area)
  - S&P 500 price line overlay
  - Key event annotations (crashes, recoveries)
- Hover reveals exact values and dates
- Click on major events zooms to that period

**DESIGN SPECS:**
```
- Colors: Green (#10b981) for bullish, Gray (#6b7280) for neutral, Red (#ef4444) for bearish
- Background: White with subtle grid
- Event markers: Vertical dashed lines with labels
- Animation: Smooth transitions when scrubbing
```

**DATA NEEDED:**
- Weekly AAII sentiment data (bullish%, neutral%, bearish%)
- Weekly S&P 500 or NASDAQ closing prices
- Event dates and labels (crash dates, recovery dates)

---

### INTERACTIVE PLOT 2: Lead-Lag Explorer
**Location:** `story2.md` - Lead-lag analysis section
**Technology:** Plotly.js or D3.js

**FUNCTIONALITY:**
- X-axis: Lag in weeks (-52 to +52)
- Y-axis: Information Gain (bits)
- Toggle between AAII and Google Trends
- Animated line that draws itself
- Vertical line at lag=0 (present)
- Highlighted regions:
  - Negative lags = "Sentiment reflects PAST"
  - Positive lags = "Sentiment predicts FUTURE"
- Peak markers with tooltips explaining significance
- The -26 week peak should pulse/highlight

**DESIGN SPECS:**
```
- AAII line: Purple (#667eea)
- Google line: Teal (#14b8a6)
- Background zones: Left (past) slightly red-tinted, Right (future) slightly green-tinted
- Current (lag=0): Bright white vertical line
- Peak annotations: Callout boxes
```

**DATA NEEDED:**
- Information gain values for each lag (-52 to +52)
- Separate series for AAII and Google Trends

---

### INTERACTIVE PLOT 3: Regime Transition Visualizer
**Location:** `story3.md` - Markov regime section
**Technology:** D3.js (for network diagram)

**FUNCTIONALITY:**
- Three nodes: BULL, NEUTRAL, BEAR
- Animated arrows showing transition probabilities
- Arrow thickness = transition probability
- Self-loops for staying in same state
- Click on a state to highlight outgoing transitions
- Animated "balls" flowing along paths showing actual transitions over time
- Sidebar shows transition matrix numerically

**DESIGN SPECS:**
```
- BULL node: Green circle with bull icon
- NEUTRAL node: Gray circle with equals sign
- BEAR node: Red circle with bear icon
- Arrows: Curved, with animated dashes
- Flow particles: Small circles that travel along paths
```

**DATA NEEDED:**
- 3x3 transition probability matrix
- Historical state sequence (for animation)

---

### INTERACTIVE PLOT 4: Sector Sentiment Dashboard
**Location:** `story4.md` - Sector breakdown
**Technology:** Plotly.js with dropdown

**FUNCTIONALITY:**
- Dropdown menu to select sector (Tech, Healthcare, Consumer, Energy, Financials)
- On selection, updates multiple synchronized charts:
  1. Lead-lag curve for that sector
  2. Sentiment-Return scatter plot
  3. Correlation coefficient display
  4. Information gain bar
- Animated transitions between sectors
- "Compare" mode: overlay two sectors

**DESIGN SPECS:**
```
- Each sector has signature color:
  - Tech: Electric blue (#3b82f6)
  - Healthcare: Teal (#14b8a6)
  - Consumer: Orange (#f97316)
  - Energy: Yellow (#eab308)
  - Financials: Purple (#8b5cf6)
- Dashboard layout: 2x2 grid of mini-charts
- Smooth 500ms transitions
```

**DATA NEEDED:**
- Per-sector lead-lag information gain curves
- Per-sector sentiment-return correlations
- Per-sector correlation coefficients

---

### INTERACTIVE PLOT 5: The Mirror Effect Visualizer
**Location:** `story2.md` - 6-month mirror revelation
**Technology:** D3.js custom animation

**FUNCTIONALITY:**
- Split screen: LEFT = "What investors are asked" / RIGHT = "What they actually answer"
- LEFT side shows survey question: "Where will the market be in 6 MONTHS?"
- RIGHT side shows mirrored timeline of "Where the market WAS 6 months ago"
- Animated connection lines showing the correlation
- User can drag a slider to pick different survey dates
- Shows how past performance predicts survey response

**DESIGN SPECS:**
```
- Left side: Forward-looking aesthetic (bright, hopeful colors)
- Right side: Mirror/reflection aesthetic (slightly desaturated)
- Connection lines: Animated, pulsing
- Slider: Stock chart style
```

---

### INTERACTIVE PLOT 6: VAR Coefficient Visualizer
**Location:** `story2.md` - VAR model results
**Technology:** Simple D3.js or pure CSS/JS

**FUNCTIONALITY:**
- Two animated arrows showing causality
- Arrow: Returns → Sentiment (HUGE, animated to grow dramatically)
- Arrow: Sentiment → Returns (tiny, needs magnifying glass to see)
- Hover on arrows reveals exact coefficients
- Toggle to show/hide confidence intervals
- Animated number counters for coefficients

**DESIGN SPECS:**
```
- Returns → Sentiment arrow: Thick, pulsing green, coefficient "1394.83"
- Sentiment → Returns arrow: Hair-thin, barely visible, coefficient "0.000001"
- Visual humor: Magnifying glass icon appears when hovering tiny arrow
```

---

### INTERACTIVE PLOT 7: Emotion Meter / Fear & Greed Index
**Location:** `intro.md` and `results.md`
**Technology:** CSS + JavaScript

**FUNCTIONALITY:**
- Semicircular gauge (like a speedometer)
- Ranges from "EXTREME FEAR" to "EXTREME GREED"
- Needle points to current sentiment (or user can input a date)
- Historical playback mode: watch needle swing over time
- Color gradient: Deep red → Red → Orange → Gray → Light green → Green → Deep green

**DESIGN SPECS:**
```
- Gauge: Classic speedometer aesthetic
- Labels: FEAR - WORRY - NEUTRAL - HOPE - GREED
- Needle: Elegant, with shadow
- Animated wobble when values change
```

---

## 5. IMPLEMENTATION GUIDE

### Adding Images to the Project

1. **Generate images** using the prompts above with an AI image generator (Midjourney, DALL-E, Stable Diffusion)

2. **Save images** to the correct locations:
   ```
   empanada/
   └── assets/
       └── img/
           ├── hero-therapy-room.jpg
           ├── the-patient-market.png
           ├── inner-circle-investors.png
           ├── general-public-searches.png
           ├── hypothesis-crystal-ball.png
           ├── hypothesis-mirror.png
           ├── optimism-baseline.png
           ├── sticky-beliefs.png
           ├── fear-arrives-fast.png
           ├── six-month-mirror.png
           ├── returns-lead-sentiment.png
           ├── mood-cycles.png
           ├── sector-personalities.png
           ├── diagnosis-certificate.png
           ├── healthy-market.png
           ├── icons/
           │   ├── bull-icon.svg
           │   ├── bear-icon.svg
           │   └── heartbeat-line.svg
           └── dividers/
               └── divider-bull-bear.svg
   ```

3. **Update index.md** to include the new CSS file:
   ```yaml
   css:
     - assets/css/style.css
     - assets/css/animations.css
     - assets/css/index.css
   ```

### Adding Interactive Plots

1. **Create a new JS folder:**
   ```
   empanada/
   └── assets/
       └── js/
           ├── plots/
           │   ├── sentiment-timeline.js
           │   ├── lead-lag-explorer.js
           │   ├── regime-transitions.js
           │   ├── sector-dashboard.js
           │   ├── mirror-effect.js
           │   ├── var-visualizer.js
           │   └── emotion-meter.js
           └── main.js
   ```

2. **Include Plotly.js and D3.js** in your layout:
   ```html
   <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
   <script src="https://d3js.org/d3.v7.min.js"></script>
   ```

3. **Create data files** in JSON format:
   ```
   empanada/
   └── assets/
       └── data/
           ├── aaii_sentiment.json
           ├── google_trends.json
           ├── lead_lag_results.json
           ├── regime_transitions.json
           └── sector_analysis.json
   ```

### Scroll Animation JavaScript

Add this to `assets/js/main.js`:
```javascript
// Reveal elements on scroll
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add('revealed');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
```

---

## SUMMARY: Priority Order for Implementation

### Phase 1: Essential Images (Do First)
1. `hero-therapy-room.jpg` - Hero background
2. `the-patient-market.png` - Main character illustration
3. `six-month-mirror.png` - Key finding visualization
4. `diagnosis-certificate.png` - Conclusion visual

### Phase 2: Section Illustrations
5. `inner-circle-investors.png`
6. `general-public-searches.png`
7. `hypothesis-crystal-ball.png`
8. `hypothesis-mirror.png`
9. `returns-lead-sentiment.png`

### Phase 3: Supporting Visuals
10. `optimism-baseline.png`
11. `sticky-beliefs.png`
12. `fear-arrives-fast.png`
13. `mood-cycles.png`
14. `sector-personalities.png`
15. `healthy-market.png`

### Phase 4: Interactive Plots (Parallel Development)
1. Lead-Lag Explorer (highest impact)
2. Sentiment Time Machine
3. Sector Dashboard
4. Regime Transition Visualizer
5. Mirror Effect Visualizer
6. VAR Coefficient Visualizer
7. Emotion Meter

---

*Document created for empanADA Data Story Project*
*EPFL CS-401 Applied Data Analysis*
