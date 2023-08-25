const express = require("express");
const router = express.Router();
const { register, login, logOut, processRegister , processLogin , googleLogin, userDestroy,userEdit , userEditUpdate  } = require("../controllers/usersController");

router.get("/register", register );

module.exports = router;