# xhr

特点：

所有浏览器都支持 onreadystatechange  
更多现代浏览器，除了可以设置 on* 属性外，也可以用 addEventListener来监听XMLHttpRequest 事件。  
可以终止

方法特征：

open：第三个参数async ，表示是否异步。默认true。

# axios


特点：

基于xhr  
基于promise  
支持node  
请求拦截  
防御xsrf(跨站域请求伪造)  

# fetch  

特点：

Fetch是浏览器原生的 api 
返回promise  
仅当网络故障时或请求被阻止时，才会标记为 reject。  
不会接受跨域 cookies；   
默认fetch 不会发送 cookies  
浏览器可能不支持