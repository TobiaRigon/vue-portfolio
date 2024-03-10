<template>
  <div>
    <nav
      class="navbar navbar-expand"
      style="background-color: rgba(255, 255, 255, 0)"
    >
      <ul class="navbar-nav d-flex flex-row">
        <!-- Aggiunto 'd-flex flex-row' per mantenere gli elementi in linea -->
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/work" class="nav-link">Work</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>

<style scoped>
li {
  font-size: 18px;
}
</style>
