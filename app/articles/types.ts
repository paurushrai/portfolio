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
