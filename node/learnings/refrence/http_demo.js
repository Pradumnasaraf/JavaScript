const http = require('http');

// Craete server object
http.createServer((req, res, ) =>{
    res.write("Hello World")
    res.end()
}).listen(5000, () => console.log("Server Running...."))
