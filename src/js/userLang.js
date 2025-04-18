import { ref } from "vue";

const lang = ref(detectInitialLang());

export function useLang() {
  return lang;
}

export function switchLang() {
  lang.value = lang.value === "it" ? "en" : "it";
  localStorage.setItem("preferredLang", lang.value);
  return lang.value;
}

function detectInitialLang() {
  // 1. Controlla se l'utente ha già scelto una lingua
  const saved = localStorage.getItem("preferredLang");
  if (saved === "it" || saved === "en") return saved;

  // 2. Se no, usa la lingua del browser
  const browserLang = navigator.language || navigator.userLanguage;
  const preferred = browserLang.startsWith("it") ? "it" : "en";

  // Salva anche la lingua rilevata come default, così la ricorda dopo
  localStorage.setItem("preferredLang", preferred);
  return preferred;
}
