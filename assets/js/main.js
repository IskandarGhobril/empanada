/* ============================================
   MAIN.JS - Scroll Animations & Interactions
   The Market Goes to Therapy
   ============================================ */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // REVEAL ON SCROLL - Intersection Observer
  // ============================================

  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Optional: stop observing after revealed (better performance)
        // revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,  // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element enters viewport
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ============================================
  // SCROLL INDICATOR CLICK (Hero section)
  // ============================================

  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      const firstSection = document.querySelector('.longform') || document.querySelector('.section');
      if (firstSection) {
        firstSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
    scrollIndicator.style.cursor = 'pointer';
  }

  // ============================================
  // STAT COUNTER ANIMATION
  // ============================================

  const statCounters = document.querySelectorAll('.stat-counter');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statCounters.forEach(counter => {
    counterObserver.observe(counter);
  });

  function animateCounter(element) {
    const text = element.textContent;
    const match = text.match(/[\d,.]+/);
    if (!match) return;

    const targetNum = parseFloat(match[0].replace(/,/g, ''));
    const suffix = text.replace(match[0], '');
    const prefix = text.substring(0, text.indexOf(match[0]));
    const hasDecimal = match[0].includes('.');
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * easeOut;

      if (hasDecimal) {
        element.textContent = prefix + current.toFixed(1) + suffix;
      } else {
        element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = text; // Restore original text
      }
    }

    requestAnimationFrame(update);
  }

  // ============================================
  // PULSE ON HOVER - Add interaction feedback
  // ============================================

  document.querySelectorAll('.pulse-on-hover').forEach(el => {
    el.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
      this.style.transition = 'transform 0.3s ease';
    });
    el.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // ============================================
  // NAVBAR SCROLL EFFECT (if applicable)
  // ============================================

  let lastScroll = 0;
  const navbar = document.querySelector('.navbar, nav, header');

  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // ============================================
  // ACTIVE SECTION HIGHLIGHTING
  // ============================================

  const sections = document.querySelectorAll('.section[id]');

  if (sections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Update URL hash without scrolling
          const id = entry.target.getAttribute('id');
          history.replaceState(null, null, `#${id}`);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-20% 0px -60% 0px'
    });

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }

  console.log('Main.js loaded - scroll animations active');
});


document.addEventListener('DOMContentLoaded', function() {
  let selectedSentiment = null;
  let isSubmitted = false;

  const surveyBox = document.querySelector('.survey-question-box');
  
  // Reset survey when clicking the box after submission
  if (surveyBox) {
    surveyBox.addEventListener('click', function(e) {
      if (isSubmitted && e.target === this) {
        resetSurvey();
      }
    });
  }

  function resetSurvey() {
    // Re-enable all buttons
    document.querySelectorAll('.option').forEach(opt => {
      opt.disabled = false;
      opt.classList.remove('selected');
    });
    
    const submitBtn = document.getElementById('submitSentiment');
    if (submitBtn) {
      submitBtn.disabled = true;
    }
    
    const messageEl = document.getElementById('responseMessage');
    if (messageEl) {
      messageEl.textContent = '';
    }
    
    selectedSentiment = null;
    isSubmitted = false;
  }

  // Handle option selection
  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent triggering box click
      
      if (isSubmitted) return; // Don't allow selection after submit
      
      // Remove selected class from all options
      document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      
      // Add selected class to clicked option
      this.classList.add('selected');
      
      // Store selection
      selectedSentiment = this.dataset.sentiment;
      
      // Enable submit button
      const submitBtn = document.getElementById('submitSentiment');
      if (submitBtn) {
        submitBtn.disabled = false;
      }
    });
  });

  // Handle submit
  const submitBtn = document.getElementById('submitSentiment');
  if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent triggering box click
      
      if (selectedSentiment) {
        const messageEl = document.getElementById('responseMessage');
        if (messageEl) {
          messageEl.textContent = `Thank you! Your ${selectedSentiment} sentiment has been recorded.`;
          messageEl.style.color = '#4CAF50';
        }
        
        // Disable buttons after submission
        document.querySelectorAll('.option').forEach(opt => opt.disabled = true);
        this.disabled = true;
        
        isSubmitted = true;
        
        console.log('Submitted sentiment:', selectedSentiment);
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Search classification switcher
  const switchButtons = document.querySelectorAll('.switch-btn');
  const searchCategories = document.querySelectorAll('.search-category');
  const sentimentImage = document.getElementById('sentimentImage');
  
  // Get the base path from the initial image src
  const basePath = sentimentImage ? sentimentImage.src.substring(0, sentimentImage.src.lastIndexOf('/') + 1) : '';
  
  // Image filenames for each sentiment
  const imageFiles = {
    bullish: 'bull.png',
    neutral: 'bull.png', // Change to 'neutral.png' if you have a different image
    bearish: 'bull.png'  // Change to 'bear.png' if you have a different image
  };
  
  switchButtons.forEach(button => {
    button.addEventListener('click', function() {
      const sentiment = this.dataset.sentiment;
      
      // Update buttons
      switchButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Update visible category
      searchCategories.forEach(category => {
        category.classList.remove('active');
        if (category.dataset.category === sentiment) {
          category.classList.add('active');
        }
      });
      
      // Update image - always keep it visible
      if (sentimentImage && imageFiles[sentiment]) {
        sentimentImage.src = basePath + imageFiles[sentiment];
        sentimentImage.style.display = 'block'; // Ensure it stays visible
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const image = document.getElementById("correlationImage");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active state
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Swap image
      const category = btn.dataset.category;
      image.src = `{{ site.baseurl }}/assets/img/sentiment_correlation_${category}.png`;
    });
  });
});
