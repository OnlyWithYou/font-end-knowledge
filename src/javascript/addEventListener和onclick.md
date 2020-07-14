addEventListener（事件监听机制）提供了参数，来定义事件触发的阶段  默认false  
addEventListener 和 dom.onclick 的异同？  
addEventListener  可以添加多个，并且依次执行；onclick 会覆盖，以最后一次为准  
addEventListener  可以定义触发的阶段，onclick 只能在冒泡阶段生效  
如果  addEventListener  之后的一个监听器中 ，执行了 stopImmediatePropagation 方法，则后续的事件不会再执行