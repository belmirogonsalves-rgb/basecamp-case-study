# CLAUDE CODE — BASECAMP EXPLORER CASE STUDY
## READ THIS ENTIRE FILE BEFORE WRITING A SINGLE LINE OF CODE

---

## WHAT YOU ARE BUILDING

A single-scroll landing page case study for Kilowott's work with Basecamp Explorer. Behance-style editorial portfolio piece. Full-width sections, cinematic feel, strong typography, no nav bar, no routing. This is a visual storytelling piece — minimal text, maximum impact.

**You are building `src/index.html`, `src/styles.css`, and `src/script.js`. Nothing else.**

---

## NON-NEGOTIABLE RULES

1. **ALL copy comes verbatim from `case-study-copy.md`.** Do not paraphrase, invent, or summarise.
2. **NO Klingit branding.** Not the word, not the logo, not a mention.
3. **NO lorem ipsum or fabricated content.**
4. **NO external JS libraries.** Vanilla JS only.
5. **NO Bootstrap or Tailwind.** Clean custom CSS only.
6. **NO external image/video URLs.** All assets are local.
7. **NO CSS device mockups.** Use real screenshot images as specified.
8. **NO client quote anywhere on the page.**
9. **NO phase timeline (Discovery → UAT) anywhere on the page.**
10. **NO pricing strip anywhere on the page.**
11. **NO DM Mono font anywhere.** Use Poppins instead for all monospace/stat/label uses.

---

## BRAND & VISUAL IDENTITY

Dark, cinematic, premium Arctic. NOT corporate. Feels like a high-end expedition brand.

### Colour Palette

```css
:root {
  --bg-dark:        #0C0F0A;
  --bg-section:     #121710;
  --bg-light:       #F4F1EC;
  --bg-card-dark:   #1A1F17;
  --bg-card-light:  #FFFFFF;

  --amber:          #C8893A;
  --amber-light:    #DFA05A;
  --amber-dim:      rgba(200,137,58,0.12);
  --ice:            #7FA8BC;
  --ice-dim:        rgba(127,168,188,0.12);

  --text-primary:   #F0EDE8;
  --text-secondary: rgba(240,237,232,0.55);
  --text-dark:      #1A1A18;
  --text-muted:     #6B6B62;

  --red:            #C85A3A;
  --red-dim:        rgba(200,90,58,0.1);

  --border-dark:    rgba(240,237,232,0.07);
  --border-amber:   rgba(200,137,58,0.25);
  --border-light:   #DDD9D2;
}
```

### Typography

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
```

- `Playfair Display` — ALL display headlines, design philosophy opening line, closing quotes. Italic for emotional moments.
- `DM Sans` — body copy, metadata, UI elements.
- `Poppins` — stats, metric numbers, section counters, tech stack labels, section labels, all monospace-style uses. **Replaces DM Mono entirely.**

### Section Rhythm
```
HERO          → video background (hero-video.mp4)
S01 OVERVIEW  → --bg-light
S02 CLIENT    → --bg-dark
S03 CHALLENGE → --bg-dark (bg: basecamp-add-1.jpg, overlay rgba(12,15,10,0.82))
S04 SEO AUDIT → --bg-section
S05 PITCH     → --bg-dark
S06 SOLUTION  → --bg-light (intro + philosophy) → --bg-dark video strip (the-solution.mp4)
S07 SEO/GEO   → --bg-dark (bg: basecamp-add-3.jpg, overlay rgba(12,15,10,0.80))
S08 RESULTS   → --bg-light
S09 CLOSE     → full cinematic footer (bg: footer-image.jpg, overlay rgba(12,15,10,0.65))
```

### Section Transitions
Use diagonal clip-path or curved transitions between light and dark sections. Hard cuts are not acceptable. Each transition must feel cinematic.

### Background Image/Video CSS Pattern
```css
.section-bg {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}
.section-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
}
.section-bg > * {
  position: relative;
  z-index: 1;
}
```

For video backgrounds:
```html
<video autoplay muted loop playsinline class="section-video-bg">
  <source src="path/to/video.mp4" type="video/mp4">
