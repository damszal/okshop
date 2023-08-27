require('dotenv').config()
const express = require("express");
const usersRout = require('./routes/users')
const app = express();

const PORT =  process.env.PORT;

app.listen(PORT, () => console.log("Server started on port " + process.env.PORT));


app.use('/api', usersRout);