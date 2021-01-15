// Library import
const express = require('express')
// const body_parser = require('body-parser')
const path = require('path')
const mysql = require('mysql')

const users = require('./users')

const app = express()

app.get('/api/users', (req, res)=> res.json(users))

// fonction check if member with name existe in array and return true
// const found = users.some(user=> user.name===req.params.name)// 
// if(found){ process informations s}

app.use('/api/users', require('./routes/api/users'))

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server runing on port ${PORT}`))