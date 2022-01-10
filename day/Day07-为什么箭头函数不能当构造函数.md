# Day07 - 为什么箭头函数不能当构造函数

## 知识分解

### 箭头函数概念

> **[箭头函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)**的语法比[函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)更简洁，并且没有自己的[this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)，[arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)，[super](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)或[new.target](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

- 没有单独的this
- 不绑定arguments
- 箭头函数不能用作构造器，和 new一起用会抛出错误
- 箭头函数没有prototype属性



### 箭头函数与普通函数区别

```js
function Person(name) {
  this.name = name
}
const person = name => {
  this.name = name
}

console.dir(Person)
console.dir(person)
```

![image-20220107182346320](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220107182346320.png)

- 缺少arguments 
- 缺少caller - 无法确定上下文
- 缺少prototype

从上面的运行结果也可以看到箭头函数与构造函数相比，缺少了很多东西，比如：caller，arguments，prototype。

### 通过模拟函数

```js
function myNew(fn, ...args) {
  // 创建一个空对象
  const obj = {};
  // 将该对象的 __proto__ 属性链接到构造函数原型对象
  // ❌ 缺少fn.prototype
  obj.__proto__ = fn.prototype;
  // 将该对象作为 this 上下文调用构造函数并接收返回值
  // ❌ 没有自己的this
  // ❌ call()函数无法改变箭头函数的指向
  const res = fn.apply(obj, args);
  // 如果返回值存在并且是引用数据类型，返回构造函数返回值，否则返回创建的对象
  return typeof res === "object" ? res : obj;
}

```

没有了这三个大将那这个实例化的过程就会处处受到影响。所以不能使用箭头函数当做构造函数的结论也就不言自明。



## 面试攻略

- 首先分析箭头函数和构造函数区别
  - 缺少arguments 
  - 缺少caller - 无法确定上下文
  - 缺少prototype
- 通过实例化过程逐层剖析



## 点评

- 直接问new一个函数发生了什么未免太过直接，所以稍稍换一种问法就可以轻松辨别出谁在背答案不思考了。

