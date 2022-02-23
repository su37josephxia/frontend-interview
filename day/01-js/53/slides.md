---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---


---

# Day53 Promise函数
全栈然叔

---

# 制造一个回调地狱

```js
function delayLog(msg, cb) {
    setTimeout(() => {
      console.log(msg);
      cb()
    }, 1000);
  }
delayLog('cb1', ()=> {
    delayLog('cb2')
})
```

---

# 什么是Promise
> 状态 + 观察者模式

- 封装异步函数
- 为异步函数提供执行状态
- 提供执行状态的订阅
- 当调用回调函数是发布消息

---

# 应用实例

```js
const delayLogPromise = (msg) =>
  new Promise((resolve) => {
    delayLog(msg, resolve);
  });

delayLogPromise("p1")
  .then(() => delayLogPromise("p2"))
  .then(() => delayLogPromise("p3"));

```


---

# 简单版Promise实现

```js
class MyPromise {
  constructor(executor) {
    this.value = undefined;
    this.callbacks = [];

    // 相当于 notify
    const resolve = (value) => {
      this.value = value;
      this.callbacks.forEach((callback) => callback());
    };

    executor(resolve);
  }

  // 订阅承诺完成消息
  then(onFulfilled) {
    this.callbacks.push(() => onFulfilled());
    return this;
  }

  then = (onFulfilled) =>
    new Promise((resolve) => {
      this.callbacks.push(() => resolve(onFulfilled(this.value)));
    });
}
```


