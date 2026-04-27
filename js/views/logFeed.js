/* js/views/logFeed.js — chronological log feed with filters */

import { getAll, del } from '../db.js';
import { navigate } from '../router.js';
import { confirmModal } from '../components/modal.js';
import { showToast } from '../components/toast.js';
import { openModal } from '../components/modal.js';
import { renderLogEntryForm, bindLogEntryForm } from './logEntry.js';

export async function renderLogFeed(container) {
  const [logs, bikes] = await Promise.all([getAll('logs'), getAll('bikes')]);
  const bikeMap = Object.fromEntries(bikes.map(b => [b.id, b.name]));

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Log</h1>
    </div>
    <div class="filter-bar">
      <input type="search" id="log-search" placeholder="Search…" aria-label="Search log">
      <select id="log-bike-filter" aria-label="Filter by bike">
        <option value="">All bikes</option>
        ${bikes.map(b => `<option value="${b.id}">${b.id.toUpperCase()} — ${b.name}</option>`).join('')}
      </select>
      <select id="log-type-filter" aria-label="Filter by type">
        <option value="">All types</option>
        ${['service','repair','parts-install','inspection','cleaning'].map(t =>
          `<option value="${t}">${t.replace('-', ' ')}</option>`).join('')}
      </select>
    </div>
    <div id="log-list"></div>
    ${!logs.length ? '<div class="empty-state"><p>No service logs yet. Tap + to add one.</p></div>' : ''}
    <button class="fab" id="fab-log" aria-label="New log entry">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </button>`;

  function render(filtered) {
    const list = document.getElementById('log-list');
    if (!filtered.length) { list.innerHTML = '<div class="empty-state"><p>No matching entries.</p></div>'; return; }
    const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));
    list.innerHTML = sorted.map(log => `
      <div class="log-card">
        <div class="log-card-header" data-log-id="${log.id}">
          <div class="log-card-meta">
            <div class="log-card-title">${log.summary}</div>
            <div class="log-card-sub">
              ${bikeMap[log.bikeId] || log.bikeId} · ${new Date(log.date).toLocaleDateString()} · ${log.workType}
            </div>
          </div>
          <svg style="width:16px;height:16px;flex-shrink:0;color:var(--text-secondary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
        <div class="log-card-body" id="log-body-${log.id}">
          ${log.notes ? `<p class="text-sm">${log.notes}</p>` : ''}
          ${log.partsUsed?.length ? `<p class="text-xs text-secondary mt-2">Parts: ${log.partsUsed.join(', ')}</p>` : ''}
          ${log.timeSpent ? `<p class="text-xs text-secondary">Time: ${log.timeSpent} min</p>` : ''}
          <div class="log-card-actions">
            <button class="btn btn-secondary btn-sm" data-edit="${log.id}">Edit</button>
            <button class="btn btn-danger btn-sm"    data-delete="${log.id}">Delete</button>
          </div>
        </div>
      </div>`).join('');

    /* Expand/collapse */
    list.querySelectorAll('.log-card-header').forEach(hdr => {
      hdr.addEventListener('click', () => {
        const body = document.getElementById(`log-body-${hdr.dataset.logId}`);
        body.classList.toggle('open');
      });
    });

    /* Edit */
    list.querySelectorAll('[data-edit]').forEach(btn => {
      btn.addEventListener('click', (e) => { e.stopPropagation(); navigate(`/log/${btn.dataset.edit}/edit`); });
    });

    /* Delete */
    list.querySelectorAll('[data-delete]').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const ok = await confirmModal('Delete this log entry? This cannot be undone.');
        if (!ok) return;
        await del('logs', btn.dataset.delete);
        showToast('Entry deleted', { type: 'success' });
        renderLogFeed(container);
      });
    });
  }

  function applyFilters() {
    const q    = document.getElementById('log-search').value.toLowerCase();
    const bike = document.getElementById('log-bike-filter').value;
    const type = document.getElementById('log-type-filter').value;
    render(logs.filter(l =>
      (!q    || l.summary.toLowerCase().includes(q) || (l.notes || '').toLowerCase().includes(q)) &&
      (!bike || l.bikeId === bike) &&
      (!type || l.workType === type)
    ));
  }

  render(logs);
  document.getElementById('log-search').addEventListener('input', applyFilters);
  document.getElementById('log-bike-filter').addEventListener('change', applyFilters);
  document.getElementById('log-type-filter').addEventListener('change', applyFilters);

  document.getElementById('fab-log').addEventListener('click', () => {
    openModal(renderLogEntryForm(null, bikes), { title: 'Log Service' });
    bindLogEntryForm(null, () => renderLogFeed(container));
  });
}
