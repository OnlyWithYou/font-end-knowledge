## Iterator
是一种接口，为各种不同的数据结(array、object、map、set)构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。

**原理**

（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”

原生具备 Iterator 接口的数据结构如下。

Array  
Map  
Set  
String  
TypedArray  
函数的 arguments 对象  
NodeList 对象  
Generator

对象（Object）之所以没有默认部署 Iterator 接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。

## for of
循环读取键值  
for...of循环内部调用的是数据结构的Symbol.iterator方法。


## for in
* 循环获取键名
* 可以遍历原型
* 

## Object.keys()，Object.values()，Object.entries() 

不会获取原型上的属性
