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
            <router-link :to="`/${lang}`" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="`/${lang}/work`" class="nav-link"
              >Work</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="`/${lang}/about`" class="nav-link"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="`/${lang}/devops`" class="nav-link"
              >DevOps</router-link
            >
          </li>

          <li class="nav-item align-items-center">
            <DarkModeToggle />
          </li>
          <li class="nav-item align-items-center">
            <LangSwitcher />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import DarkModeToggle from "./DarkModeToggle.vue";
import LangSwitcher from "./LangSwitcher.vue";
import { useLang } from "../js/userLang";

const lang = useLang(); // serve solo per costruire i router-link
</script>

<style lang="scss" scoped>
.navbar-toggler:focus {
  box-shadow: none;
  outline: none;
}

li {
  font-size: 18px;

  .mode-toggle {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
