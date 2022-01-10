# Day03 - 超过最大限制的数字怎么办?  | 面试打卡365



## 知识讲解

Javascript数字使用Number类型存储。Number类型是有64bit浮点数，所以肯定会出现超出的情况。

#### 在作死的边缘疯狂试探

不过咱们还是可以简单的试探一下

```
// 计算问题
Number.MAX_SAFE_INTEGER // 9007199254740991
9007199254740991+2 // 9007199254740992

// JSON.parse
var c='{"num": 9007199254740992}'
JSON.parse(c) // {num: 90071992547410000}
```



### 高精度计算

**高精度算法**（**High Accuracy Algorithm**）是处理大数字的数学计算方法。在一般的[科学计算](https://baike.baidu.com/item/科学计算/10573887)中，会经常算到小数点后几百位或者更多，当然也可能是几千亿几百亿的大数字。一般这类数字我们统称为高精度数，高精度算法是用计算机对于超大数据的一种模拟加，减，乘，除，[乘方](https://baike.baidu.com/item/乘方/9539611)，[阶乘](https://baike.baidu.com/item/阶乘/4437932)，[开方](https://baike.baidu.com/item/开方/5705)等运算。对于非常庞大的数字无法在计算机中正常存储，于是，将这个数字拆开，拆成一位一位的，或者是四位四位的存储到一个[数组](https://baike.baidu.com/item/数组/3794097)中， 用一个数组去表示一个数字，这样这个数字就被称为是高精度数。高精度算法就是能处理高精度数各种运算的算法，但又因其特殊性，故从普通数的算法中分离，自成一家。



```js
//除法函数，用来得到精确的除法结果  
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。  
//调用：accDiv(arg1,arg2)  
//返回值：arg1除以arg2的精确结果 
   
function accDiv(arg1,arg2){  
var t1=0,t2=0,r1,r2;  
try{t1=arg1.toString().split(".")[1].length}catch(e){}  
try{t2=arg2.toString().split(".")[1].length}catch(e){}  
with(Math){  
r1=Number(arg1.toString().replace(".",""))  
r2=Number(arg2.toString().replace(".",""))  
return (r1/r2)*pow(10,t2-t1);  
}  
}  
//给Number类型增加一个div方法，调用起来更加方便。  
Number.prototype.div = function (arg){  
return accDiv(this, arg);  
}  
   
   
//乘法函数，用来得到精确的乘法结果  
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。  
//调用：accMul(arg1,arg2)  
//返回值：arg1乘以arg2的精确结果  
   
function accMul(arg1,arg2)  
{  
var m=0,s1=arg1.toString(),s2=arg2.toString();  
try{m+=s1.split(".")[1].length}catch(e){}  
try{m+=s2.split(".")[1].length}catch(e){}  
return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)  
}  
//给Number类型增加一个mul方法，调用起来更加方便。  
Number.prototype.mul = function (arg){  
return accMul(arg, this);  
}  
   
   
//加法函数，用来得到精确的加法结果  
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。  
//调用：accAdd(arg1,arg2)  
//返回值：arg1加上arg2的精确结果  
   
function accAdd(arg1,arg2){  
var r1,r2,m;  
try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}  
try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  
m=Math.pow(10,Math.max(r1,r2))  
return (arg1*m+arg2*m)/m  
}  
//给Number类型增加一个add方法，调用起来更加方便。  
Number.prototype.add = function (arg){  
return accAdd(arg,this);  
} 
   
//在你要用的地方包含这些函数，然后调用它来计算就可以了。  
//比如你要计算：7*0.8 ，则改成 (7).mul(8)  
//其它运算类似，就可以得到比较精确的结果。 
   
   
   
//减法函数 
function Subtr(arg1,arg2){ 
     var r1,r2,m,n; 
     try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
     try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
     m=Math.pow(10,Math.max(r1,r2)); 
     //last modify by deeka 
     //动态控制精度长度 
     n=(r1>=r2)?r1:r2; 
     return ((arg1*m-arg2*m)/m).toFixed(n); 
} 
```



### 常用的JS库

- BigInt
- bigDecimal
- json-bigint

```text
var JSONbig = require('json-bigint');

var json = '{ "value" : 9223372036854775807, "v2": 123 }';
console.log('Input:', json);
console.log('');
```



## 面试攻略

> 精炼 + 系统 + 自洽

- 基本概念：超出部分要用高精度处理方法。

  


## 点评

- 能不能说出高精度计算概念是关键。





intBuffer
Uint8Array(8) [154, 153, 153, 153, 153, 153, 185, 63, buffer: ArrayBuffer(8), byteLength: 8, byteOffset: 0, length: 8]0: 1541: 1532: 1533: 1534: 1535: 1536: 1857: 63buffer: ArrayBuffer(8)byteLength: 8byteOffset: 0length: 8Symbol(Symbol.toStringTag): (...)[[Prototype]]: TypedArray
intBuffer.map((v) => v.toString(2))
Uint8Array(8) [130, 121, 121, 121, 121, 121, 25, 7, buffer: ArrayBuffer(8), byteLength: 8, byteOffset: 0, length: 8]0: 1301: 1212: 1213: 1214: 1215: 1216: 257: 7buffer: ArrayBuffer(8)byteLength: 8byteOffset: 0length: 8Symbol(Symbol.toStringTag): (...)[[Prototype]]: TypedArray
0.1 + 0.2
0.30000000000000004
(0.1).toStirng
undefined
(0.1).toString(2)
'0.0001100110011001100110011001100110011001100110011001101'



