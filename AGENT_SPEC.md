# ChongLab Homepage — Agent Development Specification

> **This file is the single source of truth for all development tasks.**
> Every agent session must read this file in full before making any changes.
> After completing a task, the agent must update the relevant section's status.

---

## 0. Project Overview

| Field | Value |
|---|---|
| Site name | Chong Lab — Intelligent Robotic Laboratory of JAIST |
| Live URL | https://chonglab-homepage.pages.dev/ |
| Repository | GitHub (sync to Cloudflare Pages via Git integration) |
| Deployment | Cloudflare Pages (static, no server-side runtime) |
| Stack | Static HTML + CSS + vanilla JS (no framework required unless scope grows) |
| Original JAIST site | https://www.jaist.ac.jp/robot/ (external, not managed here) |

### Purpose
A modern, tech-aesthetic portal that:
1. Presents the lab publicly with strong visual identity
2. Provides quick navigation to internal lab services (for members)
3. Delegates all restricted/detailed content (research detail, publications, members beyond Prof + TA) to the original JAIST site via external links

---

## 1. Repository & Deployment Setup

### 1.1 Repository Structure

```
chonglab-homepage/
├── AGENT_SPEC.md           ← this file (always keep at repo root)
├── .github/
│   └── workflows/
│       └── deploy.yml      ← optional CI checks before CF Pages build
├── public/                 ← all deployable static files
│   ├── index.html
│   ├── about/
│   │   └── index.html
│   ├── research/
│   │   └── index.html
│   ├── datasets/
│   │   └── index.html
│   ├── people/
│   │   └── index.html
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css
│   │   │   └── components.css
│   │   ├── js/
│   │   │   ├── nav.js
│   │   │   ├── hero.js       ← particle/canvas animation
│   │   │   └── services.js
│   │   ├── img/
│   │   │   ├── prof-chong.jpg
│   │   │   └── og-image.png
│   │   └── fonts/            ← self-hosted if any
│   ├── _headers              ← Cloudflare Pages HTTP headers
│   ├── _redirects            ← Cloudflare Pages redirects
│   └── robots.txt
└── data/
    └── people.json           ← Prof + TA data (source of truth)
```

### 1.2 Cloudflare Pages Configuration

- **Build command:** (none — pure static, no build step required)
- **Build output directory:** `public`
- **Root directory:** `/`
- **Branch:** `main` triggers production deploy; `dev` or feature branches trigger preview deploys
- **Node version:** not required unless a build step is added later

### 1.3 GitHub → Cloudflare Pages Integration

- Connect via Cloudflare Pages dashboard → "Connect to Git"
- Every push to `main` auto-deploys to production
- Every PR gets a unique preview URL (use for review before merging)
- **Never commit secrets or API keys** — use Cloudflare Pages environment variables if needed in future

---

## 2. Design System

### 2.1 Color Palette

```css
:root {
  /* Backgrounds */
  --bg-primary:   #0D1117;   /* page background — near-black */
  --bg-secondary: #161B22;   /* card / section background */
  --bg-tertiary:  #21262D;   /* hover states, subtle fills */

  /* Accent — science-tech cyan-green */
  --accent:       #00D4AA;   /* primary CTA, highlights */
  --accent-dim:   #00A884;   /* hover state of accent */
  --accent-glow:  rgba(0, 212, 170, 0.12); /* glow/aura fills */

  /* Text */
  --text-primary:   #E6EDF3; /* headings, primary content */
  --text-secondary: #8B949E; /* subtext, labels */
  --text-muted:     #484F58; /* placeholder, disabled */

  /* Borders */
  --border:       rgba(255,255,255,0.08);
  --border-hover: rgba(255,255,255,0.16);

  /* Semantic */
  --danger: #F85149;
  --warn:   #D29922;
  --ok:     #3FB950;
}
```

### 2.2 Typography

