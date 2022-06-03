const express = require('express')
const path = require('path')
const logger = require('./middleware/logger.js')

const app = express();

// INIT middleware
// app.use(logger)

// Body parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Set a staric folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/members', require('./routes/api/members'))

// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, 'public','index.html'))
// })

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));