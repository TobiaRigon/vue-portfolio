<script>
import { setupThree, destroyThree } from "../js/threeWork.js";
import Project from "../components/Project.vue";
import { projectCache } from "../js/projectCache";
import { soundManager } from "../js/SoundManager";
import { useLang } from "../js/userLang";

export default {
  components: {
    Project,
  },
  setup() {
    return { lang: useLang() };
  },
  data() {
    return {
      currentPage: 1,
      perPage: 4,
    };
  },
  computed: {
    projects() {
      return projectCache[this.lang] || [];
    },
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
        soundManager.play("menuClick");
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.changePage(this.currentPage + 1);
    },
    prevPage() {
      if (this.currentPage > 1) this.changePage(this.currentPage - 1);
    },
  },
  mounted() {
    setupThree(this.$refs.canvas);
  },
  unmounted() {
    destroyThree();
  },
};
</script>

<template>
  <div class="work-wrapper">
    <section class="position-relative jumbo">
      <h1 class="cta position-absolute">
        {{ $t('work.cta') }}
        <i class="fa-solid fa-chevron-down"></i>
      </h1>
      <canvas ref="canvas" class="webgl"></canvas>
    </section>

    <section class="container">
      <p class="work-intro">{{ $t('work.intro') }}</p>
      <Project
        v-for="project in paginatedProjects"
        :key="project.title"
        :project="project"
      />

      <nav class="d-flex justify-content-center my-4">
        <ul class="pagination pagination-sm">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="prevPage">{{ $t('work.prev') }}</button>
          </li>
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <button class="page-link" @click="changePage(page)">{{ page }}</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="nextPage">{{ $t('work.next') }}</button>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<style lang="scss" scoped>
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

.work-intro {
  max-width: 680px;
  margin: 60px auto 0;
  padding: 0 15px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.7;
  opacity: 0.7;
  text-align: center;
}

body.dark-mode {
  .active {
    button {
      color: white !important;
    }
  }
}
</style>
