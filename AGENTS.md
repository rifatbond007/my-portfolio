# AGENTS.md – rifatbroh Portfolio

## Monorepo

Turborepo + npm workspaces. Two apps, one shared package:

| Package | Path | Tech | Deploy target |
|---------|------|------|---------------|
| `@portfolio/web` | `apps/web/` | React 19 + Vite 7 + Tailwind v4 | GitHub Pages + Docker image on ghcr.io |
| `@portfolio/api` | `apps/api/` | Hono on Cloudflare Workers | Cloudflare Workers |
| `@portfolio/shared` | `packages/shared/` | Shared code (currently empty placeholder) | consumed by both |

## Commands

All from repo root (turbo fans out):

| Command | What it does |
|---------|-------------|
| `npm run dev` | Vite + Wrangler in parallel (both read root `.env`) |
| `npm run build` | Build all workspaces via Turborepo |
| `npm run lint` | ESLint on `apps/web` only (flat config, `**/*.{js,jsx}` — `.tsx`/`.ts` not linted) |
| `npm run typecheck` | `tsc --noEmit` across all workspaces |
| `npm run clean` | Remove `node_modules`, `.turbo`, `dist`, `.wrangler` |

**CI order** (`.github/workflows/ci.yml`): lint → typecheck → build.

No test runner exists.

## Architecture

- **Entry**: `apps/web/src/main.jsx` → `apps/web/src/App.tsx`
- **No router**: Page switching via `useState<Section>` in `App.tsx`. 4 sections: `about`, `projects`, `article`, `problemSolving`, switched via the tab bar in `ProfileHeader`.
- **Utility**: `apps/web/src/lib/cn.ts` (className joiner).
- **Page components**: `apps/web/src/pages/` (one per tab, plus `Footer`). Reusable pieces: `apps/web/src/components/`.
- **Cal.com integration**: `apps/web/src/lib/cal.ts` — dynamically imports `@calcom/embed-react` to open a meeting popup.
- **Types**: `apps/web/src/types/images.d.ts` — bare module declarations for `.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`.

## Design System (light profile layout)

- **Layout**: `components/ProfileHeader.tsx` (one `border-2 border-black` profile card: short cover, round black-bordered avatar, uppercase name, tagline, location + square icon-only social links, stacked Book Meeting + Resume buttons; then a rounded pill tab bar with a subtle light border, icon + uppercase labels, and a solid black active tab). Page width is `max-w-5xl` on top; below, a `270px | 1fr` grid with the Working Experience timeline (`components/IntroCards.tsx`, thick black border box, vertical line with square markers; fixed on desktop) on the left and the active tab's content on the right. Below `md` the tab bar is hidden; a ⋮ button opens a slide-in drawer menu, and Working Experience comes before the tab content (same as the old sidebar layout).
- **Font**: monospace (`"Courier New", Courier, monospace`) on `body`. Section headings are `text-2xl font-bold uppercase`.
- **Tokens** in `@theme` (`apps/web/src/index.css`): `page` #fafaf9, `card` #ffffff, `hover` #f5f5f4, `line` #e7e5e4, `fg` #1c1917, `muted` #78716c, `accent` #047857 (emerald), `accent-strong` #065f46. Use them as `bg-card`, `text-muted`, etc.
- **Content sections**: `components/Card.tsx` `Card` is a plain section separated by a top divider line (no box, no shadow); `Chip` is a small bordered tag.
- **No shadows.** All borders default to `--color-line` via the global `*` rule; the experience box uses explicit `border-black`.
- **Shared data**: profile name and image URLs in `lib/profile.ts`; the `Section` type in `types/section.ts`.

## Tailwind CSS 4

- Single `@import "tailwindcss"` in `apps/web/src/index.css`.
- **No `tailwind.config.js`**, no PostCSS config. Vite plugin `@tailwindcss/vite` handles everything.

## Environment

Single `.env` at repo root (see `.env.example`). Both Vite and Wrangler read it when `npm run dev` is run from root.

Key vars: `VITE_API_BASE_URL`.

## Deploy

- **Web**: Push to `main` → `deploy-web.yml` builds and deploys to GitHub Pages (triggers on `apps/web/**` or `packages/shared/**` changes).
- **API**: Push to `main` → `deploy-api.yml` deploys Worker to Cloudflare (triggers on `apps/api/**` or `packages/shared/**` changes).
- **CI**: `ci.yml` runs lint + typecheck + build on all pushes/PRs to `main`.

## Notable

- **Base path**: `/` (`apps/web/vite.config.js`).
- **ESLint**: `no-unused-vars` error with `varsIgnorePattern: '^[A-Z_]'`, only checks `**/*.{js,jsx}`.

## Releases

- Semantic versioning. The repo version lives in the root `package.json` (kept in sync with `apps/web/package.json`); `apps/api` and `packages/shared` are versioned separately.
- Every release gets an entry in `CHANGELOG.md` and a `vX.Y.Z` git tag on `main` with a matching GitHub release.
- Flow: bump with `npm version X.Y.Z --no-git-tag-version --include-workspace-root -w @portfolio/web`, update `CHANGELOG.md`, open a PR from the `dev-rifat` branch, then tag the merge commit on `main` and publish the release (`gh release create vX.Y.Z --notes-file …`).
- Publishing a GitHub release also runs `publish-image.yml`, which pushes `ghcr.io/rifatbond007/my-portfolio` (`Dockerfile` + `docker/nginx.conf`) tagged `X.Y.Z`, `X.Y`, `latest`.
- Current: v2.1.0 (Docker image). v2.0.0 = redesign. v1.0.0 = commit `d526f7f`, the brutalist version.
