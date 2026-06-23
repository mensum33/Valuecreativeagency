# Value Design & Print — Value Creative Agency

Premium package-first ecommerce storefront for **Value Design & Print** — design, print and digital media packages for New Zealand small businesses.

**Project path:** `/Users/sumangiri/valuecreativeagency`

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Hosted on **Vercel**
- Domain & email on **IONOS**

## Quick start (local)

```bash
cd /Users/sumangiri/valuecreativeagency
cp .env.example .env.local   # edit values locally — never commit .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Run production server locally |
| `npm run lint` | ESLint |

## Project structure

```
src/
├── app/              # Routes, API, sitemap, robots
├── components/       # UI, layout, home sections
├── data/             # Packages, recent work, FAQs, blog, navigation
└── lib/              # Metadata, site URL, images, constants
public/images/        # Upload photos by folder name
```

## Environment variables

Copy `.env.example` to `.env.local` for local development. Set the same variables in the **Vercel dashboard** for production.

Never commit `.env.local` or real API keys.

## Add images

Drop photos into folders such as:

- `public/images/packages/business-cards/cover.jpg`
- `public/images/recent-work/restaurant-menu-refresh/cover.jpg`
- `public/images/studio/cover.jpg`

Use `cover.jpg` or `cover.svg`. Missing images show a premium placeholder — pages never break.

## Deployment (Vercel + IONOS domain)

### 1. Push to GitHub

```bash
cd /Users/sumangiri/valuecreativeagency
git init
git add .
git commit -m "Prepare Value Design & Print for Vercel deployment"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Import into Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository
3. Framework preset: **Next.js**
4. Build command: `npm run build`
5. Output: handled automatically by Vercel (do **not** use static `out/` export)
6. Add environment variables from `.env.example`
7. Deploy

### 3. Point IONOS domain to Vercel

In **IONOS DNS** (keep existing **MX records** for business email):

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Then in **Vercel** → Project → Settings → Domains → add `valuedesignprint.co.nz` and `www.valuedesignprint.co.nz`.

Vercel will provision SSL automatically.

**Important:** Do not remove MX records in IONOS — those keep your business email working.

### 4. Post-deploy checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL=https://valuedesignprint.co.nz` in Vercel
- [ ] Submit sitemap: `https://valuedesignprint.co.nz/sitemap.xml`
- [ ] Test packages, checkout placeholder, mobile layout
- [ ] Add Stripe keys when ready for live checkout
- [ ] Add Supabase keys when ready for file uploads

## Future features (prepared, not live)

| Feature | Status | Location |
|---------|--------|----------|
| Stripe Checkout | API placeholder | `src/app/api/checkout/route.ts` |
| Supabase uploads | UI placeholder | `src/app/upload-artwork/page.tsx` |
| Product JSON-LD | Live | `src/components/ui/ProductJsonLd.tsx` |
| Sitemap / robots | Live | `src/app/sitemap.ts`, `src/app/robots.ts` |

## Hosting decision

- **Vercel** — Next.js app, API routes, Stripe, Supabase
- **IONOS** — domain DNS + business email only
- Do **not** upload `out/` to IONOS unless explicitly requested later
