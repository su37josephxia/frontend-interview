function delayLog(msg, cb) {
  setTimeout(() => {
    console.log(msg);
    cb && cb();
  }, 1000);
}

// delayLog("p1", () => {
//   delayLog("p2", () => {
//       delayLog('p3')
//   });
// });

// thunk可以把回调过程修改为惰性函数
// 从而解决异步函数串联复杂的问题
// 处理更为负责的逻辑过程比如
// 分支或者两个过程并发处理 就比较麻烦

// Promise 是异步编程的一种解决方案：
// 从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。
// promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)；
// 状态一旦改变，就不会再变。创造promise实例后，它会立即触发通知


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

const delayLogPromise = (msg) =>
  new MyPromise((resolve) => {
    delayLog(msg, resolve);
  });

delayLogPromise("p1")
  .then(() => delayLogPromise("p2"))
  .then(() => delayLogPromise("p3"));
