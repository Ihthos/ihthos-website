# Ihthos website

Marketing site for Ihthos, built as a fully static export and deployed to
GitHub Pages on the custom domain **ihthos.com**.

## Stack

- Next.js 16 (App Router, static export)
- React 19
- Tailwind CSS 4
- `motion` for the small amount of decorative motion
- TypeScript

## Local development

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

## Build

```bash
npm run build
```

The build writes the static site to `out/`. `next start` is not used: the site
has no server runtime.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and
publishes `out/` with the official GitHub Pages actions. `public/CNAME` pins the
custom domain to `ihthos.com`.

### DNS records for ihthos.com

Set these at the domain's DNS provider, then enable **Enforce HTTPS** in the
repository's Pages settings once GitHub has issued the certificate.

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `Ihthos.github.io` |

## Content

- Public copy lives in `src/lib/site.ts`.
- Privacy and Terms live in `src/lib/legal.ts`.
- `notes/CONFIRMATIONS.md` lists facts that must stay unverified until the owner
  confirms them. Nothing there is rendered on the site.
- `notes/COMPLETION.md` records what was checked in each pass.

The contact form composes an email in the visitor's own client; nothing is
posted to a server.

## Fonts

The site is designed around TWK Lausanne, a commercial typeface. Its files are
excluded from this repository by `.gitignore`, so a deployed build uses the
Work Sans fallback. Do not commit or publish the licensed files until a
per-website licence is in place.
