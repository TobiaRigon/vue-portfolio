<template>
  <div>
    <ThreeAboutCanvas v-if="isAboutPage" />
    <ThreeDevOpsCanvas v-if="isDevOpsPage" />
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ThreeAboutCanvas from "../components/ThreeAboutCanvas.vue";
import ThreeDevOpsCanvas from "../components/ThreeDevOpsCanvas.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ThreeAboutCanvas,
    ThreeDevOpsCanvas,
  },
  computed: {
    isAboutPage() {
      return this.$route.path.includes("/about");
    },
    isDevOpsPage() {
      return this.$route.path.includes("/devops");
    },
  },
};
</script>

<style lang="scss" scoped></style>
