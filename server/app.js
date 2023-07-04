const express = require("express");
const testRout = require('./routes/test')
const app = express();

const PORT =  8080;

app.listen(PORT, () => console.log("Server started"));


app.use('/api', testRout);