* window.onload在页面所有元素（包括图片、引入的文件）加载完成后执行，
* onDocument在html DOM和css DOM 加载后（部分图片可能没有加载完成）就可执行；
* window.onload只能执行一次，如果定义多次，后者将覆盖前者，onDocument可定义多次，并且都能运行；