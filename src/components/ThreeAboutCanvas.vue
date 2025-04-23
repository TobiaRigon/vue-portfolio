<!-- src/components/ThreeAboutCanvas.vue -->
<template>
  <canvas ref="canvas" class="three-about-bg"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { setupThreeAbout } from "../js/setupThreeAbout";

const canvas = ref(null);

onMounted(() => {
  if (canvas.value) {
    setupThreeAbout(canvas.value);
  }
});
</script>

<style scoped>
.three-about-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
</style>