</video>
```
```css
.section-video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
```

---

## ASSET REFERENCE — EXACT FILENAMES

### `assets/videos/`
```
hero-video.mp4       → Hero section background video
the-solution.mp4     → S06 Solution dark feature strip background
```

### `assets/images/`
```
footer-image.jpg                          → S09 Close cinematic footer background
basecamp-explorer-hotel-2.jpg             → available
basecamp-explorer-hotel-3.jpg             → available
basecamp-explorer-hotel-9.jpg             → available
230304 base camp-2.jpg                    → Client carousel row 1
230304 base camp-11.jpg                   → available
230304 base camp-14.jpg                   → Client carousel row 2
230304 base camp-17.jpg                   → available
Svalbard feb2025-2.jpg                    → available
Svalbard feb2025-4.jpg                    → available
Svalbard feb2025-5.jpg                    → Client carousel row 1
Svalbard feb2025-6.jpg                    → Client carousel row 2
Svalbard feb2025-11.jpg                   → available
```

### `assets/images/additional images/`
```
basecamp-add-1.jpg   → S03 Challenge background
basecamp-add-2.jpg   → S05 Pitch curtain card 1
basecamp-add-3.jpg   → S07 SEO/GEO background + Client carousel row 2
basecamp-add-4.jpg   → S05 Pitch curtain card 4 + Client carousel row 1
basecamp-add-5.jpg   → available
basecamp-add-6.jpg   → S05 Pitch curtain card 2
basecamp-add-7.jpg   → Client carousel row 1
basecamp-add-8.jpg   → Client carousel row 2
basecamp-add-9.jpg   → Client carousel row 1
basecamp-add-10.jpg  → S05 Pitch curtain card 3
basecamp-add-11.jpg  → Client carousel row 1
basecamp-add-12.jpg  → Client carousel row 2
```

### `assets/basecamp-website-screenshots/`
```
basecamp website desktop screenshot-updated.png  → S06 Solution desktop
basecamp website mobile screenshot.jpeg          → S06 Solution mobile
```

### `assets/kilowott-logo/`
```
kilowott-logo.png   → Hero top-left + S09 Close
```

### `assets/basecamp-logo/`
```
image-3-2.png   → S02 Client above headline
```

---

## SCROLL EFFECTS & ANIMATIONS (script.js)

Build all of the following. Every effect must be smooth and performant using requestAnimationFrame where needed.

```javascript
// 1. STICKY SCROLL PROGRESS BAR
//    Fixed amber vertical line, left edge of viewport
//    Width: 3px, fills top-to-bottom as % of page scrolled
//    Color: var(--amber)

// 2. FIXED SECTION NUMBER INDICATOR
//    Bottom-right corner, fixed position
//    Shows current section number: 01, 02, 03...
//    Updates as each section enters viewport via IntersectionObserver
//    Fade transition between numbers

// 3. SCROLL REVEAL — all .reveal elements
//    opacity 0→1, translateY 32px→0
//    duration 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
//    stagger via data-delay × 100ms

// 4. HERO SCROLL FADE
//    Hero content fades out as user scrolls down
//    opacity tied to scroll position, smooth handoff to S01

// 5. HERO TEXT ENTRANCE — DOMContentLoaded
//    Stagger each .hero-reveal 150ms apart

// 6. COUNT-UP — all [data-count] elements
//    Trigger on intersection, 1800ms, easeOutQuart
//    data-target = end value, data-suffix = suffix

// 7. HEADLINE WORD-SPLIT ANIMATION
//    All section headlines split into individual words
//    Each word slides up from below (translateY 40px→0, opacity 0→1)
//    Stagger: 80ms per word
//    Trigger on IntersectionObserver

// 8. CLIP-PATH IMAGE REVEAL
//    All .img-reveal elements start clipped: inset(100% 0 0 0)
//    Animate to inset(0% 0 0 0) on intersection
//    Duration: 0.9s cubic-bezier(0.77, 0, 0.175, 1)

// 9. PARALLAX on all .section-bg elements
//    background-position Y shifts at 0.4x scroll speed
//    requestAnimationFrame for performance

// 10. HORIZONTAL MARQUEE DIVIDERS
//     Between sections, a single line of scrolling text
//     Content: "Arctic · Svalbard · Norway · Kilowott · Basecamp Explorer ·"
//     Speed tied to scroll velocity — faster scroll = faster marquee
//     Direction alternates: odd dividers left, even dividers right

// 11. STICKY SECTION LABELS
//     Each section's label (e.g. "03 / The Challenge") sticks to top
//     of viewport while user is within that section
//     Releases when next section takes over

// 12. DUAL-ROW AUTO-SCROLLING CAROUSEL (S02 Client)
//     Row 1: infinite scroll left, continuous, no pause
//     Row 2: infinite scroll right, same speed
//     Speed: ~40px/s base
//     On hover: speed reduces to ~8px/s, hovered card scales 1.05
//     Cards slightly rotated: odd cards +2deg, even cards -2deg
//     Duplicate image set for seamless infinite loop

// 13. CURTAIN SHUTTER CARDS (S05 Pitch)
//     Card at rest: full image visible, text hidden behind
//     On hover: image slides right (translateX 0 → 100%)
//     Revealing text content beneath
//     Duration: 0.5s ease
//     On mouse leave: image slides back left
//     Text layer: dark background, amber numbered title, body copy

// 14. BEFORE/AFTER COUNTER TRANSITION (S07 SEO/GEO)
//     On section intersection, numbers animate FROM before TO after value
//     Duration: 2000ms easeOutQuart
//     Before value fades as after value counts up

