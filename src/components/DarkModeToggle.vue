<template>
  <div
    class="mode-toggle"
    role="switch"
    :aria-checked="isDark.toString()"
    tabindex="0"
    @click="toggleDarkMode"
    @keydown.enter="toggleDarkMode"
  >
    <div class="toggle">
      <div id="toggle-icon" type="checkbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DarkModeToggle",
  data() {
    return {
      isDark: false,
    };
  },
  mounted() {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      this.isDark = true;
      document.body.classList.add("dark-mode");
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem("darkMode", this.isDark);
      document.body.classList.toggle("dark-mode", this.isDark);
    },
  },
};
</script>

<style scoped lang="scss">
$dark: #171717;
$mode-toggle-bg: #262626;

// _mode-toggle.scss
.mode-toggle {
  margin: 10px;
  margin-right: 0px;
  position: relative;
  width: 44px;
  height: 24px;
  min-width: 36px;
  min-height: 20px;
  border: 1px solid $mode-toggle-bg;
  border-radius: 24px;
  outline: 0;
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  appearance: none;
  transition: background-color 1.5s ease;

  height: 100%;
  display: flex;
  align-items: center;

  .toggle {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid transparent;
    box-shadow: inset 0 0 0 2px black;
    overflow: hidden;
    transition: transform 1.5s ease;

    #toggle-icon {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 50%;

      &:before {
        content: "";
        position: relative;
        width: 100%;
        height: 100%;
        left: 50%;
        float: left;
        background-color: black;
        transition: border-radius 1.5s ease, width 1.5s ease, height 1.5s ease,
          left 1.5s ease, transform 1.5s ease;
      }
    }
  }
}

body.dark-mode {
  .mode-toggle {
    //background-color: lighten($mode-toggle-bg, 5%);
    border: 1px solid white;
    margin-right: 0px;
    .toggle {
      transform: translateX(22px);
      box-shadow: inset 0 0 0 2px white;

      #toggle-icon {
        &:before {
          border-radius: 50%;
          width: 150%;
          height: 85%;
          left: 40%;
          transform: translate(-10%, -40%), rotate(-35deg);
          background-color: white;
        }
      }
    }
  }
}
</style>
