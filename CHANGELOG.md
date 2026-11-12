# Changelog

All notable changes to this portfolio are recorded here.
Versions follow [Semantic Versioning](https://semver.org/); each release is tagged `vX.Y.Z` on `main`.

## [2.0.0] — 2026-11-13

Second version of the portfolio: a full redesign of the layout and visual style.

### Changed
- **New layout**: profile header with cover photo, round avatar, name, tagline, location and icon-only social links, and a tab bar (About, Projects, Competitive, Articles) replacing the sidebar navigation.
- **Light theme** with an emerald accent (`#047857`); colors defined as theme tokens in `apps/web/src/index.css`. Cal.com booking popup uses the same accent.
- **Desktop scrolling**: the header and Working Experience stay fixed; only the tab content scrolls, with the scrollbar hidden.
- **Working Experience**: narrower column, consistent date format, current role marked with a green marker and a slowly blinking "Present".
- **Skills** regrouped: Languages, Backend, Messaging, Database, DevOps, Cloud, Observability, Testing, Frontend, Others, Soft Skills (adds JavaScript; fixes cPanel, Tailwind CSS, Bunny.net).
- **Projects** redesigned as a numbered list with stack tags and optional Code/Live links.
- **About** text justified; About, Skills and Awards shown as plain sections with dividers.
- Page width reduced to `max-w-5xl`; profile name shown as `rifatbroh`.

### Mobile
- ⋮ menu button with slide-in drawer navigation, Working Experience before the tab content, scroll-to-top when switching sections.

### Removed
- Sidebar, Hero section and Skill list components; the Intro card.
- Unused dependencies from the lockfile (`zod`, `@radix-ui/react-dialog`, `@portfolio/shared` references).

## [1.0.0] — 2026-11-12

First version of the portfolio, as deployed before the redesign.

- Brutalist design: monospace type, neon green accent, thick black borders, no rounded corners.
- Sidebar profile card with navigation; About, Projects, Competitive and Article pages.
- Turborepo monorepo (`apps/web`, `apps/api`, `packages/shared`) deployed to GitHub Pages and Cloudflare Workers.

[2.0.0]: https://github.com/rifatbond007/my-portfolio/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/rifatbond007/my-portfolio/releases/tag/v1.0.0
