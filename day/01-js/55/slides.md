---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day55 遍历器(Iterator)
全栈然叔

---
# 遍历器(迭代器)是什么
## 为各种不同的数据结构提供统一的访问机制。
## 任何数据结构只要实现 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）

---

# 原生具备iterator接口的数据
- Array
- set容器
- map容器
- String
- 函数的 arguments 对象
- NodeList 对象


---

# 数组
```js
let arr = [1, 2, 'ranshu', true];
for(let i of arr){
   console.log(i); // 1 2 kobe true
}

```
---

# 实现遍历器
为obj添加遍历器功能
- 实现[Symbol.iterator]方法 返回遍历器
- 遍历器实现next()方法

```js
addIterator = (obj) => {
    obj[Symbol.iterator] = () => {
      const ary = Object.keys(obj);
      let index = 0;
      return {
        next: function () {
          if (index < ary.length) {
            return { done: false, value: ary[index++] };
          } else {
            return { done: true, value: undefined };
          }
        },
      };
    };
  };
  addIterator(list)
  for (k of list) {
    console.log("k", k);
  }

```


---






