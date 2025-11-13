import { loadProjectsFromJSON } from "./useProjects";
import { projectCache } from "./projectCache";

export async function preloadProjects() {
  try {
    const [it, en] = await Promise.all([
      loadProjectsFromJSON("projectsIt.json"),
      loadProjectsFromJSON("projects.json"),
    ]);

    projectCache.it = it;
    projectCache.en = en;
    projectCache.loaded = true;
  } catch (err) {
    console.error("Errore nel preload dei progetti:", err);
  }
}
