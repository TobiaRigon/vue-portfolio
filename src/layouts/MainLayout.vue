<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  metaInfo() {
    return {
      title: "Tobia Rigon - Web Developer & IT Support Specialist",
      meta: [
        {
          name: "description",
          content:
            "Official portfolio of Tobia Rigon, a web developer and IT support specialist based in Vicenza, Italy. Explore professional projects, skills, and services.",
        },
        {
          name: "keywords",
          content:
            "Tobia Rigon, Web Developer, IT Support, Portfolio, JavaScript, PHP, Vicenza, Vue Developer",
        },
        {
          name: "author",
          content: "Tobia Rigon",
        },
        {
          property: "og:title",
          content: "Tobia Rigon - Web Developer & IT Support Specialist",
        },
        {
          property: "og:description",
          content:
            "Discover the work and skills of Tobia Rigon, a web developer and IT specialist from Vicenza.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://my.tobiarigon.com", // (corretto: niente ".com.com")
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped></style>
