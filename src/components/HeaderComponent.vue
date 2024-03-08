<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <div class="container">
    <!-- Menu -->
    <div class="d-flex justify-content-between w-100">
      <div>
        <h5 class="name-logo">Tobia Rigon</h5>
      </div>
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style="background-color: rgba(255, 255, 255, 0)"
        >
          <div>
            <ul class="navbar-nav">
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
          </div>
        </nav>
      </div>
    </div>
  </div>
  <div></div>
</template>

<style scoped>
.name-logo {
  padding-top: 1rem;
}
</style>
