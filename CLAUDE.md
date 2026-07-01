# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start development server
- `npm run build` — Production build (includes Contentlayer content generation)
- `npm run start` — Start production server
- `npm run fmt` — Format and lint with Biome (`biome check --write .`)

## Architecture

Next.js 14 App Router portfolio site using Contentlayer for MDX content, Tailwind CSS for styling, Resend for the contact form, and Umami/GTM for analytics.

**Key paths:**
- `app/` — App Router pages and components (server components by default)
- `app/components/` — Shared components (particles, nav, card, mdx renderer)
- `app/i18n/` — Locale context and translation files (12 languages)
- `content/projects/<locale>/*.mdx` — Per-locale project content with frontmatter (title, description, published, date, url, repository)
- `pages/api/contact.ts` — Contact form endpoint (sends email via Resend)
- `contentlayer.config.js` — Defines `Project` and `Page` document types, MDX plugins
- `util/mouse.ts` — `useMousePosition` hook for particle/card interactions

**Content pipeline:** Contentlayer processes `content/` MDX files at build time. Projects must have `published: true` in frontmatter to appear. Computed fields generate `path` and `slug` from file paths.

**Client vs Server:** Components using interactivity (particles, cards, nav) have `"use client"` directives.

## Environment Variables

See `.env.example`:

- `RESEND_API_KEY` — Resend API key for the contact form (server-only)
- `UMAMI_WEBSITE_ID` — Umami analytics website ID (optional)
- `GTM_ID` — Google Tag Manager container ID (optional)
- `NEXT_PUBLIC_BOOKING_URL` — public Google Calendar appointment-schedule URL; services CTAs link here when set, else fall back to `/contact` (optional, client-exposed)

## Path Alias

`@/*` maps to project root (tsconfig paths).
