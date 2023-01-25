// const http = require("http");

// http.createServer((req, res) => {
//     res.write("<h1>Hello this is  utsav</h1>");
//     res.end();
// }).listen(4500);


const http = require("http");

const dataControl = (req, res) => {
    res.write("<h1>Hello this is  utsav..</h1>");
    res.end();
}

http.createServer(dataControl).listen(4500);