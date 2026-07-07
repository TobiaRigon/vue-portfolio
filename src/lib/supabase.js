import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase non configurato: imposta VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY nel file .env"
  );
}

// createClient valida l'URL in modo sincrono: senza .env configurato usiamo
// un placeholder valido, così le chiamate falliscono in modo "morbido" a
// runtime (error nella risposta) invece di far crashare l'app all'avvio.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);
