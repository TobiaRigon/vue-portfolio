<template>
  <div>
    <div ref="shape" id="shape" class="triangle" @click="toggleShape"></div>
  </div>
</template>

<style scoped>
#shape {
  width: 20px;
  height: 20px;
  cursor: pointer;
  /* margin-top: 1.2rem; */
  margin-right: 1rem;
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
  methods: {
    toggleShape() {
      const shape = this.$refs.shape;
      if (shape.classList.contains("triangle")) {
        shape.classList.remove("triangle");
        shape.classList.add("square");
      } else if (shape.classList.contains("square")) {
        shape.classList.remove("square");
        shape.classList.add("circle");
      } else {
        shape.classList.remove("circle");
        shape.classList.add("triangle");
      }
    },
  },
};
</script>
