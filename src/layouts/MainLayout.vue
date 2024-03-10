<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<template>
  <div class="wrapper">
    <HeaderComponent :isHidden="headerHidden" />
    <router-view class="content" />
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1; /* Il contenuto si espande per riempire lo spazio rimanente */
  min-height: 100vh; /* Altezza minima della finestra del browser */
  display: flex;
  justify-content: center; /* Centra orizzontalmente */
  align-items: center; /* Centra verticalmente */
}
</style>