```css
/* Font stack — system fonts, no external dependency */
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
--font-mono: "SF Mono", "Fira Code", Consolas, monospace;

/* Scale */
--text-xs:   12px;
--text-sm:   13px;
--text-base: 15px;
--text-lg:   18px;
--text-xl:   24px;
--text-2xl:  32px;
--text-3xl:  48px;
--text-hero: clamp(36px, 6vw, 72px);

/* Weights: 400 (regular), 500 (medium), 600 (semibold) only */
```

### 2.3 Spacing & Grid

- Base unit: `8px`
- Section vertical padding: `80px` desktop / `48px` mobile
- Content max-width: `1100px`, centered
- Card gap: `16px`
- Grid: CSS Grid with `repeat(auto-fit, minmax(280px, 1fr))` for card layouts

### 2.4 Border & Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 20px;
--border-width: 0.5px;   /* all borders this thin */
```

### 2.5 Visual Effects (CSS only, no libraries)

- **Cards:** `border: 0.5px solid var(--border)` + `background: var(--bg-secondary)`
- **Card hover:** border shifts to `var(--border-hover)`, subtle `transform: translateY(-2px)`, transition 200ms
- **Accent glow:** `box-shadow: 0 0 24px var(--accent-glow)` on CTA buttons only
- **No heavy shadows, no gradients as decoration** — gradients only for hero background
- **Hero gradient:** radial from `var(--accent-glow)` at top-center, fading to `var(--bg-primary)`

### 2.6 Motion

```css
/* All transitions */
--transition: 150ms ease;
--transition-slow: 300ms ease;

