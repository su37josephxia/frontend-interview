# 执行上下文 、作用域、闭包

### 介绍一下Javascript的执行上下文?

### 介绍一下Javascript的作用域链?

### window.name有什么用

### window.window会输出什么？为什么？

### 什么是闭包？

### 闭包产生的本质？

### 一般如何产生闭包？

### 介绍一下Javascript的闭包是什么应用场景?

闭包是一种特殊的对象，它由两部分组成：执行上下文（代号 A），以及在该执行上下文中创建的函数 （代号 B），当 B 执行时，如果访问了 A 中变量对象的值，那么闭包就会产生，且在 Chrome 中使用这个执行上下文 A 的函数名代指闭包。

- 一般如何产生闭包
    - 返回函数
    - 函数当做参数传递
- 闭包的应用场景
    - 柯里化 bind
    - 模块

    

### 如何让if(a == 1 && a == 2)条件成立？

```JavaScript
// 考察隐式转换会调用toString方法、闭包
var a = {
  num: 1,
  toString: function () {
    return this.num++
  },
}
console.log(a == 1 && a == 2)


```



