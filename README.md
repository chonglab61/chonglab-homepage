# Chong Lab Static Site

Static Astro site for JAIST Chong Lab, designed for Cloudflare Pages and GitHub-based deployment.

## What this repo does

- Provides a clean static front door for the lab.
- Keeps detailed legacy content on the original JAIST site.
- Replaces the old PHP-driven navigation with a small, maintainable static site.
- Uses the `DESIGN.md` file as the visual source of truth.

## Project layout

- `src/pages/` - site pages
- `src/components/` - reusable layout pieces
- `src/data/site.ts` - content model
- `DESIGN.md` - design system for the site
- `agent.md` - maintenance, release, and verification rules
- `public/` - static assets and Cloudflare headers/redirects

## Local development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open the local Astro server shown in the terminal.

## Production build

Build the static site:

```bash
npm run build
```

The generated output is written to `dist/`.

## Docker build

The repository includes a `Dockerfile` so the site can be built in an isolated container:

```bash
docker build -t proj-chonglab:latest .
docker run --rm proj-chonglab:latest npm run build
```

## Cloudflare Pages deployment

Recommended Cloudflare Pages settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

If you connect the repository to Cloudflare Pages, it will build and publish from the selected branch automatically.

## GitHub publishing flow

1. Create or update the public GitHub repository.
2. Push the local `main` branch.
3. Connect the repository to Cloudflare Pages.
4. Let Pages build from GitHub on every push.

## Content policy

- New pages here should stay concise and editorial.
- Deep legacy detail pages should continue to point back to the original JAIST URLs.
- Dataset downloads stay linked, not mirrored, unless we explicitly choose otherwise later.

## Verification checklist

- `npm run build` succeeds.
- Docker build succeeds.
- `dist/` contains the generated site.
- Internal links stay local.
- Legacy detail links still point to the original JAIST site.
