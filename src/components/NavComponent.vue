<template>
  <nav
    class="navbar navbar-expand-md"
    style="background-color: rgba(255, 255, 255, 0)"
  >
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <!-- Hamburger toggle button -->
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsing nav items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          class="navbar-nav ms-auto text-end align-items-end flex-column flex-md-row"
        >
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/work" class="nav-link">Work</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/devops" class="nav-link">DevOps</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>

<style scoped>
.navbar-toggler:focus {
  box-shadow: none;
  outline: none;
}

li {
  font-size: 18px;
}
</style>
