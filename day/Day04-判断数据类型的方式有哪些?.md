# Day04 - 判断数据类型的方式有哪些？| 面试打卡365

## 知识讲解

> 引用  蜗牛哥的大作 https://juejin.cn/user/4212984285249245/posts

`JavaScript` 判断数据类型的方式共有四种

1. typeof
2. instanceof
3. constructor
4. Object.prototype.toString

### typeof

`typeof` 操作符返回一个字符串,表示操作值的类型

利用 `typeof` 判断数据类型的语法是 `typeof target`。
示例如下：

```
// 'number'
console.log(typeof 123)
// 'string'
console.log(typeof '123')
// 'boolean'
console.log(typeof true)
// 'symbol'
console.log(typeof Symbol(123))
// 'object'
console.log(typeof [])
// 'object'
console.log(typeof {})
// 'function'
console.log(typeof function(){})
// 'undefined'
console.log(typeof undefined)
// 'object'
console.log(typeof null)
// 'object'
console.log(typeof new Date())
// 'object'
console.log(typeof /\d/g)
// 'object'
console.log(typeof new Error())
typeof` 可以准确判断除 `null` 之外的所有基本数据类型以及 `Function`
对于 `null` 及其他引用数据类型都返回 `object
```

### instanceof

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个 **实例对象** 的原型链上

利用 `instanceof` 判断数据类型的语法是 `target instanceof constructor`。
示例如下：

```
// false
console.log(123 instanceof Number)
// false
console.log('123' instanceof String)
// false
console.log(true instanceof Boolean)
// false
console.log(Symbol(123) instanceof Symbol)
// true
console.log([] instanceof Array)
// true
console.log({} instanceof Object)
// true
console.log(function(){} instanceof Function)
// TypeError: Right-hand side of 'instanceof' is not an object
console.log(undefined instanceof undefined)
// TypeError: Right-hand side of 'instanceof' is not an object
console.log(null instanceof null)
// true
console.log(new Date() instanceof Date)
// true
console.log(/\d/g instanceof RegExp)
// true
console.log(new Error() instanceof Error)
```

用于判断操作值是否是指定构造函数的实例。

缺点：

1. 不能判断基本数据类型,因为基本数据类型并不是构造函数的实例，没有原型链。
2. 因为原型链的终点是 `Object.protype => null`,所以引用数据类型的原型链上都会存在 `Object.protype`,所以引用数据类型 `instanceof Object` 的时候都返回 `true`。
3. 原型链可以被修改，所以结果值不一定准确。

### constructor

利用 `constructor` 判断数据类型的语法是 `target.constructor === constructor`。
示例如下：

```
// Number
console.log((123).constructor)
// String
console.log('123'.constructor)
// Boolean
console.log(true.constructor)
// Symbol
console.log(Symbol(123).constructor)
// Array
console.log([].constructor)
// Object
console.log({}.constructor)
// Function
console.log(function(){}.constructor)
// TypeError: Cannot read properties of undefined (reading 'constructor')
console.log(undefined.constructor)
// TypeError: Cannot read properties of null (reading 'constructor')
console.log(null.constructor)
// Date
console.log(new Date().constructor)
// RegExp
console.log(/\d/g.constructor)
// Error
console.log(new Error().constructor)
```

用于判断操作值是否是指定构造函数的实例，可以判断 `null` 和 `undefined `除外的所有数据类型，之所以 `null` 和 `undefined` 不可以，是因为他们作为 `JavaScript` 运行环境创建时就存在的基本数据类型，不存在 `constructor` 属性

基本数据类型为什么会有 `constructor` 属性呢？
是因为基本数据类型获取 `constructor` 属性的时候，`JavaScript` 自动将基本数据类型的值转为包装对象实例，并在使用后立刻销毁实例。

缺点：`constructor` 属性可以被修改，所以结果值不一定准确。

### Object.prototype.toString

返回对象的类型字符串.

利用 `Object.prototype.toString` 判断数据类型的语法是 `Object.prototype.toString.call(target)`。
示例如下：

```
// '[object Number]'
console.log(Object.prototype.toString.call(123))
// '[object String]'
console.log(Object.prototype.toString.call('123'))
// '[object Boolean]'
console.log(Object.prototype.toString.call(true))
// '[object Symbol]'
console.log(Object.prototype.toString.call(Symbol(123)))
// '[object Array]'
console.log(Object.prototype.toString.call([]))
// '[object Object]'
console.log(Object.prototype.toString.call({}))
// '[object Function]'
console.log(Object.prototype.toString.call(function(){}))
// '[object Undefined]'
console.log(Object.prototype.toString.call(undefined))
// '[object Null]'
console.log(Object.prototype.toString.call(null))
// '[object Date]'
console.log(Object.prototype.toString.call(new Date()))
// '[object RegExp]'
console.log(Object.prototype.toString.call(/\d/g))
// '[object Error]'
console.log(Object.prototype.toString.call(new Error()))
```

可以准确判断所有数据类型。



### 总结

|               | typeof | instanceof | constructor | Object.prototype.toString |
| ------------- | ------ | ---------- | ----------- | ------------------------- |
| number        | ✅      | ❌          | ✅           | ✅                         |
| string        | ✅      | ❌          | ✅           | ✅                         |
| boolean       | ✅      | ❌          | ✅           | ✅                         |
| symbol        | ✅      | ❌          | ✅           | ✅                         |
| []            | ❌      | ✅          | ✅           | ✅                         |
| {}            | ❌      | ✅          | ✅           | ✅                         |
| function() {} | ❌      | ✅          | ✅           | ✅                         |
| undefined     | ❌      | ✅          | ❌           | ✅                         |
| null          | ❌      | ✅          | ❌           | ✅                         |
| new Date()    | ❌      | ✅          | ✅           | ✅                         |
| /\d/g         | ❌      | ✅          | ✅           | ✅                         |
| new Error()   | ❌      | ✅          | ✅           | ✅                         |



## 面试攻略

- 主要是记区别和不能判断的原因说清楚。



## 点评

- 无