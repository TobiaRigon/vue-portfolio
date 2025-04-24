<template>
  <div
    v-if="currentAlertMessage"
    class="alert alert-light position-fixed top-0 start-50 translate-middle-x mt-3 px-4 shadow"
    role="alert"
    style="z-index: 9999"
  >
    {{ currentAlertMessage }}
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentAlertMessage = ref(null);
let clickCount = 0;
let clickTimeout = null;

const alertMessages = [
  "Calm down, hacker!",
  "Looking for secrets?",
  "Stop poking the triangle!",
  "You're persistent, aren't you?",
  "Overclocking your mouse?",
  "Breathe. It's just a shape.",
  "Wow, you're a real interface warrior.",
  "You're that guy, huh?",
  "The more you click, the less I care.",
  "Desperate for attention? I’m listening.",
  "Your mom does it better. With fewer clicks.",
  "You seem like a Bombardiro Crocodilo fan.",
  "Ever considered doing actual work?",
  "Sure, keep going. I’ve got all day.",
  "Maybe that works with your grandma, not here.",
  "You must be the smart one in your group, huh?",
  "Big brain energy detected. Contain it, please.",
];

function handleClickSpam() {
  clickCount++;
  clearTimeout(clickTimeout);
  clickTimeout = setTimeout(() => (clickCount = 0), 1500);

  if (clickCount >= 6) {
    clickCount = 0;
    const msg = alertMessages[Math.floor(Math.random() * alertMessages.length)];
    currentAlertMessage.value = msg;
    setTimeout(() => (currentAlertMessage.value = null), 5000);
  }
}

// esponi il metodo
defineExpose({ handleClickSpam });
</script>

<style scoped>
.alert {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}
</style>
