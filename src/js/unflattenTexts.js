// Trasforma le righe piatte della tabella "texts" (key con notazione a punti,
// es. "about.bio") nella struttura nidificata attesa da vue-i18n.
export function unflattenTexts(entries) {
  const result = {};

  for (const { key, content } of entries) {
    const parts = key.split(".");
    let node = result;

    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (typeof node[part] !== "object" || node[part] === null || Array.isArray(node[part])) {
        node[part] = {};
      }
      node = node[part];
    }

    node[parts[parts.length - 1]] = content;
  }

  return result;
}
