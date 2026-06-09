# Articles Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an `/articles` page that auto-aggregates the latest Medium posts via RSS, rendered as image+text cards, with zero ongoing maintenance.

**Architecture:** A server component (`page.tsx`) fetches + parses feeds at build/revalidate time (ISR, 1h) and hands a plain `ArticleMeta[]` to a client component (`ArticleList`) that renders localized chrome + a card grid. Parsing logic lives in pure, unit-tested helpers. Mirrors the existing `/projects` server→client pattern.

**Tech Stack:** Next.js 14 App Router, TypeScript (strict), `rss-parser`, Tailwind, Vitest, lucide-react, framer-motion (`Card`).

---

## File Structure

```
app/articles/
  types.ts            # ArticleMeta, FeedSource types
  feeds.ts            # config: ARTICLE_FEEDS, MAX_ARTICLES
  fetchArticles.ts    # server: fetch → parse → normalize → aggregate (pure helpers + I/O)
  fetchArticles.test.ts  # Vitest: pure helper unit tests
  ArticleCard.tsx     # client: one card (cover image + text, text-only fallback)
  ArticleList.tsx     # client: localized chrome, card grid, view-all, empty state
  page.tsx            # server: metadata, revalidate, Navigation + ArticleList
vitest.config.ts      # test runner config
```
**Modified:** `app/components/nav.tsx`, `app/page.tsx`, `app/sitemap.ts`, `app/i18n/locales/*.ts` (12 files), `package.json`.

---

### Task 1: Add dependencies and test runner

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`

- [ ] **Step 1: Install rss-parser and vitest**

Run:
```bash
npm install rss-parser && npm install -D vitest
```
Expected: both added to `package.json`, no errors.

- [ ] **Step 2: Add the `test` script**

In `package.json`, add to `"scripts"` (after `"fmt"`):
```json
    "test": "vitest run"
```

- [ ] **Step 3: Create the Vitest config**

Create `vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["app/**/*.test.ts"],
  },
});
```

- [ ] **Step 4: Verify the runner works (no tests yet)**

Run: `npm test`
Expected: Vitest runs, reports "No test files found" (exit is fine) — confirms it's wired.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.ts
git commit -m "chore(articles): add rss-parser and vitest test runner"
```

---

### Task 2: Types and feed config

**Files:**
- Create: `app/articles/types.ts`
- Create: `app/articles/feeds.ts`

- [ ] **Step 1: Create the types**

Create `app/articles/types.ts`:
```ts
export type FeedSource = {
  source: string;
  feedUrl: string;
  profileUrl: string;
};

export type ArticleMeta = {
  title: string;
  url: string;
  source: string;
  publishedAt: string; // ISO 8601
  snippet: string;
  imageUrl: string | null;
};
```

- [ ] **Step 2: Create the feed config**

Create `app/articles/feeds.ts`:
```ts
import type { FeedSource } from "./types";

export const ARTICLE_FEEDS: FeedSource[] = [
  {
    source: "Medium",
    feedUrl: "https://medium.com/feed/@paurushrai",
    profileUrl: "https://paurushrai.medium.com/",
  },
];

export const MAX_ARTICLES = 12;
```

- [ ] **Step 3: Commit**

```bash
git add app/articles/types.ts app/articles/feeds.ts
git commit -m "feat(articles): add article types and feed config"
```

---

### Task 3: Pure parsing helpers (TDD)

**Files:**
- Create: `app/articles/fetchArticles.test.ts`
- Create: `app/articles/fetchArticles.ts`

- [ ] **Step 1: Write the failing tests**

