<template>
  <button @click="switchLanguage" class="btn btn-sm btn-outline-secondary">
    {{ lang === "it" ? "🇬🇧" : "🇮🇹" }}
  </button>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useLang, switchLang } from "../js/userLang";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

const langRef = useLang(); // ref
const lang = computed(() => langRef.value);

function switchLanguage() {
  const segments = route.path.split("/").filter(Boolean);
  if (segments.length === 0) return;

  const newLang = switchLang(); // cambia la ref
  segments[0] = newLang;

  router.push("/" + segments.join("/"));
}
</script>

<style scoped lang="scss">
button {
  border: none;
  margin: 5px;
}
button:hover {
  background-color: rgba($color: #000000, $alpha: 0.1);
}
</style>
