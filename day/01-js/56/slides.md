---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day55 订阅发布解决回调地狱(Iterator)
全栈然叔

---

# 异步函数难以控制的痛点
## 异步执行何时结束无法预知

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






