<template>
  <canvas ref="canvas" class="three-devops-bg"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { setupThreeDevOps, destroyThreeDevOps } from "../js/setupThreeDevOps";

const canvas = ref(null);

onMounted(() => {
  if (canvas.value) setupThreeDevOps(canvas.value);
});

onUnmounted(() => {
  destroyThreeDevOps();
});
</script>

<style scoped>
.three-devops-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
</style>
