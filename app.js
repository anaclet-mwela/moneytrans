// Library import
const express = require('express')
//const body_parser = require('body-parser')
const path = require('path')

// Importing routes
let login = require('./routes/api/login')
let register = require('./routes/api/register')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// using the routes
app.use('/login', login)
app.use('/register', register)

// set static folder is View of the MVC
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server runing on port ${PORT}`))