# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```

No test suite is configured.

## Stack

- **Next.js 16.2.6** + **React 19.2.4** — read `node_modules/next/dist/docs/` before touching Next.js APIs (see AGENTS.md)
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `globals.css`, not the v3 `@tailwind` directives
- **TypeScript** — strict mode implied by tsconfig

## Architecture

Single-page portfolio for Veta studio. All content renders from one route: `src/app/page.tsx` stacks every section component in order. No routing, no API routes, no server actions.

**Component layout** (top → bottom on page):
`Navbar` → `Hero` → `Estudio` → `Servicios` → `Proyectos` → `Equipo` → `Contacto` → `Footer`

All components are server components except `Navbar` (`"use client"` for scroll state).

**Content is hardcoded** inside the components themselves — project cards in `Proyectos.tsx`, team members in `Equipo.tsx`, contact info in `Contacto.tsx`. No CMS or external data fetching.

## Styling conventions

Custom utility classes are defined in `globals.css` and used throughout:
- `.eyebrow` — section label (mono, uppercase, `text-brand`, tracking-wide)
- `.section-padding` — `py-24 md:py-32`
- `.container-custom` — `max-w-7xl` with responsive horizontal padding

Brand color: `--color-brand: #00458B` / `--color-brand-dark: #00366D` (referenced as `text-brand`, `bg-brand`, etc.)

Two Google Fonts loaded in `layout.tsx` as CSS variables: `--font-montserrat` (sans, body) and `--font-playfair` (serif, editorial headings in Estudio).

## Deployment

Deployed to Vercel. `vercel.json` only sets `name: "portfolio-veta"`.
