import { supabase } from "../lib/supabase";
import { loadProjectsFromJSON } from "./useProjects";
import { projectCache } from "./projectCache";
import { withTimeout } from "./withTimeout";

function mapRow(row) {
  return {
    title: row.title,
    technology: row.technology,
    description: row.description,
    images: row.images || [],
    githubUrl: row.github_url,
    siteUrl: row.site_url,
  };
}

async function loadProjectsForLang(lang, jsonFilename) {
  const { data, error } = await withTimeout(
    supabase
      .from("projects")
      .select("*")
      .eq("lang", lang)
      .order("sort_order", { ascending: true }),
    5000
  );

  if (error || !data || data.length === 0) {
    if (error) {
      console.error(`Errore nel caricamento progetti (${lang}) da Supabase, uso il fallback statico:`, error);
    }
    return loadProjectsFromJSON(jsonFilename);
  }

  return data.map(mapRow);
}

export async function preloadProjects() {
  if (projectCache.loaded) return;

  try {
    const [it, en] = await Promise.all([
      loadProjectsForLang("it", "projectsIt.json"),
      loadProjectsForLang("en", "projects.json"),
    ]);

    projectCache.it = it;
    projectCache.en = en;
    projectCache.loaded = true;
  } catch (err) {
    console.error("Errore nel preload dei progetti:", err);
  }
}
