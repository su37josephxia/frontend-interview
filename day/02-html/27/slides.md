---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day27 - Script放在body头部就一定会阻塞吗?
全栈然叔

---

> 推荐此文： https://juejin.cn/post/7041484566510436382
# 默认script标签是同步执行会发生阻塞
## 原因
- 浏览器解析html文件时，从上向下解析
- 解析到DOM中的script时会暂停DOM构建
- 脚本加载并执行完毕, 才会继续向下解析

## JS脚本存在会阻塞DOM解析的问题进而影响页面渲染速度

---

# 解决方案
- 使用script扩展属性 async和defer
  - 异步下载
  - async 是加载完成后立刻执行
  - defer 需要等待页面完成后执行

---

# 







