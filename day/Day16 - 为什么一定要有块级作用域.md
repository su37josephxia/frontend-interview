# Day16 - 为什么要有块级作用域

## 知识点讲解

在Javascript提出块级作用域，主要是为了解决Javascript中的一个重要的设计缺陷 。

> 变量提升特性导致的大量与直觉不符的代码



### 变量提升是什么？

```js
(function() {
  console.log(v)
  var v = 123
})()

// 变量提升
(function() {
  var v
  console.log(v)
  v = 123
})()

```

js 在变量声明提升的时候会将 var 声明的变量以及 用关键字函数声明的函数都会提升到当前作用域的顶端 。赋值语句在原地等待赋值。

变量提升的优点是降低程序的编写难度。

为什么这么说，其实原始的程序在编写的时候是有明确的顺序要求的。

比如我们下面就看一个史前语言Pascal语言

![image-20220116195408232](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220116195408232.png)



完整的程序结构

![image-20220116195507851](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220116195507851.png)



这就好比王者荣耀为了降低操作难度不用回家买装备一样。



### 违反直觉的事

但是这种编写方法就会带来一些问题。毕竟是擅自修改了执行的逻辑。

主要分为线面两方面

#### 内层变量会覆盖外层变量

```js
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```

以上程序，全局定义的变量，由于后面的程序定义了同名变量程序，居然凭空消失。

#### 本应销毁的变量没有被销毁

这个其实就是著名的循环陷阱问题。前面几天说过就不仔细说了。

```js
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```

### 面试攻略

谈到块级作用域的影响，多班会有人先谈现象，不谈本质。建议从语言缺陷完善的角度分析这个问题。