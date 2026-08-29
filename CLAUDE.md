# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **SystemCall AI** — an AI receptionist product targeting HVAC businesses in the USA. Built with **Next.js 15** (App Router, React 19, TypeScript). Deployed on Vercel with `@vercel/analytics`.

Fonts are `next/font/google` (Geist, Geist Mono, Instrument Serif). Icons are `lucide-react`.

> Note: a legacy standalone `index.html` still exists at the repo root but is not part of the Next.js build — the live site is the `app/` code below.

## Running

```bash
npm run dev      # dev server (Turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint
```

## Architecture

- **`app/layout.tsx`** — root layout: font variables, metadata, `<Analytics />`.
- **`app/page.tsx`** — home page. Composes section components in order: Navbar → Hero → Problem → HowItWorks → Results → Pricing (exported as `BookingCTA`) → FAQ → Footer, plus `ScrollAnimations`.
- **`app/book/page.tsx`** — booking page (`/book`).
- **`app/globals.css`** — all styling: CSS custom properties at `:root`, then per-section rules (selectors like `#how-it-works`, `#faq`) and responsive breakpoints.
- **`components/`** — one file per section (`Hero.tsx`, `Problem.tsx`, etc.) plus booking widgets (`BookingCalendar.tsx`, `BookNavbar.tsx`, `BookPhoneDemo.tsx`).
- **`components/ScrollAnimations.tsx`** — client component running the `IntersectionObserver` behaviors: `.fade-up` reveal, nav scroll effect, count-up on stat cards (`data-target`, `data-prefix`, `data-suffix`).

## Design tokens

Defined in `app/globals.css` `:root`:

| Token | Var | Value |
|---|---|---|
| Background | `--bg` | `#0a0a0a` |
| Surface | `--surface` | `#111111` |
| Surface 2 | `--surface2` | `#1a1a1a` |
| Border | `--border` | `#222222` |
| Accent orange | `--orange` | `#e8590c` |
| Accent amber | `--amber` | `#f5a623` |
| Fonts | `--font-geist` / `--font-mono` / `--font-serif` | Geist / Geist Mono / Instrument Serif |

Hero background uses a CSS `@keyframes heroBgShift` animation on layered `radial-gradient`s — edit that keyframe to change the ambient glow motion.
