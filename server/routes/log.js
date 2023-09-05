const express = require("express");
const controler = require('../controllers/getUser');
const router = express.Router();

router.post('/loged', controler.getUser);

 


module.exports = router