# 跨域

---

# 同源策略

同源策略是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。


## 同源策略限制内容
- Cookie、LocalStorage、IndexedDB 等存储性内容
- DOM 节点
- AJAX 请求发送后，结果被浏览器拦截了 (xmlHttpRequest)

## 允许跨域

- <img src=XXX>
- <link href=XXX>
- <script src=XXX>


---

# 九大解决方案
- jsonp
- cors
- postMessage
- websocket
- Node中台
- Nginx反向代理
- window.name + iframe
- window.hash + iframe
- window.domain + iframe
- RPC + Thrift (附加)
- Serviceworker


---

# JSONP

利用 <script> 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP请求一定需要对方的服务器做支持才可以。