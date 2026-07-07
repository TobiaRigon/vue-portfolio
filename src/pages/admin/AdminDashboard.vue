<script>
import ProjectsAdmin from "../../components/admin/ProjectsAdmin.vue";
import TextsAdmin from "../../components/admin/TextsAdmin.vue";
import AnalyticsAdmin from "../../components/admin/AnalyticsAdmin.vue";
import { logout } from "../../js/useAuth";

export default {
  components: { ProjectsAdmin, TextsAdmin, AnalyticsAdmin },
  data() {
    return {
      activeTab: "projects",
    };
  },
  methods: {
    async handleLogout() {
      await logout();
      this.$router.push("/admin/login");
    },
  },
};
</script>

<template>
  <section class="admin-dashboard container">
    <div class="admin-header d-flex justify-content-between align-items-center">
      <h1>Admin</h1>
      <button class="btn btn-outline-dark btn-sm" @click="handleLogout">Logout</button>
    </div>

    <div class="admin-tabs">
      <button
        class="btn btn-sm"
        :class="activeTab === 'projects' ? 'btn-dark' : 'btn-outline-dark'"
        @click="activeTab = 'projects'"
      >
        Progetti
      </button>
      <button
        class="btn btn-sm ms-2"
        :class="activeTab === 'texts' ? 'btn-dark' : 'btn-outline-dark'"
        @click="activeTab = 'texts'"
      >
        Testi
      </button>
      <button
        class="btn btn-sm ms-2"
        :class="activeTab === 'analytics' ? 'btn-dark' : 'btn-outline-dark'"
        @click="activeTab = 'analytics'"
      >
        Analytics
      </button>
    </div>

    <div class="admin-tab-content">
      <ProjectsAdmin v-if="activeTab === 'projects'" />
      <TextsAdmin v-else-if="activeTab === 'texts'" />
      <AnalyticsAdmin v-else />
    </div>
  </section>
</template>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 60px;
}

.admin-header {
  margin-bottom: 24px;
}

.admin-tabs {
  margin-bottom: 24px;
}
</style>
