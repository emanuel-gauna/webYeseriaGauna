const express = require("express");
const router = express.Router();
const  controller = require("../controllers/indexController.js");


router.get( "/" ,  controller.index);
router.get( "/terms" ,  controller.term);

module.exports = router;