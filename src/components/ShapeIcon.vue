<template>
  <div>
    <div
      ref="shape"
      id="shape"
      :class="currentShapeClass"
      @click="toggleShape"
    ></div>

    <div
      v-if="currentAlertMessage"
      class="alert alert-info position-fixed top-0 start-50 translate-middle-x mt-3 px-4 shadow"
      role="alert"
      style="z-index: 9999"
    >
      {{ currentAlertMessage }}
    </div>
  </div>
</template>

<style scoped>
.alert {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}

#shape {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 1rem;
  transition: clip-path 1s ease; /* Aggiungi transizione alla proprietà clip-path */
}

.triangle {
  background-color: #db3535;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.square {
  background-color: #4ec439;
  clip-path: none;
}

.circle {
  background-color: #39b2c4;
  border-radius: 50%;
}
</style>

<script>
export default {
  data() {
    return {
      currentShape: "triangle",
      clickCount: 0,
      clickTimeout: null,
      currentAlertMessage: null,
      alertMessages: [
        "🧠 Calm down, hacker!",
        "👀 I see what you're doing.",
        "🧩 Looking for secrets?",
        "🚨 Stop poking the triangle!",
        "🎯 You're persistent, aren't you?",
        "🔒 No cheat codes here.",
        "🌀 Not everything has an easter egg...",
        "⚠️ Overclocking your mouse?",
        "🧠 Breathe. It's just a shape.",
      ],
    };
  },

  computed: {
    currentShapeClass() {
      return this.currentShape;
    },
  },
  watch: {
    "$route.path"(newPath) {
      if (newPath.includes("about")) {
        this.currentShape = "square";
      } else if (newPath.includes("work")) {
        this.currentShape = "circle";
      } else {
        this.currentShape = "triangle";
      }
      this.updateFavicon();
    },
  },
  methods: {
    toggleShape() {
      this.handleClickSpam();

      if (this.currentShape === "triangle") {
        this.currentShape = "square";
      } else if (this.currentShape === "square") {
        this.currentShape = "circle";
      } else {
        this.currentShape = "triangle";
      }

      this.updateFavicon();
    },

    handleClickSpam() {
      this.clickCount++;

      clearTimeout(this.clickTimeout);
      this.clickTimeout = setTimeout(() => {
        this.clickCount = 0;
      }, 1500);

      if (this.clickCount >= 6) {
        this.clickCount = 0;

        // scegli messaggio casuale
        const randomIndex = Math.floor(
          Math.random() * this.alertMessages.length
        );
        this.currentAlertMessage = this.alertMessages[randomIndex];

        // auto chiudi
        setTimeout(() => {
          this.currentAlertMessage = null;
        }, 4000);
      }
    },

    updateFavicon() {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (this.currentShape) {
        case "triangle":
          ctx.fillStyle = "#db3535";
          ctx.beginPath();
          ctx.moveTo(32, 0);
          ctx.lineTo(0, 64);
          ctx.lineTo(64, 64);
          ctx.closePath();
          ctx.fill();
          break;
        case "square":
          ctx.fillStyle = "#4ec439";
          ctx.fillRect(0, 0, 64, 64);
          break;
        case "circle":
          ctx.fillStyle = "#39b2c4";
          ctx.beginPath();
          ctx.arc(32, 32, 32, 0, Math.PI * 2);
          ctx.fill();
          break;
      }

      const url = canvas.toDataURL("image/png");

      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = url;
    },
  },
  mounted() {
    this.updateFavicon();
  },
};
</script>
