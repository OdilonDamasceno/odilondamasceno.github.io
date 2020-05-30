'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/assets/vector/mobile_web.png": "1fe87062f6dbe912ede7b00aa50bee0c",
"assets/assets/fonts/Montserrat-Black.ttf": "de573a99700c281f1a4be9faa5cfa6b8",
"assets/assets/fonts/Montserrat-Regular.ttf": "6941c57618006ba698236b165af9bcf3",
"assets/assets/fonts/Montserrat-Light.ttf": "2fc3594d21104bb44b9089605b3907b0",
"assets/assets/fonts/Montserrat-Bold.ttf": "af2dc8362cf315fd7b7d3bf3e81e940a",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c2a045047948a39ed887b9f8222f9070",
"assets/assets/fonts/Montserrat-Medium.ttf": "d01f6f7327864b4a94d8d64661f218bc",
"assets/FontManifest.json": "df79f536938992fbbf3c1bfc74d3d4fe",
"assets/AssetManifest.json": "7e89040b2080453bde9550e0aa217357",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/LICENSE": "e13ab7af7ab94888253629e284ab0631",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"index.html": "130ebbadd09799e35e8aed4256aea255",
"/": "130ebbadd09799e35e8aed4256aea255",
"main.dart.js": "fd5677d728fa217ca704a95a6aaaaed8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "5dd547c805481f9293d87c8c76ddf831"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