// 15. PROGRESS BARS (S08 Results)
//     Each result card has a progress bar
//     Animate width from 0 to target % on intersection
//     Duration: 1200ms, staggered 150ms per bar

// 16. PULSING DOT — .status-badge
//     CSS animation only, no JS
//     Keyframe: scale 1→1.4→1, opacity 1→0.4→1, 1.5s infinite
```

---

## LAYOUT SPECIFICATIONS

### Hero
- 100vh minimum, video background `hero-video.mp4`
- Gradient overlay: `linear-gradient(to bottom, rgba(12,15,10,0.3) 0%, rgba(12,15,10,0.15) 40%, rgba(12,15,10,0.9) 100%)`
- Text bottom-left
- Kilowott logo image top-left — `min-height: 48px`, auto width, clearly visible
- "CASE STUDY" label top-right — Poppins, small, letter-spaced
- Headline: Playfair Display, clamp(44px, 7vw, 96px), weight 400
- Subheadline: clamp(18px, 2vw, 26px), color var(--amber), weight 400 — prominent
- Tags: 14px, letter-spacing 0.12em, var(--text-primary), opacity 0.85
- Scroll cue: amber, animated bounce loop

### Overview (S01)
- Two-column: 60% text, 40% metadata card
- Metadata card: border var(--border-light)
- Two short paragraphs only

### Client (S02)
- Dark section
- Basecamp logo above headline, max-height 60px
- Two-column: left content + stats, right image (`basecamp-add-4.jpg`)
- Stats: 4 tiles, count-up, Poppins numbers
- Property cards: one line each
- Below all content: dual-row auto-scrolling image carousel (full width, bleeds to edges)

### Challenge (S03)
- Background: `basecamp-add-1.jpg`, overlay rgba(12,15,10,0.82)
- 2×2 problem cards: semi-transparent dark bg rgba(12,15,10,0.6), amber left border 3px
- Text trimmed to essentials

### SEO Audit (S04)
- Dark section, diagnostic label only (no section counter)
- Large Poppins numbers — dramatic data reveal feel
- Bad metrics in var(--red), others var(--text-primary)
- NOT a boring uniform grid — vary scale, let large numbers dominate

### Pitch (S05)
- Dark section, --bg-dark base
- Headline + intro paragraph
- 2×2 curtain shutter cards: image at rest, text reveals on hover via sideways wipe
- NO quote block

### Solution (S06)
- Light section: headline + intro + design philosophy block
- Philosophy: amber left border accent, Playfair italic opening line
- Dark video strip: `the-solution.mp4`, overlay rgba(12,15,10,0.88)
- Feature accordion: horizontal rows, expand on click, one open at a time
- Before/After toggle: clip-path slider overlay, old vs new site
- Screenshots side by side below toggle
- Tech stack: Poppins pill tags, flex-wrap

### SEO & GEO (S07)
- Background: `basecamp-add-3.jpg`, overlay rgba(12,15,10,0.80)
- Before/After: animated counter transitions on scroll
- GEO callout: ice left border 4px, ice-dim background
- NO pricing strip

### Results (S08)
- Light section
- Status badge inline with headline, pulsing dot
- 3×2 result cards each with progress bar
- Closing Playfair italic quote

### Close (S09) — Cinematic Footer
- Full section, 100vh minimum
- Background: `footer-image.jpg`, cover, fixed parallax, overlay rgba(12,15,10,0.65)
- NO separate image block above — single cohesive cinematic section
- Content vertically centred
- Kilowott logo image (min-height 48px), amber rule 1px/60px, tagline, link
- Copyright small at bottom, Poppins, muted

---

## WHAT SUCCESS LOOKS LIKE

1. Hero plays `hero-video.mp4` — no static image
2. Kilowott logo clearly visible top-left — image, proper size
3. Subheadline is amber/prominent — not a small caption
4. Sticky amber progress bar on left edge fills on scroll
5. Fixed section number indicator bottom-right updates per section
6. Horizontal marquee dividers between sections
7. All headlines animate word-by-word on entrance
8. All images reveal via clip-path on scroll
9. Client section has dual-row auto-scrolling carousel — alive, not static
10. S03 Challenge has `basecamp-add-1.jpg` background
11. S04 SEO audit numbers feel dramatic — not a uniform card grid
12. S05 Pitch cards use curtain shutter effect — image slides right on hover
13. S06 Solution has `the-solution.mp4` video background on feature strip
14. S06 features use interactive accordion
15. S07 SEO/GEO before/after numbers animate as counter transitions
16. S08 Results cards have animated progress bars
17. S09 Close is ONE cinematic section — `footer-image.jpg` as background, no separate image above
18. Poppins used everywhere DM Mono would have been — zero DM Mono on page
19. Diagonal/curved transitions between light and dark sections
20. Zero mention of Klingit anywhere
21. No client quote anywhere
22. No phase timeline anywhere
23. No pricing strip anywhere
24. All 10 SEO audit stats display with exact numbers