toString 是 Object 上的方法，但是数字、字符串和布尔值也能使用该方法  
所有的类，都继承于Object，所以可以调用toString 方法，  
但是不同的值，调用的结果却不通，是因为包装类重写了toString方法  