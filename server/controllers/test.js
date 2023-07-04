const data = require('../data/item')


exports.getTest = (req, res) => {
    res.send(data.item);
  }