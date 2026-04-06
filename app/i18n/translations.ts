export { en } from "./locales/en";
export { de } from "./locales/de";
export { fr } from "./locales/fr";
export { es } from "./locales/es";
export { ja } from "./locales/ja";
export { zh } from "./locales/zh";
export { pt } from "./locales/pt";
export type { Locale } from "./locales/en";

import { en } from "./locales/en";
import { de } from "./locales/de";
import { fr } from "./locales/fr";
import { es } from "./locales/es";
import { ja } from "./locales/ja";
import { zh } from "./locales/zh";
import { pt } from "./locales/pt";

export const translations = { en, de, fr, es, ja, zh, pt } as const;
export type Language = keyof typeof translations;
