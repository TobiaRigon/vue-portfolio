<template>
  <div>
    <ThreeAboutCanvas v-if="isAboutPage" />
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ThreeAboutCanvas from "../components/ThreeAboutCanvas.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ThreeAboutCanvas,
  },
  computed: {
    isAboutPage() {
      return this.$route.path.includes("/about");
      return this.$route.path.includes("/about");
    },
  },
};
</script>

<style lang="scss" scoped></style>
