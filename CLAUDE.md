# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `pnpm dev` — Start development server
- `pnpm build` — Production build (includes Contentlayer content generation)
- `pnpm start` — Start production server
- `pnpm fmt` — Format and lint with Rome (`rome check --apply-unsafe` + `rome format --write`)

## Architecture

Next.js 13 App Router portfolio site using Contentlayer for MDX content, Tailwind CSS for styling, and Upstash Redis for pageview tracking.

**Key paths:**
- `app/` — App Router pages and components (server components by default)
- `app/components/` — Shared components (particles, nav, card, mdx renderer)
- `content/projects/*.mdx` — Project content files with frontmatter (title, description, published, date, url, repository)
- `pages/api/incr.ts` — Edge function for Redis pageview increment (IP-based dedup with SHA-256)
- `contentlayer.config.js` — Defines `Project` and `Page` document types, MDX plugins
- `util/mouse.ts` — `useMousePosition` hook for particle/card interactions

**Content pipeline:** Contentlayer processes `content/` MDX files at build time. Projects must have `published: true` in frontmatter to appear. Computed fields generate `path` and `slug` from file paths.

**Client vs Server:** Components using interactivity (particles, cards, nav) have `"use client"` directives. Project listing pages fetch Redis pageview counts server-side with 60s ISR revalidation.

## Environment Variables

- `UPSTASH_REDIS_REST_URL` — Redis connection URL
- `UPSTASH_REDIS_REST_TOKEN` — Redis auth token

## Path Alias

`@/*` maps to project root (tsconfig paths).
