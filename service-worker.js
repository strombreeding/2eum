if ("serviceWorker" in navigator) {
  console.log("서비스우커이따");
  navigator.serviceWorker
    .register("https://strombreeding.github.io/2eum/service-worker.js") // serviceWorker 파일 경로
    .then((reg) => {
      console.log("서비스워커 등록", reg);
    })
    .catch((e) => console.log(e));
}
const CACHE_NAME = "offline"; // 캐쉬 이름을 설정합니다.
const FILES_TO_CACHE = [
  "https://strombreeding.github.io/2eum/offline.html", // 캐쉬할 페이지 or 파일 들을 설정합니다.
];
self.addEventListener("install", (event) => {
  console.log(event);
  event.waitUntil(
    // 캐쉬할 페이지들을 전부 캐쉬합니다.
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});
self.addEventListener("fetch", (event) => {
  if (event.request.mode !== "navigate") {
    // page navigation 제외
    return;
  }
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches
        .open(CACHE_NAME)
        .then((cache) =>
          cache.match("https://strombreeding.github.io/2eum/offline.html")
        );
    })
  );
});
