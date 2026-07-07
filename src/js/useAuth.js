import { ref } from "vue";
import { supabase } from "../lib/supabase";

const session = ref(null);
const initialized = ref(false);
let initPromise = null;

function init() {
  if (!initPromise) {
    initPromise = supabase.auth.getSession().then(({ data }) => {
      session.value = data.session;
      initialized.value = true;
    });
  }
  return initPromise;
}

supabase.auth.onAuthStateChange((_event, newSession) => {
  session.value = newSession;
});

// Da attendere prima di decidere se una rotta /admin è accessibile,
// altrimenti al refresh della pagina la guardia vedrebbe session=null
// prima che Supabase abbia recuperato la sessione salvata.
export function waitForAuthReady() {
  return init();
}

export function useAuth() {
  init();
  return { session, initialized };
}

export function isAuthenticated() {
  return !!session.value;
}

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  session.value = data.session;
  return data;
}

export async function logout() {
  await supabase.auth.signOut();
  session.value = null;
}
