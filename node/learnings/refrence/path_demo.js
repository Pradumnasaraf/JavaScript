const path = require('path')

// Base file name
console.log(__filename)
console.log(path.basename(__filename))


// Dir name
console.log(__dirname)
console.log(path.dirname(__filename))

// File extension
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename).name)

// Concatenate paths
console.log(path.join(__filename,'test','hello.html'))