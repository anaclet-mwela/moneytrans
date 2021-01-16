const express = require('express')
const router = express.Router()
const users = require('../../users')

router.get('/:id', (req, res)=>{
    const found = users.some(user=>user.id===parseInt(req.params.id))
    if(found){
        res.send(users.filter(user => user.id === parseInt(req.params.id)))
    }
})


// create db
router.get('/createdb', (req, res)=>{
    let sql = 'CREATE DATABASE nodesql'
    db.query(sql,(err, result)=>{
        if(err) throw err
        res.send('Database created')
    })
})


module.exports = router