// Utility per caricare i progetti dai JSON statici in /public/data

export async function loadProjectsFromJSON(filename) {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const url = `${normalizedBase}data/${filename}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Impossibile caricare ${url}: ${response.statusText}`);
  }

  return response.json();
}
