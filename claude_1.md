# CLAUDE CODE — BASECAMP EXPLORER CASE STUDY
## READ THIS ENTIRE FILE BEFORE WRITING A SINGLE LINE OF CODE

---

## WHAT YOU ARE BUILDING

A single-scroll landing page case study for Kilowott's work with Basecamp Explorer. Format: Behance-style editorial portfolio piece. Full-width sections, cinematic feel, strong typography, no nav bar, no routing.

**You are building `src/index.html`, `src/styles.css`, and `src/script.js`. Nothing else.**

---

## NON-NEGOTIABLE RULES — VIOLATIONS WILL BREAK THIS PROJECT

1. **ALL copy comes from the CONTENT SECTION below.** Do not paraphrase. Do not invent. Do not summarise. Copy it verbatim into the HTML.
2. **NO Klingit branding.** Not the word, not the logo, not a mention. This is a Kilowott case study only.
3. **NO fabricated content.** No made-up testimonials, no invented statistics, no placeholder "lorem ipsum" text. Every word must come from the content below.
4. **ASSETS:** Use exact filenames as specified. Do NOT load anything from Unsplash, Pexels, or any external URL.
5. **NO external JS libraries.** Vanilla JS only. No jQuery, no GSAP, no frameworks.
6. **NO Bootstrap or Tailwind.** Write clean custom CSS.

---

## BRAND & VISUAL IDENTITY

Basecamp Explorer's brand is **dark, cinematic, premium Arctic**. Deep near-black backgrounds, clean warm-white typography, amber and ice-blue accents. NOT corporate. Feels like a high-end expedition brand.

### Exact Colour Palette

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
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

- `Playfair Display` — ALL display headlines, design philosophy opening line, closing quotes. Weights: 400, 600, italic.
- `DM Sans` — body copy, labels, metadata, UI elements.
- `DM Mono` — stats, metric numbers, section counters, tech stack labels.

### Image Placeholders (for any areas still without assets)

```css
.img-placeholder {
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}
.img-placeholder--dark {
  background: rgba(240,237,232,0.03);
  border: 1px dashed rgba(240,237,232,0.1);
}
.img-placeholder--light {
  background: #EAE7E0;
  border: 1px dashed #C8C4BC;
}
.img-placeholder__label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.3;
  text-align: center;
  padding: 0 20px;
}
```

### Background Image Sections
For sections using real images as backgrounds:
```css
.section-bg {
  background-size: cover;
  background-position: center;
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
Each section's overlay opacity is specified individually below.

### Section Alternation
```
HERO          → --bg-dark       (full viewport, existing bg image — do not change)
S01 OVERVIEW  → --bg-light
S02 CLIENT    → --bg-dark
S03 CHALLENGE → --bg-dark       (bg image: 230304 base camp-17.jpg, overlay rgba(12,15,10,0.82))
S04 SEO AUDIT → --bg-section
S05 PITCH WIN → --bg-dark       (bg image: Svalbard feb2025-4.jpg, overlay rgba(12,15,10,0.78))
S06 SOLUTION  → --bg-light (intro + philosophy) + --bg-dark strip (feature grid, bg image: basecamp-explorer-hotel-9.jpg, overlay rgba(12,15,10,0.88))
S07 SEO STRAT → --bg-section    (bg image: 230304 base camp-11.jpg, overlay rgba(12,15,10,0.80))
S08 RESULTS   → --bg-light
S09 CLOSE     → --bg-dark
```

---

## ASSET REFERENCE — EXACT FILENAMES

### `assets/images/`
```
230304 base camp-2.jpg       → proof cards area in S05 Pitch
230304 base camp-11.jpg      → S07 SEO & GEO background
230304 base camp-14.jpg      → available for use
230304 base camp-17.jpg      → S03 Challenge background
basecamp-explorer-hotel-2.jpg → S02 Client section image
basecamp-explorer-hotel-3.jpg → available for use
basecamp-explorer-hotel-9.jpg → S06 Solution dark feature strip background
Svalbard feb2025-2.jpg       → available for use
Svalbard feb2025-4.jpg       → S05 Pitch background
Svalbard feb2025-5.jpg       → available for use
Svalbard feb2025-6.jpg       → available for use
Svalbard feb2025-11.jpg      → available for use
```

### `assets/basecamp-website-screenshots/`
```
basecamp website desktop screenshot.png  → S06 Solution, desktop mockup
basecamp website mobile screenshot.jpeg  → S06 Solution, mobile mockup
```

### `assets/kilowott-logo/`
```
kilowott-logo.png  → Hero top-left + S09 Close
```

### `assets/basecamp-logo/`
```
image-3-2.png  → S02 Client, above headline
```

---

## ANIMATIONS (script.js)

```javascript
// 1. IntersectionObserver scroll reveal on all .reveal elements
//    - opacity: 0 → 1, translateY: 32px → 0
//    - duration: 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
//    - stagger children using data-delay attribute × 100ms

