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
    <Project v-for="project in projects" :key="index" :project="project" />

    <!-- <div class="project d-flex my-5 justify-content-center align-items-center">
      <div>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="titolo col-md-4">
            <h2>BoolBnB</h2>
            <h4>Vue.js and Laravel Project</h4>
            <a href="https://github.com/TobiaRigon/vue-portfolio"
              ><i class="fa-brands fa-github"></i
            ></a>
          </div>
          <div class="descrizione col-md-6">
            <p>
              Development of BoolBnB, a comprehensive web platform built using
              Vue.js and Laravel. Collaborated within a team to create a
              seamless user experience by designing and implementing a
              responsive and dynamic interface. Leveraged advanced Vue.js
              functionalities, including routing and state management, to ensure
              optimal performance. The end product is a fully functional website
              equipped with features such as apartment filtering, user
              registration, apartment management (creation, editing), messaging
              system per apartment, message viewing, and apartment sponsorship.
              The focus remained on delivering a high-quality user experience
              throughout the development process.
            </p>
          </div>
        </div>

        <img
          class="mx-auto mt-5 d-block"
          src="../img/BoolBnB_BE.png"
          alt="Placeholder"
        />
      </div>
    </div>

    <div class="project d-flex justify-content-center align-items-center">
      <div>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="titolo col-md-4">
            <h2>My Portfolio</h2>
            <h4>Showcasing My Passion and Skills</h4>
            <a href="https://github.com/TobiaRigon/vue-portfolio"
              ><i class="fa-brands fa-github"></i
            ></a>
          </div>
          <div class="descrizione col-md-6">
            <p>
              My Portfolio is a digital showcase where I present myself and my
              personal projects. Using cutting-edge technologies like Vue.js and
              Three.js, I've created an interactive environment for users to
              explore my work smoothly and intuitively. Vue.js ensures a
              seamless and responsive browsing experience, while Three.js adds
              an extra layer of engagement by bringing my projects to life in
              3D.
            </p>
          </div>
        </div>

        <img
          class="mx-auto mt-5 d-block"
          src="../img/MyPortfolio.png"
          alt="Placeholder"
        />
      </div>
    </div>

    <div class="project my-5 d-flex justify-content-center align-items-center">
      <div>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="titolo col-md-4">
            <h2>Lyricsmus</h2>
            <h4>Vue.js Showcase Project</h4>
            <a href="https://github.com/TobiaRigon/proj-html-vuejs"
              ><i class="fa-brands fa-github"></i
            ></a>
          </div>
          <div class="descrizione col-md-6">
            <p>
              Development of a showcase website using Vue.js. We worked as a
              team to design and implement a responsive and dynamic user
              interface, integrating advanced Vue.js features such as routing
              and state management. The end result was a functional showcase
              website optimized to provide a high-quality user experience.
            </p>
          </div>
        </div>

        <img
          class="mx-auto mt-5 d-block"
          src="../img/Lyricsmus.png"
          alt="Placeholder"
        />
      </div>
    </div> -->
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
img {
  max-width: 99%;
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.1);
}
p {
  font-size: 18px;
  margin: 10px;
}

a {
  color: black;
  font-size: 22px;
}
</style>
