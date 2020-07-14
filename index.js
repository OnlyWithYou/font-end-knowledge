const fs = require("fs");

const path = "./src/";

const dirs = fs.readdirSync(path);

const lastFileName = "readme2.md";

let fileData = "# 前端知识点总结\n";

// <details>
// <summary>ES6</summary>

// 1. [for in 和 for of 与Iterator](./src/ES6/for%20in%20和%20for%20of%20与Iterator.md)
// 2. [使用箭头函数需要注意的地方](./src/ES6/使用箭头函数需要注意的地方.md)
// 3. [promise](./src/ES6/promise.md)
// </details>

dirs.forEach((dirName) => {
  let content = "<details>\n";

  content += "<summary>" + dirName + "</summary>\n";

  content += '\n'

  const flies = fs.readdirSync(path + dirName);

  console.log(flies);

  flies.forEach((fileName, index) => {
    content += index + 1;

    content += ". ";

    content += "[" + fileName.slice(0,-3) + "]";

    content +=
      "(" + path + dirName + "/" + fileName.replace(/[\s]+/g, "%20").replace(/\?/g,"，") + ")";

      content += '\n'
  });

  content += "</details>";

  fileData += content
});

fs.writeFile('./'+lastFileName,fileData,function(err){
    if(err){
        console.log(err)
    }else{
        console.log('success...')
    }
})
