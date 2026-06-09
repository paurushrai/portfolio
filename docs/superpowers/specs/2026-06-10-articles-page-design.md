# Articles Page — Design Spec

**Date:** 2026-06-10
**Status:** Approved for planning
**Author:** Paurush Rai (with Claude Code)

## Goal

Add an `/articles` page to the portfolio that showcases articles published on Medium
(and, later, other platforms), with **zero ongoing maintenance**: a new post appears
automatically without writing a file, committing, or redeploying.

## Decision Summary

| Decision | Choice | Why |
|---|---|---|
| Data source | Auto-aggregate RSS feeds | Zero per-article hassle; RSS is source-agnostic (Medium, Dev.to, Substack, etc.) |
| Count shown | Latest ~12, sorted by date desc | Medium RSS only emits the 10 newest; a portfolio never needs 100 cards |
| Full archive | "View all on Medium →" link to profile | Covers the long tail without scraping |
| Card style | Cover image + title + snippet + date | Richer, blog-appropriate; text-only fallback when no image |
| i18n | Page chrome localized (12 locales); article content as-fed (English) | RSS is single-source; post text cannot be translated |
| Testing | Vitest for the pure parsing functions only | Riskiest logic; matches quality bar. No runner exists today |
| Freshness | ISR `revalidate = 3600` | New posts appear within an hour, no redeploy |

### Explicitly out of scope (with reasons)
- **Claps / responses / reading-time** — not present in RSS or any Medium API; only obtainable
  by scraping (fragile, ToS-violating). Not worth it for a portfolio.
- **Showing all 100 posts on-site** — Medium RSS caps at 10 newest. Beating the cap requires
  scraping or dead APIs. The "View all" link covers this instead.
- **Per-locale article content** — impossible from a single English feed.

## Configuration

```ts
// app/articles/feeds.ts
export const ARTICLE_FEEDS: FeedSource[] = [
  {
    source: "Medium",
    feedUrl: "https://medium.com/feed/@paurushrai",
    profileUrl: "https://paurushrai.medium.com/",
  },
];

export const MAX_ARTICLES = 12;
```

Adding Dev.to/Substack/etc. later = appending one object. No other code changes.

## Architecture

Mirrors the existing `/projects` pattern: a **server component** fetches data and hands a
plain serializable array to a **client component** that handles locale + rendering.

```
app/articles/
  feeds.ts          # config: feed list + MAX_ARTICLES (shared const)
  types.ts          # ArticleMeta, FeedSource types
  fetchArticles.ts  # server-only: fetch → parse → normalize → merge → sort → cap
  page.tsx          # server: metadata, revalidate, <Navigation/> + <ArticleList/>
  ArticleList.tsx   # client: localized chrome, card grid, "View all", empty state
  ArticleCard.tsx   # client: one card (cover image + text, or text-only fallback)
```

### Data shape

```ts
type FeedSource = { source: string; feedUrl: string; profileUrl: string };

type ArticleMeta = {
  title: string;
  url: string;          // external post link
  source: string;       // "Medium"
  publishedAt: string;  // ISO 8601
  snippet: string;      // HTML-stripped, truncated (SNIPPET_MAX_CHARS)
  imageUrl: string | null; // first <img> from post body, or null
};
```

### `fetchArticles.ts` responsibilities (decomposed into pure, testable helpers)

1. `fetchFeed(source)` — `fetch(feedUrl, { next: { revalidate: 3600 } })`, parse with
   `rss-parser`. Wrapped in try/catch: on any failure, **log and return `[]`** (graceful
   degradation — one bad feed never breaks the page or the build).
2. `extractImage(html)` — first `<img src>` from `content:encoded`, else `null`. Pure.
3. `toSnippet(html)` — strip HTML tags, collapse whitespace, truncate to `SNIPPET_MAX_CHARS`
   with ellipsis. Pure.
4. `normalizeItem(item, source)` — feed item → `ArticleMeta`. Pure.
5. `aggregate(perFeedResults)` — flatten → sort by `publishedAt` desc → cap at `MAX_ARTICLES`.
   Pure.
6. `getArticles()` — orchestrates: fetch all feeds in parallel (`Promise.allSettled`),
   aggregate, return `ArticleMeta[]`.

