const fs = require('fs');

console.log("code step by step");  //globle module
fs.writeFileSync("hello.txt", "hello I am Good");  //auto create file hello.txt  [non-globle]
