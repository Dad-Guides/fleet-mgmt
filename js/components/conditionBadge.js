/* js/components/conditionBadge.js */

const LABELS = {
  good:    'Good',
  inspect: 'Inspect',
  replace: 'Replace',
  mia:     'MIA',
};

export function conditionBadge(condition) {
  const c = condition || 'inspect';
  return `<span class="badge badge--${c}">${LABELS[c] ?? c}</span>`;
}

export function statusBadge(status) {
  const map = {
    active:       ['active',       'Active'],
    project:      ['project',      'Project'],
    disassembled: ['disassembled', 'In Parts'],
    mia:          ['mia-status',   'MIA'],
  };
  const [cls, label] = map[status] ?? ['project', status];
  return `<span class="badge badge--${cls}">${label}</span>`;
}

export function conditionSelectHTML(current, partId) {
  const opts = ['good', 'inspect', 'replace', 'mia'];
  return `<select class="cond-select badge badge--${current}" data-part-id="${partId}" aria-label="Condition">
    ${opts.map(o => `<option value="${o}"${o === current ? ' selected' : ''}>${LABELS[o]}</option>`).join('')}
  </select>`;
}
