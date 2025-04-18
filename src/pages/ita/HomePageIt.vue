<script>
import { setupThree } from "../../js/threeSetup.js";

export default {
  mounted() {
    const canvas = document.querySelector("canvas.webgl");
    setupThree(canvas);
  },
};
</script>

<template>
  <canvas ref="canvas" class="webgl"></canvas>

  <div class="snap-container">
    <section id="section-0" class="one container">
      <div class="mycontainer row">
        <div class="col-lg-6">
          <div class="hero">
            <h2>
              Scopri il mio percorso nello sviluppo web.
              <!-- <h3>Embracing the World of Coding and Design</h3> -->
            </h2>
            <p>
              Il mio percorso nello sviluppo web è stato dinamico e
              gratificante. Ora lavoro come sviluppatore e specialista IT nel
              settore della moda di lusso, dove mi occupo della creazione e
              manutenzione di strumenti digitali che supportano flussi di lavoro
              complessi. Dalla programmazione di interfacce alla realizzazione
              di integrazioni tra sistemi, continuo ad affinare le mie
              competenze sia nel front-end che nel back-end — guidato sempre
              dalla creatività e dalla voglia di costruire esperienze digitali
              significative.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="section-1" class="two container">
      <div class="mycontainer row flex-row-reverse">
        <div class="col-lg-6">
          <div class="hero">
            <h2>
              Esplorando le profondità della creazione 3D.
              <!-- <h3>Navigating the Boundless Realm of Virtual Artistry</h3> -->
            </h2>
            <p>
              Il mio background nel 3D continua a influenzare il mio approccio
              al design e alla risoluzione dei problemi. Dalla modellazione di
              personaggi alla creazione di ambienti immersivi, ho sviluppato una
              forte sensibilità per la narrazione visiva. Anche se ora il mio
              focus principale è lo sviluppo, traggo ancora ispirazione da
              quelle basi 3D per portare una prospettiva unica nel mondo
              digitale — fondendo forma, funzione e immaginazione.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="section-2" class="three container">
      <h1>Guardando Avanti</h1>
    </section>
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
