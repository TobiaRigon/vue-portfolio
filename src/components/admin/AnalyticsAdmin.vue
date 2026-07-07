<script>
// Share URL pubblico e read-only generato da Umami Cloud (Settings → Websites → Enable share URL).
const UMAMI_SHARE_URL = "https://cloud.umami.is/share/V8PbnKQ3v0NbABVo";

export default {
  data() {
    return {
      shareUrl: UMAMI_SHARE_URL,
    };
  },
};
</script>

<template>
  <div class="analytics-admin">
    <p class="mb-2">
      <a :href="shareUrl" target="_blank" rel="noopener">Apri Analytics in una nuova scheda ↗</a>
      <span class="text-muted small"> — usa questo link se il riquadro sotto resta vuoto (alcuni browser bloccano i cookie di terze parti nelle dashboard incorporate)</span>
    </p>
    <iframe
      :src="shareUrl"
      class="analytics-frame"
      title="Umami Analytics"
      referrerpolicy="no-referrer-when-downgrade"
      allow="clipboard-write"
    ></iframe>
  </div>
</template>

<style scoped>
.analytics-frame {
  width: 100%;
  height: 80vh;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>
