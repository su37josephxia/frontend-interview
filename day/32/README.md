---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day32 SourceMap是什么
全栈然叔

---

## SourceMap是什么
在编译处理的过程中，在生成产物代码的同时生成产物代码中被转换的部分与源代码中相应部分的映射关系表。

---

## magic-string演示什么是sourcemap与chrome sourcemap自动解析功能

src/index.js
```js
console.log('I am source')
```

index.js
```js
const MagicString = require("magic-string");
const fs = require("fs");
const source = './src/index.js'
const input = fs.readFileSync(source);
const s = new MagicString(input.toString()).overwrite( 18, 24, 'bundle' );

// options are as per `s.generateMap()` above
var map = s.generateMap({
  file: "bundle.js.map",
  source: "bundle.js",
  includeContent: true,
  hires: true,
});

console.log("map", map);
transpiled = s.toString() + '\n//# sourceMappingURL=bundle.js.map';
fs.writeFileSync("./dist/bundle.js",transpiled);
fs.writeFileSync("./dist/bundle.js.map", map.toString());


fs.writeFileSync(
  "app.inlinemap.js",
  transpiled + "\n//#sourceMappingURL=" + map.toUrl()
);
```

---

## 以上案例得到的结论
- sourcemap其实就是两个代码的映射关系
- 不一定与编译相关，任何修改都可以通过sourcemap进行呈现
- js、css、java都可以做sourcemap
- chrome可以做sourcemap解析功能

---

## webpack中的sourcemap功能
webpack.config
```js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 配置sourcemap
  devtool: 'source-map', 
};


```






| 模式                    | 解释                                                         |
| ----------------------- | ------------------------------------------------------------ |
| eval                    | 每个module会封装到 eval 里包裹起来执行，并且会在末尾追加注释 `//@ sourceURL`. |
| source-map              | 生成一个**SourceMap**文件（编译速度最慢）                    |
| hidden-source-map       | 和 source-map 一样，但不会在 bundle 末尾追加注释.            |
| inline-source-map       | 生成一个 **DataUrl** 形式的 SourceMap 文件.                  |
| eval-source-map         | 每个module会通过eval()来执行，并且生成一个DataUrl形式的SourceMap. |
| cheap-source-map        | 生成一个没有列信息（column-mappings）的SourceMaps文件，不包含loader的 sourcemap（譬如 babel 的 sourcemap） |
| cheap-module-source-map | 生成一个没有列信息（column-mappings）的SourceMaps文件，同时 loader 的 sourcemap 也被简化为只包含对应行的。 |





