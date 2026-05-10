# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-file landing page for **AutoPilot AI** — an AI receptionist product targeting HVAC businesses in the USA. Everything lives in `index.html` (inline CSS + JS, no build step, no dependencies except Google Fonts).

## Running

Open `index.html` directly in a browser — no server needed.

## Architecture

All code is in one file with three logical blocks:

1. **`<style>`** — CSS custom properties at `:root`, then sections in order: navbar → hero → problem → how-it-works → results → pricing → footer → animations → responsive breakpoints.
2. **`<body>`** — Seven sections matching the CSS order. Scroll-animated elements use class `fade-up`; stat cards use `data-target`, `data-prefix`, `data-suffix` attributes for count-up.
3. **`<script>`** — Three behaviors: nav scroll effect, `IntersectionObserver` for `.fade-up` reveal, `IntersectionObserver` for count-up on `.stat-card`.

## Design tokens

| Token | Value |
|---|---|
| Background | `#0a0a0a` |
| Surface | `#111111` |
| Accent blue | `#3b82f6` |
| Accent cyan | `#06b6d4` |
| Font | Inter (Google Fonts) |

Hero background uses a CSS `@keyframes heroBgShift` animation on layered `radial-gradient`s — edit that keyframe to change the ambient glow motion.
