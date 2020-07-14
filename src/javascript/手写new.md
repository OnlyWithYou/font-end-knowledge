

```javascript
function MyNew (fn){
    // 创建新的空对象
    var obj = {};
    // 将控对象的原型指向构造函数的原型
    obj.__proto__ = fn.prototype;
    // 将控对象的构造函数指向构造参数
    obj.constructor = fn
    // 执行构造函数
    fn().call(this);
    // 返回对象
    return obj
}
```