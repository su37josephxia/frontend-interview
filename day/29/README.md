---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day29 - 重绘(repaint)与重排(reflow)

全栈然叔

---
layout: two-cols
---

![Snip20220128_20](https://gitee.com/josephxia/picgo/raw/master/juejin/Snip20220128_20.png)

::right::

- 构建 DOM树:  解析 HTML 文件，构建 DOM树,同时浏览器主进程负责下载 CSS 文件
- 构建CCSOM树： CSS 文件下载完成,解析 CSS 文件形成CSSOM Tree
- 生成渲染树:   CSSOM + DOM =>  渲染树RenderTree
- 布局(Layout):  RenderObject根据盒模型确定元素的尺寸，位置
- 绘制(Painting) :  绘制页面像素信息
- 显示(Display): 浏览器主进程将默认的图层和复合图层交给 GPU 进程,GPU 进程再将各个图层合成（composite）,最后显示出页面

---

# 重绘与回流

在页面被用户访问的时，DOM和CSS都有可能发生变化。
一旦发生变化就需要重新绘制甚至重新布局

## 重绘repaint

重新绘制 比如：字体颜色或背景色发生变化

## 重排reflow
也叫做回流， 比如： 元素位置或大小改变，一旦发生重排肯定后续的重绘也会进行一次。

---

# 重排的性能开销大于重绘

很显然同样是返工，重绘相当于一面墙重新刷漆，重排相当于从新砌墙再刷漆。显然性能开销更大

---

# 重绘的场景

一个元素的外观被改变，（背景色，字体颜色，边框颜色等）

# 重排（回流）的场景

1.添加删除可见DOM元素

2.元素位置发生改变

3.元素尺寸，位置发生改变

4.页面渲染初始化

5.浏览器尺寸改变

6.获取元素计算后的属性如：
    offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight、getComputedStyle() (currentStyle in IE)

---

# 优化思路
- 能重绘尽量不重排
- 能少排不多排
- 能小区域不大区域排
- 避免无效重排
- 利用GPU资源

---

## 1.分离读写操作
```js
div.style.left = '10px';
div.style.top = '10px';
div.style.width = '20px';
div.style.height = '20px';
console.log(div.offsetLeft);
console.log(div.offsetTop);
console.log(div.offsetWidth);
console.log(div.offsetHeight)

```
由于属性读取会强制重排后在读取，所以尽量避免读一个写一个属性读一个属性。


---

## 2. 样式集中改变

```js
// bad
var left = 10;
var top = 10;
el.style.left = left + "px";
el.style.top  = top  + "px";
// good 
el.className += " theclassname";
// good
el.style.cssText += "; left: " + left + "px; top: " + top + "px;";
```

---

## 3. 缓存布局信息

```js
// bad 强制刷新 触发两次重排
div.style.left = div.offsetLeft + 1 + 'px';
div.style.top = div.offsetTop + 1 + 'px';

// good 缓存布局信息 相当于读写分离
var curLeft = div.offsetLeft;
var curTop = div.offsetTop;
div.style.left = curLeft + 1 + 'px';
div.style.top = curTop + 1 + 'px';
```

---

## 4. 离线改变dom
隐藏要操作的dom

- 在要操作dom之前，通过display隐藏dom，当操作完成之后，才将元素的display属性为可见，因为不可见的元素不会触发重排和重绘。

    ```js
    dom.display = 'none'
    // 修改dom样式
    dom.display = 'block'
    ```

- 通过使用DocumentFragment创建一个dom碎片,在它上面批量操作dom，操作完成之后，再添加到文档中，这样只会触发一次重排。

- 复制节点，在副本上工作，然后替换它

---

## 5. position属性为absolute或fixed
position属性为absolute或fixed的元素，重排开销比较小，不用考虑它对其他元素的影响

---

## 6.优化动画

- 可以把动画效果应用到position属性为absolute或fixed的元素上，这样对其他元素影响较小

- 动画效果还应牺牲一些平滑，来换取速度

- GPU 硬件加速是指应用 GPU 的图形性能对浏览器中的一些图形操作交给 GPU 来完成，因为 GPU 是专门为处理图形而设计，所以它在速度和能耗上更有效率。
GPU 加速通常包括以下几个部分：Canvas2D，布局合成, CSS3转换（transitions），CSS3 3D变换（transforms），WebGL和视频(video)。

