---
layout: page
title: ""
---

<div class="index-hero">
  <img src="{{ site.baseurl }}/assets/img/title.jpg"
       alt="Market sentiment illustration"
       class="index-hero-img">

  <div class="index-overlay"></div>

  <div class="index-content">
    <h1 class="index-title">
      Do Markets Listen to Investors —<br>
      or Are Investors Just Echoing the Market?
    </h1>

    <p class="index-subtitle">
      A data-driven exploration of sentiment, prices, and feedback loops
    </p>

    <a class="index-cta" href="{{ site.baseurl }}/intro">
      Start Reading →
    </a>
  </div>
</div>

<style>
/* Index Hero Section */
.index-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: -2rem;
}

.index-hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
}

.index-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 2;
}

.index-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 2rem;
}

.index-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  color: white;
}

.index-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.6;
}

.index-cta {
  display: inline-block;
  padding: 1.25rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  text-shadow: none;
}

.index-cta:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.6);
  text-decoration: none;
}

.index-cta:active {
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .index-hero {
    min-height: 100vh;
  }

  .index-title {
    font-size: 2rem;
  }

  .index-subtitle {
    font-size: 1.2rem;
  }

  .index-cta {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .index-content {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .index-title {
    font-size: 1.6rem;
  }

  .index-subtitle {
    font-size: 1rem;
  }
}
</style>