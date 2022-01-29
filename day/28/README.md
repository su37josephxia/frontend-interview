---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day28 - 浏览器渲染过程

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

# DOM TREE

![Snip20220128_17](https://gitee.com/josephxia/picgo/raw/master/juejin/Snip20220128_17.png)



---

# CSSOM

![Snip20220128_18](https://gitee.com/josephxia/picgo/raw/master/juejin/Snip20220128_18.png)






---

# DOM  + CSSOM =>  RenderObject树

![Snip20220128_19](https://gitee.com/josephxia/picgo/raw/master/juejin/Snip20220128_19.png)



---
