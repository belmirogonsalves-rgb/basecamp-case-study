// ============================================================
// BASECAMP EXPLORER — KILOWOTT CASE STUDY
// script.js
//
// 1. Hero text entrance on DOMContentLoaded (staggered)
// 2. IntersectionObserver scroll reveal on .reveal elements
// 3. Count-up for [data-count] elements
// 4. Parallax on hero background (subtle, 0.2 speed factor)
// 5. Status badge pulse — CSS only, no JS needed
// ============================================================

(function () {
  'use strict';


  // =============================================
  // 1. HERO ENTRANCE
  // Staggers each .hero-reveal 150ms apart on load
  // =============================================
  const heroReveals = document.querySelectorAll('.hero-reveal');

  function runHeroEntrance() {
    heroReveals.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('is-visible');
      }, i * 150);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runHeroEntrance);
  } else {
    runHeroEntrance();
  }


  // =============================================
  // 2. SCROLL REVEAL
  // Observes .reveal elements; adds .is-visible
  // when they enter the viewport.
  // Transition delay is controlled via CSS
  // [data-delay] attribute (0.1s increments).
  // =============================================
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -48px 0px',
    }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });


  // =============================================
  // 3. COUNT-UP ANIMATION
  // Triggers on intersection for [data-count].
  // Reads data-count (end value) and data-suffix.
  // Duration: 1800ms, easeOutQuart easing.
  // =============================================
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function runCountUp(el) {
    var target = parseFloat(el.getAttribute('data-count') || '0');
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1800;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutQuart(progress);
      var current = Math.round(eased * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  var countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCountUp(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-count]').forEach(function (el) {
    countObserver.observe(el);
  });


  // =============================================
  // 4. HERO PARALLAX
  // Subtle translateY on the hero image at 0.2×
  // scroll speed. Stops once hero is out of view.
  // Uses passive listener for performance.
  // =============================================
  var heroImg = document.querySelector('.hero-img');
  var heroSection = document.querySelector('.s-hero');

  if (heroImg && heroSection) {
    function applyParallax() {
      var scrollY = window.pageYOffset;
      var heroHeight = heroSection.offsetHeight;

      if (scrollY <= heroHeight) {
        heroImg.style.transform = 'translateY(' + (scrollY * 0.2) + 'px)';
      }
    }

    window.addEventListener('scroll', applyParallax, { passive: true });
  }


  // =============================================
  // 5. STATUS BADGE PULSE
  // Handled entirely by CSS @keyframes pulse-dot.
  // No JavaScript required.
  // =============================================

})();
