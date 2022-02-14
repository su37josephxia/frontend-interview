---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Day51 异步非阻塞I/O、事件循环、回调函数
全栈然叔

---

# 异步非阻塞I/O

- JS的伟大在于此
- 如果没有这个特性也许就不会有NodeJS
  
> 上节课提到的：王大爷又觉得自己有点憨，他把响水壶放在火上然后去看电视，这时他不用是不是来瞅一眼，因为水开的时候水壶会发出声音通知大爷。（**异步非阻塞**）

---

# XMLHttpRequest对象发送POST请求
```js

xhr = new XMLHttpRequest();
xhr.open("POST","url",true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send("name=tome&age=24");

// 通过 onreadystatechange  事件来监听状态变化，并获取服务器响应
xhr.onreadystatechange = function(){
    //请求成功时
    if(xhr.readyState == 4 && xhr.status == 200){
        alert(xhr.responseText);
    }
}

```

---

# 定时器

```js
setTimeout(() => {
    // do something
},1000)

```

---

# 事件循环
- JS单线程为什么可以做异步处理
- 你可以认为其他线程的管理是运行时自动管理的
- 这就是事件循环

![](https://gitee.com/josephxia/picgo/raw/master/juejin/20220213221457.png)


---

# 浏览器进程
![](https://gitee.com/josephxia/picgo/raw/master/juejin/20220213221746.png)


---

# 回调地狱

![](https://gitee.com/josephxia/picgo/raw/master/juejin/20220213221902.png)












