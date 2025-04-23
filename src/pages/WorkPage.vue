<script>
import { setupThree } from "../js/threeWork.js";
import Project from "../components/Project.vue";
import { loadProjectsFromCSV } from "../js/useProjects.js";

const sheetId =
  "2PACX-1vRRJby8x4cFYKeMB8Q_U25JKst_T-c_gnQTgbqk9B57mUyDHRRVcLxTTAUMCkf0FpuSiuLUQ_8UEHdD";

export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: [],
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
    async loadProjects() {
      try {
        const projects = await loadProjectsFromCSV(sheetId);
        this.projects = projects;
      } catch (err) {
        console.error("Errore nel caricamento da Google Sheet:", err);
      }
    },
  },
  async mounted() {
    const loader = this.$root.$refs.loader;

    if (loader?.show) loader.show(); // mostra loader

    await this.loadProjects();

    if (loader?.hide) {
      // Attendi 200ms prima di nascondere (evita flicker)
      setTimeout(() => loader.hide(), 200);
    }

    setupThree(this.$refs.canvas);
  },
};
</script>

<template>
  <section class="position-relative jumbo">
    <h1 class="cta position-absolute">
      Scroll down to see my latest projects
      <i class="fa-solid fa-chevron-down"></i>
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
