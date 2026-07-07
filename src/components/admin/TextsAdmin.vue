<script>
import { supabase } from "../../lib/supabase";

function toDraft(content) {
  return typeof content === "string" ? content : JSON.stringify(content, null, 2);
}

export default {
  data() {
    return {
      lang: "en",
      texts: [],
      loading: false,
      error: "",
    };
  },
  mounted() {
    this.fetchTexts();
  },
  methods: {
    async fetchTexts() {
      this.loading = true;
      this.error = "";
      const { data, error } = await supabase
        .from("texts")
        .select("id, key, content")
        .eq("lang", this.lang)
        .order("key", { ascending: true });

      if (error) {
        this.error = error.message;
      } else {
        this.texts = (data || []).map((row) => ({
          ...row,
          draft: toDraft(row.content),
          saving: false,
          rowError: "",
        }));
      }
      this.loading = false;
    },
    switchLang(lang) {
      if (this.lang === lang) return;
      this.lang = lang;
      this.fetchTexts();
    },
    async saveText(row) {
      row.rowError = "";

      const trimmed = row.draft.trim();
      let content = row.draft;
      if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
        try {
          content = JSON.parse(trimmed);
        } catch (e) {
          row.rowError = "JSON non valido";
          return;
        }
      }

      row.saving = true;
      const { error } = await supabase
        .from("texts")
        .update({ content, updated_at: new Date().toISOString() })
        .eq("id", row.id);

      if (error) {
        row.rowError = error.message;
      } else {
        row.content = content;
      }
      row.saving = false;
    },
  },
};
</script>

<template>
  <div class="texts-admin">
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

    <ul v-else class="list-unstyled text-list">
      <li v-for="row in texts" :key="row.id" class="text-row">
        <label class="form-label"><code>{{ row.key }}</code></label>
        <textarea v-model="row.draft" class="form-control" rows="3"></textarea>
        <p v-if="row.rowError" class="text-danger small mb-1">{{ row.rowError }}</p>
        <button class="btn btn-sm btn-dark mt-1" :disabled="row.saving" @click="saveText(row)">
          {{ row.saving ? "Salvataggio..." : "Salva" }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.text-row {
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 640px;
}
</style>
