<script>
import ShapeIcon from "../components/ShapeIcon.vue";

export default {
  components: {
    ShapeIcon,
  },
};
</script>

<template>
  <div class="container">
    <div>
      <div class="d-flex">
        <ShapeIcon />
        <h5>Contact</h5>
      </div>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/tobia-rigon-ba0b051a2/">Linkedin</a>
      <a href="https://github.com/TobiaRigon">GitHub</a>
      <a href="mailto:rigontobia@gmail.com"> Email </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-bottom: 20px;
  a {
    text-decoration: none;
    color: black;
    margin-right: 8px;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
