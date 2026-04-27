/* js/views/dashboard.js */

import { getAll, getAllByIndex } from '../db.js';
import { renderBikeGrid } from '../components/bikeCard.js';
import { navigate } from '../router.js';
import { openModal } from '../components/modal.js';
import { renderLogEntryForm } from './logEntry.js';

export async function renderDashboard(container) {
  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Fleet</h1>
    </div>
    <div id="alert-zone"></div>
    <div id="bike-grid" class="bike-grid"></div>
    <button class="fab" id="fab-log" aria-label="Log service">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </button>`;

  const [bikes, allSchedules] = await Promise.all([
    getAll('bikes'),
    getAll('schedules'),
  ]);

  /* Show alert banner while HardRock (b7) locate task is pending */
  const hardRockPending = allSchedules.some(
    s => s.id === 'sched-seed-001' && s.status === 'pending'
  );
  if (hardRockPending) {
    document.getElementById('alert-zone').innerHTML = `
      <div class="alert-banner" role="alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <span><strong>B7 — Specialized HardRock is MIA.</strong> Last seen in garage storage photo. Locate before next audit. <a href="#/schedule" style="text-decoration:underline">View schedule →</a></span>
      </div>`;
  }

  /* Fleet stats */
  const active   = bikes.filter(b => b.status === 'active').length;
  const projects = bikes.filter(b => b.status === 'disassembled' || b.status === 'project').length;
  const mia      = bikes.filter(b => b.status === 'mia').length;

  const statsEl = document.createElement('div');
  statsEl.className = 'stat-row';
  statsEl.innerHTML = `
    <div class="stat-box"><div class="stat-value">${bikes.length}</div><div class="stat-label">Bikes</div></div>
    <div class="stat-box"><div class="stat-value">${active}</div><div class="stat-label">Active</div></div>
    <div class="stat-box"><div class="stat-value">${projects}</div><div class="stat-label">Projects</div></div>
    <div class="stat-box"><div class="stat-value" style="color:var(--c-replace)">${mia}</div><div class="stat-label">MIA</div></div>`;
  document.getElementById('alert-zone').after(statsEl);

  await renderBikeGrid(document.getElementById('bike-grid'), bikes);

  document.getElementById('fab-log').addEventListener('click', () => {
    openModal(renderLogEntryForm(null, bikes), { title: 'Log Service' });
  });
}
