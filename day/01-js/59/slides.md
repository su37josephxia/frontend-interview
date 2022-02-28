---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day59 无状态和数据不可变
全栈然叔

---

# 无状态(Statelessness)
- 一个函数，不管你何时运行，它都应该像第一次运行一样，给定相同的输入，给出相同的输出

# 数据不可变(Immutable data)
- 所有的数据都是不可变的
- 意味着如果你想修改一个对象，那你应该创建一个新的对象用来修改，而不是修改已有的对象。

---

# 还原数学中函数的概念
![](https://gitee.com/josephxia/picgo/raw/master/juejin/20220228104957.png)

---

# 纯函数
- 无状态(Statelessness)
- 数据不可变(Immutable Data)
- 没有副作用(No Side Effects)

---

# 无状态
一个函数，不管你何时运行，它都应该像第一次运行一样，给定相同的输入，给出相同的输出

```js
    let i = 0
    function add(a) {
        return a + i
    } 
    add(1)
    i++
    add(2)

```
> 违反引用透明原则

```js
    function add(a, i) {
        return a + i
    } 
```

---

# 数据不可变与副作用

> 传递引用一时爽，代码重构火葬场

- 所有的数据都是不可变的
- 意味着如果你想修改一个对象，那你应该创建一个新的对象用来修改，而不是修改已有的对象。
- 不修改全局变量，不修改入参。

```js
const list = [...];
// ❌修改 list 中的 type 和 age
list.map(item => {
  item.type = 1;
  item.age++;
})
// ✅修改 list 中的 type 和 age
const newList = list.map(item => ({...item, type: 1, age:item.age + 1}));

```

---

# 好处
- 便于测试 测试驱动开发 TDD（Test-Driven Development )
  由于所有变量都是由参数传递的所以非常容易模拟环境
- 可缓存性、可回退(Redo/Undo)
- 更少Bug 共享状态往往是绝大多数 bug 的源头