<script>
import ShapeIcon from "../components/ShapeIcon.vue";
import NavComponent from "./NavComponent.vue";

export default {
  name: "HeaderComponent",

  components: {
    ShapeIcon,
    NavComponent,
  },
};
</script>

<template>
  <div class="container">
    <!-- Menu -->
    <div class="d-flex justify-content-between w-100">
      <div>
        <div class="d-flex">
          <ShapeIcon class="icon" />
          <h4 class="name-logo">Tobia Rigon</h4>
        </div>
      </div>
      <NavComponent />
    </div>
  </div>
  <div></div>
</template>

<style scoped>
.icon {
  margin-top: 21px;
}
.name-logo {
  padding-top: 1rem;
}
</style>
