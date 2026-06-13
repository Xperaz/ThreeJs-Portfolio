# Azedine Ouhadou — Portfolio

A personal developer portfolio with an interactive 3D experience. The landing
page renders a real-time 3D avatar that follows your cursor and waves hello,
and the rest of the site walks through who I am, what I build, and how to reach
me — wrapped in scroll-driven and motion animations throughout.

🔗 Live: [azedineouhadou.me](https://azedineouhadou.me)

## Sections

- **Home** — an interactive 3D avatar (React Three Fiber) that tracks the mouse,
  with an animated intro and a downloadable CV.
- **About** — a horizontal, scroll-driven story that snaps through a short
  introduction one panel at a time.
- **Skills** — the tech stack, with animated skill icons.
- **Projects** — a card grid; each card opens a dialog with details, the live
  link/repo, and the technologies used.
- **Experience** — a vertical timeline of roles and accomplishments.
- **Contact** — a validated contact form that sends email via EmailJS, beside a
  second 3D model.

A custom animated cursor reacts to hover targets across every page.

## Tech Stack

- **Next.js 13** (App Router) + **React 18**
- **React Three Fiber** / **drei** / **three.js** — 3D avatar and models
- **Framer Motion** — UI/title animations and the navbar highlight
- **GSAP** (ScrollTrigger) — the About page's scroll-snap slider
- **Tailwind CSS** + **Radix UI** (Colors, Dialog, Icons)
- **react-hook-form** + **yup** — contact form validation
- **EmailJS** — contact form delivery
- **Vercel Analytics** + **Speed Insights**

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

The contact form needs EmailJS credentials. Create a `.env.local`:

```bash
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint (next/core-web-vitals) |

Project images can be re-optimized with `node scripts/optimize-assets.mjs`
(converts heavy GIFs/PNGs to WebP via `sharp`).

## Architecture

See [`CLAUDE.md`](./CLAUDE.md) for the high-level architecture — routing, the
per-page custom-cursor pattern, how 3D models load, and where portfolio content
lives (`src/components/constant/index.js`).
