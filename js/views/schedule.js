/* js/views/schedule.js — priority-grouped task list */

import { getAll, get, put } from '../db.js';
import { showToast } from '../components/toast.js';
import { openModal, closeModal } from '../components/modal.js';

const PRIORITIES = ['critical', 'high', 'medium', 'low'];

export async function renderSchedule(container) {
  const [schedules, bikes] = await Promise.all([getAll('schedules'), getAll('bikes')]);
  const bikeMap = Object.fromEntries(bikes.map(b => [b.id, `${b.id.toUpperCase()} — ${b.name}`]));

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Schedule</h1>
      <button class="btn btn-secondary btn-sm" id="add-task-btn">+ Add task</button>
    </div>
    <div class="filter-bar">
      <select id="sched-bike" aria-label="Filter by bike">
        <option value="">All bikes</option>
        ${bikes.map(b => `<option value="${b.id}">${b.id.toUpperCase()} — ${b.name}</option>`).join('')}
      </select>
      <select id="sched-status" aria-label="Filter by status">
        <option value="pending">Pending</option>
        <option value="">All</option>
        <option value="completed">Completed</option>
      </select>
    </div>
    <div id="schedule-groups"></div>`;

  function render(tasks) {
    const el = document.getElementById('schedule-groups');
    if (!tasks.length) { el.innerHTML = '<div class="empty-state"><p>No tasks match.</p></div>'; return; }

    el.innerHTML = PRIORITIES.map(priority => {
      const group = tasks.filter(t => t.priority === priority);
      if (!group.length) return '';
      return `
        <div class="schedule-group">
          <div class="schedule-group-title">
            <span class="dot dot-${priority}"></span>
            ${priority.charAt(0).toUpperCase() + priority.slice(1)} (${group.length})
          </div>
          ${group.map(t => taskCardHTML(t, bikeMap)).join('')}
        </div>`;
    }).join('');

    el.querySelectorAll('.task-card-check').forEach(btn => {
      btn.addEventListener('click', async () => {
        const task = await get('schedules', btn.dataset.taskId);
        if (!task) return;
        const done = task.status === 'completed';
        task.status      = done ? 'pending'   : 'completed';
        task.completedAt = done ? null        : new Date().toISOString();
        task.updatedAt   = new Date().toISOString();
        await put('schedules', task);
        showToast(done ? 'Task reopened' : 'Task complete!', { type: 'success' });
        applyFilters();
      });
    });
  }

  function applyFilters() {
    const bike   = document.getElementById('sched-bike').value;
    const status = document.getElementById('sched-status').value;
    render(schedules.filter(t =>
      (!bike   || t.bikeId === bike) &&
      (!status || t.status === status)
    ));
  }

  applyFilters();
  document.getElementById('sched-bike').addEventListener('change', applyFilters);
  document.getElementById('sched-status').addEventListener('change', applyFilters);

  document.getElementById('add-task-btn').addEventListener('click', () => {
    openModal(addTaskFormHTML(bikes), { title: 'Add Task' });
    document.getElementById('add-task-cancel').addEventListener('click', closeModal);
    document.getElementById('add-task-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const now = new Date().toISOString();
      const task = {
        id:          `sched-${Date.now()}`,
        bikeId:      fd.get('bikeId'),
        title:       fd.get('title').trim(),
        description: fd.get('description').trim() || null,
        priority:    fd.get('priority'),
        status:      'pending',
        dueDate:     fd.get('dueDate') ? new Date(fd.get('dueDate')).toISOString() : null,
        completedAt: null,
        notes:       '',
        createdAt:   now,
        updatedAt:   now,
      };
      await put('schedules', task);
      schedules.push(task);
      showToast('Task added', { type: 'success' });
      closeModal();
      applyFilters();
    });
  });
}

function taskCardHTML(t, bikeMap) {
  const done = t.status === 'completed';
  return `
    <div class="task-card${done ? ' done' : ''}">
      <div class="task-card-check${done ? ' checked' : ''}" data-task-id="${t.id}"
        role="checkbox" aria-checked="${done}" tabindex="0"
        aria-label="${done ? 'Mark incomplete' : 'Mark complete'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div class="task-card-body">
        <div class="task-card-title">${t.title}</div>
        ${t.description ? `<div class="task-card-desc">${t.description}</div>` : ''}
        <div class="task-card-meta">
          <span class="priority-label-${t.priority}">${t.priority.toUpperCase()}</span>
          ${bikeMap[t.bikeId] ? `<span>${bikeMap[t.bikeId]}</span>` : ''}
          ${t.dueDate ? `<span>Due ${new Date(t.dueDate).toLocaleDateString()}</span>` : ''}
          ${done && t.completedAt ? `<span>Done ${new Date(t.completedAt).toLocaleDateString()}</span>` : ''}
        </div>
      </div>
    </div>`;
}

function addTaskFormHTML(bikes) {
  const today = new Date().toISOString().slice(0, 10);
  return `
    <form id="add-task-form">
      <div class="form-group">
        <label class="form-label" for="task-bike">Bike</label>
        <select class="form-select" id="task-bike" name="bikeId" required>
          ${bikes.map(b => `<option value="${b.id}">${b.id.toUpperCase()} — ${b.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="task-title">Title <span style="color:var(--c-replace)">*</span></label>
        <input class="form-input" id="task-title" name="title" type="text" required maxlength="100" placeholder="e.g. Replace chain">
      </div>
      <div class="form-group">
        <label class="form-label" for="task-desc">Description</label>
        <textarea class="form-textarea" id="task-desc" name="description" placeholder="Details, parts needed, tools required…" style="min-height:72px"></textarea>
      </div>
      <div class="form-group">
        <label class="form-label" for="task-priority">Priority</label>
        <select class="form-select" id="task-priority" name="priority">
          <option value="high">High</option>
          <option value="medium" selected>Medium</option>
          <option value="low">Low</option>
          <option value="critical">Critical</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="task-due">Due date</label>
        <input class="form-input" id="task-due" name="dueDate" type="date" value="${today}">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="add-task-cancel">Cancel</button>
        <button type="submit" class="btn btn-primary">Add task</button>
      </div>
    </form>`;
}
