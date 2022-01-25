# Day24 - 图片懒加载的原理

## 知识讲解

### Why

懒加载是一种延迟加载技术，在一个长网页中存在大量图片影响加载速度和用户体验。懒加载是一种优化网页性能的方式。大量用在电商场景中。

![image-20220124221805647](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220124221805647.png)

例如京东的首页，只需要第一时间完成首屏展示的任务就可以了，其他图片可以随着页面的滚动下载就可以了。

### What

懒加载原理就是将一次性下载全部通篇改为根据判断可视区域下载。也就是说看到哪下载到哪。

- 图片的src不设置真实的路径
- 图片的真实路径设置在其他属性中比如： data-original
- 通过js判断图片是否进入可视区域。
- 如果图片进入可视区域将图片src换成真实路径

### HOW

Step01: 图片的src不设置真实的路径，真实路径设置data-original

```js
    <img
      src=""
      class="image-item"
      lazyload="true"
      data-original="https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220124221805647.png?a=1"
    />
```

Step02:通过js判断图片是否进入可视区域,如果图片进入可视区域将图片src换成真实路径

```js
var viewHeight = document.body.clientHeight;
//获取可视区高度
function lazyload() {
  console.log('load')
  var list = document.querySelectorAll("img[data-original][lazyload]");
  list.forEach((item) => {
    if (item.dataset.original === "") return;
    var rect = item.getBoundingClientRect();
    console.log('图片相对位置top',rect.top)
    // 获得图片相对浏览器视窗的位置
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      var img = new Image();
      img.src = item.dataset.original;
      img.onload = function () {
        item.src = img.src;
      };
      item.removeAttribute("data-original");
      //移除属性，下次不再遍历
      item.removeAttribute("lazyload");
    }
  });
}
lazyload(); //刚开始还没滚动屏幕时，要先触发一次函数，初始化首页的页面图片
document.addEventListener("scroll", lazyload);
```

## 面试攻略

懒加载技术大量应用在电商首页的长页面中，大家一定要明白原理并且亲自动手试试这段代码。

