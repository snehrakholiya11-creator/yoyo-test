var CACHE = "yoyo-v1";
var FILES = [
    "/yoyo-test/",
    "/yoyo-test/index.html",
    "/yoyo-test/manifest.json"
];

self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open(CACHE).then(function(cache) {
            return cache.addAll(FILES);
        })
    );
});

self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});