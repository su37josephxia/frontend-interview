---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day52 Thunk函数
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

# 优雅的写法与痛点

```js
    const p = [
        delayLog('cb1',cb),
        delayLog('cb2',cb),
        delayLog('cb3',cb),
    ]
    run(p)
```
> cb参数是上一个处理 事先无法确定

---

# thunk其实就是把惰性函数包装称一个Thunk函数
Thunk函数早在上个世纪60年代就诞生了。

那时，编程语言刚刚起步，计算机学家还在研究，

编译器怎么写比较好。一个争论的焦点是"求值策略"，即函数的参数到底应该何时求值。

```js
    // 传值调用 call by value
    // 编译期完成
    const total = 1 + 2 
    // 改为惰性函数
    // 运行期完成
    // 传名调用 call by name
    const total = (() => 1 + 2)()

```


---

# thunk的好处
- 参数可以不事先确定

```js
    const total = 1 + x
    // 假设x无法确定
    const thunk = x => 1 + x

    // 运行时在确定
    const total = thunk(x)

```

---

# Thunk解决回调地狱

```js
// 柯里化 将无法确定的
const delayLogThunk = (msg) => (cb) => delayLog(msg, cb);

// 通用写法
const p1 = delayLogThunk("T1");
const p2 = delayLogThunk("T2");
const p3 = delayLogThunk("T3");
const p4 = delayLogThunk("T4");

const gen2 = (args) => 
  () => args.reduceRight((a, b) => () => b(() => a()))();
gen2([p1, p2, p3, p4])();
```

---

# Thunkify

如何将一个callback方法转化为Thunk
```js
module.exports = fn => 
    (...args,oldCallback) => 
        callback => fn.apply(this,...[args,callback])
 
```

