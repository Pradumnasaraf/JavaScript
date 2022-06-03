const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Req URL is:"+ req.url)
    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), (err, content) => {
                if (err) throw err
                res.writeHead(200, { 'Cotent-Type': 'text/html' });
                res.end(content, 'utf8')
            }
        )
    }
    else if (req.url === '/about') {
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'), (err, content) => {
                if (err) throw err
                res.writeHead(200, { 'Cotent-Type': 'text/html' });
                res.write(content, 'utf8')
            }
        )
    }
    else if (req.url === '/api/user') {
        const user = [{name: 'Bob Smith', age:40},{name: ' Smith', age:20}]
        res.writeHead(200, { 'Cotent-Type': 'application/json' });
        res.end(JSON.stringify(user))
    }
});
const PORT = process.env.PORT || 5003;
server.listen(PORT, () => console.log(`Server Running on the PORT ${PORT}`));