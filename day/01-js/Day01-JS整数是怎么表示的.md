# Day01 - JS整数是怎么表示的 | 面试打卡365



## 知识讲解

> 系统 + 全面

### 万能的Number

JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。

做一个实验

```
typeof 1 // number
typeof 1.0 // number
1 === 1.0
```



### Number类型的表示范围

#### 浮点数的结构 

根据国际标准 IEEE 754，JavaScript 浮点数的64个二进制位。

![image-20220101175727812](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220101175727812.png)

- 第一部分（蓝色）：用来存储符号位（sign），第1位：符号位，`0`表示正数，`1`表示负数
- 第二部分（绿色）：用来存储指数（exponent），第2位到第12位（共11位）：指数部分
- 第三部分（红色）：用来存储尾数（fraction），第13位到第64位（共52位）：小数部分（即有效数字）



#### fraction决定了整数安全表示范围

也就是  

> (-1)^s * f * 2^e

- 符号部分 -1 or 1

- f的范围为1<=f<2  使用52位表示 

- 指数有正有负，指数位长度为11比特，所以能表示的数字范围为0~2047 

所以很明显最大位应该由f决定，也就是说所有的52位用作表示整数部分。



### 52位为什么可以表示53位小数

因为小数部分只需要表示尾数就可以，整数部分可定等于一

52位太多不好理解，假设我们以3位(bit)数

> 0.10 (二进制)  可以表示为 1.00 * 2^-1
>
> 0.01  (二进制)  可以表示为 1.00 * 2^-2

这样的话由于整数部分一定等于1，所以可以把整数部分省略。

也就是说3位数可以表示做小数表示的时候可以表示4位小数



#### 整数的表示范围

```js
Math.pow(2,53)  - 1 // 最大 
Number.MAX_SAFE_INTEGER // 常数表示
- (Math.pow(2,53)  - 1) // 最大 
Number.MIN_SAFE_INTEGER // 常数表示
```

#### 为什么不是指数部分决定的

> 0.1123 * 2^1023

当然这里面有人会问为什么不是指数部分决定呢。上面这个数的范围是不是比我们的讨论的数据范围更大呢。

其实并不是这样，因为实用指数表示并不能表示连续的数字。所以这个方案不可取。



## 面试攻略

> 精炼 + 系统 + 自洽

- 基本概念：JavaScript 内部，所有数字都是以64位浮点数形式储存。

- 递进： Math.pow(2,53)  - 1 

  



## 点评

- 这道题属于基本概念题，但是如何用二进制表示浮点数很容易能够看出来，逻辑非常复杂。很容易看出应聘这的基本功，和理性思维能力。
  - 初级： 知道Number类型
  - 中级： 说出表示范围推导过程
  - 高级： 推导过程分析合理且可以和其他语言对比。
