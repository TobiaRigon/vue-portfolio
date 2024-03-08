<script>
export default {
  data() {
    return {};
  },

  mounted() {},
};
</script>

<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: rgba(255, 255, 255, 0)"
    >
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="navbar-brand">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/work" class="nav-link">Work</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style scoped></style>
