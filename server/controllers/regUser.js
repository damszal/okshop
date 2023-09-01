const mysql = require('mysql2');
const bcrypt = require('bcrypt')
const saltRounds = 10


const connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    port: 'process.env.SQL_PORT',
    user: 'root',
    password: process.env.SQL_PASS,
  });

exports.regUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err,hash)=>{
      if(err) {
        console.log(err)
      }
      connection.query(
        'INSERT INTO ok_shop.clients (Email, Password) VALUES(?,?);',[[username],[hash]],
        function(err, results, fields) {
          console.log(results);
          console.log(fields); 
          console.log(err); 
        }
      );     
    } )

  }