<script>
import { login, isAuthenticated } from "../../js/useAuth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false,
    };
  },
  mounted() {
    if (isAuthenticated()) {
      this.$router.replace("/admin");
    }
  },
  methods: {
    async handleSubmit() {
      this.error = "";
      this.loading = true;
      try {
        await login(this.email, this.password);
        this.$router.push("/admin");
      } catch (err) {
        this.error = err.message || "Login fallito.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <section class="admin-login container">
    <form class="admin-login-form" @submit.prevent="handleSubmit">
      <h1>Admin Login</h1>

      <div class="mb-3">
        <label class="form-label" for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="form-control"
          required
          autocomplete="username"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-control"
          required
          autocomplete="current-password"
        />
      </div>

      <p v-if="error" class="text-danger">{{ error }}</p>

      <button type="submit" class="btn btn-dark w-100" :disabled="loading">
        {{ loading ? "Accesso in corso..." : "Accedi" }}
      </button>
    </form>
  </section>
</template>

<style scoped>
.admin-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-login-form {
  width: 100%;
  max-width: 360px;
}

.admin-login-form h1 {
  font-size: 28px;
  margin-bottom: 24px;
  text-align: center;
}
</style>
