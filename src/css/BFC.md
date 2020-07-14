BFC（Block Formatting Context）格式化上下文，是 Web 页面中盒模型布局的 CSS 渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

**形成 BFC 的条件:**
* 根元素
* 浮动元素，float 除 none 以外的值
* 定位元素，position（absolute，fixed）
* display 为以下其中之一的值 inline-block，table-cell，table-caption，flex，grid
* overflow 除了 visible 以外的值（hidden，auto，scroll）
 
**BFC 的特性:**
* bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。
* BFC元素没有margin重叠问题
* BFC的区域不会与浮动元素的box重叠（可用于清除浮动）

**用途：**
1. 清除浮动  
2. margin重叠
3. 减少重绘重排