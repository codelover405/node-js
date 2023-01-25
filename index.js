let app = require('./app')

console.log("jkj");

var a = 2;
var b = 2;
var c = 2;
console.log(a + b + c);
console.log(app);
console.log(app.z());

const arr = [2, 3, 5, 4, 6, 3, 7, 5, 3];
let result = arr.filter((item) => {
    return item > 5;
})
console.log(result);