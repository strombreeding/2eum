const CACHE_NAME = 'woolta-blog-cache-v1'; // 캐쉬 이름을 설정합니다.

const FILES_TO_CACHE = [
    '/offline.html', // 캐쉬할 페이지 or 파일 들을 설정합니다.
];

self.addEventListener('install', (event) => {
    event.waitUntil(
    	// 캐쉬할 페이지들을 전부 캐쉬합니다.
        caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
        )
    }
)
self.addEventListener('fetch', (event) => {

    if (event.request.mode !== 'navigate') { // page navigation 제외
        return;
    }
    
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => cache.match('/2eum/offline.html'));
            }))
});