# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio for Azedine Ouhadou. Next.js 13 (App Router) site combining
3D visualizations (React Three Fiber), animations (Framer Motion + GSAP), and
TailwindCSS. JavaScript only — no TypeScript despite `@types/three` being present.

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve production build
npm run lint    # next lint (eslint-config-next, core-web-vitals)
```

There is no test runner configured.

## Environment

The contact form (`src/components/contact/Form.jsx`) sends mail via EmailJS and
needs these public env vars (e.g. in `.env.local`):

- `NEXT_PUBLIC_EMAIL_SERVICE_ID`
- `NEXT_PUBLIC_EMAIL_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAIL_PUBLIC_KEY`

## Architecture

- **Routing** lives in `src/app/` (App Router). Each route's `page.jsx` is a thin
  Server Component that sets the page wrapper (background gradient, layout) and
  renders one feature component from `src/components/<feature>/`. The home route
  is `src/app/page.js`; other routes are `about/`, `skills/`, `projects/`,
  `experience/`, `contact/`.
- **Feature components** are grouped by route under `src/components/<feature>/`,
  with cross-route pieces in `src/components/shared/` (`Navbar`, `Logo`, `Social`,
  `Cursor`, `Cv`, `Scroller`). `Header.jsx` ties Logo + Navbar + Social together.
- **Path alias**: `@/*` maps to `src/*` (see `jsconfig.json`). Import app code as
  `@/components/...`; import static assets from `../../../public` (the barrel).

### Custom cursor pattern (important)

There is a custom animated cursor instead of a global provider. Each top-level
"page shell" component is a `"use client"` component that:

1. Holds `const [cursorVariant, setCursorVariant] = useState("default")`,
2. Wraps its children in `<CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>`,
3. Renders `<Cursor cursorVariant={cursorVariant} />`.

`CursorContext` (`src/context/CursorContext.jsx`) is a bare `createContext(null)`.
Interactive elements call `setCursorVariant("text" | "navLinks" | "default")` on
`onMouseEnter`/`onMouseLeave` to morph the cursor (variants defined in
`shared/Cursor.jsx`). When adding a new route, replicate this provider + `<Cursor />`
setup in that route's shell component — it is **not** inherited from `layout.js`.

### 3D models

- React Three Fiber `<Canvas>` scenes live in feature folders (e.g.
  `home/ThreeModle.jsx` → `home/Avatar.jsx`, `contact/Model.jsx`).
- Models/animations load from `public/` by **relative path** (e.g.
  `useGLTF("models/650c6588e560d493958e1428.glb")`, `useFBX("animations/Greeting.fbx")`),
  not via the `@/` alias. Always wrap scene contents in `<Suspense>` and call
  `useGLTF.preload(...)` at module scope.

### Content / data

All portfolio content (skills, technologies, projects, experiences) is hardcoded
as arrays in **`src/components/constant/index.js`** and exported from there. To
add a project, skill, or job, edit that file — components map over these arrays.
Each entry references an image/icon imported from the `public/index.js` barrel, so
new assets must be added to `public/` and re-exported from `public/index.js` first.

### Styling

- TailwindCSS with Radix Colors (`mauve`, `violet`, `green`, `blackA`) merged into
  the theme; custom `allison` font family via CSS variable. See `tailwind.config.js`.
- Bespoke layout/animation classes (e.g. `backgroundGradient`, `center-model`,
  `cursor`, `home-cv`, `timeline-*`, per-skill `:hover` styles) are hand-written in
  `src/app/globals.css` (~400 lines). Check there before inventing a new utility.
- Fonts (`Poppins`, `Allison`) are loaded with `next/font/google` in `layout.js`.
