# NovaWell

**NovaWell Community Health Initiative** — a landing site for a women's health outreach program launching in Kwara State, Nigeria. The pilot brings free screenings, reproductive health education, and referral guidance directly into rural communities.

## What this is

A single-page marketing site designed to attract three audiences simultaneously:

- **Partners and funders** — government bodies, NGOs, and donors evaluating whether to back or co-run the outreach
- **Volunteers and health professionals** — clinicians and community organizers who want to contribute time or skill to the pilot
- **Community members** — women and families in Kwara who should know when and where to show up

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, React 19) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Forms | [React Hook Form](https://react-hook-form.com) |
| UI components | [shadcn/ui](https://ui.shadcn.com) (New York style) |
| Icons | [Lucide React](https://lucide.dev) |
| Typography | Bricolage Grotesque (display) + Inter (body) via `next/font` |
| Language | TypeScript |

## Getting started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project structure

```
src/
├── app/
│   ├── globals.css        # Design tokens, base styles, shadcn bridge
│   ├── layout.tsx         # Root layout, font loading
│   └── page.tsx           # Page composition
├── components/
│   ├── sections/          # Page sections (Hero, About, FocusAreas, ...)
│   └── ui/                # shadcn primitives (Button, Input, Textarea, Label)
└── lib/
    └── utils.ts           # cn() utility for class merging
```

## Design system

The color palette is built around a committed forest-green primary with OKLCH-tinted neutrals. Tokens are defined in `src/app/globals.css` under the `@theme` block and map to Tailwind utility classes.

| Token | Value | Role |
|-------|-------|------|
| `--color-forest` | `#17624A` | Primary brand, CTAs, ImpactStats section drench |
| `--color-earth` | `#C4643E` | Accent, timeline markers |
| `--color-charcoal` | `#141C18` | Dark text, dark section backgrounds |
| `--color-cream` | `oklch(96.5% 0.012 152)` | Main section background (green-tinted) |
| `--color-stone` | `#60706A` | Body text, secondary labels |
| `--color-mint` | `#EAF3EF` | Light accent surfaces |

Typography uses **Bricolage Grotesque** for all headings (h1–h4) and **Inter** for body, labels, and UI. Both are loaded via `next/font/google` for zero layout shift.

## Design context

See [`PRODUCT.md`](./PRODUCT.md) for the full strategic brief — register, target audiences, brand personality, anti-references, and design principles.

The `.impeccable/` directory contains design critique snapshots generated during development. Run `/impeccable critique` in Claude Code to re-audit after changes.

## Deployment

Ready to deploy on [Vercel](https://vercel.com). Connect the GitHub repository and deployments happen automatically on push to `main`.

Images are served from [Unsplash](https://unsplash.com) via CDN — no additional image hosting required.

---

*NovaWell Community Health Initiative — Preventive health, closer to home.*
