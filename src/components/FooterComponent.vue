<script>
import ShapeIcon from "../components/ShapeIcon.vue";
import NavComponent from "./NavComponent.vue";

export default {
  components: {
    ShapeIcon,
    NavComponent,
  },

  name: "FooterComponent",
};
</script>

<template>
  <div class="container d-flex justify-content-between">
    <div>
      <div>
        <div class="d-flex">
          <ShapeIcon />
          <h5>Contact</h5>
        </div>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/tobia-rigon-ba0b051a2/"
          >Linkedin</a
        >
        <a href="https://github.com/TobiaRigon">GitHub</a>
        <a href="mailto:rigontobia@gmail.com"> Email </a>
      </div>
    </div>
    <NavComponent />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-bottom: 20px;
  a {
    text-decoration: none;
    color: black;
    margin-right: 8px;
    font-size: 16px;
    font-weight: 300;
  }
}
</style>
