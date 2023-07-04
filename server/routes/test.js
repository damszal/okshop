const express = require("express");
const conTest = require('../controllers/test')


const router = express.Router();

router.get("/items", conTest.getTest)


module.exports = router