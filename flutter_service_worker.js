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
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "6ee56b464eba0c8104f41a944366a13b",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/refs/remotes/origin/master": "5eab080751e888dd52f2ee375eb28707",
".git/refs/heads/master": "5eab080751e888dd52f2ee375eb28707",
".git/index": "cf3f576c5918f06eb5115c0ed0964918",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/master": "e4169f76034a8cf57f7742b11e77f2da",
".git/logs/refs/heads/master": "f4c7b3bbd37b3aa7cce891c708011782",
".git/logs/HEAD": "f4c7b3bbd37b3aa7cce891c708011782",
".git/objects/4e/9407bc9f5c9b39024b09ef123e049f89ef432e": "c6ef88c9be98ad4cb02748dcf9f20f1e",
".git/objects/4e/7cb552531fb27862a060613cbb4d169fe5e657": "9fcc4c20943e674204ea6f2e205e9c40",
".git/objects/be/dcccff2f16fb49060e1c56a2c5bc7a7cb874d2": "db279e8def5af9fb21572a40a15c439f",
".git/objects/96/1792cf3d04fb9b98ee452bdb97cf3bb0206ca0": "a2b6abbd6be8fa9b83f72e425b54dcc0",
".git/objects/96/98375dbc0246fb2cfe6068504bc6c7e835791a": "a82c56af5e0205ef14009da4f988d012",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8f/0ad122c09d51a42985bcebbdfa1dcaf3194259": "af7974e730f5bdcac51a62ff41e40768",
".git/objects/63/da12a734d6b948adab36c0d5256f6049ae8447": "e2547b5c82f102e48a41e6226a9b99f0",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/2c/3866a6aad9419c9b99d377db6ae47d62f5b36b": "4babbca517ac8a7b487470306b7c2ca0",
".git/objects/51/08a525030e17a5fe40ffbc40b28b989994dbe7": "9abd121e2b65de35972999882ccadc07",
".git/objects/06/f853dcb5e03670cc675718143908c9d3c515e8": "76b307938e26ed87f03cdef79120a956",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/e8/acb3d2081f3a1673f1611a74e7d1cc21bb7ba9": "6aa3adefa1afc89cec3654bb760314fc",
".git/objects/4f/8bf23def67281a08b0917a85cabff3e07e63b7": "1496ffdf6246947e5d0c420e4cd1a201",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/4a/897a5e03fb928eb6a036608e8df54327dd034f": "f81e36edb0e601a5dc2403accdfc0dd7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/39/c34ffcd280b372409b1249b8289497bf3d31f3": "2cde645327229ebe90e55470dc07957c",
".git/objects/39/64680f3c80390dc0474f47b9654750fba3bf26": "b3db03015348bb9e05f791cc03322e94",
".git/objects/b3/07bc6180811471aca97bf05ddd43aee0124e05": "d1128bed11d5f60e423b27bc277230c3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/6f/45043a050daf639fe69a5cf238ee5461d27680": "4602c60ef233fbd471354ae116197a52",
".git/objects/9f/0be9e8f43f46b805b1d1895c693f1fa2402570": "e937f5399baaecc5e94290fc3d63a5e9",
".git/objects/57/3065c1892165f335f13f1627e96445f63a484d": "cf30ec5589a980f9029b3dbecccd5844",
".git/objects/94/7682b72c2f44186ceb7a786339b6866c07d03f": "985c31592342ac46394cb96502543b71",
".git/objects/1c/e7f25385a6feab7dd77f2f04e608379b9bed71": "a6fef3d2d54c68d2f1c2f3dbc8a8b998",
".git/objects/c3/0063bd087ad269eadc58dac767bcbb3333376a": "bc42cba4f84e08980fd3638ecda9865e",
".git/objects/08/2121169ef51c573db153405be5b9d49777061f": "b0ad0a58f830e6edbb9edeb204bde4f7",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"main.dart.js": "f8665db3181d5afa1aef5be19da8e4f4",
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
