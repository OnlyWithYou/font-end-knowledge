没有key，会就地复用当前的元素，  
有key会比较key（删除不存在的），同样的key，不会变动  

说明如下：  
有key的时候，执行update，打印 4 created  1destroyed  
没有key的时候 打印 3次update
```vue
<template>
    <div>
        <Test v-for="item in list" :id="item" :key="item" />
        <div @click="update">update</div>
    </div>
</template>
<script>
export default {
    computed:{
        Test
    },
    data(){
        return {
            list:[1,2,3]
        }
    },
    methods:{
        update(){
            this.list = [2,3,4]
        }
    }
}
</script>
```
```vue
//Test
<template>
    <div>
        <div>id</div>
    </div>
</template>
<script>
export default {
   prop:{
       id:''
   },
    created(){
        console.log(this.id + ' created')
    },
    updated(){
        console.log(this.id + ' updated')
    },
    destroyed(){
        console.log(this.id + ' destroyed')
    }
}
</script>
```