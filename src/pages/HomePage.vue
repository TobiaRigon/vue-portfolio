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
    <div class="mycontainer row">
      <div class="col-lg-6">
        <div class="hero">
          <h2>
            Unveiling My Journey in Web Development.
            <!-- <h3>Embracing the World of Coding and Design</h3> -->
          </h2>
          <p>
            My journey into web development has been dynamic and fulfilling. Now
            working as a developer and IT specialist in the luxury fashion
            industry, I focus on creating and maintaining digital tools that
            support complex workflows. From coding interfaces to building system
            integrations, I continue to sharpen my skills in both front-end and
            back-end development—always driven by creativity and a desire to
            build meaningful digital experiences.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="two container">
    <div class="mycontainer row flex-row-reverse">
      <div class="col-lg-6">
        <div class="hero">
          <h2>
            Exploring the Depths of 3D Creation.
            <!-- <h3>Navigating the Boundless Realm of Virtual Artistry</h3> -->
          </h2>
          <p>
            My background in 3D continues to influence how I approach design and
            problem-solving. From character modeling to immersive environments,
            I’ve developed a deep appreciation for visual storytelling. Though
            my focus has shifted to development, I still draw on those 3D
            foundations to bring a unique perspective to the digital
            space—blending form, function, and imagination.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="three container">
    <h1>Forging Forward</h1>
  </section>
</template>

<style scoped lang="scss">
.webgl {
  position: fixed;
  z-index: -2;
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
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: flex-start;

    .hero {
      width: 100%;
      height: 100%;
      margin-bottom: 50px;

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

h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 90px;
  line-height: 100px;
  font-weight: 700;
  height: 100px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 70px;
  font-family: inherit;
  display: block;
  width: 100%;
}

h3 {
  font-size: 50px;
  font-weight: 400;
  line-height: 60px;
  margin-bottom: 30px;
  display: block;
  width: 100%;
}

p {
  font-size: 18px;
  line-height: 26px;
  font-weight: 300;
  display: block;
  width: 100%;
}
</style>
