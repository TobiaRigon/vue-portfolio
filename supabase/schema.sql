-- Schema per il portfolio Vue: progetti e testi editabili da pannello admin.
-- Da eseguire una volta nel SQL Editor del progetto Supabase.

create extension if not exists "pgcrypto";

-- ============================================================
-- PROJECTS
-- ============================================================
-- Nota: rispetto alla traccia originale (id, title, description, image_url,
-- link, order, created_at) lo schema è stato adattato al modello dati reale
-- del sito, che è bilingue e ha più campi (technology, più immagini, link
-- separati per sito/github). "order" è stata rinominata "sort_order" perché
-- parola riservata in SQL.
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  lang text not null check (lang in ('en', 'it')),
  title text not null,
  technology text,
  description text,
  images text[] not null default '{}',
  github_url text,
  site_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "projects_public_read"
  on public.projects for select
  using (true);

create policy "projects_authenticated_insert"
  on public.projects for insert
  to authenticated
  with check (true);

create policy "projects_authenticated_update"
  on public.projects for update
  to authenticated
  using (true)
  with check (true);

create policy "projects_authenticated_delete"
  on public.projects for delete
  to authenticated
  using (true);

-- ============================================================
-- TEXTS
-- ============================================================
-- "content" è jsonb per poter ospitare sia stringhe singole sia array
-- (es. i paragrafi di about.bio) con lo stesso schema.
create table if not exists public.texts (
  id uuid primary key default gen_random_uuid(),
  key text not null,
  lang text not null check (lang in ('en', 'it')),
  content jsonb not null,
  updated_at timestamptz not null default now(),
  unique (key, lang)
);

alter table public.texts enable row level security;

create policy "texts_public_read"
  on public.texts for select
  using (true);

create policy "texts_authenticated_insert"
  on public.texts for insert
  to authenticated
  with check (true);

create policy "texts_authenticated_update"
  on public.texts for update
  to authenticated
  using (true)
  with check (true);

create policy "texts_authenticated_delete"
  on public.texts for delete
  to authenticated
  using (true);
