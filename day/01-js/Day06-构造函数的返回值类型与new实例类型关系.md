# Day06 - 构造函数的返回值与new实例关系

## 知识讲解

如果函数返回 `return {}` 、 `return null` ， `return 1` ， `return true` 会发生什么情况？

答案很简单，干脆先搞个代码自行实验一下

### 代码试验

实践出真知

```js
console.table(
  [null, undefined, 1, true, "", Symbol(), { a: 1 }, [1, 2]]
    .map((v) => [
      v,
      function () {
        return v;
      },
    ])
    .map(([ret, MyConstructor]) => [
      Object.prototype.toString.call(ret),
      ret,
      new MyConstructor(),
    ])
);

```

![image-20220106213814585](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220106213814585.png)

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

### 结论

- 基础类型返回空对象
- 引用类型返回引用类型

## 面试攻略

- 基础类型返回空对象
- 引用类型返回引用类型



## 点评

- 又是一个Javascript的特别的地方大家要记清。