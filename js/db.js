/* js/db.js — IndexedDB abstraction for BikeFleetDB v1 */

const DB_NAME = 'BikeFleetDB';
const DB_VERSION = 1;

let _db = null;

export function openDB() {
  if (_db) return Promise.resolve(_db);

  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = (e) => {
      const db = e.target.result;

      if (!db.objectStoreNames.contains('bikes')) {
        const bikes = db.createObjectStore('bikes', { keyPath: 'id' });
        bikes.createIndex('status', 'status', { unique: false });
        bikes.createIndex('type',   'type',   { unique: false });
      }

      if (!db.objectStoreNames.contains('parts')) {
        const parts = db.createObjectStore('parts', { keyPath: 'id' });
        parts.createIndex('bikeId',    'bikeId',    { unique: false });
        parts.createIndex('category',  'category',  { unique: false });
        parts.createIndex('condition', 'condition', { unique: false });
      }

      if (!db.objectStoreNames.contains('tools')) {
        const tools = db.createObjectStore('tools', { keyPath: 'id' });
        tools.createIndex('type',   'type',   { unique: false });
        tools.createIndex('onHand', 'onHand', { unique: false });
      }

      if (!db.objectStoreNames.contains('inventory')) {
        const inv = db.createObjectStore('inventory', { keyPath: 'id' });
        inv.createIndex('category', 'category', { unique: false });
      }

      if (!db.objectStoreNames.contains('logs')) {
        const logs = db.createObjectStore('logs', { keyPath: 'id' });
        logs.createIndex('bikeId',   'bikeId',   { unique: false });
        logs.createIndex('date',     'date',     { unique: false });
        logs.createIndex('workType', 'workType', { unique: false });
      }

      if (!db.objectStoreNames.contains('schedules')) {
        const sched = db.createObjectStore('schedules', { keyPath: 'id' });
        sched.createIndex('bikeId',   'bikeId',   { unique: false });
        sched.createIndex('priority', 'priority', { unique: false });
        sched.createIndex('status',   'status',   { unique: false });
        sched.createIndex('dueDate',  'dueDate',  { unique: false });
      }

      if (!db.objectStoreNames.contains('meta')) {
        db.createObjectStore('meta', { keyPath: 'key' });
      }
    };

    req.onsuccess = (e) => {
      _db = e.target.result;
      resolve(_db);
    };

    req.onerror = () => reject(req.error);
  });
}

function tx(storeName, mode = 'readonly') {
  return _db.transaction(storeName, mode).objectStore(storeName);
}

function wrap(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror  = () => reject(req.error);
  });
}

export function get(store, key) {
  return wrap(tx(store).get(key));
}

export function put(store, record) {
  return wrap(tx(store, 'readwrite').put(record));
}

export function del(store, key) {
  return wrap(tx(store, 'readwrite').delete(key));
}

export function getAll(store) {
  return wrap(tx(store).getAll());
}

export function getAllByIndex(store, indexName, value) {
  return wrap(tx(store).index(indexName).getAll(value));
}

export function bulkPut(store, records) {
  return new Promise((resolve, reject) => {
    const t = _db.transaction(store, 'readwrite');
    const s = t.objectStore(store);
    records.forEach(r => s.put(r));
    t.oncomplete = () => resolve();
    t.onerror    = () => reject(t.error);
  });
}
