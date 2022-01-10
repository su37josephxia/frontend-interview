# Day10-闭包应用-偏应用函数与科里化

## 基本概念

好先介绍概念。

### 偏应用函数 Partial application

> In computer science, partial application (or partial function application) refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.

我们可以把他翻译成局部应用

将一个双参数的add函数变为一个addOne

> 参考 https://github.com/hemanth/functional-programming-jargon#partial-application

```js
// Helper to create partially applied functions
// Takes a function and some arguments
const partial = (f, ...args) =>
  // returns a function that takes the rest of the arguments
  (...moreArgs) =>
    // and calls the original function with all of them
    f(...args, ...moreArgs)

// Something to apply
const add3 = (a, b, c) => a + b + c

// Partially applying `2` and `3` to `add3` gives you a one-argument function
const fivePlus = partial(add3, 2, 3) // (c) => 2 + 3 + c

fivePlus(4) // 9
```



### 科里化 -Curried functions 

柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数

```js
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const curry = fn => x => y => fn(x , y)
curriedSum(40)(2) // 42.
const add2 = curriedSum(2) // (b) => 2 + b
add2(10) // 12
```



### 实例1： 分割函数转CSV

```js
const split = (regex, str) => ("" + str).split(regex);
const elements = split("v1,v2,v3", /,\s*/);
const partial =
  (f, ...args) =>
  (...moreArgs) =>
    f(...args, ...moreArgs);
const csv = partial(split, /,\s*/);
const s = csv("v1,v2,v3");
console.log(s);
```



### 实例2： Vue3 CompositionAPI

想起了来自台湾的Antfu的代码

Antfu ![image-20220110184054522](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220110184054522.png)

https://github.com/vueuse/vueuse

```js
import {reactive, ref, effect} from "@vue/reactivity";
// 抽象的LocalStorage解决方案
const useLocalStorage(key, defaultValue){
    const data = reactive({});
    Object.assign(data, localStorage[key] && JSON.parse(localStorage[key]) || defaultValue);
    effect(() => localStorage[key] = JSON.stringify(data));
    return data;
}

// 用于指定持久化方案
const useStorage(defaultValue) {
  	return useLocalStorage('store',defaultValue)
}
```



完整的例子

https://github.com/su37josephxia/vue3-vs-vue2/blob/master/reactivity/src/LocalStorage.vue



### 实例3： React Hooks



