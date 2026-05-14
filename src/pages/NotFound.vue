<template>
  <div class="notFound-wrapper">
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
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

const gifs = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTVicGRmb2p4dWIzcXI5dGluNml6cmFkOHNpNHUyNmxlc3BxNnhmZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7aTskHEUdgCQAXde/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhnMHR3ejdzZTU0ZnZ0eThsa3lvZHhqeG93ZXpyNzUweDdseXoyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12gWxUahFNNErK/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGgzN282aDhkeDB2MWl5ZWZ6aGlzYW9uNHduMThtN3dpOGxkNWU5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Od0QRnzwRBYmDU3eEO/giphy.gif",
];

const randomIndex = Math.floor(Math.random() * gifs.length);

const selectedSet = computed(() => {
  const sets = tm("notFound.sets");
  return { ...sets[randomIndex], gif: gifs[randomIndex] };
});
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

h1 span.color-1:hover {
  color: #db3535;
}
h1 span.color-2:hover {
  color: #4ec439;
}
h1 span.color-3:hover {
  color: #39b2c4;
}
</style>
