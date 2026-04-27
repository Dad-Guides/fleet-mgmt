/* sw.js — cache-first service worker for bike-fleet PWA */

const CACHE = 'bike-fleet-v1';

const STATIC = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/theme.css',
  '/css/app.css',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
  '/js/app.js',
  '/js/theme.js',
  '/js/router.js',
  '/js/db.js',
  '/js/seed.js',
  '/js/data.js',
  '/js/data/bikes.js',
  '/js/data/parts-b1-b4.js',
  '/js/data/parts-b5-b7.js',
  '/js/data/tools.js',
  '/js/data/inventory.js',
  '/js/data/schedules.js',
  '/js/components/conditionBadge.js',
  '/js/components/toast.js',
  '/js/components/modal.js',
  '/js/components/bikeCard.js',
  '/js/views/dashboard.js',
  '/js/views/bikeDetail.js',
  '/js/views/parts.js',
  '/js/views/tools.js',
  '/js/views/logFeed.js',
  '/js/views/logEntry.js',
  '/js/views/schedule.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  const url = new URL(request.url);

  /* Navigation requests → always serve index.html (SPA shell) */
  if (request.mode === 'navigate') {
    e.respondWith(
      caches.match('/index.html').then(r => r || fetch(request))
    );
    return;
  }

  /* Cache-first for same-origin static assets */
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(request, clone));
          return response;
        });
      })
    );
  }
});
