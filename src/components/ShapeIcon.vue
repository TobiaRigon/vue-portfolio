<template>
  <div>
    <div
      ref="shape"
      id="shape"
      :class="currentShapeClass"
      @click="toggleShape"
    ></div>
  </div>
</template>

<style scoped>
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
      if (this.currentShape === "triangle") {
        this.currentShape = "square";
      } else if (this.currentShape === "square") {
        this.currentShape = "circle";
      } else {
        this.currentShape = "triangle";
      }

      this.updateFavicon();
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
    this.updateFavicon(); // favicon iniziale
  },
};
</script>
