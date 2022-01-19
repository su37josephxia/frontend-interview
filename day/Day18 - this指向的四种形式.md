# Day18 - this指向的四种形式

### 什么是上下文

什么是上下文，举一个例子。

谈谈我的家乡在哪里，如果你的上下文是在国际演讲的舞台。你一定会说我的家乡在中国。

![image-20220118170841807](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220118170841807.png)



那如果上线文是在国内呢，我的家乡在哪个省或者是直辖市。

这就是上下文。

### 什么是this

this就是Javascript提供的一个上下文环境

在javascript当中每一个function都是一个对象，所以在这个里var temp=this 指的是function当前的对象。this是Javascript语言的一个关键字。它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。

在函数执行时，this 总是指向调用该函数的对象。要判断 this 的指向，其实就是判断 this 所在的函数属于谁。

this指向

- 永远指向对象
- 指向取决于调用位置



### 普通函数中的

如果一个函数不属于任何一个对象，上下文就是全局对象。

在浏览器中就是window，如果是node运行时中就是global

```js
function say() {
  console.log("我的家乡", this.name);
}
name = "中国";
say(); // 我的家乡在中国
```

只要不套用新的对象，无论套用多少个函数只要不存在上层对象就会指向全局。

```js
name = '中国'
function f1() {
  var name = 北京
  function f2() {
    console.log(this)
  }
  f2()
}
f1()
```

还有一个地方要记忆的是在Dom事件会回调里，this指向绑定事件对象。

```html
<html>
    <button id='1'>1</button>
    <button id='2'>2</button>
    <script>
        function fn() {
            console.log(this)
        }
        document.getElementById('1').addEventListener('click',fn)
        document.getElementById('2').addEventListener('click',fn)
    </script>

</html>
```



### 对象属性

接着说一下在对象中的this指向。this指向在对象中指向对象实例。其实归属某一个对象才是上下文环境使用最多的情况。同样一个方法可以根据对象实例中数据成员的不同产生不同的变化。

- 在北京对象中  =>  我的家乡在北京

```js
function say() {
  console.log("我的住", this.name);
}
var bj = {
  name: "北京",
  say: () => say(),
  chaoyang: {
    name: "朝阳",
    say,
  },
};
bj.say(); // 我的家乡在北京
bj.chaoyang.say(); // 我的家乡在朝阳
```



### 构造函数与Class

类是对象实例，可以认为是实例的模板。

比如一个国家模板，实例一个国家比如中国。

当然国家模板中的say方法指向的创建的对象实china

```js
function say() {
  console.log("我的家乡:", this.name);
}
function Country(name) {
  this.name = name
}
Country.prototype.say = say
const china = new Country('中国')
china.say()
```

使用ES6中的class关键字同理，构造函数constructor等同于上文中的Country构造函数

```js
class Country {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log("我的家乡:", this.name);
  }
}
const china = new Country('中国')
china.say()
```



### call、apply、bind方法中

最后说一下三个可以绑定上下文的函数。

apply与call还有bind并没有用法上的差异只是在api参数上的差异。

```js
function say() {
  console.log('我的家乡:' + this.name)
}
window.name = '中国'
say()
say.apply({name : '北京'})
say.call({name : '朝阳'})
var mySay = say.bind({name: '曹县'})
mySay()

```



### 严格模式下this

"use strict" 指令在 JavaScript 1.8.5 (ECMAScript5) 中新增。

它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略。

"use strict" 的目的是指定代码在严格条件下执行。

严格模式下你不能使用未声明的变量。

严格模式本身是为了消灭Javascript中的一些不合理之处。

- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。



在严格模式下的this指向也会有一定变化。

函数外指向window

```js
"use strict"
console.log(this) // window
function foo() {
  console.log(this) // undefined
}
foo()
```



函数中是undefined

```js
function func() {
  "use strict"
  console.log(this);
}

func();   // 输出是undefined
```



### 箭头函数

在箭头函数中，this总是指向词法作用域，也就是外层调用者。而不是方法所在对象。

比如下面的方法调用者是全局对象，所以上下文也指向全局。

```js
function say() {
  console.log("我的家乡在"+this.name);
}
var bj = {
  name: "北京",
  say: () => say(),
  chaoyang: {
    name: "朝阳",
    say : () => say(), // 修改为箭头函数
  },
};
name = '中国'
bj.say(); // 我的家乡在中国
bj.chaoyang.say(); // 我的家乡在中国
```

## 面试攻略

这是一道基础题，只要回答的有条理就行了。

首先是函数，对象，构造函数以及严格模式和箭头函数对this指向的影响。

