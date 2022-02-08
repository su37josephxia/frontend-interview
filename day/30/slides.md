---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day30 说说Serviceworker的应用
全栈然叔

---

## 提纲
- webworker
- serviceworker
- CacheStorage

---
## Webworker
一般一个网页有两个进程：GUI渲染线程和JS引擎线程。
JS引擎和GUI渲染线程是互斥的。也就是说JS执行时UI会发生阻塞。

Web Worker (工作线程) 是 HTML5 中提出的概念，分为两种类型，专用线程（Dedicated Web Worker） 和共享线程（Shared Web Worker）。专用线程仅能被创建它的脚本所使用（一个专用线程对应一个主线程），而共享线程能够在不同的脚本中使用（一个共享线程对应多个主线程）

---

## Web Worker特点

只能服务于新建它的页面，不同页面之间不能共享同一个 Web Worker。
当页面关闭时，该页面新建的 Web Worker 也会随之关闭，不会常驻在浏览器中。

---

### 用途
Web Worker 的意义在于可以将一些耗时的数据处理操作从主线程中剥离，使主线程更加专注于页面渲染和交互。

- 懒加载
- 文本分析
- 流媒体数据处理
- canvas 图形绘制
- 图像处理

---

### 注意点
- 同源限制
  分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。
- DOM 限制
  Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。
- 通信联系
  Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。
- 脚本限制
  Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。
- 文件限制
  Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

---

## ServiceWorker
基于Webworker 继承webworker的各种特性
Service Worker 理解为一个介于客户端和服务器之间的一个代理服务器。

- 拦截客户端的请求
- 向客户端发送消息
- 向服务器发起请求等等
- 其中最重要的作用之一就是离线资源缓存

---

### 与Webworker的不同
- ServiceWorker是浏览器进程 Webworker浏览器内核的线程
- 不会因为页面关闭而被被销毁
- 可以多页面使用
- Serviceworker只能被使用在https或本地localhost下

---

### CacheStorage
为了能够精细地、可编程地控制缓存，CacheStorage 被设计出来。有了它，就可以用 JS 对缓存进行增删改查，你也可以在 Chrome 的 DevTools 里面直观地查看。对于传统的 Header 缓存，你是没法知道有哪些缓存，更加没法对缓存进行操作的。你只能被动地修改 URL 让浏览器抛弃旧的缓存，使用新的资源。

---
### 用途
1. 数据Mock： 跟Fetch搭配 从浏览器层面拦截请求
2. 离线应用与缓存： Fetch和CacheStorage搭配


