import Parser from "rss-parser";
import { ARTICLE_FEEDS, MAX_ARTICLES } from "./feeds";
import type { ArticleMeta, FeedSource } from "./types";

const SNIPPET_MAX_CHARS = 160;
// Keep in sync with `export const revalidate` in page.tsx (Next requires that to
// be a static literal, so it cannot import this constant).
export const REVALIDATE_SECONDS = 3600;
const FETCH_TIMEOUT_MS = 10_000;

const IMG_SRC_RE = /<img[^>]+src=["']([^"']+)["']/gi;
const HTML_TAG_RE = /<[^>]*>/g;
const WHITESPACE_RE = /\s+/g;
// Medium injects a 1x1 tracking pixel (e.g. medium.com/_/stat?event=...) as an
// <img>; skip it so posts without a real cover resolve to "no image".
const TRACKING_IMG_RE = /\/_\/stat|\/stat\?/i;

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
  for (const match of html.matchAll(IMG_SRC_RE)) {
    const src = match[1];
    if (!TRACKING_IMG_RE.test(src)) return src;
  }
  return null;
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
    // Fetch manually (not parser.parseURL) so Next's ISR cache applies to the
    // request; the timeout bounds build/revalidate time if Medium hangs.
    const res = await fetch(source.feedUrl, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
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