Create `app/articles/fetchArticles.test.ts`:
```ts
import { describe, expect, it } from "vitest";
import {
  aggregate,
  extractImage,
  normalizeItem,
  toSnippet,
} from "./fetchArticles";
import type { ArticleMeta } from "./types";

describe("extractImage", () => {
  it("returns the first img src", () => {
    expect(
      extractImage('<p>hi</p><img src="https://x/a.png"><img src="b.png">'),
    ).toBe("https://x/a.png");
  });
  it("returns null when there is no image or no input", () => {
    expect(extractImage("<p>no image</p>")).toBeNull();
    expect(extractImage(undefined)).toBeNull();
  });
});

describe("toSnippet", () => {
  it("strips tags and collapses whitespace", () => {
    expect(toSnippet("<p>Hello   <b>world</b></p>")).toBe("Hello world");
  });
  it("truncates long text with an ellipsis", () => {
    const out = toSnippet(`<p>${"a".repeat(200)}</p>`);
    expect(out.endsWith("…")).toBe(true);
    expect(out.length).toBeLessThanOrEqual(161);
  });
  it("does not append an ellipsis to short text", () => {
    expect(toSnippet("<p>short</p>")).toBe("short");
  });
});

describe("normalizeItem", () => {
  const item = {
    title: " My Post ",
    link: "https://medium.com/p/1",
    isoDate: "2026-05-01T00:00:00.000Z",
    contentEncoded: '<img src="https://img/c.png"><p>Body text here.</p>',
  };
  it("maps a feed item to ArticleMeta", () => {
    expect(normalizeItem(item, "Medium")).toEqual({
      title: "My Post",
      url: "https://medium.com/p/1",
      source: "Medium",
      publishedAt: "2026-05-01T00:00:00.000Z",
      snippet: "Body text here.",
      imageUrl: "https://img/c.png",
    });
  });
  it("returns null when required fields are missing", () => {
    expect(normalizeItem({ title: "x" }, "Medium")).toBeNull();
  });
  it("returns null on an unparseable date", () => {
    expect(
      normalizeItem({ ...item, isoDate: "not-a-date", pubDate: undefined }, "Medium"),
    ).toBeNull();
  });
});

describe("aggregate", () => {
  const mk = (url: string, date: string): ArticleMeta => ({
    title: url,
    url,
    source: "Medium",
    publishedAt: date,
    snippet: "",
    imageUrl: null,
  });
  it("merges feeds and sorts by date descending", () => {
    const out = aggregate([
      [mk("a", "2026-01-01T00:00:00.000Z")],
      [mk("b", "2026-03-01T00:00:00.000Z")],
    ]);
    expect(out.map((a) => a.url)).toEqual(["b", "a"]);
  });
  it("caps the result at MAX_ARTICLES (12)", () => {
    const many = Array.from({ length: 20 }, (_, i) =>
      mk(`p${i}`, `2026-01-${String(i + 1).padStart(2, "0")}T00:00:00.000Z`),
    );
    expect(aggregate([many])).toHaveLength(12);
  });
  it("ignores empty (failed) feed results", () => {
    expect(
      aggregate([[], [mk("a", "2026-01-01T00:00:00.000Z")], []]),
    ).toHaveLength(1);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — cannot import `aggregate`/`extractImage`/`normalizeItem`/`toSnippet` (module/exports don't exist yet).

- [ ] **Step 3: Implement `fetchArticles.ts`**

Create `app/articles/fetchArticles.ts`:
```ts
import Parser from "rss-parser";
import { ARTICLE_FEEDS, MAX_ARTICLES } from "./feeds";
import type { ArticleMeta, FeedSource } from "./types";

const SNIPPET_MAX_CHARS = 160;
const REVALIDATE_SECONDS = 3600;

const IMG_SRC_RE = /<img[^>]+src=["']([^"']+)["']/i;
const HTML_TAG_RE = /<[^>]*>/g;
const WHITESPACE_RE = /\s+/g;

type MediumItem = {
  title?: string;
  link?: string;
  isoDate?: string;
  pubDate?: string;
  content?: string;
  contentEncoded?: string;
};

const parser = new Parser<unknown, MediumItem>({
  customFields: { item: [["content:encoded", "contentEncoded"]] },
});

export function extractImage(html: string | undefined): string | null {
  if (!html) return null;
  const match = IMG_SRC_RE.exec(html);
  return match ? match[1] : null;
}

export function toSnippet(html: string | undefined): string {
  if (!html) return "";
  const text = html
    .replace(HTML_TAG_RE, " ")
    .replace(WHITESPACE_RE, " ")
    .trim();
  if (text.length <= SNIPPET_MAX_CHARS) return text;
  return `${text.slice(0, SNIPPET_MAX_CHARS).trimEnd()}…`;
}

export function normalizeItem(
  item: MediumItem,
  source: string,
): ArticleMeta | null {
  const title = item.title?.trim();
  const url = item.link?.trim();
  const dateStr = item.isoDate ?? item.pubDate;
  if (!title || !url || !dateStr) return null;

  const time = new Date(dateStr).getTime();
  if (Number.isNaN(time)) return null;

  const body = item.contentEncoded ?? item.content;
  return {
    title,
    url,
    source,
    publishedAt: new Date(time).toISOString(),
    snippet: toSnippet(body),
    imageUrl: extractImage(body),
  };
}

export function aggregate(perFeed: ArticleMeta[][]): ArticleMeta[] {
  return perFeed
    .flat()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, MAX_ARTICLES);
}

