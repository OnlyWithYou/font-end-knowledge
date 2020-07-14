容器的属性：
* flex-direction : 决定主轴的方向（即项目的排列方向），默认row 水平方向
* flex-wrap ： 默认情况下，项目都排在主轴上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
* justify-content：定义了项目在主轴上的对齐方式。
* align-items：定义项目在交叉轴上如何对齐。
* 
项目的属性：
* Order：定义项目的排列顺序。数值越小，排列越靠前，默认为0。
* flex-grow：定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
* flex-shrink：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
* align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。