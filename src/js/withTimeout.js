// Evita attese lunghe quando Supabase è irraggiungibile (rete/outage):
// oltre il timeout si passa al fallback statico invece di aspettare il fetch.
export function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((resolve) => setTimeout(() => resolve({ data: null, error: new Error("timeout") }), ms)),
  ]);
}
