const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController.js")

// todos los productos
router.get("/" , controller.all );
//detalle de producto
router.get("/detail/:id" , controller.productDetail );
//categorias
router.get("/category/:id" , controller.categories );
//carrito
router.get("/productCart" , controller.productCart );
//buscador
router.get("/search" , controller.search );

module.exports = router;
