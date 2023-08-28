const express = require("express");
const contRegUser = require('../controllers/regUser')


const router = express.Router();

router.post('/user', contRegUser.regUser)


module.exports = router