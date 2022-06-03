const path = require('path');
const fs = require('fs')

// Create folder
fs.mkdir(path.join(__dirname, 'test'), {}, err => {
    if (err) throw err;
    console.log('Folder Created')
});

// Craete an write to a file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), "Hello World", err => {
    if (err) throw err;
    console.log('File craeted and content written')

    // Append the existing file
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), "\nHello Node", err => {
        if (err) throw err;
        console.log('File Appended');
    });
});

// Read a File Data
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data = ' + data);
});

// Rename a file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'Hello.txt'), (err) => {
    if (err) throw err;
    console.log("File Renamed");
});




