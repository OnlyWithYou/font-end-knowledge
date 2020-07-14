概述：

1. 是一个vue插件，所以有install方法
2. 在所有组件的beforeCreate生命周期注入了设置this.$store这样一个对象
3. 原理差不多是new另一个vue实例

特点：

1. Mutation 唯一修改 state 的方法
2. Mutation必须是同步函数
3. 使用commit的方式来修改state
4. Action 提交的是 mutation，而不是直接变更状态
5. Action 可以包含任意异步操作
6. 使用dispatch来提交Action
7. action 返回一个promise