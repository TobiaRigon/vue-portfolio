<template>
  <div>
    <Loader ref="loader" />
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
import Loader from "../components/Loader.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ThreeAboutCanvas,
    ThreeDevOpsCanvas,
    Loader,
  },
  computed: {
    isAboutPage() {
      return this.$route.path.includes("/about");
    },
    isDevOpsPage() {
      return this.$route.path.includes("/devops");
    },
  },
  mounted() {
    const loader = this.$refs.loader;
    const router = this.$router;

    let timeoutId = null;

    router.beforeEach((to, from, next) => {
      // Forza lo spinner SOLO se il loading dura più di 300ms
      timeoutId = setTimeout(() => {
        loader.show();
      }, 300);

      next();
    });

    router.afterEach(() => {
      clearTimeout(timeoutId);

      // Se lo spinner è stato attivato, fallo vedere per almeno un attimo
      if (loader.visible) {
        setTimeout(() => loader.hide(), 500); // fade-out visibile
      }
    });
  },
};
</script>
