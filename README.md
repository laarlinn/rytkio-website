# Rytkiön Riistavaja

Modern website for [www.rytkio.fi](https://www.rytkio.fi) (Osuuskunta Rytkiön
Riistavaja, Multia) — a fresh-juice pressing station and game meat processing facility.

Built with Next.js (App Router) + Tailwind CSS v4, statically exported
(`output: "export"`) and hosted on GitHub Pages.

## Development

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # static export into out/
```

## Structure

- `app/` — pages: `/` (etusivu), `/tuoremehuasema`, `/lihankasittely`,
  `/palvelut`, `/yhteystiedot`, plus `sitemap.ts`, `robots.ts` and `not-found.tsx`
- `lib/site.ts` — all site content constants: contact details, price list
  (hinnasto), volume discounts, and the season announcement. **Update the yearly
  season dates and prices here.**
- `components/` — `Header` (sticky nav + mobile menu) and `Footer`
- `public/images/` — photos from the original site, resized and compressed
  for the web

## SEO

- Per-page `metadata` with Finnish titles/descriptions, canonical URLs and
  Open Graph images
- `LocalBusiness` JSON-LD (address, geo coordinates, phone) in the root layout
- `sitemap.xml` and `robots.txt` generated at build time
- Canonical domain is `https://www.rytkio.fi` (set in `lib/site.ts`);
  trailing-slash URLs match the old WordPress site's URL structure

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and deploys `out/` to GitHub Pages. The custom domain
(`public/CNAME`) is `www.rytkio.fi` — point its DNS CNAME record at
`laarlinn.github.io` and enable "Enforce HTTPS" in the repo's Pages settings.
