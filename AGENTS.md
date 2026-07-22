# AGENTS.md – rifatbroh Portfolio

## Monorepo

Turborepo + npm workspaces. Two apps, one shared package:

| Package | Path | Tech | Deploy target |
|---------|------|------|---------------|
| `@portfolio/web` | `apps/web/` | React 19 + Vite 7 + Tailwind v4 | GitHub Pages |
| `@portfolio/api` | `apps/api/` | Hono on Cloudflare Workers | Cloudflare Workers |
| `@portfolio/shared` | `packages/shared/` | Shared code | consumed by both |

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
- **No router**: Page switching via `useState<Section>` in `App.tsx`. 4 sections: `about`, `projects`, `article`, `problemSolving`.
- **UI primitives**: `apps/web/src/components/ui/` (Radix Dialog, Input, Textarea). Utility `cn()` at `apps/web/src/lib/cn.ts`.
- **Page components**: `apps/web/src/pages/`. Reusable cards: `apps/web/src/components/`.
- **Cal.com integration**: `apps/web/src/lib/cal.ts` — dynamically imports `@calcom/embed-react` to open a meeting popup.
- **Types**: `apps/web/src/types/images.d.ts` — bare module declarations for `.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`.

## Brutalist Design System

- **All monospace**: `font-family: "Courier New", Courier, monospace` in `apps/web/src/index.css`.
- **Neon green (#00FF00) accent**: `--color-neon` in CSS via `@theme`. Used for active nav items, buttons, badges, highlights.
- **Pure B&W base**: No gradients, no shadows.
- **Thick black borders**: `border-2` or `border-4 border-black` on all cards, inputs, buttons, sections.
- **No rounded corners**: `rounded-none` everywhere.
- **Oversized typography**: `text-4xl`/`text-5xl` uppercase headings with `font-bold`.
- **All borders default to `#000`** via global `* { border-color: #000; }`.
- **No animations** (framer-motion removed). Terminal loader kept as-is.

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
- **Loader**: 3-second terminal-style loading animation on initial mount (hardcoded in `App.tsx`).
- **ImageWithFallback**: `apps/web/src/components/ImageWithFallback.tsx` handles broken image URLs.
- **ESLint**: `no-unused-vars` error with `varsIgnorePattern: '^[A-Z_]'`, only checks `**/*.{js,jsx}`.