// 2. Count-up for all [data-count] elements
//    - trigger on intersection, duration 1800ms, easeOutQuart
//    - read data-target for end value, data-suffix for suffix

// 3. Hero text entrance on DOMContentLoaded (no scroll trigger)
//    - stagger each .hero-reveal element, 150ms apart

// 4. Parallax on hero background (subtle, 0.2 speed factor)

// 5. Pulsing dot on .status-badge — CSS animation only, no JS
```

---

## THE COMPLETE CONTENT — USE THIS VERBATIM

### HERO SECTION

**Top-left:** `<img src="../assets/kilowott-logo/kilowott-logo.png" alt="Kilowott" class="logo-kilowott">` — do NOT use text
**Top-right label:** `CASE STUDY`

**Eyebrow:** `Basecamp Explorer · Svalbard, Norway`

**Headline:**
```
Where the Arctic
Meets the World
```

**Subline:**
```
How Kilowott rebuilt Basecamp Explorer's digital presence — from a broken
backend to an immersive Arctic brand experience.
```

**Tags:** `Website Redesign & Development` · `SEO Strategy` · `GEO Optimisation`

**Scroll cue:** `Scroll to explore ↓`

**Hero background:** existing image — DO NOT CHANGE

---

### SECTION 01 — OVERVIEW

**Section counter/label:** `01 / Overview`

**Left column (two paragraphs):**
```
Basecamp Explorer is Norway's leading Arctic adventure company — operating
exclusive expeditions and premium accommodation in Svalbard, one of the world's
most extreme and pristine environments. For over 25 years, they have been the
definitive guide for high-value travellers seeking meaningful, off-the-beaten-path
experiences in the High Arctic.

When they came to Kilowott, they had a clear ambition but a limiting digital
presence. Their existing platform was technically failing, visually underwhelming,
and almost entirely invisible to the international audience they needed most. The
engagement covered a full website redesign and rebuild, alongside a structured
SEO and GEO strategy to grow their global reach.
```

**Right column metadata card:**
```
Client:    Basecamp Explorer Spitsbergen AS
Location:  Longyearbyen, Svalbard, Norway
Services:  Website Redesign & Development · SEO & GEO Strategy
Platform:  WordPress (Custom Build)
Year:      2025
```

---

### SECTION 02 — THE CLIENT

**Section counter/label:** `02 / The Client`

**Basecamp Explorer logo:** `<img src="../assets/basecamp-logo/image-3-2.png" alt="Basecamp Explorer">` — place above headline

**Headline:**
```
25 Years at the
Edge of the World
```

**Body paragraphs:**
```
Basecamp Explorer operates at the edge of the world — running expeditions and
exclusive stays across three iconic Svalbard properties. Their guests are not
casual tourists; they are high-value international travellers seeking authenticity,
adventure, and an experience that cannot be replicated anywhere else on earth.

The mandatory armed escort for any outdoor activity — polar bear protection —
is not a liability. It is part of the story. Basecamp Explorer's model is built
around the full-package experience: accommodation, expedition, and guided
journey as one seamless offering.
```

**Three property cards:**
```
1. Isfjord Radio Adventure Hotel
   Remote wilderness, accessible only by snowmobile, boat, or helicopter.

2. Nordenskiöld Lodge
   Set beside the glacier — the most remote of the three properties.

3. Basecamp Hotel, Longyearbyen
   The urban base before and after expeditions into the wilderness.
