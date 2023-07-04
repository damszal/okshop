const express = require("express");
const usersRout = require('./routes/users')
const app = express();

const PORT =  8080;

app.listen(PORT, () => console.log("Server started"));


app.use('/api', usersRout);