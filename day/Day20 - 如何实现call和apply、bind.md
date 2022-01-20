# Day20 - 如何实现call和apply、bind

### 知识讲解

call、apply、bind的功能就是改变this的指向、只是三个函数的参数风格不太一样。

### call函数实现

[function].call([this], [param]...)，一句话概括：`call()` 将函数的 `this` 指定到 `call()` 的第一个参数值同时将剩余参数指定的情况下调用某个函数或方法。

用测试用例描述

```js
  it("测试call方法", () => {
    const { call } = require("../index");
    Function.prototype.myCall = call;
    const obj = { a: 1 };
    const f = function (...args) {
      return { context: this, args };
    };
    expect(f.myCall(obj, 1, 2)).toEqual({ context: { a: 1 }, args: [1, 2] });
  });
```

代码实现

```js
exports.call = function (context, ...args) {
  // this 为调用方法 例:f.call this = f
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
```

讲解

- f.myCall函数调用时，this上下文其实是f函数。

- 需要的绑定的上下文用参数context传入

- 其余参数使用展开语法表示

- 首先将函数绑定到上下文对象中

- 删除context上线文中的fn方法清理现场
- 返回执行结果



### apply的实现

call方法和apply方法类似，两者唯一不同的是，执行参数是是一个数组而不是多个参数

测试用例表示

```js
it("测试apply方法", () => {
    const { apply } = require("../index");
    Function.prototype.myApply = apply;
    const obj = { a: 1 };

    const f = function (...args) {
      return { context: this, args };
    };
    expect(f.myApply(obj, [1, 2])).toEqual({ context: { a: 1 }, args: [1, 2] });
});
```

代码实现

由于变动非常小甚至可以直接调用call函数完成

```js
exports.apply = function (context, args) {
    return this.call(context,...args)
};
```

正经代码是这样

```js
exports.apply = function (context, args) { // 只需要变动一行 ...args => args
  // this 为调用方法 例:f.call this = f
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
```

### bind函数

bind返回fun的拷贝，并指定了fun的this指向，保存了fun的参数。

测试用例表示

```js
it("测试bind方法", () => {
    const { bind } = require("../index");
    Function.prototype.myBind = bind;
    const obj = { a: 1 };

    const f = function (...args) {
      return { context: this, args };
    };
    expect(f.bind(obj, 1, 2)(3, 4)).toEqual({
      context: { a: 1 },
      args: [1, 2, 3, 4],
    });
});
```

代码实现

```js
exports.bind = function (context, ...args) {
  // this 为调用方法 例:f.call this = f
  const f = this;
  return function F() {
    return f.apply(context, [...args, ...arguments]);
  };
};
```

- 实现一个工厂函数
- 使用apply指向函数
- 使用传入的context作为上下文
- 将bind传入的执行参数与执行F()时传入的参数合并作为执行参数

![image-20220120174836487](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220120174836487.png)



## 面试攻略

这个就是一道经典的手写代码题。