```

**Stat tiles (4 — count-up animation):**
```
25+    Years of Arctic expertise
3      Iconic lodges and properties
#1     Operator in Svalbard
100%   Guided expeditions (polar bear safety)
```

**Tags:** `Arctic Expeditions` · `Sustainable Tourism` · `Premium Hospitality` · `Svalbard`

**Section image:** `<img src="../assets/images/basecamp-explorer-hotel-2.jpg" alt="Basecamp Explorer lodge">`

---

### SECTION 03 — THE CHALLENGE

**Section counter/label:** `03 / The Challenge`

**Background:** `../assets/images/230304 base camp-17.jpg` — overlay `rgba(12,15,10,0.82)`

**Headline:**
```
A World-Class Experience
Hidden Behind a Broken Website
```

**Intro paragraph:**
```
The gap between Basecamp Explorer's on-the-ground product and their online
presence was stark. Their existing site had a non-functional booking engine,
a backend that was difficult to manage, and a UI that simply didn't communicate
the exclusivity of what they offered.
```

**Four problem cards:**
```
Card 1 — Broken Booking Engine
The existing booking functionality was non-operational. High-intent visitors
arrived, found no path to inquiry, and left. Revenue was being lost at the
most critical touchpoint.

Card 2 — Problematic Backend
The CMS was difficult to manage, making content updates slow and error-prone.
The team could not keep the site current without significant technical overhead.

Card 3 — UI Below Brand Standard
The visual design and user experience failed to communicate the premium,
exclusive nature of Basecamp Explorer's product. The website looked ordinary.
The experience was anything but.

Card 4 — No Lead Generation Path
With no proper contact flow or call-to-action architecture, the site was
generating awareness but failing to convert any of it into qualified leads
for the sales team.
```

---

### SECTION 04 — SEO AUDIT DATA

**Label:** `Digital Audit · Before Kilowott`

**Intro line:** `The numbers told a story the site couldn't.`

**Eight metric cards — EXACT numbers:**
```
1.  31         Domain Authority Score       Weak domain credibility. Industry benchmark: 50+.
2.  34/100     Mobile Performance Score     Critically low. Top-10% websites score 92+.
3.  −2.61%     Organic Traffic Trend        Declining year-on-year. Growth had stalled.
4.  5%         Traffic Share                Main competitor fjordtours.com holds 90%.
5.  242        Pages Missing Meta Descs     Of approximately 500 pages crawled.
6.  99%        Traffic from Norway Only     Zero meaningful international reach.
7.  4.6%       Transactional Keywords       Most traffic was informational — visitors, not buyers.
8.  18         Referring Domains            Main competitors have 1,800+.
```

**Closing statement:** `The numbers told a story the site couldn't.`

---

### SECTION 05 — HOW WE WON THE PITCH

**Section counter/label:** `04 / How We Won`

**Background:** `../assets/images/Svalbard feb2025-4.jpg` — overlay `rgba(12,15,10,0.78)`

**Headline:**
```
We Didn't Just Send a Proposal.
We Sent Proof.
```

**Intro paragraph:**
```
Kilowott entered the competitive pitch process differently. Before a single
contract was signed, we had already done the work — conducting a full SEO audit
of their existing site, building two working prototypes, and developing a proposal
that demonstrated a genuine understanding of Basecamp Explorer's business, not
just their brief. The competition sent decks. We sent proof.
```

**NOTE: There is NO client quote in this section. Do not add one.**

**Four proof cards — use `../assets/images/230304 base camp-2.jpg` as subtle background accent behind the cards grid:**
```
Card 01 — Full SEO Audit
Delivered before engagement. A comprehensive analysis identifying every
technical, content, and competitive gap in their existing digital presence.

Card 02 — Two Working Prototypes
Not wireframes. Not mockups. Interactive prototypes showing exactly what
the new site could feel and function like — before any contract was signed.

Card 03 — Business-First Thinking
We understood the complexity: mandatory guided experiences, polar bear
safety requirements, agent portals, bespoke itineraries. Our proposal
spoke their language.

Card 04 — Competitive Pricing
We came in significantly below market rate — not by cutting corners,
but through operational efficiency and genuine commitment to the partnership.
```

---

### SECTION 06 — THE SOLUTION: WEBSITE

**Section counter/label:** `05 / The Solution`

**Headline:**
```
Building a Website
Worthy of Svalbard
```

**Intro:**
```
The brief was clear: build something that sells the feeling of Svalbard, not
a list of products. The new site needed to be immersive, lead-generating, and
scalable — a platform that grows with the business.
```

---

#### DESIGN PHILOSOPHY BLOCK
*(Playfair Display italic for opening line; DM Sans for body. Place before the feature grid.)*

**Opening line (Playfair italic, large):**
```
Svalbard cannot be added to a cart.
```

