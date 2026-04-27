/* js/views/tools.js — tools sub-tab + chemicals/inventory sub-tab */

import { getAll, get, put } from '../db.js';
import { showToast } from '../components/toast.js';

export async function renderTools(container) {
  const [tools, inventory] = await Promise.all([getAll('tools'), getAll('inventory')]);

  const toolTypes = [...new Set(tools.map(t => t.type))].sort();
  const invCats   = [...new Set(inventory.map(i => i.category))].sort();

  const onHandTools = tools.filter(t => t.onHand).length;
  const onHandInv   = inventory.filter(i => i.onHand).length;

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Tools & Supplies</h1>
    </div>
    <div class="tabs" role="tablist">
      <button class="tab-btn active" data-tab="tools-tab"  role="tab" aria-selected="true">Tools (${onHandTools}/${tools.length})</button>
      <button class="tab-btn"        data-tab="supply-tab" role="tab">Supplies (${onHandInv}/${inventory.length})</button>
    </div>
    <div id="tools-tab"  class="tab-panel active"></div>
    <div id="supply-tab" class="tab-panel"></div>`;

  /* Tab switching */
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active'); btn.setAttribute('aria-selected','true');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  renderToolsList(tools, toolTypes);
  renderSuppliesList(inventory, invCats);
}

function renderToolsList(tools, types) {
  const panel = document.getElementById('tools-tab');

  const filterBar = `
    <div class="filter-bar">
      <input type="search" id="tools-search" placeholder="Search tools…" aria-label="Search tools">
      <select id="tools-filter" aria-label="Filter by type">
        <option value="">All types</option>
        ${types.map(t => `<option value="${t}">${t}</option>`).join('')}
      </select>
      <select id="tools-onhand" aria-label="Filter by availability">
        <option value="">All</option>
        <option value="true">On hand</option>
        <option value="false">Needed</option>
      </select>
    </div>
    <div id="tools-list" class="tools-list"></div>`;
  panel.innerHTML = filterBar;

  function renderList(filtered) {
    document.getElementById('tools-list').innerHTML = filtered.length
      ? filtered.map(t => toolItemHTML(t)).join('')
      : '<div class="empty-state"><p>No tools match.</p></div>';

    panel.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const tool = await get('tools', btn.dataset.id);
        if (!tool) return;
        tool.onHand = !tool.onHand;
        await put('tools', tool);
        btn.classList.toggle('on', tool.onHand);
        btn.setAttribute('aria-checked', String(tool.onHand));
        btn.setAttribute('aria-label', tool.onHand ? 'On hand — toggle off' : 'Not on hand — toggle on');
        showToast(tool.onHand ? 'Marked on hand' : 'Marked needed', { type: 'success' });
      });
    });
  }

  function applyFilters() {
    const q   = document.getElementById('tools-search').value.toLowerCase();
    const typ = document.getElementById('tools-filter').value;
    const oh  = document.getElementById('tools-onhand').value;
    renderList(tools.filter(t =>
      (!q   || t.name.toLowerCase().includes(q) || (t.partNum||'').toLowerCase().includes(q) || (t.notes||'').toLowerCase().includes(q)) &&
      (!typ || t.type === typ) &&
      (oh === '' || String(t.onHand) === oh)
    ));
  }

  renderList(tools);
  document.getElementById('tools-search').addEventListener('input', applyFilters);
  document.getElementById('tools-filter').addEventListener('change', applyFilters);
  document.getElementById('tools-onhand').addEventListener('change', applyFilters);
}

function toolItemHTML(t) {
  return `
    <div class="tool-item">
      <div class="tool-item-info">
        <div class="tool-item-name">${t.name}${t.partNum ? ` <span style="font-size:11px;color:var(--text-secondary)">${t.partNum}</span>` : ''}</div>
        ${t.appliesTo ? `<div class="tool-item-notes">${t.appliesTo}</div>` : ''}
        ${t.notes     ? `<div class="tool-item-notes">${t.notes}</div>`     : ''}
      </div>
      <button class="toggle-btn${t.onHand ? ' on' : ''}" data-id="${t.id}"
        role="switch" aria-checked="${t.onHand}"
        aria-label="${t.onHand ? 'On hand — toggle off' : 'Not on hand — toggle on'}">
      </button>
    </div>`;
}

function renderSuppliesList(inventory, cats) {
  const panel = document.getElementById('supply-tab');

  panel.innerHTML = `
    <div class="filter-bar">
      <input type="search" id="inv-search" placeholder="Search supplies…" aria-label="Search supplies">
      <select id="inv-cat" aria-label="Filter by category">
        <option value="">All categories</option>
        ${cats.map(c => `<option value="${c}">${c}</option>`).join('')}
      </select>
      <select id="inv-onhand" aria-label="Filter by availability">
        <option value="">All</option>
        <option value="true">On hand</option>
        <option value="false">Needed</option>
      </select>
    </div>
    <div id="inv-list" class="tools-list"></div>`;

  function renderList(filtered) {
    document.getElementById('inv-list').innerHTML = filtered.length
      ? filtered.map(item => invItemHTML(item)).join('')
      : '<div class="empty-state"><p>No supplies match.</p></div>';

    panel.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const item = await get('inventory', btn.dataset.id);
        if (!item) return;
        item.onHand = !item.onHand;
        await put('inventory', item);
        btn.classList.toggle('on', item.onHand);
        btn.setAttribute('aria-checked', String(item.onHand));
        showToast(item.onHand ? 'Marked on hand' : 'Marked needed', { type: 'success' });
      });
    });
  }

  function applyFilters() {
    const q   = document.getElementById('inv-search').value.toLowerCase();
    const cat = document.getElementById('inv-cat').value;
    const oh  = document.getElementById('inv-onhand').value;
    renderList(inventory.filter(i =>
      (!q   || i.name.toLowerCase().includes(q) || (i.detail||'').toLowerCase().includes(q) || (i.notes||'').toLowerCase().includes(q)) &&
      (!cat || i.category === cat) &&
      (oh === '' || String(i.onHand) === oh)
    ));
  }

  renderList(inventory);
  document.getElementById('inv-search').addEventListener('input', applyFilters);
  document.getElementById('inv-cat').addEventListener('change', applyFilters);
  document.getElementById('inv-onhand').addEventListener('change', applyFilters);
}

function invItemHTML(i) {
  return `
    <div class="tool-item">
      <div class="tool-item-info">
        <div class="tool-item-name">${i.name}${i.detail ? ` <span style="font-size:11px;color:var(--text-secondary)">${i.detail}</span>` : ''}</div>
        <div class="tool-item-notes">${i.category}${i.notes ? ` · ${i.notes}` : ''}</div>
      </div>
      <button class="toggle-btn${i.onHand ? ' on' : ''}" data-id="${i.id}"
        role="switch" aria-checked="${i.onHand}"
        aria-label="${i.onHand ? 'On hand — toggle off' : 'Not on hand — toggle on'}">
      </button>
    </div>`;
}
