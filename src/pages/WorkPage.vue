<script>
import { setupThree } from "../js/threeWork.js";

export default {
  mounted() {
    const canvas = document.querySelector("canvas.webgl");
    setupThree(canvas);
  },
};
</script>

<template>
  <canvas ref="canvas" class="webgl"></canvas>
  <section class="container">
    <div class="project my-10 d-flex justify-content-center align-items-center">
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
          src="https://via.placeholder.com/889x480.png?text=Placeholder"
          alt="Placeholder"
        />
      </div>
    </div>

    <div class="project my-5 d-flex justify-content-center align-items-center">
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
          src="https://via.placeholder.com/889x480.png?text=Placeholder"
          alt="Placeholder"
        />
      </div>
    </div>

    <div class="project my-5 d-flex justify-content-center align-items-center">
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
          src="https://via.placeholder.com/889x480.png?text=Placeholder"
          alt="Placeholder"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.project {
  min-height: 100vh;
}
img {
  max-width: 99%;
}
p {
  font-size: 18px;
  margin: 10px;
}
</style>
