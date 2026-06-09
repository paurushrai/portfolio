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