async function fetchFeed(source: FeedSource): Promise<ArticleMeta[]> {
  try {
    const res = await fetch(source.feedUrl, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(
        `Articles: feed ${source.feedUrl} returned HTTP ${res.status}`,
      );
      return [];
    }
    const feed = await parser.parseString(await res.text());
    return feed.items
      .map((item) => normalizeItem(item, source.source))
      .filter((a): a is ArticleMeta => a !== null);
  } catch (error) {
    console.error(`Articles: failed to load feed ${source.feedUrl}`, error);
    return [];
  }
}

export async function getArticles(): Promise<ArticleMeta[]> {
  const results = await Promise.all(ARTICLE_FEEDS.map(fetchFeed));
  return aggregate(results);
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS — all 11 assertions green.

- [ ] **Step 5: Commit**

```bash
git add app/articles/fetchArticles.ts app/articles/fetchArticles.test.ts
git commit -m "feat(articles): add RSS fetch, parse, and aggregate helpers with tests"
```

---

### Task 4: i18n — add `nav.articles` + `articles` block to all 12 locales

**Files (modify all):** `app/i18n/locales/{en,de,fr,es,ja,zh,pt,hi,ko,it,ru,tr}.ts`

> The `Locale` type is derived from `en.ts`, so **every** locale must gain the same keys or TypeScript fails. Edit `en.ts` first, then the rest.
> In each file: (a) add an `articles` entry to the `nav` object (after `projects`), and (b) add a top-level `articles` block (after the `projects` block).

- [ ] **Step 1: en.ts**

In the `nav` object add: `articles: "Articles",`
After the `projects` block add:
```ts
  articles: {
    title: "Articles",
    subtitle:
      "Thoughts on engineering, tools, and building products — published on Medium.",
    viewAll: "View all on Medium",
    empty: "No articles yet — check back soon.",
  },
```

- [ ] **Step 2: de.ts**

`nav`: `articles: "Artikel",`
```ts
  articles: {
    title: "Artikel",
    subtitle:
      "Gedanken über Engineering, Tools und Produktentwicklung — veröffentlicht auf Medium.",
    viewAll: "Alle auf Medium ansehen",
    empty: "Noch keine Artikel — schau bald wieder vorbei.",
  },
```

- [ ] **Step 3: fr.ts**

`nav`: `articles: "Articles",`
```ts
  articles: {
    title: "Articles",
    subtitle:
      "Réflexions sur l'ingénierie, les outils et la création de produits — publiées sur Medium.",
    viewAll: "Voir tout sur Medium",
    empty: "Pas encore d'articles — revenez bientôt.",
  },
```

- [ ] **Step 4: es.ts**

`nav`: `articles: "Artículos",`
```ts
  articles: {
    title: "Artículos",
    subtitle:
      "Reflexiones sobre ingeniería, herramientas y creación de productos — publicadas en Medium.",
    viewAll: "Ver todo en Medium",
    empty: "Aún no hay artículos — vuelve pronto.",
  },
```

- [ ] **Step 5: ja.ts**

`nav`: `articles: "記事",`
```ts
  articles: {
    title: "記事",
    subtitle:
      "エンジニアリング、ツール、プロダクト開発についての考察 — Mediumに掲載。",
    viewAll: "Mediumですべて見る",
    empty: "まだ記事がありません — また後でご確認ください。",
  },
```

- [ ] **Step 6: zh.ts**

`nav`: `articles: "文章",`
```ts
  articles: {
    title: "文章",
    subtitle: "关于工程、工具和产品打造的思考 — 发布于 Medium。",
    viewAll: "在 Medium 上查看全部",
    empty: "暂无文章 — 请稍后再来。",
  },
```

- [ ] **Step 7: pt.ts**

`nav`: `articles: "Artigos",`
```ts
  articles: {
    title: "Artigos",
    subtitle:
      "Reflexões sobre engenharia, ferramentas e criação de produtos — publicadas no Medium.",
    viewAll: "Ver tudo no Medium",
    empty: "Ainda não há artigos — volte em breve.",
  },
```

- [ ] **Step 8: hi.ts**

`nav`: `articles: "लेख",`
```ts
  articles: {
    title: "लेख",
    subtitle:
      "इंजीनियरिंग, टूल्स और प्रोडक्ट बनाने पर विचार — Medium पर प्रकाशित।",
    viewAll: "Medium पर सभी देखें",
    empty: "अभी कोई लेख नहीं — जल्द ही फिर देखें।",
  },
```

- [ ] **Step 9: ko.ts**

`nav`: `articles: "글",`
```ts
  articles: {
    title: "글",
    subtitle: "엔지니어링, 도구, 제품 개발에 대한 생각 — Medium에 게시.",
    viewAll: "Medium에서 모두 보기",
    empty: "아직 글이 없습니다 — 곧 다시 확인해 주세요.",
  },
```

- [ ] **Step 10: it.ts**

`nav`: `articles: "Articoli",`
```ts
  articles: {
    title: "Articoli",
    subtitle:
      "Riflessioni su ingegneria, strumenti e creazione di prodotti — pubblicate su Medium.",
    viewAll: "Vedi tutto su Medium",
    empty: "Ancora nessun articolo — torna presto.",
  },
```

- [ ] **Step 11: ru.ts**

`nav`: `articles: "Статьи",`
```ts
  articles: {
    title: "Статьи",
    subtitle:
      "Мысли об инженерии, инструментах и создании продуктов — опубликовано на Medium.",
    viewAll: "Смотреть всё на Medium",
    empty: "Пока нет статей — загляните позже.",
  },
```

- [ ] **Step 12: tr.ts**

`nav`: `articles: "Makaleler",`
```ts
  articles: {
    title: "Makaleler",
    subtitle:
      "Mühendislik, araçlar ve ürün geliştirme üzerine düşünceler — Medium'da yayınlandı.",
    viewAll: "Tümünü Medium'da gör",
    empty: "Henüz makale yok — yakında tekrar kontrol edin.",
  },
```

- [ ] **Step 13: Type-check all locales compile**

Run: `npx tsc --noEmit`
Expected: no errors (every locale matches the `Locale` shape derived from `en.ts`).

- [ ] **Step 14: Commit**

```bash
git add app/i18n/locales
git commit -m "feat(articles): add articles + nav.articles translations for all 12 locales"
```

---

### Task 5: ArticleCard component

**Files:**
- Create: `app/articles/ArticleCard.tsx`

- [ ] **Step 1: Implement the card**

Create `app/articles/ArticleCard.tsx`:
```tsx
"use client";
import { BookOpen } from "lucide-react";
import { Card } from "../components/card";
import type { ArticleMeta } from "./types";

const DATE_LOCALE = "en-US";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(DATE_LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Card>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <article className="flex flex-col h-full">
          {article.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.imageUrl}
              alt=""
              loading="lazy"
              className="object-cover w-full aspect-[16/9] border-b border-zinc-800"
            />
          ) : null}
          <div className="p-4 md:p-8">
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase duration-1000 text-zinc-400 group-hover:text-zinc-200">
                <BookOpen className="w-4 h-4" />
                <span>{article.source}</span>
              </span>
              <time
                dateTime={article.publishedAt}
                className="text-xs text-zinc-500 duration-1000 group-hover:text-zinc-300"
              >
                {formatDate(article.publishedAt)}
              </time>
            </div>
            <h2 className="z-20 mt-4 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
              {article.title}
            </h2>
            <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
              {article.snippet}
            </p>
          </div>
        </article>
      </a>
    </Card>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/articles/ArticleCard.tsx
git commit -m "feat(articles): add ArticleCard with cover image and text fallback"
```

---

### Task 6: ArticleList component

**Files:**
- Create: `app/articles/ArticleList.tsx`

- [ ] **Step 1: Implement the list**

Create `app/articles/ArticleList.tsx`:
```tsx
"use client";
import { useLanguage } from "../i18n/LanguageContext";
import { ArticleCard } from "./ArticleCard";
import { ARTICLE_FEEDS } from "./feeds";
import type { ArticleMeta } from "./types";

const COLUMNS = 3;
const FALLBACK_PROFILE_URL = "https://medium.com";
const PRIMARY_PROFILE_URL =
  ARTICLE_FEEDS[0]?.profileUrl ?? FALLBACK_PROFILE_URL;

export function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  const { t } = useLanguage();

  return (
    <main className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {t.articles.title}
        </h1>
        <p className="mt-4 text-zinc-400">{t.articles.subtitle}</p>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      {articles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-lg text-zinc-400">{t.articles.empty}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {Array.from({ length: COLUMNS }, (_, col) => (
            <div key={col} className="grid grid-cols-1 gap-4">
              {articles
                .filter((_, i) => i % COLUMNS === col)
                .map((article) => (
                  <ArticleCard key={article.url} article={article} />
                ))}
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center pt-4">
        <a
          href={PRIMARY_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm duration-200 text-zinc-300 hover:text-zinc-100"
        >
          {t.articles.viewAll} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/articles/ArticleList.tsx
git commit -m "feat(articles): add ArticleList grid with view-all and empty state"
```

---

### Task 7: Articles page (server)

**Files:**
- Create: `app/articles/page.tsx`

- [ ] **Step 1: Implement the page**

Create `app/articles/page.tsx`:
```tsx
import type { Metadata } from "next";
import { Navigation } from "../components/nav";
import { ArticleList } from "./ArticleList";
import { getArticles } from "./fetchArticles";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Articles — Paurush Rai | Senior Software Engineer",
  description:
    "Articles by Paurush Rai on software engineering, developer tools, AI integration, and building production-grade products — published on Medium.",
  keywords: [
    "Paurush Rai Articles",
    "Software Engineering Blog",
    "Frontend Engineering Articles",
    "Developer Tools",
    "Medium",
  ],
  alternates: {
    canonical: "https://paurushrai.in/articles",
  },
  openGraph: {
    title: "Articles — Paurush Rai | Senior Software Engineer",
    description:
      "Writing on software engineering, developer tools, and building products.",
    url: "https://paurushrai.in/articles",
  },
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="relative pb-16">
      <Navigation />
      <ArticleList articles={articles} />
    </div>
  );
}
```

- [ ] **Step 2: Verify the page renders with live data**

Run: `npm run dev`, open `http://localhost:3000/articles`.
Expected: latest Medium posts render as image+text cards, newest first; "View all on Medium" links to `https://paurushrai.medium.com/`. (Stop the dev server after checking.)

- [ ] **Step 3: Commit**

```bash
git add app/articles/page.tsx
git commit -m "feat(articles): add /articles server page with ISR and metadata"
```

---

### Task 8: Wire navigation links

**Files:**
- Modify: `app/components/nav.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Add the link to the inner-page nav**

In `app/components/nav.tsx`, immediately after the `/projects` `<Link>` block (closes at the line with `{t.nav.projects}</Link>`), add:
```tsx
            <Link
              href="/articles"
              className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm rounded px-1"
            >
              {t.nav.articles}
            </Link>
```

- [ ] **Step 2: Add the link to the home-page nav**

In `app/page.tsx`, in the `navigation` array, add after the `projects` entry:
```tsx
    { name: t.nav.articles, href: "/articles" },
```

- [ ] **Step 3: Verify links appear**

Run: `npm run dev`, check the home page and any inner page (e.g. `/about`) — "Articles" link is present and navigates to `/articles`. (Stop the dev server after.)

- [ ] **Step 4: Commit**

```bash
git add app/components/nav.tsx app/page.tsx
git commit -m "feat(articles): add Articles link to home and inner-page nav"
```

---

### Task 9: Sitemap entry

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Add `/articles` to static routes**

In `app/sitemap.ts`, inside the `staticRoutes` array, after the `/projects` entry, add:
```ts
		{
			url: `${baseUrl}/articles`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
```

- [ ] **Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat(articles): add /articles to sitemap"
```

---

### Task 10: Final verification

- [ ] **Step 1: Format + lint**

Run: `npm run fmt`
Expected: Biome formats/lints clean (no errors). Stage any reformatting.

- [ ] **Step 2: Tests**

Run: `npm test`
Expected: all parser tests PASS.

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no type errors.

- [ ] **Step 4: Production build**

Run: `npm run build`
Expected: build succeeds; `/articles` appears in the route output.

- [ ] **Step 5: Commit any formatting changes**

```bash
git add -A
git commit -m "chore(articles): apply formatting and final cleanup" || echo "nothing to commit"
```

---

## Acceptance Criteria (from spec)

1. `/articles` renders the latest (≤12) Medium posts as image+text cards, newest first. — Tasks 3, 5, 6, 7
2. A new Medium post appears within ~1h with no code change/redeploy. — `revalidate = 3600` (Task 7) + fetch revalidate (Task 3)
3. "View all on Medium →" links to `https://paurushrai.medium.com/`. — Tasks 2, 6
4. Page chrome translated in all 12 locales. — Task 4
5. If Medium is unreachable, page shows empty state; build still succeeds. — Task 3 (graceful degradation), Task 6 (empty state)
6. `npm test`, `npm run build`, `npm run fmt` all clean. — Task 10
7. Articles link in both home and inner-page nav. — Task 8
8. `/articles` in the sitemap. — Task 9
