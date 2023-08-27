require('dotenv').config()
const express = require("express");
const usersRout = require('./routes/users')

const app = express();
const mysql = require('mysql2');

const PORT =  process.env.PORT;

app.listen(PORT, () => console.log("Server started on port " + process.env.PORT));

const connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    port: '3306',
    user: 'root',
    password: process.env.SQL_PASS,
  });

  connection.query(
    'SELECT * FROM products.shoes;',
    function(err, results, fields) {
      console.log(results[1]); // results contains rows returned by server
    //   console.log(fields); // fields contains extra meta data about results, if available
      console.log(err); 
    }
  );

app.use('/api', usersRout);