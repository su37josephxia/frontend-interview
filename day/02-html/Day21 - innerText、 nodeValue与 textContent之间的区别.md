# Day21 - innerText、 nodeValue与 textContent的区别

# 知识讲解

### 什么是Dom

>  DOM=DocumentObjectModel，文档对象模型，DOM可以以一种独立于平台和语言的方式访问和修改一个文档的内容和结构

你可以认为就是浏览器会把HTML文档解析为一个对象。

就像一个树一样。比如<html>下面会有<head>和<body>然后其他标签都是这棵树上的数值和树叶。

![image-20220121235611713](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20220121235611713.png)

### 

### 节点种类

节点种类一共分为12个类

> 元素节点            　　Node.ELEMENT_NODE(1)
> 属性节点            　　Node.ATTRIBUTE_NODE(2)
> 文本节点            　　Node.TEXT_NODE(3)
> CDATA节点             Node.CDATA_SECTION_NODE(4)
> 实体引用名称节点    　　 Node.ENTRY_REFERENCE_NODE(5)
> 实体名称节点        　　Node.ENTITY_NODE(6)
> 处理指令节点        　　Node.PROCESSING_INSTRUCTION_NODE(7)
> 注释节点            　 Node.COMMENT_NODE(8)
> 文档节点            　 Node.DOCUMENT_NODE(9)
> 文档类型节点        　　Node.DOCUMENT_TYPE_NODE(10)
> 文档片段节点        　　Node.DOCUMENT_FRAGMENT_NODE(11)
> DTD声明节点            Node.NOTATION_NODE(12)



### 节点遍历

树起始于文档节点，并由此继续伸出枝条，直到处于这棵树最低级别的所有文本节点为止。



### 三者区别

innerText、 nodeValue与 textContent这三个api都是取某一个文本内容。

```html
<div id="app">
    水果
        <!-- 注释 -->
        <p>
            西瓜
            <div style="display: none;">
                瓜子
            </div>
        </p>
    </p>
</div>
```



#### nodeValue

> nodeValue只能取文本节点的内容。

```js
const app = document.getElementById('app')
console.log(app.nodeValue) // null
```

其实【水果】这个是div下的一个文本节点。

```
const app = document.getElementById('app')
console.log(app.childNodes[0].nodeValue) // null
console.log(app.childNodes[1].nodeValue) // null
```

实际上只对CDATA片段，注释comment，Processing Instruction节点或text节点有效。



#### innerHTML与innerText

这两个api的区别功能是从起始位置到终止位置的内容, 区别在于是否去除Html标签 。

```js
const app = document.getElementById('app')
console.log(app.innerHTML) // null
console.log(app.innerText) // null
```



#### textContent

这个是一个比较新的api  ie8以前的浏览器可能会产生不兼容问题。

功能是textContent 属性设置或返回指定节点的文本内容，以及它的所有后代。

与innerText的区别

- 会获取style=“display:none”中的文本
- 会获取style标签中的文本
- 不解析html更快捷性能好

## 面试攻略

这道题其实我也不太会，确实比较惭愧。但是学习了这道题给我的感觉就是了解这些基础api对了解框架源码有很多好处，就比如十二种节点类型。

