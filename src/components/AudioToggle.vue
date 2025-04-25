<template>
    <button class="audio-toggle   " @click="toggleAudio">
      <i :class="isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high'"></i>
    </button>
  </template>
  
  <script>
  import { soundManager } from "../js/SoundManager";
  
  export default {
    name: "AudioToggle",
    data() {
      return {
        isMuted: soundManager.isMuted,
      };
    },
    methods: {
      toggleAudio() {
        this.isMuted = !this.isMuted;
        this.isMuted ? soundManager.muteAll() : soundManager.unmuteAll();
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .audio-toggle {
    background:none;
    border:none;
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 12px;
   
    cursor: pointer;
    font-size: 18px;
    z-index: 9999;
    opacity: 0.9;
    transition: transform 0.3s ease, opacity 0.3s ease;
  
    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }
  body.dark-mode{
    .audio-toggle {
        color: white;
    }
  }
  </style>
  