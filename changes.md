# Basecamp Explorer Case Study — Change Spec

**Source file:** `index.html` (959 lines, unchanged from the version shared with the planning session).

**Context for the executing agent (Claude Code in terminal):**

This is a Kilowott case study for Basecamp Explorer, an Arctic adventure operator in Svalbard. The case study currently overstates the scope of the engagement (treats SEO/GEO strategy as active deliverables when it's actually Phase 2) and contains a factual error (lists 3 properties when the client has 4). These prompts correct both problems and tighten the narrative.

**DO NOT improve or embellish copy beyond what's specified.** The copy has been deliberated. Follow the exact text in each prompt. If you encounter ambiguity, stop and ask — don't guess.

**How to use this file:**
Execute the prompts below in order. After each chunk, verify the checklist items before moving on. Do not batch multiple chunks into one run — the sequential order matters because line numbers shift after deletions.

---

## CHUNK 1 — Hero tags (S00)

**Goal:** Remove SEO/GEO from the hero tag strip. Replace with website-focused tags.

**Prompt to paste:**

```
In index.html, find the hero-tags div in the hero section (around line 42). The current three tags are:
- Website Redesign & Development
- SEO Strategy
- GEO Optimisation

Replace the SEO Strategy and GEO Optimisation tags with:
- Brand-Led UX
- WordPress Custom Build

Keep the existing structure (hero-tag spans with hero-sep separators). The final tag strip should read:
Website Redesign & Development · Brand-Led UX · WordPress Custom Build

Do not touch any other part of the hero section.
```

**Verification:**
- [ ] Hero still shows three tags
- [ ] "SEO Strategy" and "GEO Optimisation" strings are gone from the hero
- [ ] Separator dots between tags still render correctly

---

## CHUNK 2 — Overview section (S01)

**Goal:** Trim the Overview section from 2 paragraphs to 1 (merged), and remove SEO/GEO from the metadata card.

**Prompt to paste:**

```
In index.html, find the overview section (section with id="overview", around lines 65-119). Two changes here:

CHANGE 1 — Merge the two overview paragraphs into one:

Currently there are two <p class="reveal"> blocks inside overview-text. Replace BOTH paragraphs with this single merged paragraph:

<p class="reveal" data-delay="1">
  Basecamp Explorer is Norway's leading Arctic adventure company — operating
  exclusive expeditions and premium accommodation in Svalbard, one of the world's
  most extreme and pristine environments. For over 25 years, they have been the
  definitive guide for high-value travellers seeking meaningful, off-the-beaten-path
  experiences in the High Arctic. When they came to Kilowott, their existing platform
  was technically failing, visually underwhelming, and almost entirely invisible to
  the international audience they needed most.
</p>

Remove the second paragraph entirely.

CHANGE 2 — Update the Services metadata row:

In the meta-card dl, find the Services row. Currently it reads:
<dd>Website Redesign & Development · SEO & GEO Strategy</dd>

Change it to:
<dd>Website Redesign & Development</dd>

Do not touch Client, Location, Platform, or Year rows.
```

**Verification:**
- [ ] Overview section now has one paragraph instead of two
- [ ] Merged paragraph reads naturally (no duplicate words, no broken flow)
- [ ] Services metadata row says only "Website Redesign & Development"
- [ ] No stray SEO or GEO references in the Overview section

---

## CHUNK 3 — Client section (S02): property count + new stat + 4th property card

**Goal:** Reflect that Basecamp Explorer has 4 properties (not 3), swap an unverifiable stat for a verifiable award.

**Prompt to paste:**

```
In index.html, find the client section (id="client", around lines 133-251). Three changes:

CHANGE 1 — Update the client paragraph from "three" to "four":

Find the first client paragraph that starts with "Basecamp Explorer operates at the edge of the world". In that paragraph, change "three iconic Svalbard properties" to "four iconic Svalbard properties". Do not change anything else in the paragraph.

CHANGE 2 — Update the stat tiles:

In the stats-row div, there are four stat-tile divs. 

(a) In the second stat-tile ("Iconic lodges & properties"): change data-count from "3" to "4", and change the visible text from "3" to "4". The label stays "Iconic lodges & properties".

(b) REPLACE the third stat-tile entirely. Currently it reads:
<div class="stat-tile">
  <span class="stat-number">#1</span>
  <span class="stat-label">Operator in Svalbard</span>
</div>

Replace with:
<div class="stat-tile">
  <span class="stat-number" data-count="2" data-suffix="×">2×</span>
  <span class="stat-label">Grand Travel Award · 2023 & 2025</span>
</div>

Do not touch the first tile (25+ Years) or fourth tile (100% Guided expeditions).

CHANGE 3 — Add a 4th property card:

In the client-properties div, there are currently three property-img-card divs (Isfjord Radio, Nordenskiöld, Basecamp Hotel). Add a FOURTH card immediately after the Basecamp Hotel card, using this exact markup:

<div class="property-img-card reveal" data-delay="4"
     style="background-image: url('assets/offerings/trappers-station.jpg');">
  <span class="card-title-vertical">Trapper's Station · Bolterdalen</span>
  <div class="card-description">
    <p>Home to 80 huskies — the starting point for every dog-sled adventure.</p>
  </div>
</div>

Note: the image file `assets/offerings/trappers-station.jpg` does not exist yet — the user will add it. The broken image reference is expected. Do not create a placeholder or use a different image.

IMPORTANT CSS FLAG: The current CSS likely lays out 3 property cards in a vertical column. A 4th card may break the layout. After making the HTML change, open styles.css, search for `client-properties` and `property-img-card`, and report what you find — do NOT modify the CSS yet. Show me what's there first.
```

**Verification:**
- [ ] Client paragraph says "four iconic Svalbard properties"
- [ ] Stat grid shows: 25+, 4, 2×, 100%
- [ ] 2× stat has label "Grand Travel Award · 2023 & 2025"
- [ ] Fourth property card (Trapper's Station) renders in the grid (image will be broken — that's fine)
- [ ] CSS status reported — no changes made yet to CSS

---

## CHUNK 4 — Audit section sub-label (S04) + Pitch section cards (S05)

**Goal:** Reframe the SEO audit so it's clearly pitch evidence, not ongoing work. Replace the weak "Competitive Pricing" pitch card with "Speed to Proof".

**Prompt to paste:**

```
In index.html, two changes in two different sections:

CHANGE 1 — Audit sub-label (around line 336):

Find the audit-eyebrow span. Currently:
<span class="audit-eyebrow">Digital Audit · Before Kilowott</span>

Change to:
<span class="audit-eyebrow">Digital Audit · The Evidence Behind the Proposal</span>

CHANGE 2 — Pitch Card 1 body (around lines 458-463):

Find the first curtain-card in the pitch section (id="pitch"). It's the "Full SEO Audit" card. Its body currently reads:

"Delivered before engagement. A comprehensive analysis identifying every technical, content, and competitive gap in their existing digital presence."

Replace the body paragraph with:

"Delivered before a contract was signed. A full audit of technical health, content gaps, and competitive positioning — the diagnostic that shaped the redesign brief."

Keep the h3 "Full SEO Audit", the curtain-num "01", and the image layer untouched. Only the <p> text changes.

CHANGE 3 — Pitch Card 4 (around lines 493-504):

Find the fourth curtain-card. It's the "Competitive Pricing" card. Replace the h3 and p content.

Currently:
<h3>Competitive Pricing</h3>
<p>We came in significantly below market rate — not by cutting corners,
but through operational efficiency and genuine commitment to the partnership.</p>

Replace with:
<h3>Speed to Proof</h3>
<p>Audit, prototypes, and proposal — all delivered within three weeks of first
contact. No decks. No delay. Just work.</p>

Keep the curtain-num "04" and the image layer untouched. Only h3 and p change.
```

**Verification:**
- [ ] Audit section sub-label now reads "Digital Audit · The Evidence Behind the Proposal"
- [ ] Pitch Card 1 body mentions "the diagnostic that shaped the redesign brief"
- [ ] Pitch Card 4 now says "Speed to Proof" with new body about 3 weeks
- [ ] No mention of "competitive pricing" or "below market rate" anywhere in the file — grep for them to confirm
- [ ] Run: `grep -ni "pricing\|below market\|competitive rate" index.html` — should return nothing

---

## CHUNK 5 — DELETE S07 SEO & GEO Strategy section

**Goal:** Remove the entire SEO & GEO Strategy section and its trailing marquee divider, since SEO execution is Phase 2 not current scope.

**This is the biggest edit. Back up your file before running.**

**Prompt to paste:**

```
In index.html, delete an entire section and its following marquee divider.

TARGET FOR DELETION:

Start: the opening comment banner that reads:
<!-- ══════════════════════════════════════════════════════════
     S07 — SEO & GEO STRATEGY · Dark + bg image
══════════════════════════════════════════════════════════ -->

End: the closing </div> of the Marquee 8 → right divider that immediately follows the SEO section's closing </section>. The marquee-divider block looks like:

<!-- Marquee 8 → right -->
<div class="marquee-divider" data-direction="right">
  <div class="marquee-track">
    ...
  </div>
</div>

Delete EVERYTHING from the S07 comment banner through the closing </div> of that marquee, inclusive. This removes:
1. The section comment banner
2. The entire <section class="s-seo ..."> block and all its contents (headline, 6 ba-cards, geo-callout)
3. The trailing marquee-divider block that came after the section

What should remain unchanged:
- The marquee-divider BEFORE the deletion (the "Marquee 7 → left" one, which separates Solution from the now-deleted SEO section) — this stays as the divider between Solution and Results.
- The entire Results section (<section class="s-results" ...>) and everything after it.

DO NOT YET update section counters or data-section attributes on the Results and Close sections. That happens in Chunk 6.

After deletion, verify:
- `grep -n "s-seo\|SEO & GEO STRATEGY\|From Invisible to Discoverable\|ba-grid\|geo-callout" index.html` returns NO results
- `grep -n "Marquee 8" index.html` returns NO results
- `grep -n "s-results" index.html` returns exactly one match
- The file still has matching open/close tags — run a quick sanity check
- The file line count dropped by approximately 105 lines
```

**Verification:**
- [ ] Run the four grep commands above — confirm expected output
- [ ] Open the case study in browser — it should scroll directly from Solution section (with Before/After slider) to Results section
- [ ] No visual gap or blank section where S07 used to be
- [ ] Marquee divider still appears between Solution and Results (there should be exactly one)
- [ ] Section counters are intentionally still wrong (Results still says 08, Close still says 09) — that's Chunk 6

---

## CHUNK 6 — Results section rebuild + renumber (S08→S07, S09→S08)

**Goal:** Renumber the now-reordered sections, update the Results intro paragraph, replace all 6 SEO-based result cards with website deliverables.

**Prompt to paste:**

```
In index.html, three changes in the Results and Close sections:

CHANGE 1 — Renumber data-section and counter-num:

(a) In the Results section opening tag, change data-section="08" to data-section="07".
(b) In the Results section's section-counter div, change the counter-num from "08" to "07".
(c) In the Close section opening tag, change data-section="09" to data-section="08".

(The Close section does not have a visible counter-num span, only the data-section attribute changes.)

CHANGE 2 — Rewrite the Results intro paragraph:

Find the section-intro paragraph in the Results section. Currently:

"The Basecamp Explorer website is currently in active development, with the SEO and GEO strategy being implemented in parallel. The foundation has been laid — technically sound, visually immersive, and built for international reach."

Replace with:

"The Basecamp Explorer website is currently in active development. The foundation has been laid — technically sound, visually immersive, and built to scale across markets as the brand's international presence grows."

Keep the class, data-delay, and tag structure identical.

CHANGE 3 — Replace the entire results-grid contents:

Find <div class="results-grid"> in the Results section. It currently contains 6 result-card divs (Authority Score, Mobile Performance, Organic Keywords, International Traffic, Missing Meta Descriptions, Referring Domains).

REPLACE all 6 cards with the following 6 cards (keep the wrapping <div class="results-grid"> and its closing </div>):

<div class="result-card reveal" data-delay="1">
  <div class="result-metric">
    <div class="result-from">Shipped</div>
    <div class="result-arrow">·</div>
    <div class="result-to">4</div>
  </div>
  <div class="result-label">Lodge & Property Pages</div>
  <div class="result-bar"><div class="result-bar-fill" data-progress="100"></div></div>
</div>
<div class="result-card reveal" data-delay="2">
  <div class="result-metric">
    <div class="result-from">Live</div>
    <div class="result-arrow">·</div>
    <div class="result-to">1</div>
  </div>
  <div class="result-label">Secure Agent Portal</div>
  <div class="result-bar"><div class="result-bar-fill" data-progress="100"></div></div>
</div>
<div class="result-card reveal" data-delay="3">
  <div class="result-metric">
    <div class="result-from">Shipped</div>
    <div class="result-arrow">·</div>
    <div class="result-to">2</div>
  </div>
  <div class="result-label">Languages (EN · NO)</div>
  <div class="result-bar"><div class="result-bar-fill" data-progress="100"></div></div>
</div>
<div class="result-card reveal" data-delay="1">
  <div class="result-metric">
    <div class="result-from">Live</div>
    <div class="result-arrow">·</div>
    <div class="result-to">AI</div>
  </div>
  <div class="result-label">Skilly Chatbot · Lead Capture</div>
  <div class="result-bar"><div class="result-bar-fill" data-progress="100"></div></div>
</div>
<div class="result-card reveal" data-delay="2">
  <div class="result-metric">
    <div class="result-from">Deployed</div>
    <div class="result-arrow">·</div>
    <div class="result-to">GDPR</div>
  </div>
  <div class="result-label">Multi-Step Inquiry Form</div>
  <div class="result-bar"><div class="result-bar-fill" data-progress="100"></div></div>
</div>
<div class="result-card reveal" data-delay="3">
  <div class="result-metric">
    <div class="result-from">Target</div>
    <div class="result-arrow">→</div>
    <div class="result-to">90+</div>
  </div>
  <div class="result-label">Mobile Performance Score</div>
  <div class="result-bar"><div class="result-bar-fill" data-progress="38"></div></div>
</div>

LEAVE the closing-quote div UNTOUCHED. It comes right after the results-grid and stays exactly as it is.

IMPORTANT CSS/JS FLAG: The result-cards now mix status words ("Shipped", "Live", "Target") with numbers in result-from. The existing CSS may have been sized for 2-3 digit numbers only. After the HTML change, load the page and look at the Results cards — if "Shipped" or "Deployed" overflow or look broken, report back before changing CSS. Do NOT auto-fix the CSS.
```

**Verification:**
- [ ] Results section data-section="07"
- [ ] Results visible counter shows "07"
- [ ] Close section data-section="08"
- [ ] Results intro no longer mentions SEO, GEO, or international reach
- [ ] 6 new result cards render — Lodge Pages, Agent Portal, Languages, Skilly, Inquiry Form, Mobile Performance
- [ ] Closing quote still appears below the grid, unchanged
- [ ] Run: `grep -ni "Authority Score\|Organic Keywords\|Referring Domains\|Missing Meta" index.html` — returns ONLY the audit section matches in S04, NOT the results section

---

## CHUNK 7 — Final cleanup, CSS/JS verification, full diff review

**Goal:** Verify nothing broke, check sibling files for needed adjustments.

**Prompt to paste:**

```
Final cleanup and verification pass:

STEP 1 — Whitespace cleanup:

In index.html, check for any double-blank-line artifacts from the Chunk 5 deletion. Specifically, look around where the S07 SEO section used to be (now between the Solution-to-Results marquee and the Results section). Collapse any stray double blank lines to single blank lines. Do not touch any other whitespace.

STEP 2 — Section counter audit:

Run: `grep -n "data-section=" index.html`

Expected output (in order):
- Hero: data-section="00"
- Overview: data-section="01"
- Client: data-section="02"
- Challenge: data-section="03"
- Audit: data-section="04"
- Pitch: data-section="05"
- Solution: data-section="06"
- Results: data-section="07"
- Close: data-section="08"

Nine matches total. If the output doesn't match, stop and report the discrepancy.

Then run: `grep -n "counter-num" index.html`

Verify each visible counter-num value matches its section's data-section value. The Hero does not have a visible counter (that's expected). The Close may or may not have one — either is fine.

STEP 3 — SEO/GEO residue check:

Run these greps and confirm each returns ZERO matches:
- `grep -ni "seo strategy\|geo optimisation\|geo strategy" index.html`
- `grep -ni "ba-grid\|ba-card\|geo-callout\|s-seo" index.html`
- `grep -ni "below market\|competitive pricing" index.html`

If any match, report which one and where.

STEP 4 — CSS review (read-only, report findings):

Open styles.css and find the following selectors. Report what you see for each — do NOT modify yet:

(a) `.client-properties` and `.property-img-card` — specifically: what's the current layout (flexbox? grid?) and how does it handle 4 cards vs 3?

(b) `.results-grid` and `.result-card` — specifically: grid-template-columns, and how result-from text is sized (font-size, width constraints).

(c) `.stat-tile` and `.stat-number` — does the styling handle a `2×` value and a `4` value cleanly alongside `25+` and `100%`?

STEP 5 — JS review (read-only, report findings):

Open script.js and find:

(a) Any code that references section count, total sections, or iterates over `[data-section]`. We removed one section — does anything break?

(b) The count-up animation for stat-number. It reads data-count and data-suffix attributes. The new `2×` stat uses data-count="2" and data-suffix="×". Will this work?

(c) The scroll progress indicator. If it calculates progress based on total section count, that's fine — but confirm.

STEP 6 — Full diff summary:

Generate a short summary of every change made across all 6 chunks — one line per change. This is for the user to review.

DO NOT make any changes in Step 4 or Step 5. Only report findings. The user will decide what CSS/JS changes to make based on the report.
```

**Verification:**
- [ ] All grep commands in Step 2 and Step 3 return expected results
- [ ] CSS findings reported (three selector groups)
- [ ] JS findings reported (three concerns)
- [ ] Summary of all changes listed
- [ ] Open the rendered page in browser — scroll through every section, check:
  - [ ] Hero loads, tags show: Website Redesign & Development · Brand-Led UX · WordPress Custom Build
  - [ ] Overview is one paragraph + metadata card
  - [ ] Client section shows 4 properties and the Grand Travel Award tile
  - [ ] Trapper's Station card is broken image (expected until you add the file)
  - [ ] Challenge section unchanged (4 problem cards)
  - [ ] Audit section sub-label reads "The Evidence Behind the Proposal"
  - [ ] Pitch Card 4 is "Speed to Proof", NOT "Competitive Pricing"
  - [ ] Solution section unchanged (including Before/After slider — still broken, still there)
  - [ ] No SEO/GEO Strategy section between Solution and Results
  - [ ] Results shows 6 deliverable cards (Lodge Pages, Agent Portal, Languages, Skilly, Form, Mobile Performance)
  - [ ] Section counters run 00 through 08 (skipping nothing)

---

## POST-EXECUTION NOTES

### Known issues deliberately left in place

1. **Before/After slider in Solution section (S06)** — Both image paths point to near-identical filenames. The "before" image is almost certainly the same as the "after". User chose to leave this as-is for now. Flag to revisit.

2. **Trapper's Station image** — The file `assets/offerings/trappers-station.jpg` doesn't exist yet. User will add it from the basecampexplorer.com site. Image will show as broken until added.

3. **3 weeks timeframe** — User confirmed "3 weeks" is accurate for the audit+prototype+proposal delivery. If this was wrong, Chunk 4's Speed to Proof card needs revising.

### Things the spec explicitly REJECTED from the original feedback

- **Moving "How We Won" to the front** — narrative loses its dramatic build. Rejected.
- **New hero headline "Basecamp Explorer: Digital Transformation..."** — objectively worse than "Where the Arctic Meets the World". Rejected.
- **"Timeline: 3 Months" stat in hero** — project is still in progress, can't claim a completed timeline. Rejected.
- **Adding Trapper's Station as a 4th LODGE** — it's a property but not a lodge. Kept the distinction: "lodges & properties" covers both.
