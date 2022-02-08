# Day08 - 什么是闭包？如何制造闭包？

### 基本概念

> 【JS忍者秘籍】闭包允许函数访问并操作函数外部的变量。
>
> 【红宝书】闭包是指有权访问另外一个函数作用域中的变量的函数。
>
> 【MDN 】 闭包是指那些能够访问自由变量的函数。

**闭包是指有权访问另一个函数作用域中变量的函数**

### 如何形成闭包

> **内部的函数存在外部作用域的引用就会导致闭包**。从上面介绍的上级作用域的概念中其实就有闭包的例子 `return f`就是一个表现形式。

![image-20220108181945653](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220108181945653.png)



### 词法作用域对执行环境的保护

Javascript的作用域有两部分组成即词法作用域和动态作用域

前者是静态的，比如

```js
var x = 1
var fn
function a() {
  var y = 1
  function b() {
    var z = 2
    console.log(x, y ,z)
  }
  fn = b
}

// b无论在何处执行都是可以读取x,y,z
fn()
```



### 隐藏地雷的秘密

```js
// 地雷工厂
function createMine() {
	const s = '地雷的秘密'
}

// 地雷
function mine() {
  console.log(s)
}
```

这里面我想到一个地道战的故事。假设地雷的秘密不想暴露给敌人，所以我们希望把地雷的秘密放在工厂里面。但是我希望你制造出来的地雷能够用上地雷的秘密。想想是不是这个时候我们就是要想办法的时候了。

我们简单总结一下 我们需要的是

- 外部无法访问工厂函数createMine的中的局部变量
- 地雷可以访问局部变量这样才能发挥最大的威力



### 函数做为返回值

```js
function createMine() {
  const s = '地雷的秘密'
  return function() {
    console.log(s)
  }
}

const m = createMine()
m()
```

第一种方法就是这个工厂函数将返回一个匿名函数。这样按照作用域规则，匿名函数确实可以调用工厂函数createMine的作用域。而由于外部任何函数又无法直接访问createMine的局部变量。



### 函数作为参数

```js
const b = []
function createMine(b) {
  const s = '地雷的秘密'
  b.push(function() {
    console.log(s)
  })
}
createMine(b)
b[0]()
```

另外还有一种方法，未必一定要返回值，利用形参也可以完全达到目的。



### 作用域

```js
const mine
function createMine(b) {
  const s = '地雷的秘密'
  mine = function() {
    console.log(s)
  })
}
createMine()
mine()
```

另外还有一种方法，未必一定要返回值，利用形参也可以完全达到目的。



## 面试攻略

- 说清闭包产生的原因，不要把循环陷阱当做闭包。



## 点评

- 闭包可以说是必考题，但是业务开发又不常用，所以特别不好记忆。有点像足球中的颠球。考验专业能力入门就这个，但是野球场上大多数业余球员有用不出来。

