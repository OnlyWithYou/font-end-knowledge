## 特点

* 难点是错误处理机制。
* await命令只能用在async函数之中，如果用在普通函数，就会报错
* 如果两个异步方法没有依赖关系，不要写成同步的样子，会阻塞程序执行，最好再用promise.all包装一下，这样连个awiat同步执行，    
* await 的值可能报错，所以最好放在try catch中执行
* async 函数可以保留运行堆栈 ，暂时保存当前执行栈

## 比起来 Generator  ， async函数有什么优缺点
* async函数自带执行器
* yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
* async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator
* async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

## 简单实现

原理：一个自动执行的Generator函数
> async 转为generrator  
> await 转为yield 

``` javascript
function autoGentorat(genF) {
    // 返回一个promise，可以链式调用
    return new Promise(function(resolve, reject) {
        // 实例化实参(实参是传递过来的Generator)，获得next方法
        let gen = genF();
        function step(result) {
            // Generator执行到最后，done是true，
            if (result.done) {
                resolve(result.value);
            } else {
                // 没执行完，使用promise的方式让其进行下一步
                // 因为 result你不知道是否是一个异步的操作，所以需要promise
                Promise.resolve(result.value).then(function(res) {
                    // 上一步等待执行结果完毕，进行下一步
                    step(gen.next(res));
                });
            }
        }
        // 开始执行generrator第一步
        step(gen.next(undefined));
    });
}

function getUserInfo(){
    return new Promise(function(resolve,relect){
        setTimeout(function(){
            resolve({name:'小刘鸭'})
        },2000)
    })
}

autoGentorat(function*() {
    yield 1;
    let data = yield getUserInfo();
})

```