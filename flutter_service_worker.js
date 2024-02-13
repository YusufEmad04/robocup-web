'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/config": "b1e79b8715dfb3fcc20e51f611b3c630",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2d34abc612113fa019b5da16b2749a2d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc97062cb4da9dfd0b7d834248c46cf8",
".git/logs/refs/heads/master": "cc97062cb4da9dfd0b7d834248c46cf8",
".git/logs/refs/remotes/origin/HEAD": "adc238ec53ea2c6880451b49be1ec669",
".git/logs/refs/remotes/origin/master": "bd3aec4fe48463ba3568bd91e1cc4b2e",
".git/objects/06/7eb45e69c0597463f06875a5b903ca3cbb222b": "1380ce43b23a86fb8de62d94cd1805d6",
".git/objects/07/c4a8111ebb8475218def289ccb69084031aaa3": "b516c332ce2047eae66b029d960466a7",
".git/objects/0e/aa7b4fa0481340a0969eb5822354eadbc72c96": "32625a93129f958652d9d6e9154b91ec",
".git/objects/18/85511c3cdc82a8788bafeccc07b94fadb29550": "12931e77307e3a9b6fa83c4dddba8a36",
".git/objects/27/13109251b0c36e2c3c3edc7fd008718a8658e0": "9abbc3cfd901b98de8efb4ee80cf0dc4",
".git/objects/27/2ab644a7f3d99b66c0642fe1c0fad591a9bfd6": "ffe0f1576c75f5a55ca7b7fdbe42249a",
".git/objects/27/fce4757ce25fb41621954b9d172ca90229a9c6": "07c5d4bf069adf8008f52ad3de283084",
".git/objects/36/21fc79dbfd50a1acec3e61e7664ee5ceee149e": "2d11eba7e8a680208e19e626c494ac66",
".git/objects/37/77f53414d9c0b5d624fde6de8bd50807cf2e58": "5d2222ba63e7157d792f2a92380bc692",
".git/objects/3a/530b9572b88f038ee8746c94fb328404c5bfb3": "40d3e9c48b16bc67da4500ee75499ed5",
".git/objects/3f/1281a4f0b72a8c0accd0d54fe1fc5b4d79d826": "3afae73be9a18820429325e21413c2ab",
".git/objects/53/ac69a0e92d6cbccf138502d01f5ef560937912": "7ea2fb095a824beec16b0a6cbd5f7c00",
".git/objects/59/63167cfa270be60121a7b0a6b255ca15d5ea22": "2e5b4d051dfbb2d5cc91c5670a393305",
".git/objects/5b/827d2a7800ba226932758ec650fdf1a3c71d5b": "8c38b310c4e3ff94fbb9e2b393a59277",
".git/objects/67/16e08ef52246ceda513b0058c1996c67953502": "7c483eae51fd451447a4852e290b5f7a",
".git/objects/79/d19c1d882a82fcbb88904f30e771fc5c096523": "3dab401cd3a872abe2fde892462371b4",
".git/objects/7c/8e8c335d03955d4eb60963b11b9baa9b1b8190": "023eef3336ddfb1fd51ed114d210e62a",
".git/objects/87/76629631b8e30d8da65f102a5f893f8841ca85": "cb8a9fc2395eef154b434720c879063e",
".git/objects/8c/e3a68cfdaa76d021d839e6a5e91d77a0b56263": "950fda375062c4fe754b9b07272afc0d",
".git/objects/93/cf23a44d8a2e4a3fa6545b8b1fedc27b617c8e": "7fe993dbfc59e8cf564440e1956bbdbd",
".git/objects/a7/881c01760bde425ea3eeb74e91295275d0ed59": "bdb3056e1dd881b518a5694575bb6c32",
".git/objects/ac/7bad38120ce4595a3dce6f084c3786bbf2b591": "fb74abc867db479eaa915bb14cf8adad",
".git/objects/ad/822106c44f8e8233b1b7460a8b7e0cb222195f": "c3a9e0e4cc99c961c0cbc775e840a6ce",
".git/objects/bd/d8971be86498403ae206d0a5de1698495584f6": "64715f4637b2b428f54c649f5187480f",
".git/objects/c4/960d54fd1f6d7cafbd229f9d634b0b737dfd29": "8b19a38d1c38f17a989e475804e2233c",
".git/objects/cb/436a03619ce7356c4c26ef69de0d5e61123a6c": "f73a7b71b6e166fd5011ef9209a5f7e0",
".git/objects/dc/b7f57e978ce1e93d6995a847e067ace9de2ea0": "d9d2f8b7a80e02f20fdf6cb81c5d80cd",
".git/objects/e6/d136516a4cc44c35c96d1aec88bd9d89c75603": "2cb33607e99f730f67c4363f10ceb3d2",
".git/objects/fa/60c3089213ac47171d82dafc99337921e4bcac": "96cd1a019350003547753235451a1bd8",
".git/objects/pack/pack-ba1812620cfae6d8cdd11eff44b1b72c68fa7dc7.idx": "cd99a244f53187bcb1c6729a052a7c41",
".git/objects/pack/pack-ba1812620cfae6d8cdd11eff44b1b72c68fa7dc7.pack": "79ae39807a6a11e8075fb66427e0d7ca",
".git/objects/pack/pack-ba1812620cfae6d8cdd11eff44b1b72c68fa7dc7.rev": "eb217c6bf19e1d0d58967e605381ac08",
".git/packed-refs": "d584ec9f40cf2f23a3cb2ff5a49eeb8b",
".git/refs/heads/master": "aef807335fae154ee572411d3ed06727",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "aef807335fae154ee572411d3ed06727",
"assets/AssetManifest.bin": "c3c958a1e0a06b05e10f0e6057531a07",
"assets/AssetManifest.bin.json": "9bc7577a97e15b7fd4af0477646fea74",
"assets/AssetManifest.json": "fc8d475c85052035d8c7b98d0a64eadb",
"assets/FontManifest.json": "bf56da640282efe5571fec13e7e79ec1",
"assets/fonts/MaterialIcons-Regular.otf": "e3c781890a4cc3ef83ad7287c047b150",
"assets/NOTICES": "45cc0b56f560e70c8c2c4afa9c7d8361",
"assets/packages/amplify_authenticator/assets/social-buttons/google.png": "a1e1d65465c69a65f8d01226ff5237ec",
"assets/packages/amplify_authenticator/assets/social-buttons/SocialIcons.ttf": "376fbf368ffe39e045978e3d3197efbd",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "b87392926453faa5454df0ec57701ee0",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "42c2b43609313d52245a8e1f328c9821",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "fa742e283e40fa499a72f9a314f9f53a",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "b77186f134bc5be76a9c7b6512461a00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ea818f882a05d59c97c33665cbfed86",
"/": "1ea818f882a05d59c97c33665cbfed86",
"main.dart.js": "1a67e06af734b12991556c33971333c7",
"manifest.json": "3d77b04497d6d5a3b31af0daf16e8c09",
"version.json": "4e93a70cff4333412d2206fe20248fba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
