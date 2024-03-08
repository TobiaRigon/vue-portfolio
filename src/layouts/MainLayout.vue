<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: rgba(255, 255, 255, 0)"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tags" class="nav-link">Tags</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>
