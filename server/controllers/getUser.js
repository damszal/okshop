const mysql = require('mysql2');
const bcrypt = require('bcrypt')

const bodyParser = require('body-parser') // do skasowania ?
const cookieParser = require('cookie-parser')// do skasowania ??
const session = require('express-session')


const connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    port: 'process.env.SQL_PORT',
    user: 'root',
    password: process.env.SQL_PASS,
  });

  exports.checkUser = (req,res) => { // check if user is login after reload the login page 
    if(req.session.user) {
      res.send({loggedIn:true, user: req.session.user})
    } else{
      res.send({loggedIn:false})

    }
  }

  exports.getUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query(
      'SELECT * FROM ok_shop.clients WHERE Email = ? ;',username,
      function(err, results, fields) {
        if(err){
          res.send({err:err})
        }
        if(results.length > 0){
          bcrypt.compare(password,results[0].Password, (error,response)=>{
            if(response){
              req.session.user = results;
              console.log(req.session.user)
              res.send(results)
            }else {
              res.send({message: "wrong input combination"})
            }
          })
        }
        else {
          res.send({message: "user dosn't exist"})
        }
      }
    );
  }