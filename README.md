# Basecamp Explorer — Case Study
**A Kilowott Production**

Single-scroll landing page case study for the Basecamp Explorer website redesign and SEO/GEO engagement.

---

## Getting Started

No build tools. Pure HTML, CSS, vanilla JS.

```bash
# Open directly
open src/index.html

# Or serve locally
python3 -m http.server 3000
# Visit: http://localhost:3000/src/
```

---

## Structure

```
basecamp-case-study/
├── src/
│   ├── index.html          ← full page
│   ├── styles.css          ← all styles + animations
│   └── script.js           ← scroll reveals, counters
├── content/
│   ├── case-study-outline.md   ← design system + section map
│   └── case-study-copy.md      ← all written copy
├── assets/
│   ├── images/             ← drop client images here
│   └── videos/             ← drop client video here
├── claude.md               ← Claude Code build instructions
└── README.md
```

---

## Adding Client Assets

When Basecamp Explorer provides assets, place them in `assets/images/` with these names:

| File | Section used |
|------|-------------|
| `hero-svalbard.jpg` | S01 Hero background |
| `isfjord-radio.jpg` | S03 Client profile |
| `nordenskiold-lodge.jpg` | S03 / S07 |
| `basecamp-hotel.jpg` | S03 / S07 |
| `expedition-activity.jpg` | S03 |
| `logo-kilowott-white.svg` | Header, S10 close |
| `logo-kilowott-dark.svg` | Light sections |
| `logo-basecamp-explorer.png` | S02 metadata |
| `svalbard-hero.mp4` | S01 Hero video (optional) |

Then replace the `.img-placeholder` divs in `index.html` with `<img>` tags.

---

## Design Reference

Aesthetic: Kilowott Paul John Coffee Behance case study format.
Full-width editorial sections. Strong typography. Alternating dark/light. Cinematic feel.

**No Klingit branding. Kilowott only.**

---

## Working with Claude Code

```
"Read claude.md then build the case study in src/"
```
