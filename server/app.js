require('dotenv').config();
const express = require("express");
const usersRout = require('./routes/users')
const regUsersRout = require('./routes/reg')
const getUsersRout = require('./routes/log')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express();


const PORT =  process.env.PORT;

app.listen(PORT, () => console.log("Server started on port " + process.env.PORT));

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    key: 'userId',
    secret: 'subscribe',
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24,
    }
}))

app.use('/reg/', regUsersRout)
app.use('/log/', getUsersRout)
app.use('/api/', usersRout);