Pure helpers (2–5) are the unit-test targets; `fetchFeed`/`getArticles` are thin I/O wrappers.

### Parsing dependency

Add **`rss-parser`** (MIT, maintained). Handles RSS 2.0 + Atom, CDATA, namespaces, and
Medium's `content:encoded`. Configure a custom field for `content:encoded`. No hand-rolled
XML/regex parsing (fragile + SonarQube hotspot).

## UI / UX

Reuses existing primitives so the page is visually native:

- `<Navigation/>` header (unchanged component).
- `<main>` with the same paddings/max-width as `LocaleProjectFilter` (`px-6 pt-20 mx-auto
  max-w-7xl ...`).
- Localized `<h1>` title + subtitle, then the `bg-zinc-800` divider.
- Card grid using the existing `<Card>` (mouse-tracking glow, hover border) in the same
  3-column `i % 3` layout as the projects list. Articles are equal-weight — **no** featured/
  top-2 split.
- **`ArticleCard`:**
  - With image: cover `<img>` (lazy, fixed aspect ratio, `object-cover`) above source badge
    (`BookOpen` lucide icon) → title → snippet → formatted date.
  - Without image: same layout minus the cover (clean text-only card).
  - Wrapped in `<a href={url} target="_blank" rel="noopener noreferrer">` (external link;
    projects use internal `<Link>`).
- Bottom: **"View all on Medium →"** anchor to `profileUrl`.
- Empty state: localized message (shown if all feeds fail or return nothing).

## i18n

- Add `nav.articles` and an `articles` block to **all 12 locale files** (`app/i18n/locales/*`):
  `{ title, subtitle, viewAll, empty }`.
- Add the Articles link to:
  - `app/components/nav.tsx` (inner-page header)
  - the `navigation` array in `app/page.tsx` (home page)
- Article titles/snippets render as fetched (English).

## SEO

- `app/articles/page.tsx` exports `metadata` (title, description, canonical
  `https://paurushrai.in/articles`, openGraph) — same shape as `projects/page.tsx`.
- Add `/articles` to `staticRoutes` in `app/sitemap.ts`
  (`priority: 0.8`, `changeFrequency: "weekly"`).

## Error Handling & Reliability

- Per-feed `try/catch` + `Promise.allSettled` → a failing feed is logged and skipped.
- All feeds failing → localized empty state, **never a thrown error / broken build**.
- No swallowed exceptions: failures are logged with the offending feed URL.
- External images: `rel="noopener noreferrer"`, `loading="lazy"`; `next.config` `images`
  config NOT required since we use a plain `<img>` (Medium CDN domains vary). Decision:
  use native `<img>` to avoid maintaining an allow-list of Medium image hosts.

## Testing (Vitest, parser only)

Add `vitest` (devDependency) + `"test": "vitest run"` script.

`app/articles/fetchArticles.test.ts` covers the pure helpers with mocked feed input:
- `extractImage`: returns first img / null when none.
- `toSnippet`: strips tags, truncates at boundary, appends ellipsis only when truncated.
- `normalizeItem`: maps a representative Medium item → correct `ArticleMeta`.
- `aggregate`: sorts by date desc, caps at `MAX_ARTICLES`, merges multiple feeds.
- Degradation: a feed result that is `[]` (failed) is excluded without error.

## Code Quality (SonarQube standards)

- Functions ≤ 40 lines, ≤ 7 params; named constants (`SNIPPET_MAX_CHARS`, `MAX_ARTICLES`,
  `REVALIDATE_SECONDS`) — no magic values.
- Explicit return types on exports; no `any`; no swallowed exceptions.
- Each file single-purpose, < 400 lines (all well under).

## Acceptance Criteria

1. `/articles` renders the latest (≤12) Medium posts as image+text cards, newest first.
2. A new Medium post appears within ~1 hour with no code change/redeploy.
3. "View all on Medium →" links to `https://paurushrai.medium.com/`.
4. Page chrome (nav label, title, subtitle, view-all, empty) is translated in all 12 locales.
5. If Medium is unreachable, the page shows the empty state and the build still succeeds.
6. `npm test` passes; `npm run build` succeeds; `npm run fmt` is clean.
7. Articles link appears in both the home nav and the inner-page nav.
8. `/articles` is in the sitemap.
