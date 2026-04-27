/* js/views/bikeDetail.js */

import { get, getAll, getAllByIndex, put } from '../db.js';
import { conditionBadge, statusBadge, conditionSelectHTML } from '../components/conditionBadge.js';
import { showToast } from '../components/toast.js';
import { openModal } from '../components/modal.js';
import { renderLogEntryForm, bindLogEntryForm } from './logEntry.js';

export async function renderBikeDetail(container, bikeId) {
  const [bike, parts, logs, schedules] = await Promise.all([
    get('bikes', bikeId),
    getAllByIndex('parts', 'bikeId', bikeId),
    getAllByIndex('logs',  'bikeId', bikeId),
    getAllByIndex('schedules', 'bikeId', bikeId),
  ]);

  if (!bike) { container.innerHTML = '<div class="empty-state"><p>Bike not found.</p></div>'; return; }

  const pending = schedules.filter(s => s.status === 'pending').length;

  container.innerHTML = `
    <div class="page-header">
      <button class="back-btn" id="back-btn" aria-label="Back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <h1 class="page-title">${bike.name}</h1>
    </div>

    <div class="bike-detail-header">
      <div class="bike-detail-icon">
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="26" r="7"/><circle cx="29" cy="26" r="7"/>
          <polyline points="11,26 18,12 24,12 29,26" stroke-linejoin="round"/>
          <line x1="7" y1="12" x2="24" y2="12"/>
        </svg>
      </div>
      <div class="bike-detail-info">
        <div class="bike-detail-name">${bike.name}</div>
        <div class="bike-detail-sub">${bike.subtype} · ${bike.frameMaterial} · ${bike.color}</div>
        <div class="bike-detail-badges">
          ${statusBadge(bike.status)}
          ${bike.serial ? `<span class="badge badge--inspect">S/N: ${bike.serial}</span>` : ''}
          ${pending > 0 ? `<span class="badge badge--replace">${pending} task${pending > 1 ? 's' : ''} pending</span>` : ''}
        </div>
      </div>
    </div>

    <div class="tabs" role="tablist">
      <button class="tab-btn active" data-tab="overview"  role="tab" aria-selected="true">Overview</button>
      <button class="tab-btn"        data-tab="parts"     role="tab">Parts (${parts.length})</button>
      <button class="tab-btn"        data-tab="log"       role="tab">Log (${logs.length})</button>
      <button class="tab-btn"        data-tab="schedule"  role="tab">Schedule (${pending})</button>
    </div>

    <div id="tab-overview"  class="tab-panel active">${overviewHTML(bike)}</div>
    <div id="tab-parts"     class="tab-panel">${partsHTML(parts)}</div>
    <div id="tab-log"       class="tab-panel">${logsHTML(logs, bike)}</div>
    <div id="tab-schedule"  class="tab-panel">${scheduleHTML(schedules)}</div>

    <button class="fab" id="fab-log" aria-label="Log service">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </button>`;

  /* Tab switching */
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
  });

  /* Back button */
  document.getElementById('back-btn').addEventListener('click', () => history.back());

  /* Inline condition edits */
  container.querySelectorAll('.cond-select').forEach(sel => {
    sel.addEventListener('change', async () => {
      const part = await get('parts', sel.dataset.partId);
      if (!part) return;
      part.condition = sel.value;
      part.updatedAt = new Date().toISOString();
      await put('parts', part);
      sel.className = `cond-select badge badge--${sel.value}`;
      showToast('Condition saved', { type: 'success' });
    });
  });

  /* Notes inline edits */
  container.querySelectorAll('.notes-field').forEach(inp => {
    inp.addEventListener('change', async () => {
      const part = await get('parts', inp.dataset.partId);
      if (!part) return;
      part.notes = inp.value;
      part.updatedAt = new Date().toISOString();
      await put('parts', part);
      showToast('Notes saved', { type: 'success' });
    });
  });

  /* FAB → log modal pre-filled with this bike */
  const allBikes = await getAll('bikes');
  document.getElementById('fab-log').addEventListener('click', () => {
    openModal(renderLogEntryForm(null, allBikes, bikeId), { title: 'Log Service' });
    bindLogEntryForm(bikeId, () => renderBikeDetail(container, bikeId));
  });

  /* Schedule checkboxes */
  container.querySelectorAll('.task-card-check').forEach(btn => {
    btn.addEventListener('click', async () => {
      const task = await get('schedules', btn.dataset.taskId);
      if (!task) return;
      const done = task.status === 'completed';
      task.status      = done ? 'pending'   : 'completed';
      task.completedAt = done ? null        : new Date().toISOString();
      task.updatedAt   = new Date().toISOString();
      await put('schedules', task);
      btn.classList.toggle('checked', !done);
      btn.closest('.task-card').classList.toggle('done', !done);
      showToast(done ? 'Task reopened' : 'Task complete!', { type: 'success' });
    });
  });
}

