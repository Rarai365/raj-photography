# Raj Photography

Portfolio site built with Next.js (App Router) + TypeScript + Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — pages: home, `/work` (gallery), `/about`, `/contact`
- `components/` — `Nav`, `Footer`, `Gallery` (filterable), `PhotoCard`, `ContactForm`
- `lib/photos.ts` + `lib/photo-manifest.json` — photo data (category, title, src, dimensions)
- `public/images/work/` — the photos themselves

## Adding / swapping photos

1. Drop your images into `public/images/work/` (jpg/png/webp all work).
2. Add or edit an entry in `lib/photo-manifest.json` — each needs `src`,
   `category` (`portrait` | `group` | `ceremony` | `candid` — or add a new
   one, see below), `w`/`h` (actual pixel dimensions, used to preserve
   aspect ratio), and `title`.
3. To add a new category, add it to the `Category` type and the
   `categories` array in `lib/photos.ts` — the filter buttons on `/work`
   pick it up automatically.

Tip: `sips -g pixelWidth -g pixelHeight <file>` (macOS) gets you the exact
`w`/`h` for the manifest.

## Editing text/contact info

- Brand name, nav links: `components/Nav.tsx`, `components/Footer.tsx`
- Email address: `components/Footer.tsx`, `components/ContactForm.tsx`, `app/contact/page.tsx`
- Bio, timeline, kit list: `app/about/page.tsx`
- Hero image / hero copy: `app/page.tsx`
- About page portrait: `app/about/page.tsx`

## Deploying

Easiest path is [Vercel](https://vercel.com) (`vercel deploy`) since this is
a standard Next.js app — or `npm run build && npm start` on any Node host.
