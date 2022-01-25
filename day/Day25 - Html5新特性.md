# Day25 - HTML5新特性

### HTML5的重要性

- 产生于1990年
- 1997年HTML4出现并且维持了10年时间
- 2008年 HTML5出现，2012年趋于稳定 （移动互联的红利期）

![image-20220125123233101](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220125123233101.png)

## HTML5新特性

> https://www.w3school.com.cn/html/

### 语义化标签

![image-20220125115939776](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220125115939776.png)

```html
<div class="header">Header</div>
  <div class="nav">Nav</div>
  <div class="body">
    <div class="article">
      Article
      <div class="section">
        Section
      </div>
    </div>
    <div class="aside">
      Aside
    </div>
  </div>
<div class="footer">Footer</div>

```

```html
<header>Header</header>
  <nav>Nav</nav>
  <div class="body">
    <article>
      Article
      <section>Section</section>
    </article>
    <aside>Aside</aside>
  </div>
<footer>Footer</footer>
```

- 清晰易读
- 有利于SEO，方便搜索引擎识别页面结构
- 方便设备解析、比如盲人阅读



### 表单功能增强

```html
 <form action="" method="get">
    <p>邮箱标签: <input type="email"></p>
    <p>数字标签: <input type="number"></p>
    <p>滑动条标签: <input type="range"></p>
    <p>搜索框标签: <input type="search"></p>
    <p>日期框: <input type="date"></p>
    <p>星期框: <input type="week"></p>
    <p>月份框: <input type="month"></p>
    <p>颜色框: <input type="color"></p>
    <p>网址框: <input type="url"></p>
    <div>
      <input type="submit">
      <input type="reset">
    </div>
</form>
```

### 音视频标签

在h5之前，网页中内嵌音视频普遍会采用flash实现。

```js
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
</video>
```

### 画布 - Canvas+ SVG

HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。

画布是一个矩形区域，您可以控制其每一像素。

canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

这个后面会专门出一期和svg的对比。

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script type="text/javascript">
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75);
</script>
```



### 拖放

拖放（Drag 和 Drop）是很常见的特性。它指的是您抓取某物并拖入不同的位置。拖放是 HTML5 标准的组成部分：任何元素都是可拖放的。

```html
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      #div1 {
        width: 120px;
        height: 120px;
        padding: 10px;
        border: 1px solid #aaaaaa;
      }
    </style>
    <script type="text/javascript">
      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drag(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
      }

      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
      }
    </script>
  </head>
  <body>
    <p>请把图片拖放到矩形中：</p>

    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <br />
    <img
      id="drag1"
      src="img.png"
      draggable="true"
      ondragstart="drag(event)"
    />
  </body>
</html>

```

### 本地存储

通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。

在 HTML5 之前，应用程序数据只能存储在 cookie 中，包括每个服务器请求。本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。

与 cookie 不同，存储限制要大得多（至少5MB），并且信息不会被传输到服务器。

本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。

### Web Worker

当在 HTML 页面中执行脚本时，页面是不可响应的，直到脚本已完成。

Web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 运行在后台。

#### 地理定位

HTML5 Geolocation API 用于获得用户的地理位置。

鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

```js
<script>
var x=document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
  x.innerHTML="Latitude: " + position.coords.latitude +
  "<br />Longitude: " + position.coords.longitude;
  }
</script>
```





#### datalist

只不过我们经常使用别人已经封装好的 UI 组件，所以就没怎么用过，此标签就是 HTML5 封装的 Select API。

```html
<input id="fruits" list="list" />
<datalist id="list">
  <option value="苹果"></option>
  <option value="香蕉"></option>
  <option value="山楂"></option>
</datalist>

```

![image-20220125122459777](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220125122459777.png)

#### 可编辑内容

它被广泛的应用，比如很多网页编辑器，内容切换编辑状态等等，都可以通过这个属性来实现。

```js
<div class="edit" contenteditable='true'></div>
```

![123](https://gitee.com/josephxia/picgo/raw/master/juejin/123.gif)

## 面试攻略

HTML5是十年前的新技术。有些应用已经非常普遍了。但是还有很多技术还在摸索阶段，大家有机会可以看看Vite中的HMR技术使用了什么样的H5新特性。
