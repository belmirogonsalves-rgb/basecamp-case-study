// ============================================================
// BASECAMP EXPLORER — KILOWOTT CASE STUDY
// script.js — built from claude_1.md
//
// 1.  Sticky scroll progress bar (left edge, amber)
// 2.  Fixed section number indicator (bottom-right)
// 3.  Scroll reveal (.reveal elements)
// 4.  Hero scroll fade (hero fades as user scrolls)
// 5.  Hero text entrance (DOMContentLoaded, stagger)
// 6.  Count-up ([data-count] elements)
// 7.  Headline word-split animation (.js-word-split)
// 8.  Clip-path image reveal (.img-reveal)
// 9.  Parallax on .section-bg elements
// 10. Horizontal marquee dividers (scroll-velocity aware)
// 11. Sticky section labels (handled in CSS)
// 12. Dual-row auto-scrolling carousel
// 13. Curtain shutter cards (CSS handles hover, JS init)
// 14. Before/After counter transition (S07 ba-cards)
// 15. Progress bars (S08 result cards)
// 16. Pulsing status dot (CSS only)
// ============================================================

(function () {
  'use strict';

  // ─────────────────────────────────────────
  // Utility: easeOutQuart
  // ─────────────────────────────────────────
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  // ─────────────────────────────────────────
  // Utility: requestAnimationFrame loop
  // ─────────────────────────────────────────
  var raf = window.requestAnimationFrame;


  // ══════════════════════════════════════════
  // 1. STICKY SCROLL PROGRESS BAR
  //    Left edge, fills as % of page scrolled
  // ══════════════════════════════════════════
  var progressBar = document.getElementById('scroll-progress');

  function updateProgressBar() {
    if (!progressBar) return;
    var scrollTop = window.pageYOffset;
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
    progressBar.style.height = pct.toFixed(2) + '%';
  }

  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();


  // ══════════════════════════════════════════
  // 2. FIXED SECTION NUMBER INDICATOR
  //    Bottom-right, fades between section #s
  // ══════════════════════════════════════════
  var sectionNumEl = document.getElementById('section-num');
  var sections = document.querySelectorAll('[data-section]');

  if (sectionNumEl && sections.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var num = entry.target.getAttribute('data-section');
            if (num !== '00') {
              sectionNumEl.style.opacity = '0';
              setTimeout(function () {
                sectionNumEl.textContent = num;
                sectionNumEl.style.opacity = '0.7';
              }, 200);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(function (s) {
      sectionObserver.observe(s);
    });
  }


  // ══════════════════════════════════════════
  // 5. HERO TEXT ENTRANCE
  //    Stagger each .hero-reveal 150ms on load
  // ══════════════════════════════════════════
  var heroReveals = document.querySelectorAll('.hero-reveal');

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


  // ══════════════════════════════════════════
  // 4. HERO SCROLL FADE
  //    Hero content opacity tied to scroll pos
  // ══════════════════════════════════════════
  var heroContent = document.getElementById('hero-content');
  var heroSection = document.getElementById('hero');

  if (heroContent && heroSection) {
    function updateHeroFade() {
      var scrollY = window.pageYOffset;
      var heroH   = heroSection.offsetHeight;
      if (scrollY > heroH) return;
      var opacity = 1 - (scrollY / heroH) * 1.8;
      heroContent.style.opacity = Math.max(0, opacity).toFixed(3);
    }

    window.addEventListener('scroll', updateHeroFade, { passive: true });
  }


  // ══════════════════════════════════════════
  // 3. SCROLL REVEAL
  //    .reveal elements: fade + translateY
  //    Also triggers progress bar fills
  // ══════════════════════════════════════════
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');

        // Progress bars: set CSS custom property from data-progress
        var fill = entry.target.querySelector('.result-bar-fill');
        if (fill) {
          var progress = fill.getAttribute('data-progress') || '0';
          fill.style.setProperty('--progress', progress + '%');
        }

        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });


  // ══════════════════════════════════════════
  // 6. COUNT-UP ANIMATION
  //    [data-count] triggers on intersection
  // ══════════════════════════════════════════
  function runCountUp(el, target, suffix) {
    var duration  = 1800;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var elapsed  = ts - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased    = easeOutQuart(progress);
      var current  = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        raf(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    raf(step);
  }

  var countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el     = entry.target;
        var target = parseFloat(el.getAttribute('data-count') || '0');
        var suffix = el.getAttribute('data-suffix') || '';
        runCountUp(el, target, suffix);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-count]').forEach(function (el) {
    countObserver.observe(el);
  });


  // ══════════════════════════════════════════
  // 7. HEADLINE WORD-SPLIT ANIMATION
  //    Splits .js-word-split text into word spans
  //    Each word slides up with 80ms stagger
  // ══════════════════════════════════════════
  document.querySelectorAll('.js-word-split').forEach(function (el) {
    // Split on spaces preserving <br> elements
    var html    = el.innerHTML;
    var parts   = html.split(/(<br\s*\/?>)/gi);
    var result  = '';
    var wordIdx = 0;

    parts.forEach(function (part) {
      if (/^<br/i.test(part)) {
        result += part;
      } else {
        var words = part.split(/\s+/).filter(Boolean);
        words.forEach(function (word, i) {
          if (i > 0) result += ' ';
          result +=
            '<span class="word">' +
              '<span class="word-inner" data-word-index="' + wordIdx + '">' +
                word +
              '</span>' +
            '</span>';
          wordIdx++;
        });
      }
    });

    el.innerHTML = result;
    el.classList.remove('js-word-split'); // prevent double processing
  });

  var wordObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var inners = entry.target.querySelectorAll('.word-inner');
        inners.forEach(function (span) {
          var idx = parseInt(span.getAttribute('data-word-index'), 10) || 0;
          setTimeout(function () {
            span.classList.add('is-visible');
          }, idx * 80);
        });
        wordObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.display-heading').forEach(function (el) {
    // Only observe after splitting (no more .js-word-split class)
    if (el.querySelector('.word-inner')) {
      wordObserver.observe(el);
    }
  });


  // ══════════════════════════════════════════
  // 8. CLIP-PATH IMAGE REVEAL
  //    .img-reveal: inset(100% 0 0 0) → inset(0%)
  // ══════════════════════════════════════════
  var imgObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        imgObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.img-reveal').forEach(function (el) {
    imgObserver.observe(el);
  });


  // ══════════════════════════════════════════
  // 9. PARALLAX on .section-bg elements
  //    background-position Y shifts at 0.4x
  // ══════════════════════════════════════════
  var bgSections = document.querySelectorAll('.section-bg');
  var parallaxTicking = false;

  function runParallax() {
    var scrollY = window.pageYOffset;

    bgSections.forEach(function (section) {
      var rect  = section.getBoundingClientRect();
      var viewH = window.innerHeight;

      if (rect.bottom < -viewH || rect.top > viewH * 2) return;

      var mid    = scrollY + rect.top + rect.height / 2;
      var delta  = scrollY - mid + viewH / 2;
      var offsetY = (delta * 0.4).toFixed(1);

      section.style.backgroundPositionY = 'calc(50% + ' + offsetY + 'px)';
    });

    parallaxTicking = false;
  }

  if (bgSections.length > 0) {
    window.addEventListener('scroll', function () {
      if (!parallaxTicking) {
        raf(runParallax);
        parallaxTicking = true;
      }
    }, { passive: true });
  }


  // ══════════════════════════════════════════
  // 10. HORIZONTAL MARQUEE DIVIDERS
  //     Scroll-velocity aware speed
  //     Odd dividers: left, Even: right
  // ══════════════════════════════════════════
  var marquees = document.querySelectorAll('.marquee-divider');

  if (marquees.length > 0) {
    var lastScrollY   = window.pageYOffset;
    var scrollVel     = 0;
    var baseSpeed     = 0.6; // px per frame at 60fps
    var marqueeTracks = [];

    marquees.forEach(function (divider, idx) {
      var track   = divider.querySelector('.marquee-track');
      if (!track) return;

      var dir     = divider.getAttribute('data-direction') === 'right' ? 1 : -1;
      var offsetX = dir === -1 ? 0 : -track.scrollWidth / 2;

      marqueeTracks.push({ track: track, dir: dir, offsetX: offsetX });
    });

    window.addEventListener('scroll', function () {
      var currentY = window.pageYOffset;
      scrollVel = Math.abs(currentY - lastScrollY);
      lastScrollY = currentY;
    }, { passive: true });

    function animateMarquees() {
      var speed = baseSpeed + scrollVel * 0.08;
      scrollVel = Math.max(0, scrollVel - 0.5); // decay velocity

      marqueeTracks.forEach(function (m) {
        var fullW = m.track.scrollWidth / 2;
        m.offsetX += m.dir * -speed;

        // Loop: when track has scrolled one full set width, reset
        if (m.dir === -1 && m.offsetX < -fullW) m.offsetX += fullW;
        if (m.dir ===  1 && m.offsetX > 0)       m.offsetX -= fullW;

        m.track.style.transform = 'translateX(' + m.offsetX.toFixed(2) + 'px)';
      });

      raf(animateMarquees);
    }

    raf(animateMarquees);
  }


  // Carousel auto-scroll is now CSS-only (marquee-left / marquee-right keyframes).


  // ══════════════════════════════════════════
  // 13. CURTAIN SHUTTER CARDS
  //     Pure CSS hover — JS only for keyboard
  //     accessibility (focus = treated as hover)
  // ══════════════════════════════════════════
  document.querySelectorAll('.curtain-card').forEach(function (card) {
    card.addEventListener('focusin', function () {
      var img = card.querySelector('.curtain-image-layer');
      if (img) img.style.transform = 'translateX(100%)';
    });
    card.addEventListener('focusout', function () {
      var img = card.querySelector('.curtain-image-layer');
      if (img) img.style.transform = '';
    });
    // Make focusable for accessibility
    if (!card.hasAttribute('tabindex')) {
      card.setAttribute('tabindex', '0');
    }
  });


  // ══════════════════════════════════════════
  // 14. BEFORE/AFTER COUNTER TRANSITION (S07)
  //     Numbers animate FROM before TO after
  //     Before fades, after counts up
  // ══════════════════════════════════════════
  var baCards = document.querySelectorAll('.ba-card[data-ba-before]');

  function runBATransition(card) {
    var beforeVal = parseFloat(card.getAttribute('data-ba-before') || '0');
    var afterVal  = parseFloat(card.getAttribute('data-ba-after')  || '0');
    var suffix    = card.getAttribute('data-ba-suffix') || '';
    var afterEl   = card.querySelector('.ba-after-num');
    var duration  = 2000;
    var startTime = null;

    card.classList.add('ba-animated');

    function step(ts) {
      if (!startTime) startTime = ts;
      var elapsed  = ts - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased    = easeOutQuart(progress);
      var current  = Math.round(beforeVal + eased * (afterVal - beforeVal));

      var display = afterVal >= 1000
        ? current.toLocaleString('en-US')
        : String(current);

      afterEl.textContent = display + suffix;

      if (progress < 1) {
        raf(step);
      } else {
        var finalDisplay = afterVal >= 1000
          ? afterVal.toLocaleString('en-US')
          : String(afterVal);
        afterEl.textContent = finalDisplay + suffix;
      }
    }

    raf(step);
  }

  if (baCards.length > 0) {
    var baObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var idx = Array.prototype.indexOf.call(baCards, entry.target);
          setTimeout(function () {
            runBATransition(entry.target);
          }, idx * 120);
          baObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    baCards.forEach(function (card) {
      baObserver.observe(card);
    });
  }


  // ══════════════════════════════════════════
  // 9 / Feature Accordion (S06)
  //   Click to expand, one item open at a time
  // ══════════════════════════════════════════
  var accordion = document.getElementById('feature-accordion');

  if (accordion) {
    var triggers = accordion.querySelectorAll('.accordion-trigger');

    triggers.forEach(function (trigger) {
      var body = trigger.nextElementSibling;
      body.style.maxHeight = null;

      trigger.addEventListener('click', function () {
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';

        // Close all
        triggers.forEach(function (t) {
          t.setAttribute('aria-expanded', 'false');
          var b = t.nextElementSibling;
          b.style.maxHeight = null;
        });

        // Open this one if it was closed
        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });

    // Open first item by default
    if (triggers.length > 0) {
      triggers[0].setAttribute('aria-expanded', 'true');
      var firstBody = triggers[0].nextElementSibling;
      firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
    }
  }


  // ══════════════════════════════════════════
  // Before/After Site Toggle (S06 bottom)
  //   Drag handle reveals old vs new screenshot
  // ══════════════════════════════════════════
  var siteToggle = document.getElementById('site-toggle');

  if (siteToggle) {
    var toggleHandle  = document.getElementById('site-toggle-handle');
    var beforeLayer   = siteToggle.querySelector('.site-toggle__before');
    var afterLayer    = siteToggle.querySelector('.site-toggle__after');
    var isDragging    = false;
    var position      = 50;

    function setTogglePosition(pct) {
      position = Math.max(2, Math.min(98, pct));
      beforeLayer.style.clipPath = 'inset(0 ' + (100 - position) + '% 0 0)';
      afterLayer.style.clipPath  = 'inset(0 0 0 ' + position + '%)';
      siteToggle.querySelector('.site-toggle__handle').style.left = position + '%';
    }

    function getPercent(clientX) {
      var rect = siteToggle.getBoundingClientRect();
      return ((clientX - rect.left) / rect.width) * 100;
    }

    siteToggle.addEventListener('mousedown', function (e) {
      isDragging = true;
      setTogglePosition(getPercent(e.clientX));
      e.preventDefault();
    });

    document.addEventListener('mousemove', function (e) {
      if (isDragging) setTogglePosition(getPercent(e.clientX));
    });

    document.addEventListener('mouseup', function () {
      isDragging = false;
    });

    siteToggle.addEventListener('touchstart', function (e) {
      isDragging = true;
      setTogglePosition(getPercent(e.touches[0].clientX));
    }, { passive: true });

    document.addEventListener('touchmove', function (e) {
      if (isDragging) setTogglePosition(getPercent(e.touches[0].clientX));
    }, { passive: true });

    document.addEventListener('touchend', function () {
      isDragging = false;
    });

    // Init
    setTogglePosition(50);
  }


  // ══════════════════════════════════════════
  // 15. PROGRESS BARS (S08)
  //     Width animated via CSS custom property
  //     set when result-card.reveal fires
  //     (handled inside revealObserver above)
  // ══════════════════════════════════════════
  // Stagger bar animations 150ms apart on section entry
  var resultsGrid = document.querySelector('.results-grid');

  if (resultsGrid) {
    var barObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var fills = resultsGrid.querySelectorAll('.result-bar-fill');
          fills.forEach(function (fill, i) {
            setTimeout(function () {
              var progress = fill.getAttribute('data-progress') || '0';
              fill.style.setProperty('--progress', progress + '%');
              // The parent card also needs is-visible for the CSS rule
              var card = fill.closest('.result-card');
              if (card) card.classList.add('is-visible');
            }, i * 150);
          });
          barObserver.unobserve(resultsGrid);
        });
      },
      { threshold: 0.2 }
    );

    barObserver.observe(resultsGrid);
  }


  // ══════════════════════════════════════════
  // 16. PULSING STATUS DOT
  //     Handled entirely via CSS keyframes.
  //     No JavaScript required.
  // ══════════════════════════════════════════

})();
