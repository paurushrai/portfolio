export { en } from "./locales/en";
export { de } from "./locales/de";
export { fr } from "./locales/fr";
export { es } from "./locales/es";
export { ja } from "./locales/ja";
export { zh } from "./locales/zh";
export { pt } from "./locales/pt";
export { hi } from "./locales/hi";
export { ko } from "./locales/ko";
export { it } from "./locales/it";
export { ru } from "./locales/ru";
export { tr } from "./locales/tr";
export type { Locale } from "./locales/en";

import { en } from "./locales/en";
import { de } from "./locales/de";
import { fr } from "./locales/fr";
import { es } from "./locales/es";
import { ja } from "./locales/ja";
import { zh } from "./locales/zh";
import { pt } from "./locales/pt";
import { hi } from "./locales/hi";
import { ko } from "./locales/ko";
import { it } from "./locales/it";
import { ru } from "./locales/ru";
import { tr } from "./locales/tr";

export const translations = { en, de, fr, es, ja, zh, pt, hi, ko, it, ru, tr } as const;
export type Language = keyof typeof translations;
