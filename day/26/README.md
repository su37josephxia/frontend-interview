---
# try also 'default' to start simple
theme: seriph
# theme: takahashi
# theme: bricks
# theme: apple-basic
background: https://source.unsplash.com/collection/94734566/1920x1080

---

# Canvas 与 SVG
全栈然叔

---
layout: iframe-right
url: rect_svg.html
---

## SVG
> SVG 指可伸缩矢量图形 (Scalable Vector Graphics)。
> SVG 是使用 XML 来描述二维图形和绘图程序的语言

```html
<svg width="400" height="110">
  <rect
    width="150"
    height="75"
    style="fill: rgb(0, 0, 255); stroke-width: 3; stroke: rgb(0, 0, 0)"
  />
</svg>
```

---
layout: iframe-right
url: rect_canvas.html
---

## Canvas
> HTML [canvas] 标签用于通过脚本（通常是 JavaScript）动态绘制图形。
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script type="text/javascript">
  var c = document.getElementById("myCanvas");
  var cxt = c.getContext("2d");
  cxt.fillStyle = "#FF0000";
  cxt.fillRect(0, 0, 150, 75);
</script>
```

---

# Canvas优势
- 绘制出来的图形是位图具有很好的渲染性能
- 适合数据量比较大（>1000）
- 大量图形高频率交互
- 适合游戏
- 可以导出jpg/png图片

---

## Echarts中的热力图
![](https://gitee.com/josephxia/picgo/raw/master/juejin/1.png)

---

## Echarts中的炫光拖尾
![](https://gitee.com/josephxia/picgo/raw/master/juejin/2.png)


---

# SVG优势
- 矢量图放大不失真
- 支持事件处理器
- 文字独立、可编辑可搜索

---
layout: iframe-right
url: svg_vue.html
---

案例选择了一个Vue3中的一个demo，通过响应式数据直接渲染svg，非常的精彩。

```html
<g>
  <polygon :points="points"></polygon>
  <circle cx="100" cy="100" r="80"></circle>
  <axis-label
              v-for="(stat, index) in stats"
              :stat="stat"
              :index="index"
              :total="stats.length">
  </axis-label>
</g>
```

```js
function valueToPoint (value, index, total) {
  var x     = 0
  var y     = -value * 0.8
  var angle = Math.PI * 2 / total * index
  var cos   = Math.cos(angle)
  var sin   = Math.sin(angle)
  var tx    = x * cos - y * sin + 100
  var ty    = x * sin + y * cos + 100
  return {
    x: tx,
    y: ty
  }
}
```

---

## 对比表格

|              | Canvas | SVG  |
| ------------ | ------ | ---- |
| 大数据量     | ✅      | ❌    |
| 高交互场景   | ✅      | ❌    |
| 可导出图片   | ✅      | ❌    |
| 放大失真     | ❌      | ✅    |
| 支持事件处理 | ❌      | ✅    |
| 文字可编辑   | ❌      | ✅    |
