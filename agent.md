# Chong Lab Static Site Maintenance Guide

## Purpose

This repository is the static Cloudflare Pages front door for the JAIST Chong Lab website. It is designed to stay small, readable, and easy to maintain while linking back to the original JAIST pages for deep legacy content.

## Source of Truth

- Visual identity: `DESIGN.md`
- Content inventory and public site audit: `.sisyphus/drafts/jaist-robot-site-audit.md`
- Static routes and site structure: `src/pages/`
- Content records: `src/data/site.ts`

## Development Rules

1. Keep the site static. Do not add runtime dependencies unless the page truly requires them.
2. Use Astro components for repeated layout pieces.
3. Prefer data files over hard-coded repeated markup.
4. Keep internal lab links on the new site and preserve original JAIST detail links for legacy depth.
5. Do not mirror large legacy content or dataset payloads unless explicitly requested.
6. Do not commit secrets, tokens, credentials, or host-specific configuration.

## Design Rules

- Follow the color, typography, spacing, and component guidance in `DESIGN.md`.
- The site should feel editorial, calm, and archival.
- Typography should remain serif-led for titles and sans-led for body copy.
- Avoid loud gradients, heavy neon, or SaaS-style default visual language.

## Versioning Rules

- Use semantic versioning for site releases.
- Suggested meaning:
  - `major`: structure or design direction changes that alter the site identity.
  - `minor`: new pages, data expansion, or meaningful visual improvements.
  - `patch`: copy fixes, link fixes, accessibility fixes, or deployment metadata.
- Keep release notes short and factual.

## Change Log Format

Record important changes in `CHANGELOG.md` using this format:

```md
## 0.1.0 - 2026-05-15
- Established the Astro static site baseline.
- Added Cloudflare Pages deployment instructions.
- Added editorial design system and public content index.
```

## Verification Rules

Before shipping any change:

1. Run a local build.
2. Run the Docker build path.
3. Verify the generated output exists in `dist/`.
4. Check that public links still resolve to the intended URLs.
5. If a content change affects the audit or IA, update the design notes and README.

## Release Workflow

1. Update content and/or design.
2. Verify with Docker build.
3. Update version notes and changelog if the change is user-visible.
4. Commit locally.
5. Push to GitHub.
6. Connect or redeploy Cloudflare Pages from the GitHub branch.

## Repository Hygiene

- Keep `.sisyphus/`, `node_modules/`, and build outputs out of Git.
- Keep config files small and explicit.
- If deployment behavior changes, document it in this file and the README at the same time.
