# AGENTS.md – rifatbroh Portfolio

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Vite dev server (http://localhost:5173) |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint (flat config, `**/*.{js,jsx}` only — `.tsx`/`.ts` not linted) |

No test or typecheck commands exist. `tsc` is not installed; Vite's esbuild handles TS.

## Architecture

- **Entry**: `src/main.jsx` → `src/App.tsx`
- **No router**: Page switching via `useState<Section>` in `App.tsx`. 5 sections: `about`, `projects`, `honors`, `article`, `problemSolving`.
- **UI primitives**: `src/components/ui/` (Radix Dialog, Input, Textarea). Utility `cn()` at `src/components/ui/utils.ts`.
- **Page components**: `src/pages/`. Reusable cards: `src/components/`.
- **Types**: `src/types/images.d.ts` — bare module declarations for `.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`.

## Tailwind CSS 4

- Single `@import "tailwindcss"` in `src/index.css`.
- **No `tailwind.config.js`**, no PostCSS config, no `@tailwindcss/cli` needed in build pipeline. The Vite plugin `@tailwindcss/vite` handles everything.

## Notable

- **Base path**: `/my-portfolio/` (`vite.config.js`). Used for production asset paths.
- **Deploy**: Netlify (SPA). `dist/_redirects` serves `/* → /index.html 200`.
- **Loader**: 3-second terminal-style loading animation on initial mount (hardcoded in `App.tsx`).
- **Contact form**: Demo-only — Radix Dialog, no backend, shows `alert()` on submit.
- **External links**: Resume download uses `target="_blank"` with `noopener noreferrer`.
- **ESLint**: `no-unused-vars` error with `varsIgnorePattern: '^[A-Z_]'`.
- **`.gitignore`**: No `.env` (no env vars in project).
