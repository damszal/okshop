const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    port: 'process.env.SQL_PORT',
    user: 'root',
    password: process.env.SQL_PASS,
  });

exports.regUser = (req, res) => {
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
  }