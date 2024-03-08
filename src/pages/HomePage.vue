<script>
import { setupThree } from "../js/threeSetup.js";

export default {
  mounted() {
    const canvas = document.querySelector("canvas.webgl");
    setupThree(canvas);
  },
};
</script>

<template>
  <canvas ref="canvas" class="webgl"></canvas>

  <section class="one container">
    <div class="mycontainer">
      <div class="hero">
        <h2>Abs are cool. <span> Ut have you ever tried donuts?</span></h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Sunt numquam libero quae, dignissimos porro nihil nisi expedita
          laudantium <br />
          quibusdam voluptas, debitis obcaecati, quasi mollitia. Voluptates
          labore praesentium quae quibusdam?
        </p>
      </div>
    </div>
  </section>

  <section class="two container">
    <div class="mycontainer">
      <div class="hero">
        <h2>Abs are cool. <span> Ut have you ever tried donuts?</span></h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Sunt numquam libero quae, dignissimos porro nihil nisi expedita
          laudantium <br />
          quibusdam voluptas, debitis obcaecati, quasi mollitia. Voluptates
          labore praesentium quae quibusdam?
        </p>
      </div>
    </div>
  </section>

  <section class="three container">
    <h1>Happy Donut</h1>
  </section>
</template>

<style scoped lang="scss">
.webgl {
  position: fixed;
  top: 0;
  left: 0;
}

section {
  height: 100vh;
  width: 100vw;
  position: relative;

  .mycontainer {
    max-width: 1360px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: flex-start;

    .hero {
      width: 100%;
      height: 100%;
      margin-bottom: 50px;

      grid-area: content;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
    }
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 90px;
    line-height: 100px;
    font-weight: 700;
    width: 100%;
    height: 100px;
    text-align: center;
  }
}

.one {
  .mycontainer {
    margin: 0;
    grid-template-areas: "content ..";
  }
}

.two {
  .mycontainer {
    margin: 0;
    grid-template-areas: ".. content";
  }
}
</style>
