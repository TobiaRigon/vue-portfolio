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
    <div class="project d-flex justify-content-center align-items-center">
      <div>
        <div class="d-flex g-2 justify-content-center">
          <div class="titolo col-4">
            <h2>My Portfolio</h2>
            <h4>Showcasing My Passion and Skills</h4>
            <a href="https://github.com/TobiaRigon/vue-portfolio"
              ><i class="fa-brands fa-github"></i
            ></a>
          </div>
          <div class="col-4 descrizione">
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

    <div class="project d-flex justify-content-center align-items-center">
      <div>
        <div class="d-flex g-2 justify-content-center">
          <div class="titolo col-4">
            <h2>Titolo</h2>
            <h4>Sottotitolo</h4>
          </div>
          <div class="col-4 descrizione">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              alias culpa! Vel a quas numquam laudantium nesciunt, pariatur
              cumque natus iure expedita ex in assumenda eius cum nulla non
              esse?
            </p>
            <a href="">gitHub</a>
          </div>
        </div>

        <img
          class="mx-auto mt-5 d-block"
          src="https://via.placeholder.com/889x480.png?text=Placeholder"
          alt="Placeholder"
        />
      </div>
    </div>

    <div class="project d-flex justify-content-center align-items-center">
      <div>
        <div class="d-flex g-2 justify-content-center">
          <div class="titolo col-4">
            <h2>Titolo</h2>
            <h4>Sottotitolo</h4>
          </div>
          <div class="col-4 descrizione">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              alias culpa! Vel a quas numquam laudantium nesciunt, pariatur
              cumque natus iure expedita ex in assumenda eius cum nulla non
              esse?
            </p>
            <a href="">gitHub</a>
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
  height: 100vh;
}
p {
  font-size: 18px;
}
</style>
