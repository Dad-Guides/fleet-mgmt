/* js/views/logEntry.js — add/edit log form (modal + routed) */

import { get, put, getAll } from '../db.js';
import { showToast } from '../components/toast.js';
import { closeModal } from '../components/modal.js';
import { navigate } from '../router.js';

const WORK_TYPES = ['service', 'repair', 'parts-install', 'inspection', 'cleaning'];

/* Returns the inner HTML for the form (used by modal and routed view) */
export function renderLogEntryForm(logId, bikes, preselectedBikeId = null) {
  const bikeOpts = bikes.map(b =>
    `<option value="${b.id}"${b.id === preselectedBikeId ? ' selected' : ''}>${b.id.toUpperCase()} — ${b.name}</option>`
  ).join('');

  const typeOpts = WORK_TYPES.map(t =>
    `<option value="${t}">${t.replace('-', ' ')}</option>`
  ).join('');

  const today = new Date().toISOString().slice(0, 10);

  return `
    <form id="log-entry-form" autocomplete="off">
      <input type="hidden" name="logId" value="${logId || ''}">
      <div class="form-group">
        <label class="form-label" for="log-bike">Bike</label>
        <select class="form-select" id="log-bike" name="bikeId" required>${bikeOpts}</select>
      </div>
      <div class="form-group">
        <label class="form-label" for="log-date">Date</label>
        <input class="form-input" id="log-date" name="date" type="date" value="${today}" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="log-type">Work type</label>
        <select class="form-select" id="log-type" name="workType">${typeOpts}</select>
      </div>
      <div class="form-group">
        <label class="form-label" for="log-summary">Summary <span style="color:var(--c-replace)">*</span></label>
        <input class="form-input" id="log-summary" name="summary" type="text" placeholder="e.g. Chain replaced, brakes adjusted" required maxlength="120">
      </div>
      <div class="form-group">
        <label class="form-label" for="log-notes">Notes</label>
        <textarea class="form-textarea" id="log-notes" name="notes" placeholder="Detailed notes, measurements, findings…"></textarea>
      </div>
      <div class="form-group">
        <label class="form-label" for="log-parts">Parts used</label>
        <input class="form-input" id="log-parts" name="partsUsed" type="text" placeholder="Comma-separated list">
        <div class="form-hint">e.g. KMC chain, BBB brake pads</div>
      </div>
      <div class="form-group">
        <label class="form-label" for="log-time">Time spent (minutes)</label>
        <input class="form-input" id="log-time" name="timeSpent" type="number" min="0" step="5" placeholder="0">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="log-cancel">Cancel</button>
        <button type="submit" class="btn btn-primary">Save log</button>
      </div>
    </form>`;
}

/* Bind submit/cancel after the form HTML is in the DOM */
export function bindLogEntryForm(defaultBikeId, onSaved) {
  const form = document.getElementById('log-entry-form');
  if (!form) return;

  document.getElementById('log-cancel')?.addEventListener('click', closeModal);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const bikeId   = fd.get('bikeId');
    const date     = fd.get('date');
    const summary  = fd.get('summary').trim();
    if (!summary) return;

    const id  = fd.get('logId') || `log-${Date.now()}`;
    const now = new Date().toISOString();

    const partsRaw = fd.get('partsUsed').trim();
    const partsUsed = partsRaw ? partsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

    const entry = {
      id, bikeId, date,
      workType:  fd.get('workType'),
      summary,
      partsUsed,
      timeSpent: parseInt(fd.get('timeSpent'), 10) || null,
      notes:     fd.get('notes').trim() || null,
      createdAt: now,
      updatedAt: now,
    };

    await put('logs', entry);

    /* Update bike lastServiceDate if this date is newer */
    const bike = await get('bikes', bikeId);
    if (bike && (!bike.lastServiceDate || date > bike.lastServiceDate.slice(0, 10))) {
      bike.lastServiceDate = new Date(date).toISOString();
      bike.updatedAt = now;
      await put('bikes', bike);
    }

    showToast('Service logged!', { type: 'success' });
    closeModal();
    onSaved?.();
  });
}

/* Routed entry point — full-page form */
export async function renderLogEntry(container, logId) {
  const bikes = await getAll('bikes');
  let existing = null;
  if (logId) {
    existing = await get('logs', logId);
  }

  container.innerHTML = `
    <div class="page-header">
      <button class="back-btn" id="back-btn" aria-label="Back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <h1 class="page-title">${logId ? 'Edit Log Entry' : 'New Log Entry'}</h1>
    </div>
    <div class="card">
      ${renderLogEntryForm(logId, bikes)}
    </div>`;

  document.getElementById('back-btn').addEventListener('click', () => history.back());
  document.getElementById('log-cancel').addEventListener('click', () => navigate('/log'));

  if (existing) {
    const form = document.getElementById('log-entry-form');
    form.bikeId.value    = existing.bikeId;
    form.date.value      = existing.date;
    form.workType.value  = existing.workType;
    form.summary.value   = existing.summary;
    form.notes.value     = existing.notes || '';
    form.partsUsed.value = (existing.partsUsed || []).join(', ');
    form.timeSpent.value = existing.timeSpent || '';
  }

  bindLogEntryForm(null, () => navigate('/log'));
}
