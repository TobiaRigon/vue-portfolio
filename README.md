# Tobia Rigon's Personal Portfolio 🚀

Welcome to my personal portfolio! This is a collection of my most significant projects, interests, and the journey I'm undertaking as a web developer.

## Project Description 📝

My personal portfolio is one of my early exercises built with Vue.js. It's a project in constant evolution, where I share my best projects, reflect on my interests, and document my development as a web developer.

## Check out my Portfolio 🌐

You can explore my portfolio live at [my.tobiarigon.com](https://my.tobiarigon.com).

## Technologies Used 💻

- Vue.js
- Three.js
- HTML5
- CSS3

## Backend (Supabase) ⚡

Progetti e testi del sito sono gestiti dinamicamente tramite [Supabase](https://supabase.com) (piano free), con un pannello admin protetto da login. Il sito resta completamente statico/client-side: nessun server custom, deploy compatibile con Vercel Hobby.

### Setup del progetto Supabase

1. Crea un nuovo progetto su [supabase.com](https://supabase.com) (piano Free).
2. Apri **SQL Editor** e esegui in ordine:
   - `supabase/schema.sql` — crea le tabelle `projects` e `texts` con le policy RLS (lettura pubblica, scrittura solo per utenti autenticati).
   - `supabase/seed.sql` (opzionale) — popola le tabelle con i contenuti attualmente presenti nei file statici (`public/data/*.json`, `src/locales/*.json`).
   - `supabase/storage.sql` — crea il bucket pubblico `project-images` (per l'upload immagini dei progetti da `/admin`) con le relative policy.
3. Vai su **Authentication → Users** e crea manualmente l'utente admin (email + password). Non è previsto self-signup: solo questo utente potrà accedere a `/admin`.
4. Recupera **Project URL** e **anon public key** da **Settings → API**.

### Variabili d'ambiente

In locale, crea un file `.env` nella root del progetto (già escluso da git) partendo da `.env.example`:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Su **Vercel**: vai su Project → Settings → Environment Variables e aggiungi `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` con gli stessi valori, poi rideploya. Sono variabili pubbliche lato client: la sicurezza è garantita dalle Row Level Security policy, non dalla segretezza della anon key.

### Pannello Admin

- `/admin/login` — login email/password via Supabase Auth.
- `/admin` — protetta (redirect automatico a `/admin/login` se non autenticato): CRUD progetti (con riordino) ed editor dei testi, entrambi per lingua (EN/IT).

Nota: dopo una modifica da `/admin`, il sito pubblico mostra i nuovi contenuti dal prossimo caricamento/refresh della pagina (i dati vengono precaricati una volta all'avvio dell'app).

## How to Contribute 🤝

If you'd like to contribute to improving my personal portfolio, you can submit a pull request with your proposed enhancements. I'm always open to new ideas and suggestions!

## Contact 📫

For any questions or collaboration, feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/tobia-rigon-ba0b051a2/).

Thank you for visiting my portfolio! I hope you find my projects and journey as a web developer interesting and inspiring. 🌟
