<script>
import { setupThree } from "../js/threeWork.js";
import Project from "../components/Project.vue";
import projects from "../js/projects.js";

export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: projects,
    };
  },
  mounted() {
    const canvas = document.querySelector("canvas.webgl");
    setupThree(canvas);
  },
};
</script>

<template>
  <section class="position-relative jumbo">
    <h1 class="cta position-absolute">
      Scroll down to see my latest projects
      <i class="fa-solid fa-chevron-down"></i>
    </h1>
    <canvas ref="canvas" class="webgl"></canvas>
  </section>

  <section class="container">
    <Project v-for="project in projects" :project="project" />
  </section>
</template>

<style scoped>
.jumbo {
  top: 0;
  left: 0;
}

.cta {
  top: 45%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  user-select: none;
}

section {
  min-height: 100vh;
}
</style>
