# rifatbroh — Portfolio Monorepo

Personal portfolio site (React + Vite) plus a Cloudflare Workers API for the contact form.

## Structure

```
apps/
  web/        React + Vite frontend (deployed to GitHub Pages)
  api/        Hono on Cloudflare Workers (contact form backend)
packages/
  shared/     Zod schemas + constants shared between web and api
```

## Commands

Run from the repo root:

| Command | What it does |
| --- | --- |
| `npm install` | Install all workspaces |
| `npm run dev` | Run web (Vite) and api (Wrangler) in parallel |
| `npm run build` | Build everything via Turborepo |
| `npm run lint` | Lint web (ESLint flat config); api is a no-op stub |
| `npm run typecheck` | Typecheck every workspace |
| `npm run clean` | Remove `node_modules`, `.turbo`, `dist`, `.wrangler` |

## Setup

### Local environment

All env vars live in **one file at the repo root**: `.env`.

1. `cp .env.example .env`
2. Fill in values (see comments in `.env.example`).
3. `npm run dev` (turbo fans out from the repo root, so Vite and Wrangler
   both load the same `.env`).

### 1. Cloudflare account + Workers

1. Sign up at <https://dash.cloudflare.com> (free tier works).
2. Create an API token with `Workers Scripts:Edit` + `Workers KV Storage:Edit` permissions. Save as the `CLOUDFLARE_API_TOKEN` GitHub secret.
3. Copy your Account ID from the Workers dashboard. Save as `CLOUDFLARE_ACCOUNT_ID`.
4. Create a KV namespace for submissions:
   ```
   cd apps/api
   npx wrangler kv namespace create SUBMISSIONS
   ```
   Paste the returned `id` into `apps/api/wrangler.toml`.
5. Set the API secrets (these are NOT in `wrangler.toml`):
   ```
   cd apps/api
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put TURNSTILE_SECRET_KEY
   npx wrangler secret put CONTACT_TO_EMAIL       # abdullah.al.rifat2239@gmail.com
   npx wrangler secret put CONTACT_FROM_EMAIL     # must be on a Resend-verified domain
   ```

### 2. Resend

1. Sign up at <https://resend.com> (free tier: 100 emails/day).
2. Add and verify the sending domain you want in `CONTACT_FROM_EMAIL`.
3. Create an API key. Use it for `RESEND_API_KEY`.

### 3. Cloudflare Turnstile

1. Visit <https://dash.cloudflare.com> → Turnstile → Add widget.
2. Copy the **Site Key** (public). Save in `apps/web/.env.local` as `VITE_TURNSTILE_SITE_KEY` AND as a GitHub repo variable.
3. Copy the **Secret Key** (private). Use it for `TURNSTILE_SECRET_KEY` via `wrangler secret put`.

### 4. Cal.com

Public event type already configured at `cal.com/rifatbroh` (30 min). No further setup needed.

### 5. GitHub repo variables + secrets

Repository → Settings → Secrets and variables → Actions:

- **Variables**:
  - `VITE_API_BASE_URL` — e.g. `https://portfolio-api.your-subdomain.workers.dev`
  - `VITE_TURNSTILE_SITE_KEY` — Turnstile public site key
- **Secrets**:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`

## Deploys

- Push to `main` → CI runs lint + typecheck + build.
- `deploy-web.yml` builds and deploys the frontend to GitHub Pages when `apps/web/**` or `packages/shared/**` changes.
- `deploy-api.yml` deploys the Worker to Cloudflare when `apps/api/**` or `packages/shared/**` changes.

## Architecture notes

- `packages/shared` exports a single Zod schema (`ContactSchema`) used by both the form (`apps/web`) and the API (`apps/api`) — validation is impossible to drift.
- The frontend never sees the Turnstile secret or Resend key — only the Worker does.
- KV stores submissions for 90 days with auto-purge via `expirationTtl`.
- Rate limit is 5 submissions per IP per 10 minutes (KV-backed counter with TTL reset each write).

## License

MIT