/* Respect user preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## 3. Page-by-Page Specification

### 3.1 Global Layout

**Header / Nav (all pages)**
- Sticky, `position: sticky; top: 0; z-index: 100`
- Background: `var(--bg-primary)` with `backdrop-filter: blur(12px)` and slight border-bottom
- Left: "Chong Lab" wordmark (text, accent color dot before it)
- Right: nav links — Home · Research · People · Datasets
- Mobile: hamburger → slide-in drawer from right
- No dropdown menus

**Footer (all pages)**
```
Left column:
  Chong Lab
  Robotics Laboratory, JAIST
  1-1 Asahidai, Nomi, Ishikawa 923-1292, Japan
  robot@ml.jaist.ac.jp

Right column:
  Quick Links:
  [Original JAIST Site ↗]
  [Research ↗]
  [Datasets ↗]
  [GitHub ↗]   (lab's GitHub org, if applicable)

Bottom bar:
  © 2026 Chong Lab, JAIST. All Rights Reserved.
  (remove the typo from current footer)
```

---

### 3.2 Home Page (`/index.html`)

#### Section 1 — Hero

- Full-viewport height (`100svh`)
- Background: dark + subtle radial gradient glow at top center
- Canvas particle animation (see §5.1) behind text — represents sensor point cloud
- Content (centered, z-index above canvas):
  ```
  [small label]  JAIST · School of Information Science
  [h1]  Intelligent Robotic Laboratory
  [p]   Research in HRI, medical robotics, swarm systems, and autonomous manipulation.
        Directed by Prof. Nak Young Chong.
  [buttons]  [View Research →]   [Open Original Site ↗]
  ```
- Scroll-down chevron at bottom center, fades out on scroll

#### Section 2 — Research Areas (summary, redirect to /research or JAIST)

- 3-column card grid (collapses to 1 on mobile)
- Cards: Human-Robot Interaction / Robotic Autonomy / Distributed Systems
- Each card: icon (inline SVG, simple) + title + 2-line description + "Explore →" link
- "Explore →" links to `/research/` (internal) or JAIST page (external, `target="_blank" rel="noopener"`)

#### Section 3 — Lab Services (internal quick-access)

- Heading: "Lab Services" (visible to all, but some links are JAIST-auth-gated)
- 2-row grid of service tiles (icon + label + short desc):

| Tile | Icon | Target |
|---|---|---|
| Original JAIST Site | globe | https://www.jaist.ac.jp/robot/ |
| Research Projects | flask | https://www.jaist.ac.jp/robot/research/ |
| Restricted Access | lock | https://www.jaist.ac.jp/robot/ (with note: JAIST login required) |
| Datasets | database | `/datasets/` |
| GitHub | brand-github | lab GitHub URL (placeholder if unknown) |
| Contact | mail | mailto:robot@ml.jaist.ac.jp |

- Tiles that require JAIST login: add a small `🔒` badge and tooltip "Requires JAIST account"

#### Section 4 — Director Introduction (brief)

- Two-column layout: photo left, text right (reverses on mobile)
- Photo: `prof-chong.jpg` (to be placed in `assets/img/`)
- Text:
  ```
  Prof. Nak Young Chong, Ph.D.
  Professor, School of Information Science, JAIST

  Office I-61, 6F IS Building 1
  TEL +81-761-51-1248
  Email nakyoung@jaist.ac.jp

  [→ Full Profile on JAIST] (external link)
  ```

#### Section 5 — Professional Service (condensed)

- Simple timeline list, same content as current site
- "View full academic record →" links to original JAIST page

---

### 3.3 Research Page (`/research/index.html`)

- Heading + subtitle
- 4 featured project cards (same as current, with external "Open original page →" links)
- Below: 3 theme summary blocks (HRI / Robotic Autonomy / Distributed Systems) with bullet lists
- CTA at bottom: "See all research projects on the JAIST site →"

---

### 3.4 People Page (`/people/index.html`)

- **Scope:** Director + Teaching Assistants (TAs) only. No student detail pages.
- Director card: large (2-column), photo + full info (same as home section 4 but more detailed)
- TA cards: smaller grid cards — name, role, email (if public), brief 1-line note
- Data source: `data/people.json` — agent must read this file and render accordingly
- "For full member list, visit the JAIST lab page →" external link

**`data/people.json` schema:**
```json
{
  "director": {
    "name": "Nak Young Chong",
    "title": "Professor, School of Information Science, JAIST",
    "photo": "assets/img/prof-chong.jpg",
    "office": "Office I-61, 6F IS Building 1",
    "tel": "+81-761-51-1248",
    "fax": "+81-761-51-1149",
    "email": "nakyoung@jaist.ac.jp",
    "jaist_profile_url": "https://www.jaist.ac.jp/robot/"
  },
  "assistants": [
    {
      "name": "TA Name",
      "role": "Teaching Assistant",
      "email": "",
      "note": ""
    }
  ]
}
```

---

### 3.5 Datasets Page (`/datasets/index.html`)

- Keep current content
- Each dataset entry: title + short description + "Download / View on JAIST →" external link
- No data is hosted here; all links redirect to JAIST

---

## 4. Security & HTTP Headers

All headers are configured in `public/_headers` (Cloudflare Pages static header file).

### 4.1 `_headers` file

```
/*
  # Prevent clickjacking
  X-Frame-Options: DENY
  # Prevent MIME sniffing
  X-Content-Type-Options: nosniff
  # XSS protection (legacy browsers)
  X-XSS-Protection: 1; mode=block
  # Referrer policy — don't leak full URL to external sites
  Referrer-Policy: strict-origin-when-cross-origin
  # Permissions policy — disable unused browser APIs
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  # Content Security Policy
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
  # HSTS — force HTTPS (Cloudflare handles TLS, but belt-and-suspenders)
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

> **Note on CSP:** `'unsafe-inline'` is allowed for scripts and styles because this is a static site with inline JS/CSS and no user-generated content. If a build step is added later (e.g. Astro), migrate to nonce-based CSP. The canvas animation in hero.js is self-hosted so `'self'` covers it.

### 4.2 `_redirects` file

```
# Redirect old patterns if needed
/robot  https://www.jaist.ac.jp/robot/  301

# Catch-all 404
/*  /index.html  200
```

### 4.3 External Link Policy

Every external link (`target="_blank"`) **must** have:
```html
<a href="https://..." target="_blank" rel="noopener noreferrer">...</a>
```
No exceptions. Agent must check all external links on every page edit.

### 4.4 No Forms / No User Input

- This site has no contact forms, no search inputs, no authentication
- If a form is ever added: validate server-side (via Cloudflare Worker), never client-only
- Currently: contact is via mailto link only

### 4.5 robots.txt

```
User-agent: *
Allow: /

Sitemap: https://chonglab-homepage.pages.dev/sitemap.xml
```

### 4.6 `og-image.png`

- Size: 1200×630px
- Content: lab name + "JAIST Robotics" on dark background with accent color
- Place at `assets/img/og-image.png`

---

## 5. JavaScript Modules

### 5.1 Hero Particle Canvas (`assets/js/hero.js`)

**Purpose:** Animated particle field suggesting sensor/point-cloud data.

**Requirements:**
- Vanilla JS, no libraries
- `<canvas>` element behind hero text, `position: absolute; inset: 0; z-index: 0`
- Particles: small dots (~1.5px radius), color `var(--accent)` at low opacity (0.15–0.4)
- Behavior: slow drift with random velocity, wrap at canvas edges
- Mouse proximity: particles near cursor gently repel (optional — implement only if performant)
- Particle count: ~80 on desktop, ~40 on mobile (detect via `window.innerWidth < 768`)
- On `prefers-reduced-motion: reduce`: skip animation, show static dots
- Resize: re-init canvas on `window.resize` (debounced 200ms)

**Implementation skeleton:**
```js
// hero.js
const canvas = document.getElementById('hero-canvas');
if (!canvas) return;
const ctx = canvas.getContext('2d');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.innerWidth < 768;
const COUNT = isMobile ? 40 : 80;

let particles = [];
let animFrameId;

function init() { /* size canvas, create particles */ }
function tick() { /* update + draw, requestAnimationFrame */ }
function draw(p) { /* ctx.arc, fill with accent color at opacity */ }

