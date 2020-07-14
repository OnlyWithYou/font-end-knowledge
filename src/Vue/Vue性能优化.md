* 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
* v-if和v-for不能连用
* 如果需要使用v-for给每项元素绑定事件时使用事件代理
* SPA 页面采用keep-alive缓存组件
* 在更多的情况下，使用v-if替代v-show
* key保证唯一
* 使用路由懒加载、异步组件
* 第三方模块按需导入
* V-pre
* funtional 无状态组件
* 少用watch