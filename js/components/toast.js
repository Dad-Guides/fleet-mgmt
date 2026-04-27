/* js/components/toast.js */

const container = () => document.getElementById('toast-container');

export function showToast(message, { type = '', duration = 2800 } = {}) {
  const el = document.createElement('div');
  el.className = `toast${type ? ` ${type}` : ''}`;
  el.textContent = message;
  container().appendChild(el);
  setTimeout(() => el.remove(), duration);
}
