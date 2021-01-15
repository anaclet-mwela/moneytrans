// Library import
const express = require('express')
// const body_parser = require('body-parser')
const path = require('path')

const users = require('./users')

const app = express()

app.get('/api/users', (req, res)=> res.json(users))

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server runing on port ${PORT}`))