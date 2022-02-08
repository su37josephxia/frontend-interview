# Day17 - let是否会造成变量提升

## 知识点讲解

### 什么是提升 (Hosting)

今天谈到这个单词最多的地方还是尤大神在Vue3中的静态提升。

回到原题我们说说什么是提升。引擎会在解释JavaScript代码之前首先对其进行编译，编译过程中的一部分工作就是找到所有的声明，并用合适的作用域将他们关联起来，这也正是词法作用域的核心内容。



### 变量提升

```js
var a = 8;
(function() {
	console.log(a)
	var a = 1
})()
```

日志中输出 undefined而不是 8 是因为，编译时会检查代码找出函数作用域中的变量声明，放在作用域的前面。

```js
// 模拟提升后的代码
var a = 8;
(function() {
  var a
	console.log(a)
	a = 1
})()
```





### 函数提升

类似的还有函数提升。

```js
(function() {
  f()
  function f() {
    console.log('go')
  }
})
f()
```



### let是否提升

其实let也会有类似的现象，只是程序并没有进行函数声明。

```js
var a = 8;
(function() {
  // let a 此时暂时性死区开始
  console.log(a); // Uncaught ReferenceError: x is not defined
  //暂时性死区结束
  let a = 1
}())
```



### 暂时性死区 （Temporal Dead Zone）

这种现象叫做暂时性死区

引用MDN上的定义

> let bindings are created at the top of the (block) scope containing the declaration, commonly referred to as “hoisting”. Unlike variables declared with var, which will start with the value undefined, let variables are not initialized until their definition is evaluated. Accessing the variable before the initialization results in a ReferenceError. The variable is in a “temporal dead zone” from the start of the block until the initialization is processed.

大概意思便是let同样存在变量提示（hoisting），只是形式与var不同，var定义的变量将会被赋予undefined的初始值，而let在被显式赋值之前不会被赋予初始值，并且在赋值之前读写变量都会导致 ReferenceError 的报错。从代码块(block)起始到变量求值(包括赋值)以前的这块区域，称为该变量的暂时性死区。



## 面试攻略

面试的时候很多时候会出现为一个概念而带来的争论。就比如今天这道提升和不提升，提升的概念是因为什么的情况。然叔的攻略是：

- 陈述客观事实 - 大实话压死人
  - 代码现象
  - MDN与红宝书记述
- 没必要一定说出判断，毕竟判断句是讨论的句号，是被diss的开始。

只要让别人知道你的实力就行了，没必要跟他纠缠尤雨溪是否有Vue的实战经验的事情。

