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
  const saved = localStorage.getItem("preferredLang");
  if (saved) return saved;

  const lang = navigator.language || navigator.userLanguage;
  return lang.startsWith("it") ? "it" : "en";
}
