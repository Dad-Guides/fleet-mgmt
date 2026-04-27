/* js/views/parts.js — global parts catalog */

import { getAll, get, put } from '../db.js';
import { conditionSelectHTML } from '../components/conditionBadge.js';
import { showToast } from '../components/toast.js';

export async function renderParts(container) {
  const [parts, bikes] = await Promise.all([getAll('parts'), getAll('bikes')]);
  const bikeMap = Object.fromEntries(bikes.map(b => [b.id, b.name]));
  const categories = [...new Set(parts.map(p => p.category))].sort();

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Parts</h1>
    </div>
    <div class="filter-bar">
      <input type="search" id="parts-search" placeholder="Search parts…" aria-label="Search parts">
      <select id="parts-bike" aria-label="Filter by bike">
        <option value="">All bikes</option>
        ${bikes.map(b => `<option value="${b.id}">${b.id.toUpperCase()} — ${b.name}</option>`).join('')}
      </select>
      <select id="parts-cond" aria-label="Filter by condition">
        <option value="">All conditions</option>
        <option value="good">Good</option>
        <option value="inspect">Inspect</option>
        <option value="replace">Replace</option>
        <option value="mia">MIA</option>
      </select>
      <select id="parts-cat" aria-label="Filter by category">
        <option value="">All categories</option>
        ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
      </select>
    </div>
    <div id="parts-stats" class="stat-row"></div>
    <div id="parts-table-container"></div>`;

  function renderStats(filtered) {
    const counts = filtered.reduce((a, p) => { a[p.condition] = (a[p.condition]||0)+1; return a; }, {});
    document.getElementById('parts-stats').innerHTML = `
      <div class="stat-box"><div class="stat-value">${filtered.length}</div><div class="stat-label">Total</div></div>
      <div class="stat-box"><div class="stat-value" style="color:var(--c-good)">${counts.good||0}</div><div class="stat-label">Good</div></div>
      <div class="stat-box"><div class="stat-value" style="color:var(--c-inspect)">${counts.inspect||0}</div><div class="stat-label">Inspect</div></div>
      <div class="stat-box"><div class="stat-value" style="color:var(--c-replace)">${(counts.replace||0)+(counts.mia||0)}</div><div class="stat-label">Action</div></div>`;
  }

  function renderTable(filtered) {
    const tc = document.getElementById('parts-table-container');
    if (!filtered.length) { tc.innerHTML = '<div class="empty-state"><p>No parts match.</p></div>'; return; }

    const activeCats = [...new Set(filtered.map(p => p.category))].sort();
    tc.innerHTML = `<div class="parts-table-wrap"><table class="parts-table">
      <thead><tr>
        <th>Bike</th><th class="col-name">Part</th><th>Spec</th>
        <th class="col-cond">Condition</th><th class="col-notes">Notes</th>
      </tr></thead>
      <tbody>
        ${activeCats.map(cat => `
          <tr class="cat-row"><td colspan="5">${cat}</td></tr>
          ${filtered.filter(p => p.category === cat).map(p => `
            <tr>
              <td style="white-space:nowrap;font-size:11px;font-weight:600;color:var(--text-secondary)">${p.bikeId.toUpperCase()}</td>
              <td class="col-name">${p.name}</td>
              <td class="col-spec">${p.spec || '—'}</td>
              <td class="col-cond">${conditionSelectHTML(p.condition, p.id)}</td>
              <td class="col-notes">
                <input class="notes-field" data-part-id="${p.id}" value="${(p.notes||'').replace(/"/g,'&quot;')}" placeholder="Add note…" aria-label="Notes">
              </td>
            </tr>`).join('')}
        `).join('')}
      </tbody>
    </table></div>`;

    /* Event delegation for condition selects */
    tc.addEventListener('change', async (e) => {
      if (!e.target.classList.contains('cond-select')) return;
      const part = await get('parts', e.target.dataset.partId);
      if (!part) return;
      part.condition = e.target.value;
      part.updatedAt = new Date().toISOString();
      await put('parts', part);
      e.target.className = `cond-select badge badge--${e.target.value}`;
      showToast('Saved', { type: 'success' });
    });

    /* Event delegation for notes */
    tc.addEventListener('change', async (e) => {
      if (!e.target.classList.contains('notes-field')) return;
      const part = await get('parts', e.target.dataset.partId);
      if (!part) return;
      part.notes = e.target.value;
      part.updatedAt = new Date().toISOString();
      await put('parts', part);
      showToast('Notes saved', { type: 'success' });
    });
  }

  function applyFilters() {
    const q    = document.getElementById('parts-search').value.toLowerCase();
    const bike = document.getElementById('parts-bike').value;
    const cond = document.getElementById('parts-cond').value;
    const cat  = document.getElementById('parts-cat').value;
    const filtered = parts.filter(p =>
      (!q    || p.name.toLowerCase().includes(q) || (p.spec||'').toLowerCase().includes(q) || (p.notes||'').toLowerCase().includes(q)) &&
      (!bike || p.bikeId === bike) &&
      (!cond || p.condition === cond) &&
      (!cat  || p.category === cat)
    );
    renderStats(filtered);
    renderTable(filtered);
  }

  applyFilters();
  ['parts-search','parts-bike','parts-cond','parts-cat'].forEach(id => {
    document.getElementById(id).addEventListener(id === 'parts-search' ? 'input' : 'change', applyFilters);
  });
}
