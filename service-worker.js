"use strict";
// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = "static-cache-v6";
const DATA_CACHE_NAME = "data-cache-v5";

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  ".",
  "./index.html",
  "./scripts/app.js",
  "./scripts/install.js",
  "./styles/inline.css",
];

self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");
  // CODELAB: Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evt) => {
  console.log("[ServiceWorker] Activate");
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (evt) => {
  console.log("[ServiceWorker] Fetch", evt.request.url);

  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        return response || fetch(evt.request);
      });
    })
  );

  if (evt.request.mode !== "navigate") {
    // Not a page navigation, bail.
    return;
  }

  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match("offline.html");
      });
    })
  );
});

if ("serviceWorker" in navigator) {
  console.log("서비스우커이따");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js") // serviceWorker 파일 경로
      .then((reg) => {
        console.log("Service worker registered.", reg);
      })
      .catch((e) => console.log(e));
  });
}

// const CACHE_NAME = "zz"; // 캐쉬 이름을 설정합니다.

// const FILES_TO_CACHE = [
//   "/2eum/offline.html", // 캐쉬할 페이지 or 파일 들을 설정합니다.
// ];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     // 캐쉬할 페이지들을 전부 캐쉬합니다.
//     caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
//   );
// });
// self.addEventListener("fetch", (event) => {
//   if (event.request.mode !== "navigate") {
//     // page navigation 제외
//     return;
//   }

//   event.respondWith(
//     fetch(event.request).catch(() => {
//       return caches
//         .open(CACHE_NAME)
//         .then((cache) => cache.match("/2eum/offline.html"));
//     })
//   );
// });
