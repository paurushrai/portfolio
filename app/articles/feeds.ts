import type { FeedSource } from "./types";

export const ARTICLE_FEEDS: FeedSource[] = [
  {
    source: "Medium",
    feedUrl: "https://medium.com/feed/@paurushrai",
    profileUrl: "https://paurushrai.medium.com/",
  },
];

export const MAX_ARTICLES = 12;

// Custom cover for posts whose feed body has no usable image (Medium only emits
// inline images, not the post's cover). Keyed by the stable Medium post id
// (the trailing hex in the article URL) so it survives title/slug edits.
// An override takes precedence over any image extracted from the post body.
export const COVER_OVERRIDES: Record<string, string> = {
  b8afc00eab3d: "/articles/lti-1-3-cover.svg",
};
