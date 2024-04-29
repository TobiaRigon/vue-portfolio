<template>
  <div class="project d-flex my-5 justify-content-center align-items-center">
    <div>
      <div class="d-flex flex-wrap justify-content-between">
        <div class="titolo col-md-4">
          <h2>{{ project.title }}</h2>
          <h4>{{ project.technology }}</h4>
          <a :href="project.githubUrl"><i class="fa-brands fa-github"></i></a>
        </div>
        <div class="descrizione col-md-6">
          <p>
            {{ project.description }}
          </p>
        </div>
      </div>

      <img
        class="mx-auto mt-5 d-block"
        :src="project.image"
        alt="Placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.jumbo {
  top: 0;
  left: 0;
}

.cta {
  top: 45%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  user-select: none;
}

section {
  min-height: 100vh;
}
img {
  max-width: 99%;
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.1);
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
