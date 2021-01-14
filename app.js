const express = require('express')
const body_parser = require('body-parser')

var app = express()

app.get('/', (req, res)=>{
    res.send('Hello Express')
})

app.listen(5000)