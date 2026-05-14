<script>
import { setupThree, destroyThree } from "../js/threeSetup.js";

export default {
  mounted() {
    this.$nextTick(() => {
      setupThree(this.$refs.canvas);
      setTimeout(() => window.dispatchEvent(new Event('resize')), 200);
    });
  },
  unmounted() {
    destroyThree();
  },
  methods: {
    scrollToTop() {
      const container = this.$el.querySelector('.snap-container');
      if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<template>
  <div class="homepage-wrapper">
    <canvas ref="canvas" class="webgl"></canvas>
    <button class="scroll-top" @click="scrollToTop" aria-label="Torna in cima">
      <i class="fa-solid fa-chevron-up"></i>
    </button>

    <div class="snap-container">
      <section id="section-0" class="one container">
        <div class="mycontainer row">
          <div class="col-lg-6">
            <div class="hero">
              <p class="intro-name">{{ $t('home.name') }}</p>
              <p class="intro-role">{{ $t('home.role') }}</p>
              <h2>{{ $t('home.section0.title') }}</h2>
              <p>{{ $t('home.section0.body') }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section-1" class="two container">
        <div class="mycontainer row flex-row-reverse">
          <div class="col-lg-6">
            <div class="hero">
              <h2>{{ $t('home.section1.title') }}</h2>
              <p>{{ $t('home.section1.body') }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section-2" class="three container">
        <h1>{{ $t('home.section2') }}</h1>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.webgl {
  position: fixed;
  z-index: -2;
  top: 0;
  left: 0;
}

.snap-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
}

html,
body {
  height: 100vh;
  overflow: hidden;
}

section {
  height: 100vh;
  width: 100vw;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;

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
  font-size: clamp(32px, 8vw, 90px);
  line-height: 1.1;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
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

.scroll-top {
  display: none;
  background: none;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 18px;
  z-index: 9999;
  opacity: 0.9;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  @media (max-width: 767px) {
    display: block;
    right: 110px;
  }
}

body.dark-mode .scroll-top {
  color: white;
}

.intro-name {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 4px;
}

.intro-role {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.4;
  margin-bottom: 20px;
}
</style>
