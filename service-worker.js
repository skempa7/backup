/* Remediation Hub — offline service worker.
   Precaches the app shell + all 3 content.js so the whole app works offline.
   Slides are cached as you view them (cache-first). App files use
   stale-while-revalidate so updates land on the next online visit.
   Bump CACHE to force a clean refresh after a deploy. */
const CACHE = "remediation-v3";

// Exact URLs (incl. cache-busting query strings the pages actually request).
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png",
  "./shared/engine.js?v=17",
  "./shared/styles.css?v=22",
  "./quizzes/immunology/index.html",
  "./quizzes/immunology/content.js?v=9",
  "./quizzes/pathology/index.html",
  "./quizzes/pathology/content.js?v=9",
  "./quizzes/pharmacology/index.html",
  "./quizzes/pharmacology/content.js?v=9"
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      // best-effort: don't fail the whole install if one URL 404s
      Promise.allSettled(CORE.map((u) => c.add(u)))
    )
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function putInCache(req, res) {
  if (res && res.ok || (res && res.type === "opaque")) {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isImg = /\.(jpe?g|png|gif|svg|webp|ico)$/i.test(url.pathname);
  const sameOrigin = url.origin === self.location.origin;

  // Slide images + cross-origin assets (Google Fonts): cache-first.
  if (isImg || !sameOrigin) {
    e.respondWith(
      caches.match(req).then((hit) =>
        hit || fetch(req).then((res) => putInCache(req, res)).catch(() => hit)
      )
    );
    return;
  }

  // App files (HTML / JS / CSS): stale-while-revalidate.
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req)
        .then((res) => putInCache(req, res))
        .catch(() => hit);
      return hit || net;
    })
  );
});