**Body:**
```
The experience Basecamp Explorer sells — armed guides, glacier access, remote
wilderness lodges — is not a product you browse and buy. It is a conversation.
A relationship. A decision that begins with awe and ends with a phone call.

That truth shaped every design decision.

The new site was built not to close a sale, but to earn one. Full-viewport
imagery, minimal UI chrome, and narrative-led layouts were chosen deliberately
— to immerse the visitor in the feeling of Svalbard before a single feature
or price point appears. The design gets out of the way and lets the destination
do the selling.

Every page leads somewhere intentional. The inquiry form is not buried — it
is the natural conclusion of a journey the site takes you on. The call-to-action
architecture is built around one conversion event: a qualified lead picking up
the phone.

This is not an e-commerce site. It is a digital expedition briefing.
```

---

#### WHAT WE BUILT — Feature grid
**Dark strip background:** `../assets/images/basecamp-explorer-hotel-9.jpg` — overlay `rgba(12,15,10,0.88)`

**8 features as cards:**
```
1. Video Hero Homepage
   Full-viewport atmospheric video intro with Svalbard footage and
   storytelling overlays — sells the destination, not the product.

2. Three Lodge Pages
   Dedicated immersive pages for Isfjord Radio, Nordenskiöld Lodge,
   and Basecamp Hotel — each with rich storytelling layouts.

3. Tours & Experiences
   Seasonal activity overview (winter/summer/autumn) with images,
   maps, and narrative-led copy tied to each of the three lodges.

4. Multi-Step Inquiry Form
   GDPR-compliant contact flow capturing inquiry type, number of
   guests, travel period, and the page or itinerary of origin.

5. Agent Portal
   Secure login for authorised travel agents. Access to image bank
   (folders: Activities, Accommodation, Svalbard) and itinerary PDFs.

6. AI Chatbot (Skilly)
   Integrated conversational AI for site-wide search and high-intent
   lead capture, with customisable tone and personality settings.

7. Bilingual Support
   Full English and Norwegian versions via TranslatePress, with a
   scalable foundation for additional languages in future.

8. Fully Responsive
   Optimised across all devices from 320px mobile to 1920px desktop,
   meeting Level A accessibility standards (ADA/WCAG).
```

**Tech stack pills:**
```
WordPress CMS · PHP · ACF Pro · HTML5 · CSS3 · JavaScript · Formidable Forms · TranslatePress · Complianz GDPR · Skilly AI
```

**Website screenshots — replace ALL CSS mockup placeholders with these real images:**
```
Desktop: <img src="../assets/basecamp-website-screenshots/basecamp website desktop screenshot.png" alt="Basecamp Explorer — Desktop">
Mobile:  <img src="../assets/basecamp-website-screenshots/basecamp website mobile screenshot.jpeg" alt="Basecamp Explorer — Mobile">
```
Caption under each: `Basecamp Explorer · Desktop` and `Basecamp Explorer · Mobile`

---

### SECTION 07 — SEO & GEO STRATEGY

**Section counter/label:** `06 / SEO & GEO Strategy`

**Background:** `../assets/images/230304 base camp-11.jpg` — overlay `rgba(12,15,10,0.80)`

**Headline:**
```
From Invisible to Discoverable — Globally
```

**Intro:**
```
The website rebuild alone wasn't enough. Basecamp Explorer needed a digital
strategy that would take them from a 5% traffic share to a genuine international
presence. Our SEO and GEO work addressed every layer of the problem.
```

**Six Before → After metric pairs — EXACT numbers:**
```
Authority Score         31   →  50+
Mobile Performance      34   →  90+
Organic Keywords        332  →  1,000+
International Traffic   1%   →  20%+
Missing Meta Descs      242  →  0
Referring Domains       18   →  100+
```

**GEO Callout Box — ice border accent (`var(--ice)`, 4px left border, ice-dim background):**
```
Eyebrow: Beyond Google

Title: Generative Engine Optimisation (GEO)

Body: We also optimised Basecamp Explorer's brand presence for AI-driven
search platforms — ChatGPT, Perplexity, and Google's AI Overviews. As
high-value travellers increasingly use AI assistants to research and plan
premium trips, being accurately represented in those answers is no longer
optional. Our GEO work includes structured data implementation (JSON-LD),
entity building, knowledge panel optimisation, and AI-friendly content
formatting across FAQs, guides, and structured summaries.
```

**NOTE: There is NO pricing strip in this section. Do not add one.**

---

### SECTION 08 — RESULTS

