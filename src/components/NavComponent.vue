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
        v-if="isMobile"
        class="navbar-toggler ms-auto"
        :class="{ open: isOpen }"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        :aria-expanded="isOpen.toString()"
        aria-label="Toggle navigation"
        @click="toggleNav"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
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
import { ref, onMounted, onUnmounted } from "vue";
import DarkModeToggle from "./DarkModeToggle.vue";
import LangSwitcher from "./LangSwitcher.vue";
import { useLang } from "../js/userLang";

const lang = useLang();
const isOpen = ref(false);

const isMobile = ref(window.innerWidth < 768);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

const toggleNav = () => {
  isOpen.value = !isOpen.value; // attiva subito l'animazione visiva
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize(); // inizializza

  const collapse = document.getElementById("navbarNav");
  if (collapse) {
    collapse.addEventListener("shown.bs.collapse", () => (isOpen.value = true));
    collapse.addEventListener(
      "hidden.bs.collapse",
      () => (isOpen.value = false)
    );
  }
});
</script>

<style lang="scss" scoped>

#navbarNav {
  position: absolute; // o fixed se preferisci
  top: 60px; // distanza dal top dopo la navbar
  right: 0;
  left: 0;
  background: transparent; // sfondo chiaro per il menu aperto
  z-index: 2000;
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.collapse:not(.show) {
  display: none;
}

.collapse.show {
  display: block;
}

.navbar-toggler {
  width: 30px;
  height: 20px;
  position: relative;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  z-index: 1001;
  outline: none;
  transition: transform 0.3s ease, margin-top 0.2s ease 0.2s;

  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: none;
    box-shadow: none;
  }
}

button,
button:focus,
button:active {
  border: none;
  background: transparent;
  outline: none;
  box-shadow: none;
}

.burger-line {
  width: 100%;
  height: 1px;
  background-color: #000;
  transition: all 0.3s ease;
  transform-origin: center;
}

body.dark-mode {
  .burger-line {
    background-color: #fff;
  }
  .navbar-toggler.open .burger-line {
    opacity: 0.7;
  }
}

/* Trasformazione in X quando aperto */

/* Rotazione dell'intero bottone quando è aperto */
.navbar-toggler.open {
  margin-top: 10px;
  transform: rotate(45deg);
  transition: transform 0.3s ease, margin-top 0.2s ease 0s;
}

/* Al passaggio del mouse, torna dritto */
.navbar-toggler.open:hover {
  transform: rotate(0deg);
}

.navbar-toggler.open .burger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.navbar-toggler.open .burger-line:nth-child(2) {
  opacity: 0;
}
.navbar-toggler.open .burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -9px);
}
.navbar-toggler.open .burger-line:nth-child(3):hover {
  transform: rotate(-45deg) translate(8px, -8px);
}

.navbar-toggler.open .burger-line {
  opacity: 0.7;
}

// Dark mode styles for the navbar toggler
body.dark-mode {
  .burger-line {
    background-color: #fff;
  }
  .navbar-toggler.open .burger-line {
    opacity: 1;
  }
  .navbar-toggler.open .burger-line:nth-child(2) {
    opacity: 0;
  }
}
</style>
