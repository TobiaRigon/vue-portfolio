<template>
  <div>
    <Loader ref="loader" />
    <ThreeAboutCanvas v-if="isAboutPage" />
    <ThreeDevOpsCanvas v-if="isDevOpsPage" />
    <HeaderComponent />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>

    <FooterComponent />
    <AudioToggle />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ThreeAboutCanvas from "../components/ThreeAboutCanvas.vue";
import ThreeDevOpsCanvas from "../components/ThreeDevOpsCanvas.vue";
import Loader from "../components/Loader.vue";
import { preloadProjects } from "../js/loadAllProjects";
import AudioToggle from "../components/AudioToggle.vue";
import { inject as injectAnalytics } from "@vercel/analytics";

injectAnalytics();

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ThreeAboutCanvas,
    ThreeDevOpsCanvas,
    Loader,
    AudioToggle,
  },
  provide() {
    return {
      showLoader: () => this.$refs.loader?.show(),
      hideLoader: () => this.$refs.loader?.hide(),
    };
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
    preloadProjects();

    const loader = this.$refs.loader;
    const router = this.$router;
    let timeoutId = null;

    router.beforeEach((to, from, next) => {
      timeoutId = setTimeout(() => {
        loader.show();
      }, 300);
      next();
    });

    router.afterEach(() => {
      clearTimeout(timeoutId);
      if (loader.visible) {
        setTimeout(() => loader.hide(), 500);
      }
    });
  },
};
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
