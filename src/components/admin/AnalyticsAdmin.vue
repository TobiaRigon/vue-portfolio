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
    <iframe
      :src="shareUrl"
      class="analytics-frame"
      title="Umami Analytics"
      loading="lazy"
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
