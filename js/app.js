/* js/app.js — bootstrap: SW → openDB → seed → router */

import { openDB } from './db.js';
import { checkAndSeed } from './seed.js';
import { register, start } from './router.js';

/* Views — loaded eagerly (no dynamic import needed; SW caches all) */
import { renderDashboard }  from './views/dashboard.js';
import { renderBikeDetail } from './views/bikeDetail.js';
import { renderParts }      from './views/parts.js';
import { renderTools }      from './views/tools.js';
import { renderLogFeed }    from './views/logFeed.js';
import { renderLogEntry }   from './views/logEntry.js';
import { renderSchedule }   from './views/schedule.js';

/* Theme system */
import { initTheme } from './theme.js';

const app = document.getElementById('app');

function show(html) { app.innerHTML = html; }

async function main() {
  initTheme();

  /* Register service worker */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  /* DB init + seeding — app stays on loading screen until done */
  await openDB();
  await checkAndSeed();

  /* Register routes */
  register('/',              ()       => renderDashboard(app));
  register('/bikes/:id',     ({ id }) => renderBikeDetail(app, id));
  register('/parts',         ()       => renderParts(app));
  register('/tools',         ()       => renderTools(app));
  register('/log',           ()       => renderLogFeed(app));
  register('/log/new',       ()       => renderLogEntry(app, null));
  register('/log/:id/edit',  ({ id }) => renderLogEntry(app, id));
  register('/schedule',      ()       => renderSchedule(app));

  start();
}

main().catch(err => {
  console.error('App failed to start:', err);
  app.innerHTML = `
    <div class="empty-state">
      <p>Failed to load. Please refresh.</p>
      <pre style="font-size:11px;margin-top:8px;opacity:.6">${err.message}</pre>
    </div>`;
});
