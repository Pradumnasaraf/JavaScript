const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // Buid path dynamic
    // condition ? exprIfTrue : exprIfFalse
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    console.log("File path : " + filePath);

    // Extension of file
    let extname = path.extname(filePath);
    console.log("Extension: " + path.extname(filePath))

    // Inital contnet type
    let contentType = "text/html"

    //Check the extension and set content type
    // Check ext and set content type
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extname == "") filePath += ".html";

    // log the filePath
    console.log(filePath);

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page Not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    if (err) throw err
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8')
                })
            } else {

                // Some server Error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            if (err) throw err
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        };
    });
});
const PORT = process.env.PORT || 5011;
server.listen(PORT, () => console.log(`Server Running on the PORT http://localhost:${PORT}`));