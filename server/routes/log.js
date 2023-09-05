const express = require("express");
const controler = require('../controllers/getUser');
const router = express.Router();

router.post('/loged', controler.getUser);
router.get('/loged', controler.checkUser);

 


module.exports = router