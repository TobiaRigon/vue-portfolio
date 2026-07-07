<script>
import { supabase } from "../../lib/supabase";

function emptyForm(lang) {
  return {
    id: null,
    lang,
    title: "",
    technology: "",
    description: "",
    imagesText: "",
    github_url: "",
    site_url: "",
  };
}

export default {
  data() {
    return {
      lang: "en",
      projects: [],
      loading: false,
      error: "",
      saving: false,
      form: emptyForm("en"),
      isEditing: false,
      uploading: false,
      uploadError: "",
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      this.loading = true;
      this.error = "";
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("lang", this.lang)
        .order("sort_order", { ascending: true });

      if (error) {
        this.error = error.message;
      } else {
        this.projects = data || [];
      }
      this.loading = false;
    },
    switchLang(lang) {
      if (this.lang === lang) return;
      this.lang = lang;
      this.resetForm();
      this.fetchProjects();
    },
    resetForm() {
      this.isEditing = false;
      this.form = emptyForm(this.lang);
    },
    editProject(project) {
      this.isEditing = true;
      this.form = {
        id: project.id,
        lang: project.lang,
        title: project.title || "",
        technology: project.technology || "",
        description: project.description || "",
        imagesText: (project.images || []).join("\n"),
        github_url: project.github_url || "",
        site_url: project.site_url || "",
      };
    },
    async saveProject() {
      this.saving = true;
      this.error = "";

      const payload = {
        lang: this.form.lang,
        title: this.form.title,
        technology: this.form.technology,
        description: this.form.description,
        images: this.form.imagesText
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
        github_url: this.form.github_url || null,
        site_url: this.form.site_url || null,
      };

      let result;
      if (this.isEditing) {
        result = await supabase.from("projects").update(payload).eq("id", this.form.id);
      } else {
        const maxOrder = this.projects.reduce((max, p) => Math.max(max, p.sort_order), -1);
        result = await supabase.from("projects").insert({ ...payload, sort_order: maxOrder + 1 });
      }

      if (result.error) {
        this.error = result.error.message;
      } else {
        this.resetForm();
        await this.fetchProjects();
      }
      this.saving = false;
    },
    async deleteProject(project) {
      if (!confirm(`Eliminare il progetto "${project.title}"?`)) return;
      const { error } = await supabase.from("projects").delete().eq("id", project.id);
      if (error) {
        this.error = error.message;
      } else {
        await this.fetchProjects();
      }
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      event.target.value = "";
      if (!file) return;

      this.uploading = true;
      this.uploadError = "";

      const ext = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
      const path = `${crypto.randomUUID()}.${ext}`;

      const { error } = await supabase.storage.from("project-images").upload(path, file);

      if (error) {
        this.uploadError = error.message;
      } else {
        const { data } = supabase.storage.from("project-images").getPublicUrl(path);
        this.form.imagesText = this.form.imagesText
          ? `${this.form.imagesText}\n${data.publicUrl}`
          : data.publicUrl;
      }

      this.uploading = false;
    },
    async moveProject(index, direction) {
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= this.projects.length) return;

      const current = this.projects[index];
      const target = this.projects[targetIndex];

      const [res1, res2] = await Promise.all([
        supabase.from("projects").update({ sort_order: target.sort_order }).eq("id", current.id),
        supabase.from("projects").update({ sort_order: current.sort_order }).eq("id", target.id),
      ]);

      if (res1.error || res2.error) {
        this.error = (res1.error || res2.error).message;
      } else {
        await this.fetchProjects();
      }
    },
  },
};
</script>

<template>
  <div class="projects-admin">
    <div class="lang-tabs mb-3">
      <button
        class="btn btn-sm"
        :class="lang === 'en' ? 'btn-dark' : 'btn-outline-dark'"
        @click="switchLang('en')"
      >
        EN
      </button>
      <button
        class="btn btn-sm ms-2"
        :class="lang === 'it' ? 'btn-dark' : 'btn-outline-dark'"
        @click="switchLang('it')"
      >
        IT
      </button>
    </div>

    <p v-if="error" class="text-danger">{{ error }}</p>
    <p v-if="loading">Caricamento...</p>

    <ul v-else class="list-unstyled project-list">
      <li v-for="(project, index) in projects" :key="project.id" class="project-row">
        <div class="project-row-info">
          <strong>{{ project.title }}</strong>
          <span class="text-muted"> — {{ project.technology }}</span>
        </div>
        <div class="project-row-actions">
          <button class="btn btn-sm btn-outline-secondary" :disabled="index === 0" @click="moveProject(index, -1)">↑</button>
          <button class="btn btn-sm btn-outline-secondary" :disabled="index === projects.length - 1" @click="moveProject(index, 1)">↓</button>
          <button class="btn btn-sm btn-outline-primary" @click="editProject(project)">Modifica</button>
          <button class="btn btn-sm btn-outline-danger" @click="deleteProject(project)">Elimina</button>
        </div>
      </li>
    </ul>

    <hr />

    <h3>{{ isEditing ? "Modifica progetto" : "Nuovo progetto" }}</h3>
    <form @submit.prevent="saveProject" class="project-form">
      <div class="mb-2">
        <label class="form-label">Titolo</label>
        <input v-model="form.title" type="text" class="form-control" required />
      </div>
      <div class="mb-2">
        <label class="form-label">Tecnologia</label>
        <input v-model="form.technology" type="text" class="form-control" />
      </div>
      <div class="mb-2">
        <label class="form-label">Descrizione</label>
        <textarea v-model="form.description" class="form-control" rows="4"></textarea>
      </div>
      <div class="mb-2">
        <label class="form-label">Immagini (una URL per riga)</label>
        <textarea v-model="form.imagesText" class="form-control" rows="3"></textarea>
        <div class="mt-2 d-flex align-items-center gap-2">
          <input type="file" accept="image/*" class="form-control form-control-sm" style="max-width: 260px" :disabled="uploading" @change="handleImageUpload" />
          <span v-if="uploading" class="text-muted small">Caricamento...</span>
        </div>
        <p v-if="uploadError" class="text-danger small mb-0">{{ uploadError }}</p>
      </div>
      <div class="mb-2">
        <label class="form-label">Link GitHub</label>
        <input v-model="form.github_url" type="text" class="form-control" />
      </div>
      <div class="mb-2">
        <label class="form-label">Link sito</label>
        <input v-model="form.site_url" type="text" class="form-control" />
      </div>

      <div class="d-flex gap-2">
        <button type="submit" class="btn btn-dark" :disabled="saving">
          {{ saving ? "Salvataggio..." : "Salva" }}
        </button>
        <button v-if="isEditing" type="button" class="btn btn-outline-secondary" @click="resetForm">
          Annulla
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.project-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.project-row-actions {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.project-form {
  max-width: 560px;
}
</style>
