---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day01 HTML与HTTP
全栈然叔

---

# 然叔在面试课上的原则
- 有问必答 提到https://github.com/su37josephxia/frontend-interview/issues
- Show me your code - 用代码解释 + 测试驱动TDD
- 优秀是一种习惯 --  带大家养成习惯

---

# 面试课安排
### Lesson01 HTML与HTTP
    - 浏览器、渲染过程、回流与重绘、Dom操作、虚拟Dom
    - 事件流、冒泡、捕获、委托
    - 异步加载、图片懒加载、缓存、存储
    - HTML5特性、语义化标签、Serviceworker、编程式Cache
    - 手写HTTP、强/协商缓存、跨域九法、Websocket、GraphQL、RPC
#
### Lesson02 网络（HTTP2，HTTPS）、Node、异步编程
    - 网络基础、OSI七层、TCP与UDP、三次握手
    - HTTP、HTTPS、HTTP2、HTTP3
    - CDN
    - 网络安全XSS
    - VPN与网络隧道技术、暗网
    - 加密算法、摘要算法、非对称秘钥
    - Node、持久化、鉴权(token/cookie-session)、SSR
    - 异步处理、同步异步、事件循环
    - BFF 与 中台
    - Thunk、Generator、Co、Promise、Async/Await

---

#
### Lesson03 工程化与Webpack
    - webpack、概念、原理、优化
    - Babel与AST
    - 如何完成类库封装、
    - CI与CD
    - Bundless与Vite

---

# 落选的面试题
- 如何操纵视频流 - https://juejin.cn/post/6844903609000263694
- 翻墙的原理，为什么翻墙可以访问外网 - VPN、Tunnel
- 防抖和节流 -  这是JS基础题 看天天造轮子
- 其他定义性题目 - 略

---

# 面试官眼里的面试
- 基本原则： 过往工作 =>  未来工作
- 三个方面
  - 知识体系  => 思维能力强
  - 细节清晰  => 是否存在造假
  - 对新知识有涉猎 => 工作主动性高

---

# 面试题是什么

- ✅ 能力的试金石
- ✅ 学习路径上的灯塔
- ❌ 无脑背题 - 你能蒙过去说明公司不咋地

---

# HTML

Day21 - innerHTML、 nodeValue与 textContent之间的区别
- [B栈视频](https://www.bilibili.com/video/BV1gr4y1U7pY?p=21)
- [掘金文章](https://juejin.cn/post/7056045978855571493)
- [Github](https://github.com/su37josephxia/frontend-interview/issues/26)

Day22 - 呈现一个wiki页面你会用到哪些语义化标签
- [B栈视频](https://www.bilibili.com/video/BV1gr4y1U7pY?p=22)
- [掘金文章](https://juejin.cn/post/7056047002903134244)
- [Github](https://github.com/su37josephxia/frontend-interview/issues/74)

Day23 - window外的常用子对象
- [B栈视频](https://www.bilibili.com/video/BV1Pq4y1w76C)
- [掘金文章](https://juejin.cn/post/7056677173561655326)
- [Github](https://github.com/su37josephxia/frontend-interview/issues/30)

---

# HTML

Day24 - 图片懒加载的原理
- [B栈视频](https://www.bilibili.com/video/BV173411h7P6)
- [掘金文章](https://juejin.cn/post/7056794350361477134)
- [Github](https://github.com/su37josephxia/frontend-interview/issues/75)

Day25 - Html5与Html4的不同
- [B栈视频](https://www.bilibili.com/video/BV15L4y1t7ri)
- [掘金文章](https://juejin.cn/post/7056997859677175821)
- [Github](https://github.com/su37josephxia/frontend-interview/issues/76)

Day26 - SVG和CANVAS的区别？
- [B栈视频](https://www.bilibili.com/video/BV1nq4y1w7sW)
- [掘金文章](https://juejin.cn/post/7057410984914190350)
- [Github](https://github.com/su37josephxia/frontend-interview/issues/78)


---

# HTML

Day27 - Script放在body或header中会阻塞吗?
- [B栈视频](https://www.bilibili.com/video/BV1wq4y1F7P7)
- [掘金文章]()
- [Github](https://github.com/su37josephxia/frontend-interview/issues/79)


Day28 - 简述一下浏览器渲染过程
- [B栈视频](https://www.bilibili.com/video/BV1RS4y1L7zn/)
- [掘金文章]()
- [Github](https://github.com/su37josephxia/frontend-interview/issues/80)

Day29 - 回流和重绘
- [B栈视频](https://www.bilibili.com/video/BV1qb4y1E7Qj)
- [掘金文章]()
- [Github](https://github.com/su37josephxia/frontend-interview/issues/81)

---

# HTML

Day30 - 详细说一个ServiceWorker的应用
- [B栈视频](https://www.bilibili.com/video/BV1e3411E7iz)
- [掘金文章]()
- [Github](https://github.com/su37josephxia/frontend-interview/issues/86)

---

# 补充材料
- 一个table，第二行和第三行，点进去变成输入框 [代码](https://github.com/su37josephxia/frontend-interview/blob/main/doc/course/01/01-table/index.html)
- 原生轮播图实现 https://juejin.cn/post/6891634318738161678s
- Dom操作与Vdom [Vdom代码](https://github.com/su37josephxia/wheel-awesome/tree/master/02-part/vdom)
- 防抖和节流(去我的造轮子敲 https://github.com/su37josephxia/wheel-awesome)
- 事件委托与事件冒泡 (https://github.com/su37josephxia/frontend-interview/tree/main/doc/course/01/02-event)
