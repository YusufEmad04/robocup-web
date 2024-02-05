'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c0e0e6879a4f839a99631f4e7c125b69",
".git/config": "6bcc6de0c92aece47bda83cb5076ec3f",
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
".git/index": "c65bb43a2800389d6f997224fc1de5ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59b1808d031c25cffa8cfe7f5706c58e",
".git/logs/refs/heads/master": "59b1808d031c25cffa8cfe7f5706c58e",
".git/logs/refs/remotes/origin/master": "653f73f53d62c0229c98e2dc66a18dc6",
".git/objects/01/be0095630f80a2af2a41732e883a391add79b4": "0dec63526c47217f56ef3d58189d74b1",
".git/objects/03/d9ea51af1a977689d085bf79f64fe389f1d1b6": "cf29d5eb04126ed860e2b573b3256320",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0c/40df049c141431cbbfed1564dcfb28d8416118": "b52a42f60c6eec9e1c9a1244384bad5b",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/36609020a801c0b4dace63f3ad11ba60ecab43": "a5345e495fb8c0aaa8e57177dc88610d",
".git/objects/13/2465a980a1494f1c54ef6684f486b01a7dda27": "fc348f37ca499ca741e037b30c11ad55",
".git/objects/13/6c08bc9ba1eb8bb3f7e2c5d81827310d5981ab": "5576d47600459ef89ba39f2264bddefc",
".git/objects/16/e2c71e9d4d7e72d67d6b66956324f01d73aa12": "c98fc24a409557ea258c11f7ce18e941",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/26/ff6b87daeddabc2f126fc2389df2ab857f629f": "cecb16eeac8da0629200c39a2cf0a2d6",
".git/objects/2a/bcc027e7ce81e9f2403e84d880b9983345e22f": "df98f0e456b2baa625bac5b5bde15db8",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/8287542fce63aa40537fd48f3feaac91cd2f52": "e6a7d53f360abb4ed95dfddc7b086028",
".git/objects/2d/d10146680b426a1c257c5d45ca5d13187c67fe": "7b430d91d3d272cf353d78a5dce45f3f",
".git/objects/2f/75e5cb46472ed1dafe0b2798207f3f3e5c1f1a": "72034b73b8d2574632445efa7bf5f65b",
".git/objects/31/5d26c896fe89eedcdbe641e6819201cbda990d": "d594cd72d5eac3059640f999bbb6da4c",
".git/objects/39/30bd880bfafb33e54592cd670f34b819308dd8": "b1fecfe28d0b554dbba58389345f2588",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/12d650302302493b040b9ad4e5fdf29d9cdf06": "100603fe138eeb9b50f799874e022a7b",
".git/objects/3b/86030659a9c55587aa633cdbcac102d806ce87": "d9208f8532d589f70b861e9f747238df",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/482a970688db65bf7561700776307004debd6b": "ea733b998e8686c8755ae79c2653c415",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/e1dad553897a738453d66940afafccc26f8cbc": "8cba4ce18fe9bc272de959b14962bf9b",
".git/objects/5e/6a2a68e6fbae8395ff00923e4a49beba503822": "16cc930ac34ab6f38a5dadfdbdaed3d8",
".git/objects/62/8ba5e26d7f73c6d93fb9645649fd6a03d84799": "9826e6743a31613b563ba155171632a5",
".git/objects/65/d14bc1e5c413523734b4cec3d4e3c03d596eab": "d4371d8f1afbc68f626c788930ce1af3",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/74/41d4a3e2b67116c1d2804b60759d34f99da2ac": "63bdcb76b7e27b17088d588df14e0ab0",
".git/objects/81/7dc21384cc6935bd6edbfb1fa9672d2d0e6f37": "c50867e2c8acfc84a97581d5d87444b9",
".git/objects/85/339620fb43aaa9cabaaad889642703b5aaa456": "71e85a5f426f268812995f66df967ba5",
".git/objects/86/4c2b2f68b7d48493b8868da6494cd137f95add": "5276587c56766fb8ead480ba8243f2d5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/d5e819a94097c61b6a14dddae91d5396526010": "94741a662fe03bcb691d4ee42fde640b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/d402dd539af6c802551696973ae84482744795": "1ff720d3acc8814b45328ac30045dbbe",
".git/objects/a0/8ecc63bb696cc0fcdff1a9e745ea87c23d9df5": "8282bb869516258800e90a31538a050a",
".git/objects/a2/096bc2970fb69bc96d15c54e14a53914d7c838": "0ffdd5d4dd85d1b5427ffb22cd042244",
".git/objects/a4/a9918dad10832bc8aaa5574d71fe15f089c8cb": "9636ed519a82aae2e1b6c48dcc421730",
".git/objects/a5/f90172197a39bb6e846be381bfdf1dfa779b88": "028c97572e65c32d2ad10e7848c3fd5c",
".git/objects/a8/33e5f330265655bb88fbdb58ce1d09f5980445": "c8b315fbe1ec20643381ee81d27ce86a",
".git/objects/ae/07ab3e6a99d2929a0b45a4e29feff8955ebc41": "597ca7c8f82c1b6e068fa65cbd60202d",
".git/objects/ae/d4723f620578ee513f3c6faee671fb49510ff7": "5577c6a8800a88efe5a66340e66f096d",
".git/objects/b7/11e6e5c7a635c9b14527bb056db0f0a712f129": "b9015f275aca75d518405b5222d120d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c6/dc280bd43f5133ac483df823d487e147487457": "99347e5f087d8085ceea187c7f437c3f",
".git/objects/c8/7d4d0ba0eccd092276eea34e47af58872cb611": "1258fc6d235b0c1e54b4985e08a3b37a",
".git/objects/c9/e35cf817498f563cca69cba548af910cf5c0ac": "29829c7c20fb03791b6cde88dbde691c",
".git/objects/ce/5505d9f6c5af17d21c65ea1260ae29dfa0d224": "21b333050d3a3f219e51eca03f0e25ea",
".git/objects/ce/913175bcddf0c66d15f50cc3bcbab2ee297fae": "f8c057960cd1243e01cfb8cddbabc542",
".git/objects/d0/17e745246affd1d97398f4b1f46d8877f5d82e": "945f9cf808cceeb9c24079e4fae8f8bf",
".git/objects/d2/ec82423bf84cad7cff52c903044f1ae3d71c96": "9f3a7189f82ea38b6998160b1fe3e7f3",
".git/objects/d4/8b7d5561b0750138673b16f0715ffc9333cdaf": "8601a4da9e161ad571a224dfbb1bec2a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/e9e837743eccfc48e9557e9d4d9c5be0d5c1d9": "52e4e6382f295bde7ac33e4e69f2f0a0",
".git/objects/dd/d7748001672528d64af268dfc39bed87eb4862": "ae07c076c3f056437cc34f342129f9d0",
".git/objects/df/4e0959e11abff86fb3840c7f15c0f3f2d4302e": "618c70f6643eb80cb96e416d5df52b35",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/c5327d1ed12cb0936ac2dbdeeccf8a0afdca47": "7d18dec6baaefe55b28f6c548ab0bff7",
".git/objects/f5/88b3f2ae5987e7a74d509ddda0c4751285c5e4": "2f0c815157b599e8668de988222523d8",
".git/objects/f7/3d28efd843b496a16cbe9278683534930e7467": "09bba8bcf0e8d3cd715706af80d4e772",
".git/refs/heads/master": "c088d4ae532d332435705f9607f7ec9b",
".git/refs/remotes/origin/master": "c088d4ae532d332435705f9607f7ec9b",
"assets/AssetManifest.bin": "c3c958a1e0a06b05e10f0e6057531a07",
"assets/AssetManifest.bin.json": "9bc7577a97e15b7fd4af0477646fea74",
"assets/AssetManifest.json": "fc8d475c85052035d8c7b98d0a64eadb",
"assets/FontManifest.json": "bf56da640282efe5571fec13e7e79ec1",
"assets/fonts/MaterialIcons-Regular.otf": "e3c781890a4cc3ef83ad7287c047b150",
"assets/NOTICES": "9d55c1f7347bb52442fbce1fac8cc35c",
"assets/packages/amplify_authenticator/assets/social-buttons/google.png": "a1e1d65465c69a65f8d01226ff5237ec",
"assets/packages/amplify_authenticator/assets/social-buttons/SocialIcons.ttf": "376fbf368ffe39e045978e3d3197efbd",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "96a4f300372b4af473dfc064ed8c2bbb",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "78431b9ab6f0bdf0ea53fb030d2f4dc7",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "79da0578419862d4aec86b686e06f90c",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "cf150ebe9b8ab146e10e6b768b9151b7",
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
"index.html": "6933ae63a2d606ea2b64f8285f603126",
"/": "6933ae63a2d606ea2b64f8285f603126",
"main.dart.js": "3bdb6992ec6ece02cb9f6979765b3152",
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
