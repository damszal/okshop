require('dotenv').config()
const express = require("express");
const usersRout = require('./routes/users')

const app = express();
const mysql = require('mysql2');

const PORT =  process.env.PORT;

const connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    port: 'process.env.SQL_PORT',
    user: 'root',
    password: process.env.SQL_PASS,
  });


app.listen(PORT, () => console.log("Server started on port " + process.env.PORT));
// make router and controller with functions below
  app.use(express.json())
  app.post('/reg/user',(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    connection.query(
      'INSERT INTO ok_shop.clients (Email, Password) VALUES(?,?);',[[username],[password]],
      function(err, results, fields) {
        console.log(results);
        console.log(fields); 
        console.log(err); 
      }
    );
    
  })
  
  
  app.use('/api/', usersRout);