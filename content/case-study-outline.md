# Basecamp Explorer — Case Study Outline
**Project by Kilowott**
**Format:** Behance-style landing page case study (single scroll, full-width sections)

---

## WHAT THIS IS

A **Kilowott** case study built as a landing page — mimicking the style of a Behance portfolio piece. Think: a series of full-width, beautifully designed sections scrolling vertically, like frames from a Figma presentation. Each section is a visual "slice" with strong hierarchy, spacing, and visual weight.

**Reference:** Kilowott's Paul John Coffee Behance case study — editorial, confident typography, alternating dark/light sections, prominent stats, big image areas.

**Rules:**
- No Klingit branding anywhere. This is Kilowott only.
- No placeholder images from Unsplash. Image areas are designed as styled empty placeholder zones — labeled boxes ready for real assets.

---

## NARRATIVE ARC

1. Who is Basecamp Explorer — Svalbard, polar bears, Northern Lights, exclusivity
2. The Problem — broken site, buried brand, invisible digitally
3. How We Won the Pitch — two prototypes, SEO audit, a proposal so good there was no competition
4. The Solution — website rebuild + SEO/GEO strategy
5. The Results — what changed / what we're building toward

---

## SECTIONS (10 total)

---

### S01 — HERO (Dark, full-viewport)

- Top-left: Kilowott logo small
- Top-right: "Case Study" label in small caps
- Center: Large display headline
- One-line descriptor beneath
- Client name + category tags + scroll cue at bottom
- Full-bleed background: styled placeholder zone `[HERO IMAGE: Svalbard aerial landscape]` with dark overlay
- Entrance: text fades in with stagger, cinematic

---

### S02 — PROJECT OVERVIEW (Light)

- Two-column: left = intro paragraphs; right = project metadata card
- Metadata: Client · Location · Services · Platform · Year
- Section counter: `01 — Overview`
- Clean editorial layout, thin rule dividers

---

### S03 — CLIENT PROFILE (Dark)

- Section counter: `02 — The Client`
- Left: headline + description paragraphs + tags
- Right: large image placeholder `[IMAGE: Lodge or expedition]`
- Stat row (4 tiles): `25+ Years` · `3 Lodges` · `#1 Operator in Svalbard` · `100% Guided`
- Stats count-up on scroll

---

### S04 — THE PROBLEM: BUSINESS (Light)

- Section counter: `03 — The Challenge`
- Centered headline + subline
- 2×2 grid of problem cards (gold left-border accent):
  1. Broken Booking Engine
  2. Problematic Backend
  3. UI Below Brand Standard
  4. No Lead Generation Path

---

### S05 — THE PROBLEM: SEO DATA (Dark)

- Sub-label: `Digital Audit · Before Kilowott`
- 8 metric cards in a grid — large number (DM Mono, gold) + descriptor:
  - Authority Score: **31**
  - Mobile Performance: **34/100**
  - Organic Traffic Trend: **-2.61%**
  - Traffic Share: **5%** (vs competitor 90%)
  - Missing Meta Descriptions: **242**
  - Geographic Reach: **99% Norway**
  - Transactional Keywords: **4.6%**
  - Referring Domains: **18**
- Closing line at bottom

---

### S06 — THE PITCH (Dark, cinematic)

- Section counter: `04 — How We Won`
- Headline: "We Didn't Just Send a Proposal. We Sent Proof."
- Short paragraph
- **Large centred client quote** in Cormorant Garamond italic — this is the emotional peak
- Attribution line
- Gold rule above/below quote
- Four proof cards below: SEO Audit · Two Prototypes · Business Understanding · Competitive Pricing

---

### S07 — SOLUTION: WEBSITE (Light + dark strip within)

- Section counter: `05 — The Solution`
- **Part A (light):** Headline + 4-step horizontal timeline (Discovery · Design · Development · Deployment)
- **Part B (dark strip):** "What We Built" — 2×4 feature grid (icon + name + one-liner each)
- **Part C (light):** Tech stack — horizontal pill tags
- **Part D (light):** Two device mockup frames (CSS-drawn outlines, no screenshots yet):
  - `[DESKTOP SCREENSHOT: Homepage]`
  - `[MOBILE SCREENSHOT: Lodge page]`

---

### S08 — SOLUTION: SEO & GEO (Dark)

- Section counter: `06 — SEO & GEO Strategy`
- Headline: "From Invisible to Discoverable — Globally"
- Intro paragraph
- 6 Before → After metric pairs (before = muted/red, after = gold):
  - Authority Score: 31 → 50+
  - Mobile Performance: 34 → 90+
  - Organic Keywords: 332 → 1,000+
  - International Traffic: 1% → 20%+
  - Missing Meta Descriptions: 242 → 0
  - Referring Domains: 18 → 100+
- GEO callout card (ice-blue border): explanation of AI search optimisation
- Pricing strip: Setup 15,000 NOK · Monthly 10,000 NOK

---

### S09 — RESULTS (Light)

- Section counter: `07 — The Outcome`
- Headline: "The Journey North Has Begun"
- Pulsing status badge: `● In Progress`
- Short paragraph
- 6 large target metric cards
- Closing quote paragraph

---

### S10 — CLOSE (Dark, minimal)

- Kilowott logo centered
- One tagline line
- Thin rule
- kilowott.com link
- Small copyright footer

---

## DESIGN SYSTEM

### Colors
```css
--bg-dark:       #0A0E1A;
--bg-mid:        #0F1623;
--bg-light:      #F7F6F2;
--bg-card:       #FFFFFF;
--gold:          #E8B84B;
--ice:           #A8C4D4;
--text-light:    #FFFFFF;
--text-dark:     #111111;
--text-muted:    #6B7280;
--red:           #EF4444;
--border-dark:   rgba(255,255,255,0.08);
--border-light:  #E5E7EB;
```

### Fonts (Google Fonts)
```
Cormorant Garamond — display headlines, quote
DM Sans           — labels, body, UI text
DM Mono           — stats, metrics, numbers
```

### Image Placeholders (styled empty zones — no Unsplash)
```css
/* On dark sections: */
background: rgba(255,255,255,0.04);
border: 1.5px dashed rgba(255,255,255,0.15);

/* On light sections: */
background: #ECEAE4;
border: 1.5px dashed #C8C6BF;

/* Centered label inside: */
font: DM Mono, small, muted uppercase
text: "[ HERO IMAGE — SVALBARD LANDSCAPE ]"
```

### Section Rhythm
```
S01 HERO          → Dark
S02 OVERVIEW      → Light
S03 CLIENT        → Dark
S04 BUSINESS PROB → Light
S05 SEO DATA      → Dark
S06 PITCH WIN     → Dark
S07 SOLUTION      → Light (dark strip inside)
S08 SEO & GEO     → Dark
S09 RESULTS       → Light
S10 CLOSE         → Dark
```

### Animations
- Scroll reveal: fade + translateY(24px→0), 0.6s ease-out
- Stagger: 80ms per child
- Stats: count-up on scroll entry
- Badge: CSS pulse keyframe
- Smooth scroll on `<html>`

---

## ASSET FOLDER
```
assets/images/
├── hero-svalbard.jpg
├── isfjord-radio.jpg
├── nordenskiold-lodge.jpg
├── basecamp-hotel.jpg
├── expedition-activity.jpg
├── logo-kilowott-white.svg
├── logo-kilowott-dark.svg
└── logo-basecamp-explorer.png

assets/videos/
└── svalbard-hero.mp4   (optional)
```
