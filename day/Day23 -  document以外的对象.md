# Day23 - document以外的常用对象

## 知识讲解

![image-20220124154025948](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220124154025948.png)



window对象以外的常用对象可以大体上分为两类，一类是BOM模型中的对象。

### BOM模型

#### location对象

Location 对象包含有关当前 URL 的信息。

属性。

```js
location.hostname; // 返回 web 主机的域名
location.port;     // 返回 web 主机的端口 （80 或 443）
location.protocol; // 返回所使用的 web 协议（http:// 或 https://）
location.href;     // 返回当前页面的url地址
location.host;     // 返回当前页面url的主机ip
location.pathname; // 返回当前页面的路径和文件名
```

方法

```
location.assign('about:/blank') // 载入一个新文档
location.reload() // 重新载入文档
location.replace('http://www.baidu.com') // 替换
```



#### navigator对象

Navigator 对象包含有关浏览器的信息

```js
navigator.appCodeName; //浏览器代码名
navigator.appName;     //浏览器步伐名
navigator.language;    //浏览器当前语言
navigator.platform;    //操作体系类型win32
navigator.plugins;
navigator.appVersion;     //浏览器版本(包括 体系版本)
navigator.userAgent;      //用户代理头的字符串表示
navigator.onLine;         //用户否在线
navigator.cookieEnabled;  //浏览器是否撑持cookie
navigator.mimeTypes;
```



#### screen对象

它包含客户端显示器的信息，比如像素宽度和像素高度。
history对象： 表示当前窗口首次使用以来用户的导航历史记录。每个 window 都有自己的 history 对象。

```js
screen.availWidth;    // 返回浏览器可用宽度 像素为单位 1366
screen.availHeight;   // 728  
screen.availTop;      // 0
screen.availLeft;     // 0
```



### WebAPI

webapi家族其实有很多的成员具体可以看看下面的文档。

https://developer.mozilla.org/zh-CN/docs/Web/API

#### storage对象

本地存储，有临时存储sessionStorage，永久存储localStorag

#### fetch

Fetch本质上是一种标准，该标准定义了请求、响应和绑定的流程。 Fetch标准还定义了Fetch () JavaScript API

#### console

Console API提供了允许开发人员执行调试任务的功能，例如在代码中的某个位置记录消息或变量值，或者计算任务完成所需的时间。

#### IndexDB

IndexDB 是一个运行在浏览器上的**非关系型数据库**。既然是数据库了，那就不是 5M、10M 这样小打小闹级别了。理论上来说，IndexDB 理论上是没有存储上限的一般来说不会小于 250M）。它不仅可以存储字符串，还可以存储二进制数据。

#### WebSQL

WebSQL 是浏览器端的关系行数据库，引入了一组使用 SQL 操作客户端数据库的 API。

#### Application Cache

WebSQL Application Cache 是 HTML5 中定义的一种离线存储技术标准。这种技术可以让开发者明确地指定页面中哪些静态资源可以在第一次访问网页的同时缓存到本地，并且在下次访问该网页时向服务器询问本地缓存的资源是否需要更新



## 面试攻略

这道题主要就是一个概念题，攻略就是要回答整体架构。

