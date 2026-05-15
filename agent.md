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

## GitHub Workflow Notes

- Public repository: `https://github.com/chonglab61/chonglab-homepage`
- Default branch: `main`
- Publishing model: push to `main`, let Cloudflare Pages build from GitHub.
- Deployment target: Cloudflare Pages, static output only.
- Do not store GitHub tokens, PATs, or repository secrets in this repo.
- If credentials are ever needed for local automation, prefer ephemeral environment variables or secret managers outside the repo.
- If the repository name or remote changes in the future, update this section immediately so the file remains the auto-read source of truth.
- Local environment handoff: keep GitHub/Pages deployment values in `.env` for agents that auto-read env files.
- Suggested `.env` values:
  - `GITHUB_OWNER=chonglab61`
  - `GITHUB_REPO=chonglab-homepage`
  - `GITHUB_BRANCH=main`
  - `GITHUB_REMOTE_URL=https://github.com/chonglab61/chonglab-homepage.git`
  - `GITHUB_PAGES_URL=https://chonglab-homepage.pages.dev/`
  - `CF_PAGES_PROJECT=chonglab-homepage`
  - `CF_PAGES_BRANCH=main`
  - `CF_PAGES_BUILD_COMMAND=npm run build`
  - `CF_PAGES_OUTPUT_DIR=dist`
  - `CF_PAGES_ROOT_DIR=.`

## Project Standards Review

Current status:

- `DESIGN.md` exists and defines the visual system in a structured form.
- `README.md` exists and explains local setup, Docker build, and deployment.
- `astro.config.mjs` is minimal and appropriate for a static site.
- `package.json` is intentionally small, but there is no lint/test script yet.
- `CHANGELOG.md` is referenced but has not been created yet.
- The build is currently verified through Docker, which is good for reproducibility.
- `.env` is now used as the local-only GitHub/Cloudflare deployment handoff file.

Gaps to address later:

1. Add a real `CHANGELOG.md` when the first user-facing release is finalized.
2. Add linting once the project needs stricter code-style enforcement.
3. Add content checks or link checks if the site grows beyond the current small static footprint.
4. Keep the design and content model in sync when adding new pages.
5. Reconcile the overlapping `AGENT_SPEC.md` and `agent.md` documents if the repo keeps both files long-term.

Standards conclusion:

- The repository is currently lightweight and reasonably规范 for a small static Astro site.
- The most important missing piece is a changelog file matching the maintenance policy already described here.
- No structural or deployment blockers were found during the last review.
- There is a documentation overlap between `AGENT_SPEC.md` and `agent.md`; the repository should eventually choose one canonical agent spec.

## Repository Hygiene

- Keep `.sisyphus/`, `node_modules/`, and build outputs out of Git.
- Keep config files small and explicit.
- If deployment behavior changes, document it in this file and the README at the same time.
