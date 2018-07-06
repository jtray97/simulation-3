//IMPORTS
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , session = require('express-session')
    , app = express()
require('dotenv').config()
//DESTRUCTURING
let {
    SESSION_SECRET,
    SERVER_PORT,
    CONNECTION_STRING,
} = process.env

//MIDDLEWARE
app.use(bodyParser.json())
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database connected.')
})
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//ENDPOINTS

app.post('/api/register', (req, res) => {
    const db = req.app.get('db')
    let { username, password, avatar } = req.body
    db.register_user([username, password, avatar]).then(response => {
        res.send(response.data)
        // console.log(response.data, 'register app')
        req.session.user = response.data[0] || null
    })
})
app.post('/api/login', async (req, res) => {
    const db = req.app.get('db')
    let { username, password } = req.body
    db.check_user([username, password]).then(response => {
        res.send(response)
        req.session.user = response.data[0] || null
    })
})




//LISTENING
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} miles per hour`))