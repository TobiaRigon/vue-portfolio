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
  methods: {
    toggleShape() {
      if (this.currentShape === "triangle") {
        this.currentShape = "square";
      } else if (this.currentShape === "square") {
        this.currentShape = "circle";
      } else {
        this.currentShape = "triangle";
      }
    },
  },
};
</script>
