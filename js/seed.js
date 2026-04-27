/* js/seed.js — first-run seeding: data → IndexedDB. Idempotent via meta store. */

import { get, put, bulkPut } from './db.js';
import { BIKES, ALL_PARTS, TOOLS, INVENTORY, SCHEDULES } from './data.js';

const SEED_VERSION = 1;

/* Condition normalization — order matters: mia checked first */
function normalizeCondition(raw) {
  if (!raw) return 'inspect';
  const s = raw.toLowerCase();
  if (s.includes('mia') || s.includes('missing in action')) return 'mia';
  if (s.includes('replace') || s.includes('worn') || s.includes('missing') || s.includes('discard')) return 'replace';
  if (s.includes('good') || s.includes('excellent') || s.includes('new') ||
      s.includes('located') || s.includes('on hand')) return 'good';
  return 'inspect';
}

export async function checkAndSeed() {
  const meta = await get('meta', 'seeded');
  if (meta && meta.value.version >= SEED_VERSION) return;

  /* Normalize condition on every part before writing */
  const parts = ALL_PARTS.map(p => ({
    ...p,
    condition: normalizeCondition(p.conditionRaw),
    updatedAt: p.updatedAt ?? new Date().toISOString(),
  }));

  await Promise.all([
    bulkPut('bikes',     BIKES),
    bulkPut('parts',     parts),
    bulkPut('tools',     TOOLS),
    bulkPut('inventory', INVENTORY),
    bulkPut('schedules', SCHEDULES),
  ]);

  await put('meta', {
    key: 'seeded',
    value: { version: SEED_VERSION, seededAt: new Date().toISOString() },
  });
}