**Section counter/label:** `07 / The Outcome`

**Headline:**
```
The Journey North
Has Begun
```

**Status badge:** `● In Progress` — pulsing blue dot, CSS animation only

**Body paragraph:**
```
The Basecamp Explorer website is currently in active development, with the SEO
and GEO strategy being implemented in parallel. The foundation has been laid —
technically sound, visually immersive, and built for international reach.
```

**Six result cards:**
```
31  →  50+     Authority Score
34  →  90+     Mobile Performance
332 →  1,000+  Organic Keywords
1%  →  20%+    International Traffic
242 →  0       Missing Meta Descriptions
18  →  100+    Referring Domains
```

**Closing statement (Playfair Display italic, large, constrained width):**
```
For a brand that has spent 25 years mastering the most extreme environment
on earth, the digital landscape is just another frontier.
We are here to help them conquer it.
```

---

### SECTION 09 — CLOSE

**Kilowott logo:** `<img src="../assets/kilowott-logo/kilowott-logo.png" alt="Kilowott">` — do NOT use text

**Tagline:**
```
We build digital experiences that match the ambition of the brands we work with.
```

**Link:** `kilowott.com ↗`

**Footer:** `© Kilowott 2025 · Basecamp Explorer Case Study`

---

## LAYOUT SPECIFICATIONS

### Hero
- 100vh minimum height, existing background image unchanged
- Dark gradient overlay: `linear-gradient(to bottom, rgba(12,15,10,0.4) 0%, rgba(12,15,10,0.2) 40%, rgba(12,15,10,0.85) 100%)`
- Text anchored bottom-left
- Kilowott logo image top-left (not text), "CASE STUDY" label top-right
- Headline: Playfair Display, clamp(44px, 7vw, 96px), weight 400
- Thin amber 1px horizontal rule between eyebrow and headline

### Overview (S01)
- Two-column grid: 60% text left, 40% metadata card right
- Metadata card: solid border `var(--border-light)`
- Section counter top-left, amber number

### Client (S02)
- Basecamp Explorer logo above headline, max-height 60px
- Two-column: left text + property cards, right image
- Stats row full width below, 4 equal columns

### Challenge (S03)
- Background image with overlay — all text must remain legible
- 2×2 grid of problem cards
- Cards: semi-transparent dark background `rgba(12,15,10,0.6)`, amber left border 3px

### SEO Audit (S04)
- Dark section, diagnostic label only (no section counter)
- 4×2 grid of metric cards
- Metric number: DM Mono 48–56px, bad metrics in `var(--red)`
- 1px grid lines between cards

### Pitch (S05)
- Background image with overlay
- NO quote block — removed
- Headline left-aligned
- Proof cards: 4-column grid, semi-transparent dark card style

### Solution (S06)
- Light section: headline + intro + design philosophy block
- Design philosophy: amber left accent line, Playfair italic opening line
- Dark strip: feature grid 4×2, background image with overlay
- Tech stack: horizontal flex-wrap pill tags
- Screenshots: side by side, browser-style frame, real images (no CSS mockups)

### SEO & GEO (S07)
- Background image with overlay
- Before/After: 3×2 grid, before in muted red, arrow in amber, after in amber larger
- GEO callout: ice left border 4px, ice-dim background
- NO pricing strip

### Results (S08)
- Light section
- Status badge inline with headline
- 3×2 result cards
- Closing italic quote: Playfair italic, large

### Close (S09)
- Full dark, vertically centred
- Kilowott logo image, rule, tagline, link, copyright

---

## WHAT SUCCESS LOOKS LIKE

When done, opening `index.html` should show:
1. Cinematic dark hero — Kilowott logo image top-left (not text), headline bottom-left
2. 10 clearly distinct sections alternating dark/cream
3. Every SEO audit stat (31, 34/100, -2.61%, 5%, 242, 99%, 4.6%, 18) displayed correctly
4. NO client quote anywhere on the page
5. NO phase timeline (Discovery → UAT) anywhere on the page
6. NO pricing strip anywhere on the page
7. Real website screenshots in S06 Solution (not CSS mockup frames)
8. Design philosophy block in S06 with Playfair italic opening line
9. Basecamp Explorer logo in S02 Client section
10. Background images on S03, S05, S06 dark strip, S07 — with overlays maintaining text legibility
11. Status badge pulsing blue
12. Count-up animations firing on scroll
13. Zero mention of Klingit anywhere