---
name: Chong Lab Atlas
description: Editorial static site for a robotics laboratory with a gallery-like, archival feel.
colors:
  primary: "#11161C"
  secondary: "#5E6670"
  accent: "#8C5A2F"
  accent-soft: "#D8C3AF"
  surface: "#F4F0EA"
  surface-2: "#FBF8F3"
  border: "#D7CEC3"
  ink: "#0D1117"
typography:
  display:
    fontFamily: "Cormorant Garamond"
    fontSize: "clamp(2.6rem, 5vw, 5.2rem)"
    fontWeight: "600"
    lineHeight: "0.95"
  title:
    fontFamily: "Cormorant Garamond"
    fontSize: "clamp(1.75rem, 2.5vw, 2.75rem)"
    fontWeight: "600"
    lineHeight: "1.05"
  body:
    fontFamily: "Manrope"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.7"
  label:
    fontFamily: "Manrope"
    fontSize: "0.8rem"
    fontWeight: "700"
    letterSpacing: "0.12em"
rounded:
  sm: "10px"
  md: "18px"
  lg: "30px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
  xxl: "96px"
---

## Overview

The site should feel like a modern academic atlas: calm, editorial, precise, and quietly ambitious.
The reference tone is not flashy lab marketing. It is a well-composed exhibit catalog with clear hierarchy,
measured spacing, and strong typography.

## Colors

- `primary` carries headlines and key navigation.
- `surface` and `surface-2` create warm paper-like layers.
- `accent` is reserved for actions, links, and section markers.
- Borders should be visible but soft, never stark gray lines.

## Typography

- Use a serif display face for headlines and a clean geometric sans for body copy.
- Headlines should feel literary and architectural.
- Body text should be highly readable, with generous leading and restrained width.

## Layout

- Favor a 12-column editorial grid on desktop and a single-column rhythm on mobile.
- Use substantial vertical space between major sections.
- Avoid dense dashboards. Each section should breathe.

## Elevation & Depth

- Use soft layered surfaces, border contrast, and gentle shadows.
- Keep motion subtle and deliberate.

## Shapes

- Rounded corners should be present but understated.
- Cards should feel like framed placards rather than app panels.

## Components

- Hero: oversized title, short supporting copy, and a compact action row.
- Card: image, title, short summary, category chip, and a single clear link.
- Metadata: small caps-like labels, quiet secondary tone.

## Do's and Don'ts

- Do keep the interface calm, precise, and content-led.
- Do use original JAIST pages as canonical deep links where appropriate.
- Don't over-animate.
- Don't use generic SaaS purple gradients or heavy glassmorphism.

## Implementation Notes

- Build the site in Astro so the final output is plain static HTML for Cloudflare Pages.
- Reuse the same shell, header, and footer across pages so the site feels like one coherent publication.
- Keep page copy concise and editorial.
- Use the design tokens consistently in CSS variables; do not invent new tones without updating this file.
- If a future page needs deeper content, link to the original JAIST page rather than duplicating legacy prose.
