# Day19 - React与this指向

### React中的this指向问题

首先搭建一个React环境

```js
npx create-react-app hello-react
```

在index.js文件中编写一个基础代码
```js
class App extends React.Component{
  constructor(){
    this.name
  }

  handleClick(event){
    console.log(this); // 'this' 值为 undefined
  }
  render(){
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

这里面出现一个一个很奇怪的现象。

按照常理render函数中的JSX中的 onClick事件, 绑定的类中的方法的上下文对象应该指向类实例,

但是实际的结果却是undefined。

感觉有点违背常理。

但实际上要是我们把JSX转换成对象操作大家就可以看明白了



### 模拟Render渲染函数

实际上react的渲染过程非常复杂包括

JSX  -> 虚拟Dom -> render函数

咱们就化繁为简，就看一下这个模拟的最终产物 Dom渲染函数

```js
 renderDom() {
    var btn = document.createElement("button");
    var t = document.createTextNode("Click Me");
    btn.appendChild(t);
    function createCallback(fn) {
      return () => fn.apply()
    }
    btn.addEventListener("click", createCallback(this.handleClick));
    document.getElementById("root").appendChild(btn);
    return
  }
```

这里面大家可能会对这个诡异的createCallback函数感兴趣,这部分内容暂时留到react原理的时候再说。总之不是确定不是直接绑定的handleClick方法就好。

![Snip20220119_6](https://gitee.com/josephxia/picgo/raw/master/juejin/Snip20220119_6.png)

然后自己做一个renderDom函数来代替ReactDom.render函数

```js
 const app = new App()
 app.renderDom()
```

声明app实例 然后渲染一次。



#### this没有指向实例的原因

由于react执行回调的时候使用apply方法，指定的上下文是context对象而不是对象实例。

 ```js
 function createCallback(fn) {
       const context = undefined
       return () => fn.apply(context);
 }
 ```

当然你也不可能让this指向app实例

![Snip20220119_6](https://gitee.com/josephxia/picgo/raw/master/juejin/Snip20220119_6.png)



### 解法1:构造函数上bind

在构造函数上将所有方法讲this绑定到app实例上

```js
constructor(props) {
    super(props);
  	// 绑定实例
    this.handleClick = this.handleClick.bind(this)
}
```

### 解法2:render函数上bind

第二种思路和第一种类似只不过是在render函数上bind。

```js
render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Click Me
      </button>
    );
}
```

### 解法3: handle函数使用箭头函数

另外一种思路就是利用箭头函数和词法作用域。

```js
handleClick = (event) => {
    // debugger
    console.log("click", this); // 'this' 值为 undefined
}
```

### 方法4: 绑定事件函数使用箭头函数

最后一种和上面类似还是利用箭头函数只是位置改为JSX中

```js
render() {
    return (
      <button onClick={() => this.handleClick}>
        Click Me
      </button>
    );
}
```





## 面试攻略

React的this丢失问题，丢失的原因和解决之道涉及了this指向的方方面面问题。是Javascript基础的试金石。

