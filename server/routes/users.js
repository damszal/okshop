const express = require("express");
const conTest = require('../controllers/user')


const router = express.Router();

router.get("/users", conTest.getUsers)


module.exports = router