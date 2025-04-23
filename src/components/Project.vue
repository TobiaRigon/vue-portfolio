<template>
  <div class="project d-flex my-5 justify-content-center align-items-center">
    <div>
      <div class="d-flex flex-wrap justify-content-between">
        <div class="titolo col-12 col-md-4">
          <h2>{{ project.title }}</h2>
          <h4>{{ project.technology }}</h4>
          <a v-if="project.githubUrl" :href="project.githubUrl"
            ><i class="fa-brands fa-github"></i
          ></a>
        </div>
        <div class="descrizione col-12 col-md-6">
          <p>
            {{ project.description }}
          </p>
        </div>
      </div>
      <!-- Carousel -->
      <div class="container">
        <swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :loop="true"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            class="my-5"
            v-for="(image, index) in project.images"
            :key="index"
          >
            <img :src="image" alt="Placeholder" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation],
    };
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 5000, // Delay in milliseconds
        },
      },
    };
  },
};
</script>

<style scoped>
img {
  max-width: 99%;
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.1);
  height: auto;
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}
.swiper-slide {
  width: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mySwiper {
  max-width: 100%;
}

p {
  font-size: 18px;
  margin: 10px;
}

a {
  color: black;
  font-size: 22px;
}
</style>
