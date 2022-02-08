# Day09 - 如何利用闭包制造惰性函数



## 基本概念

惰性函数是函数是编程的一个重要概念。可以有效提高程序的运行效率。

> 惰性函数表示函数执行的分支只会在函数第一次调用的时候执行，在第一次调用过程中，该函数会被覆盖为另一个按照合适方式执行的函数，这样任何对原函数的调用就不用再经过执行的分支了。



### 如何实现计算缓存

假设有一个计算比如计算 平方，非常耗费时间。

需要把平方缓存起来，这样就不需要每次都计算了。

```js
var cache = {}
function square(n) {
    if (!cache[n]) {
        cache[n] = n * n;
     }
     return cache[n];
}
```



### 使用闭包隐藏全局变量

以上代码虽然可以实现功能，但是最大的问题就是缓存需要定义一个全局变量。其实这个变量是可以隐藏的。

```js
var square = (function () {
    var cache = {};
    return function(n) {
        if (!cache[n]) {
            cache[n] = n * n;
        }
        return cache[n];
    }
})();
```



### 惰性函数还能做什么

#### 单例模式

单例模式是设计模式之一，它保证了一个类只有一个实例。实现方法一般是先判断实例是否存在，如果存在就直接返回，否则就创建了再返回。单例模式的好处就是避免了重复实例化带来的内存开销。

```js
// 单例模式
function Singleton(){
  this.data = 'singleton';
}

Singleton.getInstance = (function () {
  var instance;
    
  return function(){
    if (instance) {
      return instance;
    } else {
      instance = new Singleton();
      return instance;
    }
  }
})();

var sa = Singleton.getInstance();
var sb = Singleton.getInstance();
console.log(sa === sb); // true
console.log(sa.data); // 'singleton'
```

单例模式前端最典型的应用场景,全局唯一消息框

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .model {
            width: 200px;
            height: 200px;
            border: 1px solid aqua;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
    </style>
</head>

<body>
    <div id="loginBtn">点我</div>
    <script>
        var getSingle = function (fn) {
            var result; //缓存实例
            return function () {
                return result || (result = fn.apply(this, arguments))
            }
        }
        var createLoginLayer = function () {
            var oDiv = document.createElement("div");
            oDiv.innerHTML = "我是登录浮窗";
            oDiv.className = "model";
            oDiv.style.display = "none";
            document.body.appendChild(oDiv);
            return oDiv;
        }
        var createSingleLoginLayer = getSingle(createLoginLayer);
        document.getElementById("loginBtn").onclick = function () {
            //动态创建弹窗
            //新建一个弹窗实例，内部使用单例模式管理，一直只能有一个.
            var loginLayer = createSingleLoginLayer();
            loginLayer.style.display = "block"
        }
    </script>
</body>
```



### 提高浏览器兼容问题的执行效率

为了解决浏览器之间的行为差异，经常会在代码中包含了大量的 if 语句，以检查浏览器特性，解决不同浏览器的兼容问题。

显然这些if语句我们只希望在一个浏览器中只执行一遍。

```js
function addEvent(type, element, fun) {
  if (element.addEventListener) {
    element.addEventListener(type, fun, false);
  }
  else if (element.attachEvent) {
    element.attachEvent('on' + type, fun);
  }
  else {
    element['on' + type] = fun;
  }
}
```

最佳的办法就是使用惰性函数将结果缓存起来。

```js
function addEvent(type, element, fun) {
  if (element.addEventListener) {
    addEvent = function (type, element, fun) {
      element.addEventListener(type, fun, false);
    }
  }
  else if (element.attachEvent) {
    addEvent = function (type, element, fun) {
      element.attachEvent('on' + type, fun);
    }
  }
  else {
    addEvent = function (type, element, fun) {
      element['on' + type] = fun;
    }
  }
  return addEvent(type, element, fun);
}

```

第一次执行： 选择合适的api并且执行

第二次执行： 由于addEvent已经被指定为其中的一种



最后我们再看看ajax兼容性的代码

没有惰性

```js
function createXHR(){
  var xhr = null;
  try {
    // Firefox, Opera 8.0+, Safari，IE7+
    xhr = new XMLHttpRequest();
  }
  catch (e) {
    // Internet Explorer 
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e) {
        xhr = null;
      }
    }
  }
  return xhr;
}

```

惰性

```js
function createXHR() {
  var xhr = null;
  if (typeof XMLHttpRequest != "undefined") {
    xhr = new XMLHttpRequest();
    createXHR = function () {
      return new XMLHttpRequest();
    };
  } else {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
      createXHR = function () {
        return new ActiveXObject("Msxml2.XMLHTTP");
      };
    } catch (e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
        createXHR = function () {
          return new ActiveXObject("Microsoft.XMLHTTP");
        };
      } catch (e) {
        createXHR = function () {
          return null;
        };
      }
    }
  }
  return xhr;
}

```



## 面试攻略

- 无



## 点评

- 闭包处处都有，但是能说出经典应用又是一个难题。说Helloworld和背题没啥区别。

