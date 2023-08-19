const express = require("express");
const router = express.Router();
const  { index, term } = require("../controllers/indexController.js");


router.get( "/" ,  index);
router.get( "/terms" ,  term);

module.exports = router;