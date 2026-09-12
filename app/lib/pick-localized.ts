type Localizable = {
  slug: string;
  locale: string;
  published?: boolean;
};

/** Group by slug and pick each item's translation for `language`, falling back to English. */
export function pickLocalized<T extends Localizable>(items: T[], language: string): T[] {
  const bySlug = new Map<string, Record<string, T>>();
  for (const item of items) {
    let group = bySlug.get(item.slug);
    if (!group) {
      group = {};
      bySlug.set(item.slug, group);
    }
    group[item.locale] = item;
  }

  const result: T[] = [];
  bySlug.forEach((localeMap) => {
    const pick = localeMap[language] ?? localeMap.en;
    if (pick?.published) result.push(pick);
  });
  return result;
}