init();
if (!prefersReducedMotion) tick();
```

### 5.2 Navigation (`assets/js/nav.js`)

- Sticky header active class on scroll (`scrollY > 40`)
- Mobile hamburger toggle: adds/removes `nav-open` class on `<body>`
- Close drawer on outside click or Escape key
- Highlight current page link with `aria-current="page"`

### 5.3 Service Tiles (`assets/js/services.js`)

- Tooltip on "locked" tiles: show brief tooltip on hover/focus ("Requires JAIST account")
- No other interactivity needed

---

## 6. Accessibility Requirements

- All images: meaningful `alt` text (or `alt=""` for decorative)
- Color contrast: text on `--bg-primary` must meet WCAG AA (4.5:1 for body text)
  - `--text-primary #E6EDF3` on `#0D1117` ✓ passes
  - `--text-secondary #8B949E` on `#0D1117` — borderline, use only for non-critical labels
- Keyboard navigation: all interactive elements reachable via Tab, visible focus ring
  ```css
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  ```
- Skip-to-content link: `<a class="skip-link" href="#main">Skip to content</a>` at top of each page
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` used correctly
- `<html lang="en">` on all pages

---

## 7. Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Total page weight (home) | < 500 KB (excl. prof photo) |
| JS bundle | < 20 KB total |
| Images | WebP format, `loading="lazy"` on below-fold images |
| No render-blocking resources | CSS in `<head>`, JS deferred or at end of `<body>` |

### Image Guidelines

- Prof photo: resize to max 400×400px, export as WebP
- OG image: PNG (required by spec), 1200×630
- All `<img>` tags: `width` + `height` attributes set to prevent layout shift

---

## 8. Content Rules

### What lives on this site
- Lab name, director info, brief research area summaries
- TA names and roles
- Lab service quick-links
- Contact information

### What redirects to JAIST
| Content | Redirect Target |
|---|---|
| Research project detail | `https://www.jaist.ac.jp/robot/research/[project].php` |
| Restricted member area | `https://www.jaist.ac.jp/robot/` |
| Publications / papers | `https://www.jaist.ac.jp/robot/` |
| Full member list | `https://www.jaist.ac.jp/robot/` |
| Dataset files | `https://www.jaist.ac.jp/robot/` |

