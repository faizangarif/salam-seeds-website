# Salam Seeds Website

The marketing and companion website for **Salam Seeds** — monthly Hijri-themed subscription boxes and a digital learning platform for Muslim kids (ages 3–12).

Built with **Next.js 14 (App Router)**, Tailwind CSS, Framer Motion, and the OpenAI Responses API (powering the Seedly chat companion).

---

## Table of Contents

1. [Local Development](#local-development)
2. [Environment Variables](#environment-variables)
3. [How the Citation Allowlist Works](#how-the-citation-allowlist-works)
4. [Vercel Deployment](#vercel-deployment)
5. [Connecting Shopify to /store](#connecting-shopify-to-store)
6. [Project Structure](#project-structure)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Copy the example env file and fill in your API key
cp .env.example .env.local

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The Seedly chat widget auto-opens after ~600 ms on first visit (first-visit only, controlled by `localStorage`).

### Useful scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run typecheck` | Run `tsc --noEmit` (zero-emit type check) |
| `npm run lint` | ESLint via Next.js lint config |
| `npm run format` | Prettier (writes in-place) |

---

## Environment Variables

Copy `.env.example` to `.env.local` for local development. On Vercel, set these in the **Environment Variables** panel of your project settings.

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes (for chat) | Your OpenAI secret key. Without this the chat widget shows a friendly "not configured" message instead of erroring. |
| `OPENAI_MODEL` | No | Model to use for the Responses API. Must support the Responses API + built-in `web_search_preview` tool. Default: `gpt-4o`. |
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Full base URL, e.g. `https://salamseeds.com`. Used by `sitemap.ts` and OpenGraph metadata. |
| `CHAT_EXTRA_ALLOWED_DOMAINS` | No | Comma-separated extra hostnames the Seedly bot may cite (see below). |

### Example `.env.local`

```env
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CHAT_EXTRA_ALLOWED_DOMAINS=yaqeeninstitute.org,pewresearch.org
```

---

## How the Citation Allowlist Works

The Seedly bot uses the OpenAI Responses API with the built-in `web_search_preview` tool to answer questions. After each response, it filters the returned URL citations against an **accredited-source allowlist** to ensure only trustworthy references are surfaced to parents.

**Default allowed TLDs / domains:**

- `.gov` (any government domain)
- `.edu` (educational institutions)
- `.org` (non-profit / organisations)
- `.ac.uk` (UK academic institutions)
- `.int` (international organisations)

**Adding extra domains:**

Set `CHAT_EXTRA_ALLOWED_DOMAINS` to a comma-separated list of hostnames:

```env
CHAT_EXTRA_ALLOWED_DOMAINS=yaqeeninstitute.org,pewresearch.org,cpsc.gov
```

These are parsed by `src/lib/accreditedSources.ts` and applied in the API route at runtime. Subdomains are matched automatically (e.g., `data.pewresearch.org` matches `pewresearch.org`).

If the bot cannot find accredited sources it tells the user honestly and offers to rephrase.

---

## Vercel Deployment

1. Push your repo to GitHub (or GitLab / Bitbucket).
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. **Framework preset:** Next.js — auto-detected; no custom build settings needed.
4. **Root directory:** leave as `.` (the `package.json` is at the repo root).
5. In **Environment Variables**, add:
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your production domain)
   - `OPENAI_MODEL` (optional, defaults to `gpt-4o`)
   - `CHAT_EXTRA_ALLOWED_DOMAINS` (optional)
6. Click **Deploy**.

Subsequent pushes to `main` trigger automatic re-deploys.

> **Note:** The `/api/contact` route logs form submissions server-side. To send emails, wire up a transactional email provider (Resend, SendGrid, etc.) inside `src/app/api/contact/route.ts`.

---

## Connecting Shopify to /store

The `/store` page (`src/app/store/page.tsx`) is currently a placeholder that links out to a Shopify storefront. To embed a full storefront:

1. Install the Shopify Storefront API client:
   ```bash
   npm install @shopify/storefront-api-client
   ```
2. Add env vars:
   ```env
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-public-token
   ```
3. Create a client in `src/lib/shopify.ts` and use the Storefront API to fetch products.
4. Replace the placeholder in `src/app/store/page.tsx` with product grid components.

The Storefront API access token is public (read-only) and safe to expose client-side via `NEXT_PUBLIC_*`.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages + API routes
│   ├── api/
│   │   ├── chat/           # Seedly AI companion endpoint (OpenAI Responses API)
│   │   ├── contact/        # Contact form submission handler
│   │   └── health/         # Health check endpoint
│   ├── (pages)/            # 13 marketing pages (home, about, blog, store, …)
│   ├── layout.tsx          # Root layout with fonts, metadata, nav, footer
│   ├── globals.css         # Design tokens + Tailwind base styles
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # robots.txt rules
├── components/             # Shared UI components (Nav, Footer, ChatWidget, …)
└── lib/
    ├── openai.ts           # OpenAI client singleton + default model
    ├── accreditedSources.ts # Citation allowlist logic
    ├── hijriThemes.ts      # Hijri month theme data
    ├── pricing.ts          # Pricing plan data
    ├── site.ts             # Site-wide constants
    └── utils.ts            # cn() and other helpers
public/
├── favicon.svg
└── seedly.svg              # Seedly mascot
```
