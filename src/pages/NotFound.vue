<template>
  <div class="not-found">
    <h1 class="glitch">
      <span class="color-1">4</span>
      <span class="color-2">0</span>
      <span class="color-3">4</span>
    </h1>
    <h2>Impressive.</h2>
    <p>You clicked yourself straight into nowhere. Nice one.</p>
    <router-link to="/">Try again, smarter this time</router-link>
  </div>
</template>

<script setup>
// eventualmente puoi loggare l’evento con Umami qui
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
