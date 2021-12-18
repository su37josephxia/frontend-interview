# this、call、apply、bind

### 如何改变this的指向？

### call和apply有什么区别？

### 如何实现call和apply？

### 如何实现一个bind？



### 手写 bind、apply、call

```JavaScript
// call

Function.prototype.call = function (context, ...args) {
  context = context || window;
  
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  
  context[fnSymbol](...args);
  delete context[fnSymbol];
}

```

```JavaScript
Function.prototype.apply = function (context, argsArr) {
  context = context || window;
  
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  
  context[fnSymbol](...argsArr);
  delete context[fnSymbol];
}

```

```JavaScript
Function.prototype.bind = function (context, ...args) {
  context = context || window;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  
  return function (..._args) {
    args = args.concat(_args);
    
    context[fnSymbol](...args);
    delete context[fnSymbol];   
  }
}

```

