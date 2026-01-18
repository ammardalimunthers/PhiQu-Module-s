const CACHE_NAME = 'phiqu-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/Gelombang-Bunyi/index.html',
  '/Gelombang-Bunyi/foto/logo.png',
  '/Gelombang-Bunyi/foto/1.png'
];

// Tahap Instalasi
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Strategi Fetch (Mengambil data dari cache jika offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});