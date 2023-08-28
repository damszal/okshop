require('dotenv').config()
const express = require("express");
const usersRout = require('./routes/users')
const regUsersRout = require('./routes/reg')
const getUsersRout = require('./routes/log')

const app = express();
const mysql = require('mysql2');

const PORT =  process.env.PORT;

app.listen(PORT, () => console.log("Server started on port " + process.env.PORT));

app.use(express.json())
app.use('/reg/', regUsersRout)
app.use('/log/', getUsersRout)
app.use('/api/', usersRout);