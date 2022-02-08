## 谈谈什么是chunk



---



![image-20220205213753265](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220205213753265.png)

webpack 会根据模块依赖图的内容组织分包 —— Chunk 对象，默认的分包规则

- 同一个 `entry` 下触达到的模块组织成一个 chunk
- 异步模块单独组织为一个 chunk
- `entry.runtime` 单独组织成一个 chunk
- 


---



官方可视化工具





---







# 按Entry分包







---





# 异步模块分包









---



Runtime分包

除业务代码外，Webpack 编译产物中还需要包含一些用于支持 webpack 模块化、异步加载等特性的支撑性代码，这类代码在 webpack 中被统称为 `runtime`。



```js
module.exports = {
  entry: {
    index: { import: "./src/index", runtime: "solid-runtime" },
    home: { import: "./src/home", runtime: "solid-runtime" },
  }
};

```









