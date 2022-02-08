# Day05-new 一个函数发生了什么？

## 知识讲解

### 面向对象中的new关键字

“面向对象编程”（Object Oriented Programming，缩写为OOP）是目前主流的编程范式。

- 创建类实例 - 对象
- 创建实例的时候执行构造函数

```js
class Person {
    constructor(name) {
        console.log('constructor')
        this.name = name
    }

    say() {
        console.log('My name is ',this.name)
    }
}
const b = new Person("b");
```



### Javascript语言中的变化

- 构造函数的写法的变化
- 通过原型定义属性和方法
- 上下文this的引入

```js
function Person(name) {
  console.log("constructor");
  
  this.name = name;
}
Person.prototype.say = function () {
  console.log("My name is", this.name);
};
```



### new的作用分析

```js
// TODO: 构造函数被执行
function Person(name) {
  console.log("constructor");
  // TODO: 将构造函数的this指向新对象
  this.name = name;
}

// TODO: 将新建对象的__proto__属性设置为构造函数的prototype
Person.prototype.say = function () {
  console.log("My name is", this.name);
};

// TODO: 创建新对象
const b = new Person("b");
b.say();
```



### 模拟函数

```js
function myNew(fn, ...args) {
  // 创建一个空对象
  const obj = {};
  // 将该对象的 __proto__ 属性链接到构造函数原型对象
  obj.__proto__ = fn.prototype;
  // 将该对象作为 this 上下文调用构造函数并接收返回值
  const res = fn.apply(obj, args);
  // 如果返回值存在并且是引用数据类型，返回构造函数返回值，否则返回创建的对象
  return typeof res === "object" ? res : obj;
}
const c = myNew(Person, "b");
c.say();
```



## 面试攻略

- 面型对象、原型链、apply如何绑定上下文分别解释清楚



## 点评

- 虽然Javascript现在讲究class关键字，讲究函数式引用透明。但是上下文原型链这种遗产还是需要