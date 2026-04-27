/* js/router.js — hash-based SPA router */

const routes = [];
let current = null;

export function register(pattern, handler) {
  routes.push({ pattern, handler, re: patternToRe(pattern) });
}

export function navigate(path) {
  window.location.hash = path;
}

export function start() {
  window.addEventListener('hashchange', dispatch);
  dispatch();
}

function dispatch() {
  const raw  = window.location.hash.slice(1) || '/';
  const path = raw.split('?')[0];

  for (const route of routes) {
    const m = path.match(route.re);
    if (m) {
      const params = extractParams(route.pattern, m);
      current = { path, params };
      updateNav(path);
      route.handler(params);
      return;
    }
  }

  /* Fallback to dashboard if no match */
  navigate('/');
}

function patternToRe(pattern) {
  const escaped = pattern
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\\:([a-zA-Z]+)/g, '([^/]+)');
  return new RegExp(`^${escaped}$`);
}

function extractParams(pattern, match) {
  const keys   = [];
  const params = {};
  pattern.replace(/:([a-zA-Z]+)/g, (_, k) => keys.push(k));
  keys.forEach((k, i) => { params[k] = match[i + 1]; });
  return params;
}

function updateNav(path) {
  const root = path === '/' ? 'dashboard' : path.split('/')[1];
  document.querySelectorAll('.nav-item[data-route]').forEach(el => {
    el.classList.toggle('active', el.dataset.route === root);
  });
}

export function currentPath() {
  return current ? current.path : '/';
}
