import { supabase } from "../lib/supabase";
import { unflattenTexts } from "./unflattenTexts";
import { withTimeout } from "./withTimeout";

export async function fetchTexts(lang) {
  const { data, error } = await withTimeout(
    supabase
      .from("texts")
      .select("key, content")
      .eq("lang", lang)
      .order("key", { ascending: true }),
    5000
  );

  if (error) {
    console.error(`Errore nel caricamento testi (${lang}) da Supabase:`, error);
    return [];
  }

  return data || [];
}

const loadedLangs = new Set();

// I testi statici di src/locales/*.json restano il fallback: vengono
// sovrascritti in-place non appena Supabase risponde, senza stato di loading.
export async function loadTextsIntoI18n(i18n, lang) {
  if (loadedLangs.has(lang)) return;

  const entries = await fetchTexts(lang);
  if (!entries.length) return;

  const nested = unflattenTexts(entries);
  i18n.global.mergeLocaleMessage(lang, nested);
  loadedLangs.add(lang);
}
