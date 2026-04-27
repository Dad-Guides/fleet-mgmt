/* js/components/modal.js */

const container = () => document.getElementById('modal-container');

export function openModal(contentHTML, { title = '', onClose } = {}) {
  const c = container();
  c.removeAttribute('hidden');
  c.innerHTML = `
    <div class="modal-overlay" id="modal-overlay"></div>
    <div class="modal-sheet" role="dialog" aria-modal="true" aria-label="${title}">
      <div class="modal-header">
        <span class="modal-title">${title}</span>
        <button class="modal-close" id="modal-close-btn" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      ${contentHTML}
    </div>`;

  const close = () => { closeModal(); onClose?.(); };
  document.getElementById('modal-close-btn').addEventListener('click', close);
  document.getElementById('modal-overlay').addEventListener('click', close);
  document.addEventListener('keydown', escHandler);
}

function escHandler(e) {
  if (e.key === 'Escape') closeModal();
}

export function closeModal() {
  const c = container();
  c.setAttribute('hidden', '');
  c.innerHTML = '';
  document.removeEventListener('keydown', escHandler);
}

export function confirmModal(message) {
  return new Promise(resolve => {
    openModal(`
      <p style="margin-bottom:var(--s-5)">${message}</p>
      <div class="modal-footer" style="border-top:none;margin-top:0;padding-top:0">
        <button class="btn btn-secondary" id="confirm-cancel">Cancel</button>
        <button class="btn btn-danger"    id="confirm-ok">Confirm</button>
      </div>`, { title: 'Are you sure?' });

    document.getElementById('confirm-ok').addEventListener('click', () => {
      closeModal(); resolve(true);
    });
    document.getElementById('confirm-cancel').addEventListener('click', () => {
      closeModal(); resolve(false);
    });
  });
}
