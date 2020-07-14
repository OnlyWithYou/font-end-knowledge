首先，你要知道Vue.js内部将DOM节点抽象成了一个个的VNode节点，所以，keep-alive的缓存也是基于VNode节点的而不是直接存储DOM结构。

其实就是将需要缓存的VNode节点保存在this.cache中／在render时,如果VNode的name符合在缓存条件（可以用include以及exclude控制），则会从this.cache中取出之前缓存的VNode实例进行渲染。

keep-alive 是个组件

created

初始化两个对象分别缓存VNode（虚拟DOM）和VNode对应的键集合

第一步：获取keep-alive包裹着的第一个子组件对象及其组件名；

第二步：根据设定的黑白名单（如果有）进行条件匹配，决定是否缓存。不匹配，直接返回组件实例（VNode），否则执行第三步；

第三步：根据组件ID和tag生成缓存Key，并在缓存对象中查找是否已缓存过该组件实例。如果存在，直接取出缓存值并更新该key在this.keys中的位置（更新key的位置是实现LRU置换策略的关键），否则执行第四步；

第四步：在this.cache对象中存储该组件实例并保存key值，之后检查缓存的实例数量是否超过max的设置值，超过则根据LRU置换策略删除最近最久未使用的实例（即是下标为0的那个key）。

第五步：最后并且很重要，将该组件实例的keepAlive属性值设置为true。

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：
* 一般结合路由和动态组件一起使用，用于缓存组件；
* 提供 include 和 exclude 属性，两者都支持字符串或正则表达式，
* include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，
* 其中 exclude 的优先级比 include 高；
* 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。