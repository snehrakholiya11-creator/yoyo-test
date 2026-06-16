var CACHE = "yoyo-v1";
var FILES = [
    "/yoyo-test/",
    "/yoyo-test/index.html",
    "/yoyo-test/manifest.json"
];

self.addEventListener("install", function(event) {
    self.skipWaiting();
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
        self.clients.claim()
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request)
    );
});