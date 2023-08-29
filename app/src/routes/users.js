const express = require("express");
const router = express.Router();
const { register, login, logOut, processRegister , processLogin , googleLogin, userDestroy,userEdit , userEditUpdate, userHome  } = require("../controllers/usersController");

/* ruta de login */
router.get("/login", login );
/* form post login */
router.post("/login", processLogin );
/* ruta de register */
router.get("/register", register );
/* form post de register */
router.get("/register", processRegister );
/* ruta de userHome */
router.get("/userHome", userHome );
/* ruta edit user update */
router.get("/userHome/userEdit", userEdit );
/* form put user updata */
router.put("/userHome/userEdit", userEditUpdate  );
/* ruta delete user */
router.delete("/userHome/delete/:id", userDestroy);
/* ruta logout */
router.get("/logout", logOut );
// Ruta de inicio de sesión con Google

/* router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile','email'] })
); */
// Ruta de redireccionamiento después de iniciar sesión

/* router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/users/login' }),
    googleLogin
); */

module.exports = router;