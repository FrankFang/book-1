/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "22a256df59dd270062800e79cf38a209"
  },
  {
    "url": "assets/css/0.styles.541e829b.css",
    "revision": "c077c698c4a4a0f97e943b7f9d996934"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e4d80dd5.js",
    "revision": "83803cf93559fb351dd0c0e8a3369e1b"
  },
  {
    "url": "assets/js/11.f1d05daa.js",
    "revision": "c616f138f0e50fb63f4717740810ff62"
  },
  {
    "url": "assets/js/12.461ca278.js",
    "revision": "b0e419d4a6d70f15c5f454cf7f74cc8b"
  },
  {
    "url": "assets/js/13.0a503fe5.js",
    "revision": "fc484b305232a199bd23420857fc6c33"
  },
  {
    "url": "assets/js/14.b25eec03.js",
    "revision": "31650c21cdce5533d30bb1745d21abcb"
  },
  {
    "url": "assets/js/15.5d42c7c6.js",
    "revision": "47058d805b1f3d6ff1f8ed4bc3ee236c"
  },
  {
    "url": "assets/js/16.162662fd.js",
    "revision": "4b03cc420e6cee785bb324d279ab3396"
  },
  {
    "url": "assets/js/17.471a58e0.js",
    "revision": "cf6dfe77f7b09cdd6a0ecccad5fa0abf"
  },
  {
    "url": "assets/js/18.fc7a907f.js",
    "revision": "1ec3ee2b223988801c8d3597b424b18f"
  },
  {
    "url": "assets/js/19.0c0b6848.js",
    "revision": "8c4d8e7444940397be49cd54d92c1579"
  },
  {
    "url": "assets/js/2.67d921ef.js",
    "revision": "da820c8f4f13c400230167be7ca6f1f8"
  },
  {
    "url": "assets/js/20.4e971450.js",
    "revision": "957e1c4daa05eb4ddcf7ce8af7c6db19"
  },
  {
    "url": "assets/js/21.ac2fac37.js",
    "revision": "9f12322bc6d3c817856b0f3e7923225f"
  },
  {
    "url": "assets/js/3.23109c73.js",
    "revision": "95e9f6c467fbdde588b88a16adf48ce5"
  },
  {
    "url": "assets/js/4.907751b9.js",
    "revision": "adb10e2ae0a261dace748db15d2d2228"
  },
  {
    "url": "assets/js/5.e48e400e.js",
    "revision": "9c96a822bb2cddd3c4053215aa1d2d6a"
  },
  {
    "url": "assets/js/6.d1e732fe.js",
    "revision": "6b7e805834eba42a9ecd6ca8ba555d12"
  },
  {
    "url": "assets/js/7.51acb898.js",
    "revision": "e6e7fad77e6977763a6fff49b999c9ab"
  },
  {
    "url": "assets/js/8.8d6f41c6.js",
    "revision": "2ded230c12331967a5f1137805e16bbc"
  },
  {
    "url": "assets/js/9.7144567d.js",
    "revision": "dfff1a13fcdd5559b9055337e7ba6c95"
  },
  {
    "url": "assets/js/app.b8522ec2.js",
    "revision": "1d41c3ae522cb3c6042af34cffa6990f"
  },
  {
    "url": "ch1/cli.html",
    "revision": "54d0bf301ed9518769d9e40988d4e3de"
  },
  {
    "url": "ch1/computer.html",
    "revision": "f70aa4c98a83d5f811c31bf60d00ad5c"
  },
  {
    "url": "ch1/cpu.html",
    "revision": "b07282689b6b69720ce02cb79d3ed4e9"
  },
  {
    "url": "ch1/index.html",
    "revision": "8ef6cc7cc2bd6469c8142ce0558d2f00"
  },
  {
    "url": "ch1/os.html",
    "revision": "71ed5b68dc554b6ecd38fefddaef5de3"
  },
  {
    "url": "ch1/storage.html",
    "revision": "e86866730f7647ba2f691f34135b8ca3"
  },
  {
    "url": "ch2/bash_script.html",
    "revision": "6b0d894f1586691486ad79fd01421852"
  },
  {
    "url": "ch2/index.html",
    "revision": "f8a3ff7a5b1e0c82f2c09d5ced577731"
  },
  {
    "url": "ch2/node_script.html",
    "revision": "b0b4c35103c86c9de5056fe6d42eec3e"
  },
  {
    "url": "ch2/python_script.html",
    "revision": "26d7c44b980cad282d4773653b0498f1"
  },
  {
    "url": "ch2/ruby_script.html",
    "revision": "58d8e83ada2ddf83c5af0624864e9767"
  },
  {
    "url": "ch3/http.html",
    "revision": "d93c37408935ac0af61445fdfcdc1b98"
  },
  {
    "url": "ch3/index.html",
    "revision": "0dc811db9bee67ccb7c593236fefc8b8"
  },
  {
    "url": "ch3/internet.html",
    "revision": "bcf798828309123d69aba9d21a909c6d"
  },
  {
    "url": "ch3/server.html",
    "revision": "8f2a79f6380345a17475c136204d1238"
  },
  {
    "url": "ch3/www.html",
    "revision": "12357c504dc28a7c7bee9cca0705b36c"
  },
  {
    "url": "index.html",
    "revision": "4f82e118c95600c1c570b3dc9476b593"
  },
  {
    "url": "preface/index.html",
    "revision": "fddaa62f173a3baca2085821de045fd8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
