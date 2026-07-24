# JRS Music Lessons — Website Build Instructions

Build a professional, production-quality marketing website for **JRS Music Lessons**, a private music teacher in Iowa offering lessons in guitar, drums, vocals, piano, bass, and more.

## Stack

- Next.js (latest, App Router) + TypeScript, initialized in this directory.
- Plain CSS in `app/globals.css` (CSS variables + modern CSS). No UI framework, no Tailwind.
- Keep dependencies minimal; only add a package if there is no reasonable built-in alternative.
- All editable copy (headlines, lesson list, reviews, benefits, contact info) lives in `data/site.ts`.

## Design source of truth

- **`mockup.png`** (repo root) is the visual reference. Match its layout, hierarchy, spacing, and tone closely on desktop, and adapt it responsively for tablet and mobile.
- **`jrs-music-logo.png`** (repo root) is the real brand logo. Copy it into `public/` and use it in the header and footer. Never redraw, regenerate, or substitute the logo.
- Theme: dark, dramatic, rock-inspired, high contrast. Near-black backgrounds, vivid orange accent, white/off-white text.
- Headings: large, condensed, uppercase (e.g. Oswald or Anton via `next/font`). Body: a clean sans-serif.
- Preserve generous vertical spacing between sections.

### Color palette (sampled from the logo and mockup)

Define these as CSS custom properties in `app/globals.css` and use them everywhere — no hard-coded hex values in components.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#000000` | Page background, hero, footer |
| `--color-surface` | `#121212` | Card / panel backgrounds (instrument cards, testimonial cards) |
| `--color-border` | `rgba(255,255,255,0.08)` | Hairline card borders / dividers on dark surfaces |
| `--color-accent` | `#FE7E02` | Primary brand orange — sampled directly from the flat fills in `jrs-music-logo.png`; use for headline highlight words, buttons, icon strokes, stars, active nav state |
| `--color-accent-dark` | `#C6660A` | Pressed/hover state and gradients for the accent |
| `--color-text` | `#F2F1F1` | Headings and primary text on dark backgrounds |
| `--color-text-muted` | `#A6A6A6` | Body copy, secondary text, card descriptions |

Do not substitute a generic "orange-500" from a framework palette — `--color-accent` must match the logo's `#FE7E02`.

## Site structure — multi-page

This is a multi-page site using the App Router's file-based routing. Every nav item is a real route, not a scroll anchor. `app/layout.tsx` holds the shared `<Header>` and `<Footer>`, rendered around each page.

**Header** (shared) — logo left; nav: Home, Lessons, About, Why JRS, Reviews, FAQ, Contact; orange "Book a Lesson" button right that links to `/contact`. Sticky, collapses to an accessible mobile menu. Highlight the active route.

**Footer** (shared) — logo, short blurb, quick links (Lessons, About, Why JRS, Reviews, FAQ, Contact), contact info (location, phone, email), social icons, copyright.

### `/` — Home (`app/page.tsx`)
Condensed landing page that sells the site and funnels into the other pages:
- **Hero** — "Private Music Lessons in Iowa" (first line white, second line orange), supporting sentence, "Book a Lesson" (→ `/contact`) + "View Lesson Options" (→ `/lessons`) buttons, three trust badges (years of experience, all ages welcome, local Iowa instructor), dramatic guitarist image on the right fading into the black background.
- **Lessons preview** — "What Do You Want to Play?" with the same six instrument cards as `/lessons` (or a subset), each linking into `/lessons`, plus a "View All Lessons" button.
- **Why JRS teaser** — short "Why Choose JRS?" checklist with a "Learn More" button → `/about`.
- **Reviews teaser** — two or three testimonial cards with a "Read More Reviews" button → `/reviews`.
- **CTA band** — "Ready to Get Started?" banner over the drum-kit background with a "Book a Lesson" button → `/contact`.

### `/lessons` — Lessons (`app/lessons/page.tsx`)
Full "What Do You Want to Play?" grid: Guitar, Vocals, Drums, Piano, Bass, Other Instruments. A longer description per instrument than the home teaser, subtle hover state. End with a "Book a Lesson" CTA → `/contact`.

