const data = require('../data/users')


exports.getUsers = (req, res) => {
    res.send(data);
  }