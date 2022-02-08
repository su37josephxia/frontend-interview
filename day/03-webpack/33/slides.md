## 文件指纹是什么怎么用



---

# 如何判断Ubuntu ISO镜像的真伪

Ubuntu https://releases.ubuntu.com/focal/



![Snip20220205_2](https://gitee.com/josephxia/picgo/raw/master/juejin/Snip20220205_2.png)



---

# 摘要与哈希算法



摘要算法又称哈希算法、散列算法。摘要也称哈希值，表示输入任意长度的数据，都会输出固定长度的数据。通过摘要算法（比如MDS和SHA-1）就可以得到该哈希值。



---



## 什么是哈希算法

![image-20220205133040516](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220205133040516.png)

- 不定长输入转定长摘要
- 满足雪崩效应
- 单项不可逆



---



## 常见的哈希算法

- MD5 ： 输出128bit长度的二进制串
- SHA-1：输出160bit长度的二进制串
- SHA-256： 输出256bit长度的二进制串
- SHA-512： 输出512bit长度的二进制串



---

# Webpack与文件指纹

- **版本管理：** 在发布版本时，通过文件指纹来区分 修改的文件 和 未修改的文件。
- **使用缓存：** 未修改的文件，文件指纹保持不变，浏览器继续使用缓存访问。

---

## 文件指纹设置

我们在配置文件（`webpack.config.js`）中，通过占位符设置文件指纹。

### 占位符

| 名称          | 含义                                      |
| ------------- | ----------------------------------------- |
| [ext]         | 资源后缀名                                |
| [id]          | 文件标识符                                |
| [name]        | 文件名称                                  |
| [path]        | 文件的相对路径                            |
| [folder]      | 文件所在的文件夹                          |
| [hash]        | 模块标识符的 hash                         |
| [chunkhash]   | chunk 内容的 hash                         |
| [contenthash] | 文件内容的 hash                           |
| [query]       | 文件的 query，例如，文件名 ? 后面的字符串 |
| [emoji]       | 一个随机的指代文件内容的 emoji            |



---



## 设置方法

```js
// webpack.config.js

module.exports = {
  // ...
  entry: {
    app: "./src/app.js",
    index: "./src/index.js",
  },
  output: {
    filename: "[name][chunkhash:8].js",
    // ...path
  },
};
```



---

CSS文件、图片和字体的设置

https://juejin.cn/post/7030737652173242382#heading-9







