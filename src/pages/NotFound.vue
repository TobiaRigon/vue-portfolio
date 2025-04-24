<template>
  <div class="not-found">
    <h1 class="glitch">
      <span class="color-1">4</span>
      <span class="color-2">0</span>
      <span class="color-3">4</span>
    </h1>

    <h2>{{ selectedSet.title }}</h2>
    <p>{{ selectedSet.message }}</p>

    <router-link to="/">{{ selectedSet.button }}</router-link>

    <img
      :src="selectedSet.gif"
      alt="Random 404 reaction"
      style="max-width: 250px; margin: 2rem auto; display: block"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const sets = [
  {
    title: "Impressive.",
    message: "You clicked yourself straight into nowhere. Nice one.",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTVicGRmb2p4dWIzcXI5dGluNml6cmFkOHNpNHUyNmxlc3BxNnhmZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7aTskHEUdgCQAXde/giphy.gif",
    button: "Try again, smarter this time",
  },
  {
    title: "Well, well, well...",
    message: "Look who wandered in. A young explorer!",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhnMHR3ejdzZTU0ZnZ0eThsa3lvZHhqeG93ZXpyNzUweDdseXoyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12gWxUahFNNErK/giphy.gif",
    button: "Back before you get more lost",
  },
  {
    title: "Nice",
    message: "You’ve officially reached the middle of nowhere. Proud of you.",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGgzN282aDhkeDB2MWl5ZWZ6aGlzYW9uNHduMThtN3dpOGxkNWU5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Od0QRnzwRBYmDU3eEO/giphy.gif",
    button: "Let’s pretend this didn’t happen",
  },
];

const selectedSet = ref(sets[Math.floor(Math.random() * sets.length)]);
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 4rem;
  min-height: 80vh;
}

a {
  color: black;
}

:hover.color-1 {
  color: #db3535;
} /* rosso */
:hover.color-2 {
  color: #4ec439;
} /* verde */
:hover.color-3 {
  color: #39b2c4;
} /* azzurro */
</style>
