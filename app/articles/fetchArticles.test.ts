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
  it("skips Medium tracking pixels and returns the first real image", () => {
    expect(
      extractImage(
        '<img src="https://medium.com/_/stat?event=post.clientViewed&postId=1"><img src="https://cdn/real.png">',
      ),
    ).toBe("https://cdn/real.png");
  });
  it("returns null when the only image is a tracking pixel", () => {
    expect(
      extractImage('<img src="https://medium.com/_/stat?event=x">'),
    ).toBeNull();
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
      normalizeItem(
        { ...item, isoDate: "not-a-date", pubDate: undefined },
        "Medium",
      ),
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
