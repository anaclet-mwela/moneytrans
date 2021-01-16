const mysql = require('mysql')

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodesql'
})

//connect
db.connect((err)=>{
    if(err){
        throw err
    }
    console.log('mysql connected....')
})

const login = (req, res)=>{
    //retrieve posted data
    const phone_number = req.body.phone_number
    const pin_number = req.body.pin_number

    //retrive user from database
    let sql = `SELECT * FROM client WHERE phone_number = ${phone_number}`
    db.query(sql, (err, result)=>{
        if(err) throw err
        
        // check if result is found
        if(result.length > 0){
            // check if pin is valid
            // if valid send resut to front-end
            // create session for the user with his credentials
            if(pin_number == result[0].pin_number){
                res.send(result[0])
            }else{
                res.send('404 Invalid pin number')
                // Send 404 to front-end
            }
            
        } else {
            res.send(`Phone number "${phone_number}" is not registred, plz register or login with valid phone number`)
        }

        
    })
}

const register = (req, res)=>{
    let user = req.body
    let sql = 'INSERT INTO client SET ?'
    db.query(sql, user, (err, result)=>{
        if(err) throw err
        console.log(result)
        res.send(`Client registred: ${result}`)
    })
}

module.exports = {
    login,
    register
}