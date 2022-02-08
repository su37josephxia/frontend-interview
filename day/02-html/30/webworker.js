// 监听主线程传过来的信息
self.onmessage = (e) => {
  console.log("webworker receive:", e.data);
};

// setInterval(() => {
//   console.log("webworker running",self.location);
//   self.location.reload() 
// }, 1000);

let n = 0;
setInterval(() => {
  self.postMessage(n++)
}, 1000);