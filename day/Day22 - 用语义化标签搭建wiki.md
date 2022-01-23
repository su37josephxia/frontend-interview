# Day22 - 语义化标签搭建wiki

## 知识讲解

### 什么是语义标签

语义化标签其实就是可以让标签有自己的含义。

对比下面两个html的区别

传统标签

```html
<div class="header">
  <h1>html5语义化标签</h1>
  <div class="nav">
    <h2>导航</h2>
    <ul>
      <li>章节标签</li>
      <li>标题标签</li>
    </ul>
  </div>
</div>
```

语义化

```html
<header>
  <h1>html5语义化标签</h1>
  <nav>
    <h1>导航</h1>
    <ul>
      <li>章节标签</li>
    	<li>标题标签</li>
    </ul>
  </nav>
</header>
```

可以很清楚的看到都是头部的描述，但是语义化标签可以清楚内容的含义。



### 语义化标签的优势

1. 代码结构清晰，方便阅读，有利于团队合作开发。
2. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页。
3. 有利于搜索引擎优化（SEO）。

### 常见的语义化标签

> w3c的标签说明： https://html.spec.whatwg.org/

```html
<title>：页面主题内容。
<hn>：h1~h6，分级标题，<h1> 与 <title> 协调有利于搜索引擎优化。
<ul>：无序列表。
<li>：有序列表。
<header>：页眉通常包括网站标志、主导航、全站链接以及搜索框。
<nav>：标记导航，仅对文档中重要的链接群使用。
<main>：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。
<article>：定义外部的内容，其中的内容独立于文档的其余部分。
<section>：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。
<aside>：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。
<footer>：页脚，只有当父级是body时，才是整个页面的页脚。
<small>：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。
<strong>：和 em 标签一样，用于强调文本，但它强调的程度更强一些。
<em>：将其中的文本表示为强调的内容，表现为斜体。
<mark>：使用黄色突出显示部分文本。
<figure>：规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。
<figcaption>：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。
<cite>：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。
<blockquoto>：定义块引用，块引用拥有它们自己的空间。
<q>：短的引述（跨浏览器问题，尽量避免使用）。
<time>：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。
<abbr>：简称或缩写。
<dfn>：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。
<address>：作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。
<del>：移除的内容。
<ins>：添加的内容。
<code>：标记代码。
<meter>：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）
<progress>：定义运行中的进度（进程）。
```



### 主体部分

```html
<html>
    <head>
        <title>HTML</title>
    </head>
    <body>
        <aside></aside>  
        <header></header>
        <main></main>
      	<footer></footer>
    </body>
</html>
```

- aside : 侧栏、文章的一组链接、广告、友情链接、相关产品列表等
- header：页眉通常包括网站标志、主导航、全站链接以及搜索框。
- main：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。
- footer： 页脚，只有当父级是body时，才是整个页面的页脚。

### 导航栏

```html
<nav>
  <h2>导航栏</h2>
  <ol>
    <li>历史</li>
    <li>标记</li>
    <li>语义化HTML</li>
    <li>分发</li>
  </ol>
</nav>
```

![image-20220122212501349](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220122212501349.png)



- nav: 标记导航，仅对文档中重要的链接群使用
- ol： 有序列表

### 段落

```html
<article>
    <h1>一、大标题</h1>
    <section>
        <h1>1. 小标题</h1>
        <section>
            <h1>1.1 小标题</h1>
        </section>
    </section>
</article>
```

![image-20220122212752795](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220122212752795.png)

可以看到使用section标记+h1就可以非常简单的完成标题分级。



### 内容

```html
    正文<q>引述2</q>
    <del>删除的内容</del>
    <ins>添加的内容</ins>
```
正文中常用的
- del： 删除内容
- ins： 添加内容
- q： 引用内容

![image-20220122212932695](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220122212932695.png)

### 图片引用

```html
    <figure>
        <img src="//upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png" alt="">
        <figcaption>HTML5Logo</figcaption>
    </figure>

```

- figure:规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。

- figcaption: 内容标题 



### 代码和运行结果

```html
<pre><!-- 预格式化文本 保留空格和换行符-->
    <code>
        exports.call = function (context, ...args) {
            // this 为调用方法 例:f.call this = f
            context.fn = this;
            const result = context.fn(...args);
            delete context.fn;
            return result;
            };
                            </code>
        ✅ 运行结果:
                            <samp><!-- 一个短语标签，用来格式化文档中的文本为计算机输出 -->
        (base) ➜  call-apply-bind git:(master) ✗ jest ../call-apply-bind
        PASS  __tests__/index.spec.js
            实现call 、apply、 bind函数
            ✓ 测试call方法 (7 ms)
            ✓ 测试apply方法 (1 ms)
            ✓ 测试bind方法 (1 ms)
        
        Test Suites: 1 passed, 1 total
        Tests:       3 passed, 3 total
        Snapshots:   0 total
        Time:        1.657 s
        Ran all test suites matching /..\/call-apply-bind/i.
        (base) ➜  call-apply-bind git:(master) ✗
    </samp>
</pre>
```

- pre: *预格式化文本 保留空格和换行符*
- samp: 标签表示一段用户应该对其没有什么其他解释的文本字符。要从正常的上下文抽取这些字符时，通常要用到这个标签。
- code: 用于引用计算机代码

![image-20220122213458408](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220122213458408.png)

## 面试攻略

HTML5的一个重大更新就是增加了一系列的语义化标签。希望大家含义说清+ 描述系统。

