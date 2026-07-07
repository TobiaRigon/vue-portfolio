import { createI18n } from "vue-i18n";
import { useLang } from "./js/userLang.js";

import en from "./locales/en.json";
import it from "./locales/it.json";

const lang = useLang();

export const i18n = createI18n({
  legacy: false,
  locale: lang.value,
  fallbackLocale: "en",
  messages: { en, it },
});
