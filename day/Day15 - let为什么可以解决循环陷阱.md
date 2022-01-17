# Day15 - let为什么可以解决循环陷阱

### 什么是循环陷阱

```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```



- 由于匿名函数中使用的变量 i 在作用域外声明形成闭包
- i 属于全局作用域
- 所以循环中创建的匿名函数都指向同一个变量

所谓循环陷阱就是看似每个新创建的函数都需要一个单独的变量，但是没有实现，所以叫做循环陷阱



### IIFE即时执行函数解决

```js
var a = [];
for (var i = 0; i < 10; i++) {
  (function(n) {
    a[i] = function () {
    console.log(n);
  };
  })(i)
}
a[6](); // 10
```

解决此问题的方法就是创建一个新的作用域。

由于es6之前只能使用函数作用域，唯一的办法就是创建新的函数。所以就采用创建一个即时函数的方式创建新作用域。

![image-20220116003640279](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220116003640279.png)



### let创建块级作用域解决

```js
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

![image-20220116004205296](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220116004205296.png)



### 面试攻略

这道题的解题关键是如何将ES5的IIFE和ES6的let能取得同样的效果对比清楚，两者都是创建新作用域只不过，一个是利用的旧语法创建新函数，另外一个是使用了新的语法不用创建新函数。

