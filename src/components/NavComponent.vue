<template>
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
</template>

<script>
export default {
  name: "NavComponent",
};
</script>