**Icons must match the mockup exactly, pixel for pixel.** Hand-authored SVGs were tried first and didn't hold up visually next to the real artwork, so the active set is extracted directly from `mockup.png`:
- `scripts/extract-icons.mjs` crops each of the six glyphs out of `mockup.png` at their known coordinates, finds a tight bounding box per icon, then un-premultiplies against the near-black card background with a noise floor (pixels at/below the floor snap to fully transparent; the rest remap smoothly) to recover a clean alpha channel without a haze or jagged hard-cutout edges.
- Output: `public/icons/{guitar,vocals,drums,piano,bass,other}.webp`, lossless, resized to a consistent square canvas with `lanczos3`.
- `components/LessonGrid.tsx` renders these via `next/image` at a consistent size (e.g. 48–56px) centered above each card's bold uppercase label.
- If the mockup ever changes, rerun `node scripts/extract-icons.mjs` to re-derive the WebP icons — don't hand-edit them.

An OpenAI-generated alternative set (`scripts/generate-icons.mjs`, run via `npm run generate:icons`) also exists — it generates fresh flat-line-art icons per instrument with `background: "transparent"`, then forces every pixel to the exact `--color-accent` hex. It was tried and produced clean, correctly-colored icons, but they don't match the mockup's exact linework, so the mockup-extracted set is what's live; that AI-generated set is kept at `backups/icons-ai-generated/` for reference or in case the direction changes.

### `/about` — About / Why JRS (`app/about/page.tsx`)
Three-part layout: about copy (Ryan's background/teaching philosophy) with a photo or the logo over a subtle Iowa state outline; full "Why Choose JRS?" checklist with orange icons; closing CTA → `/contact`.

### `/reviews` — Reviews (`app/reviews/page.tsx`)
"What Students Are Saying" — full carousel/slider of testimonial cards with 5 orange stars and attribution; prev/next arrows. Include more testimonials than the home teaser.

### `/faq` — FAQ (`app/faq/page.tsx`)
Accessible accordion of frequently asked questions (lesson lengths, pricing structure, instruments taught, age range, cancellation policy, online vs. in-person, how to get started). Content lives in `data/site.ts` so it's easy to edit. Closing CTA → `/contact`.

### `/contact` — Contact / Booking (`app/contact/page.tsx`)
"Book Your Lesson Today" over a dark drum-kit background image, plus contact details (phone, email, location). Fields: name, email, phone, instrument (select), experience level (select), preferred time, message; orange "Request a Lesson" submit. Client-side validation; wire submissions to a stub API route (`app/api/book/route.ts`) that can later connect to a real backend.

## Images — generate with OpenAI

The logo is supplied; every other image must be generated by a script, not hand-placed placeholders.

- Create **`scripts/generate-images.mjs`** (runnable with `node scripts/generate-images.mjs`).
- It reads `OPENAI_API_KEY` from `.env` (already present in the repo root — never print or commit the key) and calls the OpenAI Images API (`gpt-image-1`) directly via `fetch`, saving results to `public/images/`.
- Skip images that already exist unless run with `--force`, and log progress per image.
- Add an npm script: `"generate:images": "node scripts/generate-images.mjs"`.
- Images to generate (write detailed prompts in the script; style for all: dark, moody, black background with warm orange stage-light rim lighting, photorealistic, no text or logos):
  - `hero-guitarist.png` — closeup of a person playing an electric guitar, dramatic side lighting, fades to black on the left (used in the hero).
  - `drums-bg.png` — wide dark drum kit on stage, heavily shadowed, usable as a background behind text (booking section).
  - `og-image.png` — 1200×630 social share image: moody stage scene with room to overlay the logo.
- Reference the generated files from the site; include graceful fallbacks (solid dark background) so the site still builds before images exist.

## Quality bar

- Semantic HTML, accessible components (labels on form fields, alt text, focus states, sufficient contrast, keyboard-navigable menu and carousel).
- SEO: proper `metadata` in `app/layout.tsx` (title, description, Open Graph with `og-image.png`), favicon derived from the logo.
- Fully responsive: verify desktop and mobile layouts after changes.
- Use `next/image` for all imagery.
- `npm run build` must pass before finishing any large change.
- Do not remove working configuration.

## Content notes

- Placeholder contact details are fine (Iowa, USA · (319) 555-1234 · info@jrsmusiclessons.com) but keep them centralized in `data/site.ts` for easy replacement.
- Testimonials from the mockup may be used as starter content.