### Tone & Language
- Primary language: **English**
- Keep descriptions concise — this is a portal, not a journal
- No placeholder Lorem Ipsum text ever goes to production
- Dates: use ISO-adjacent format (e.g. "2015–2018" not "2015 to 2018")

---

## 9. Agent Task Protocol

When an agent receives a task related to this project, it must:

1. **Read** this file (`AGENT_SPEC.md`) in full before writing any code
2. **Check** the current state of the affected files before editing
3. **Follow** the design system (§2) for all visual work — do not introduce new colors, fonts, or shadow styles
4. **Verify** all external links include `rel="noopener noreferrer"` and `target="_blank"`
5. **Check** `_headers` is present and complete after any change to `public/`
6. **Test mentally:** after edits, trace through: does this page work with JS disabled? (content must still be readable)
7. **Commit message format:** `[scope]: short description` — e.g. `[hero]: add particle canvas animation`, `[nav]: fix mobile drawer close on Escape`
8. **Never** commit to `main` directly — use a feature branch, then merge

### Sub-agent reliability note

- Avoid launching exploratory sub-agents for work that can be resolved by reading the current files directly.
- If a sub-agent returns empty output or stalls, stop reissuing the same request and switch to direct file reads or a different agent with a narrower prompt.
- When a sub-agent is only needed for planning or review, keep the prompt short, atomic, and file-specific so it can return a concrete answer quickly.
- If a task can be completed locally without delegation, prefer direct edits over background exploration to reduce dead runs.

### Common task types

| Task | Files to touch |
|---|---|
| Update Prof info | `data/people.json`, `public/people/index.html`, `public/index.html` |
| Add a TA | `data/people.json`, `public/people/index.html` |
| Add service tile | `public/index.html` (§ Lab Services), `assets/js/services.js` |
| Change accent color | `assets/css/main.css` (`:root` block only) |
| Update research card | `public/research/index.html`, `public/index.html` (summary cards) |
| Security header change | `public/_headers` only |
| Add redirect | `public/_redirects` only |

---

## 10. Current Status & Task Log

> Agent: update this table after completing each task.

| # | Task | Status | Branch | Notes |
|---|---|---|---|---|
| 1 | Fix footer typo ("ALLL") | ✅ done | — | "ALLL Rights Reserved" → "All Rights Reserved" |
| 2 | Set up `_headers` security file | ✅ done | — | See §4.1 |
| 3 | Set up `_redirects` file | ✅ done | — | See §4.2 |
| 4 | Create `data/people.json` | ✅ done | — | Filled director + TA fields |
| 5 | Implement design system CSS | ✅ done | — | §2 color palette, typography, spacing |
| 6 | Rebuild hero section | ✅ done | — | §3.2 Section 1 + canvas particle bg |
| 7 | Build Lab Services tile grid | ✅ done | — | §3.2 Section 3 |
| 8 | Create People page | ✅ done | — | §3.4 Director + TAs only |
| 9 | Audit all external links | ✅ done | — | Added `rel="noopener noreferrer"` everywhere |
| 10 | Add `robots.txt` + OG meta tags | ✅ done | — | §4.5, §4.6 |

**Status legend:** ⬜ pending · 🔄 in progress · ✅ done · ❌ blocked

---

*Last updated: 2026-05-15. Maintained by: development agent.*
