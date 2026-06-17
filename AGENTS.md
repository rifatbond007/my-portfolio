# AGENTS.md – rifatbroh Portfolio

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Vite dev server (http://localhost:5173) |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint (flat config, `**/*.{js,jsx}` only — `.tsx`/`.ts` not linted) |

No test or typecheck commands (`tsc` not installed; esbuild handles TS).

## Architecture

- **Entry**: `src/main.jsx` → `src/App.tsx`
- **No router**: Page switching via `useState<Section>` in `App.tsx`. 5 sections: `about`, `projects`, `honors`, `article`, `problemSolving`.
- **UI primitives**: `src/components/ui/` (Radix Dialog, Input, Textarea). Utility `cn()` at `src/components/ui/utils.ts`.
- **Page components**: `src/pages/`. Reusable cards: `src/components/`.
- **Types**: `src/types/images.d.ts` — bare module declarations for `.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`.
- **`src/hooks/` and `src/lib/`** exist but are empty.

## Brutalist Design System

- **All monospace**: `font-family: "Courier New", Courier, monospace` set in `src/index.css`.
- **Neon green (#00FF00) accent**: Used for active nav items, buttons, badges, highlights. Defined as `--color-neon` in `src/index.css` via `@theme`.
- **Pure B&W base**: No gradients, no shadows.
- **Thick black borders**: `border-2` or `border-4 border-black` on all cards, inputs, buttons, sections.
- **No rounded corners**: `rounded-none` everywhere.
- **Oversized typography**: `text-4xl`/`text-5xl` uppercase headings with `font-bold`.
- **All borders default to `#000`** via global `* { border-color: #000; }` in CSS.
- **No animations** (framer-motion removed). Terminal loader kept as-is.

## Tailwind CSS 4

- Single `@import "tailwindcss"` in `src/index.css`.
- **No `tailwind.config.js`**, no PostCSS config. Vite plugin `@tailwindcss/vite` handles everything.

## Notable

- **Base path**: `/` (`vite.config.js`).
- **Loader**: 3-second terminal-style loading animation on initial mount (hardcoded in `App.tsx`).
- **Contact form**: Demo-only — Radix Dialog, no backend, shows `alert()` on submit.
- **ImageWithFallback**: `src/components/ImageWithFallback.tsx` handles broken image URLs.
- **Deploy**: GitHub Pages auto-deploys on push to `main` (`npm ci && npm run build` via `.github/workflows/deploy.yml`).
- **ESLint**: `no-unused-vars` error with `varsIgnorePattern: '^[A-Z_]'`, only checks `**/*.{js,jsx}`.
- **`.gitignore`**: No `.env` (no env vars in project).
