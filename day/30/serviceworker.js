this.addEventListener("message", function (event) {
  // console.log("sw receive:", event.data); // this message is from page, to sw
});

console.log("sw running...");
let n = 0;
setInterval(() => {
  this.clients.matchAll().then((clients) => {
    // console.log("client num :" + clients.length);
    clients.forEach((client) => {
      client.postMessage(++n);
    });
  });
}, 1000);

self.addEventListener("fetch", async (e) => {
  console.log("fetch:", e.request.url, e);
  if (e.request.url.endsWith("delay.js")) {
    e.respondWith(
      caches.match(e.request).then((response) => {
        if (response) {
          console.log("缓存命中");
          return response;
        } else {
          // 匹配失败则继续请求
          var request = e.request.clone();

          return fetch(request).then(function (res) {
            //拿到了http请求返回的数据，进行一些操作

            //请求失败了则直接返回、对于post请求也直接返回，sw不能缓存post请求
            if (
              !res ||
              (res.status !== 200 &&
                res.status !== 304 &&
                res.type !== "opaque") ||
              request.method === "POST"
            ) {
              return res;
            }

            // 请求成功的话，将请求缓存起来。
            var responseClone = res.clone();
            caches.open("v1").then(function (cache) {
              console.log("记录缓存");
              cache.put(e.request, responseClone);
            });

            return res;
          });
        }
      })
    );
  }
});
