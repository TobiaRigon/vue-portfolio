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
            Embarking on the path of web development has been a thrilling
            adventure for me. From the early days of learning programming
            languages to crafting intricate designs, every step has been a
            lesson in creativity and problem-solving. Through my recent
            projects, I've had the opportunity to delve into various aspects of
            web development, honing my skills in front-end and back-end
            development alike. Each project serves as a testament to my
            dedication to mastering this craft and creating engaging digital
            experiences for users.
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
            Venturing into the realm of 3D exploration has unlocked a world of
            endless possibilities. From modeling characters to crafting
            immersive environments, I've found joy in every aspect of the
            creative process. Through experimentation and practice, I've honed
            my skills in 3D software and animation techniques, pushing the
            boundaries of what's possible in the digital landscape. With each
            project, I aim to not only showcase my technical proficiency but
            also express my passion for storytelling and visual aesthetics in
            the captivating realm of 3D artistry.
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
