<template>
  <div v-show="visible" class="loader-overlay">
    <div :class="['shape-spinner', currentShape]" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      shapes: ["triangle", "square", "circle"],
      currentShape: "triangle",
      interval: null,
    };
  },
  methods: {
    show() {
      this.visible = true;
      this.startAnimation();
    },
    hide() {
      this.visible = false;
      this.stopAnimation();
    },
    startAnimation() {
      let index = 0;
      this.interval = setInterval(() => {
        index = (index + 1) % this.shapes.length;
        this.currentShape = this.shapes[index];
      }, 1000); // Cambia forma ogni 1 secondo
    },
    stopAnimation() {
      clearInterval(this.interval);
    },
  },
  beforeUnmount() {
    this.stopAnimation();
  },
};
</script>

<style lang="scss" scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.3s ease;
}
body.dark-mode {
  .loader-overlay {
    background: black;
  }
}

.shape-spinner {
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  transition: clip-path 0.6s ease, background-color 0.6s ease;
}

/* Forms */
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

/* Rotation animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
