import { loadProjectsFromCSV } from "./useProjects";
import { projectCache } from "./projectCache";

const sheetIt = "2PACX-1vSOtlci9HzVaJL8qKtsuD3FXY_LEhv8iJg-PTLGXVWRFEVEGDfxlifQFZs7RNk_y9oMpN6QaTqMThk7";
const sheetEn = "2PACX-1vRRJby8x4cFYKeMB8Q_U25JKst_T-c_gnQTgbqk9B57mUyDHRRVcLxTTAUMCkf0FpuSiuLUQ_8UEHdD";

export async function preloadProjects() {
  try {
    const [it, en] = await Promise.all([
      loadProjectsFromCSV(sheetIt),
      loadProjectsFromCSV(sheetEn),
    ]);

    projectCache.it = it;
    projectCache.en = en;
    projectCache.loaded = true;
  } catch (err) {
    console.error("Errore nel preload dei progetti:", err);
  }
}
