---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day57 什么是函数式编程
全栈然叔

---
layout: two-cols
---

# 快速排序

## 指令式编程
```js
function swap(A, i, j) {
  const t = A[i];
  A[i] = A[j];
  A[j] = t;
}

/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function divide(A, p, r) {
  const x = A[r - 1];
  let i = p - 1;

  for (let j = p; j < r - 1; j++) {
    if (A[j] <= x) {
      i++;
      swap(A, i, j);
    }
  }

  swap(A, i + 1, r - 1);

  return i + 1;
}

/**
 * 
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function qsort(A, p = 0, r) {
  r = r || A.length;

  if (p < r - 1) {
    const q = divide(A, p, r);
    qsort(A, p, q);
    qsort(A, q + 1, r);
  }

  return A;
}

```

::right::

## 函数式编程
```js

function quickSort(array) {
  const pivot = array[array.length - 1]
  const left = array.filter((v, i) => v <= pivot && i != array.length -1)
  const right = array.filter(v => v > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}

```
## 变态写法

```js
const quick = array => [...quickSort(array.filter((v, i) => v <= pivot && i != array.length -1)), array[array.length - 1], ...quickSort(array.filter(v => v > pivot))]

```
---

# 什么是函数式编程

- 着眼点是函数，而不是过程。
- 强调的是如何通过函数的组合变换去解决问题,而不是强调通过过程解决问题。
- 代码越来越多的时候，这种函数的拆分和组合就会产生出强大的力量

![image-20220225110039472](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220225110039472.png)


---

# 初等数学中的函数
函数即是一种描述集合和集合之间的转换关系，输入通过函数都会返回有且只有一个输出值。

![](https://gitee.com/josephxia/picgo/raw/master/juejin/20220225112618.png)


---


# 函数式历史
- 早在 1950 年代，随着 Lisp 语言的创建，函数式编程（ Functional Programming，简称 FP）
- 函数式以其优雅，简单的特点开始重新风靡整个编程界
- 目前主流语言都支持函数式( Java8 开始支持函数式编程)

---

# 第三次编程革命
- 命令式编程（Imperative programming）
- 面向对象编程（Object Oriented Programming)
- 函数是编程 (Functional Programming)
  
---

# Javascript中的FP
- ES6 中加入了箭头函数
- Redux 引入 Elm 思路降低 Flux 的复杂性
- React16.6 开始推出 React.memo()，使得 pure functional components
- Vue3.0完全采用了Functional风格

---

函数式是编程的特点

- 函数是“一等公民” (First-Class Functions)
- 声明式编程 (Declarative Programming)
- 惰性执行（Lazy Evaluation）
- 无状态和数据不可变 (Statelessness and Immutable data)
- 没有副作用（No Side Effects）
- 纯函数 (pure functions)

---

函数式流水线构建
- 科里化
- 函数组合

---


# 如何订阅发布模式

- 订阅发布也可以叫观察者模式(observer pattern)
- 是否可以让后续异步过程订阅前置过程的done消息

---


---

# 实现一个订阅发布
```js
class EventEmitter {
  constructor() {
    this.handler = {};
  }
  on(eventName, callback) {
    if (!this.handles) {
      this.handles = {};
    }
    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }
    this.handles[eventName].push(callback);
  }
  emit(eventName, ...arg) {
    if (this.handles[eventName]) {
      for (var i = 0; i < this.handles[eventName].length; i++) {
        this.handles[eventName][i](...arg);
      }
    }
  }
}

```

---

# 通过订阅发布实现异步流程控制和并行处理
```js
function delayLog(msg, cb) {
  setTimeout(() => {
    console.log(msg);
    cb && cb();
  }, 1000);
}

const list = ["m1", "m2", "m3", "m4","m5"];

const emitter = new EventEmitter();
let i = 0;
emitter.on("done", () =>
  delayLog(list[i], () => {
    if (i < list.length - 1) {
      i++;
      emitter.emit("done");
    }
  })
);
emitter.emit("done", list[i]);
// emitter.emit("done", list[i++]);

```





