# 其他题与场景题

## 数组去重

1、使用set

2、使用 filter()

3、使用 reduce()

```JavaScript
const array = [' ', 1,  2, ' ',' ', 3];
​
// 1: "Set"
[...new Set(array)];
​
// 2: "Filter"
array.filter((item, index) => array.indexOf(item) === index);
​
// 3: "Reduce"
array.reduce((unique, item) => 
  unique.includes(item) ? unique : [...unique, item], []);
​
```



二叉树的遍历有几种方法？

- 先序
- 中序
- 后序
- 层序遍历



### 数组扁平化

### 手写科里化