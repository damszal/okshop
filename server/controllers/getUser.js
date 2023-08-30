const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    port: 'process.env.SQL_PORT',
    user: 'root',
    password: process.env.SQL_PASS,
  });

  exports.getUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query(
      'SELECT * FROM ok_shop.clients WHERE Email = ? AND Password = ? ;',[[username],[password]],
      function(err, results, fields) {
        if(err){
          res.send({err:err})
        }
        if(results.length > 0){
          res.send(results)
        }
        else {
          res.send({message: "wrong input combination"})
        }
      }
    );
  }