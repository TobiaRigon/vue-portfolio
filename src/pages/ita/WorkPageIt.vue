<script>
import { setupThree } from "../../js/threeWork.js";
import Project from "../../components/Project.vue";
import projects from "../../js/projectsIt.js";

export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: projects,
      currentPage: 1,
      perPage: 3,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.projects.length / this.perPage);
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.projects.slice(start, end);
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.changePage(this.currentPage + 1);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    },
  },

  mounted() {
    const canvas = document.querySelector("canvas.webgl");
    setupThree(canvas);
  },
};
</script>

<template>
  <section class="position-relative jumbo">
    <h1 class="cta position-absolute">
      Scrolla per vedere i miei ultimi progetti<i
        class="fa-solid fa-chevron-down"
      ></i>
    </h1>
    <canvas ref="canvas" class="webgl"></canvas>
  </section>

  <section class="container">
    <Project
      v-for="project in paginatedProjects"
      :key="project.title"
      :project="project"
    />

    <!-- Pagination controls -->
    <nav class="d-flex justify-content-center my-4">
      <ul class="pagination pagination-sm">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="prevPage">Previous</button>
        </li>
        <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <button class="page-link" @click="changePage(page)">
            {{ page }}
          </button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage">Next</button>
        </li>
      </ul>
    </nav>
  </section>
</template>

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

.page-item.active .page-link {
  background-color: transparent;
  border-color: black;
  color: black;
}

.page-link:focus {
  box-shadow: none;
  outline: none;
}

.page-link {
  color: #000000;
}
</style>
