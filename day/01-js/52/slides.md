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

```js
    // 传值调用 call by value
    // 编译期完成
    const total = 1 + 2 
    // 改为惰性函数
    // 运行期完成
    const total = (() => 1 + 2)()

```


---

# thunk的好处
- 参数可以不事先确定

```js
    // 传值调用 call by value
    // 编译期完成
    const total = 1 + x
    // 改为惰性函数
    // 运行期完成
    const total = ((x) => 1 + x)(x)

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

// const generator = ([first,second]) => () => second(first())
const generator = (args) => () => args.reduce((a, b) => () => b(a()))();
generator([p1, p2, p3, p4])();

```

---

# Thunkify

如何将一个callback方法转化为Thunk
```js
module.exports = fn => 
    (...args,oldCallback) => 
        callback => fn.apply(this,...[args,callback])
 
```

