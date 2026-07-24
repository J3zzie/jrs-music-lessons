# JRS Music Lessons

Multi-page marketing website for JRS Music Lessons — private guitar, drums, vocals, piano, and bass instruction in Iowa. Built with Next.js (App Router) + TypeScript, plain CSS, and the black/orange brand design from `mockup.png`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Generate imagery

The logo (`public/jrs-music-logo.png`) is a supplied asset. All photographic imagery is generated:

```bash
npm run generate:images          # generates missing images into public/images/
npm run generate:images -- --force   # regenerate everything
```

Requires `OPENAI_API_KEY` in `.env` (repo root). Generates `hero-guitarist.png`, `drums-bg.png`, and `og-image.png`. The site builds and renders fine before images exist (sections fall back to solid dark backgrounds).

The six instrument icons under "What Do You Want to Play?" are extracted directly from `mockup.png` for a pixel-exact match — no AI involved:

```bash
node scripts/extract-icons.mjs   # re-derives public/icons/*.webp from mockup.png
```

An OpenAI-generated alternative (`npm run generate:icons`) also exists — clean, correctly colored, but doesn't match the mockup's exact linework, so it isn't the active set. That output is kept at `backups/icons-ai-generated/`.

## Structure

- Pages: `app/page.tsx` (home), plus `app/{lessons,about,reviews,faq,contact}/page.tsx`
- Editable content (copy, lessons, reviews, FAQs, contact info): `data/site.ts`
- Global styling + color tokens: `app/globals.css`
- Shared components: `components/` (header, footer, booking form, reviews carousel, lesson grid)
- Instrument icons (extracted from the mockup, transparent WebP): `public/icons/`
- Booking form endpoint (stub): `app/api/book/route.ts`
- Image generation script: `scripts/generate-images.mjs` (photos)
- Icon scripts: `scripts/extract-icons.mjs` (active, mockup-derived), `scripts/generate-icons.mjs` (OpenAI alternative, not active)
- Logo background removal (deterministic, no AI — see script header for why): `scripts/remove-bg-logo.mjs`
- Design reference: `mockup.png` (also copied to `public/reference/design-reference.png`)

## Next steps

1. Replace placeholder contact details and social links in `data/site.ts`.
2. Connect `app/api/book/route.ts` to a real backend (Resend, Formspree, a CRM, or a booking service).
3. Point `metadataBase` in `app/layout.tsx` at the production domain.
4. Deploy through Vercel after pushing the project to GitHub.