function overviewHTML(bike) {
  const svc = bike.lastServiceDate
    ? new Date(bike.lastServiceDate).toLocaleDateString()
    : '—';
  return `
    <div class="card">
      <div class="overview-grid">
        <div class="overview-item"><div class="overview-label">Brand</div><div class="overview-value">${bike.brand}</div></div>
        <div class="overview-item"><div class="overview-label">Model</div><div class="overview-value">${bike.model}</div></div>
        <div class="overview-item"><div class="overview-label">Type</div><div class="overview-value">${bike.subtype}</div></div>
        <div class="overview-item"><div class="overview-label">Frame</div><div class="overview-value">${bike.frameMaterial}</div></div>
        <div class="overview-item"><div class="overview-label">Serial</div><div class="overview-value">${bike.serial || '—'}</div></div>
        <div class="overview-item"><div class="overview-label">Last Service</div><div class="overview-value">${svc}</div></div>
      </div>
      ${bike.notes ? `<div class="divider"></div><p class="text-sm text-secondary">${bike.notes}</p>` : ''}
    </div>`;
}

function partsHTML(parts) {
  if (!parts.length) return '<div class="empty-state"><p>No parts recorded.</p></div>';
  const categories = [...new Set(parts.map(p => p.category))];
  return `<div class="parts-table-wrap"><table class="parts-table">
    <thead><tr>
      <th class="col-name">Part</th>
      <th>Spec</th>
      <th class="col-cond">Condition</th>
      <th class="col-notes">Notes</th>
    </tr></thead>
    <tbody>
      ${categories.map(cat => `
        <tr class="cat-row"><td colspan="4">${cat}</td></tr>
        ${parts.filter(p => p.category === cat).map(p => `
          <tr>
            <td class="col-name">${p.name}</td>
            <td class="col-spec">${p.spec || '—'}</td>
            <td class="col-cond">${conditionSelectHTML(p.condition, p.id)}</td>
            <td class="col-notes">
              <input class="notes-field" data-part-id="${p.id}" value="${(p.notes || '').replace(/"/g, '&quot;')}" placeholder="Add note…" aria-label="Notes for ${p.name}">
            </td>
          </tr>`).join('')}
      `).join('')}
    </tbody>
  </table></div>`;
}

function logsHTML(logs, bike) {
  if (!logs.length) return `<div class="empty-state"><p>No service logged yet.</p></div>`;
  const sorted = [...logs].sort((a, b) => b.date.localeCompare(a.date));
  return sorted.map(log => `
    <div class="log-card">
      <div class="log-card-header" data-log-id="${log.id}">
        <div class="log-card-meta">
          <div class="log-card-title">${log.summary}</div>
          <div class="log-card-sub">${new Date(log.date).toLocaleDateString()} · ${log.workType}</div>
        </div>
      </div>
      <div class="log-card-body" id="log-body-${log.id}">
        ${log.notes ? `<p>${log.notes}</p>` : ''}
        ${log.partsUsed?.length ? `<p class="text-xs text-secondary mt-2">Parts: ${log.partsUsed.join(', ')}</p>` : ''}
        ${log.timeSpent ? `<p class="text-xs text-secondary">Time: ${log.timeSpent} min</p>` : ''}
      </div>
    </div>`).join('');
}

function scheduleHTML(schedules) {
  if (!schedules.length) return '<div class="empty-state"><p>No tasks scheduled.</p></div>';
  const sorted = [...schedules].sort((a, b) => {
    const order = { critical:0, high:1, medium:2, low:3 };
    return (order[a.priority] ?? 4) - (order[b.priority] ?? 4);
  });
  return sorted.map(t => `
    <div class="task-card${t.status === 'completed' ? ' done' : ''}">
      <div class="task-card-check${t.status === 'completed' ? ' checked' : ''}" data-task-id="${t.id}" role="checkbox" aria-checked="${t.status === 'completed'}" tabindex="0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="task-card-body">
        <div class="task-card-title">${t.title}</div>
        ${t.description ? `<div class="task-card-desc">${t.description}</div>` : ''}
        <div class="task-card-meta">
          <span class="priority-label-${t.priority}">${t.priority.toUpperCase()}</span>
          ${t.dueDate ? `<span>Due ${new Date(t.dueDate).toLocaleDateString()}</span>` : ''}
        </div>
      </div>
    </div>`).join('');
}
