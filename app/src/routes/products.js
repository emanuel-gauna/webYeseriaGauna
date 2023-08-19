const express = require("express");
const router = express.Router();
const { all , productsCart, productDetail, categories, search} = require("../controllers/productsController.js")

// todos los productos
router.get("/" , all );
//detalle de producto
router.get("/detail/:id" , productDetail );
//categorias
router.get("/category/:id" , categories );
//carrito
router.get("/productsCart" , productsCart );
//buscador
router.get("/search" , search );

module.exports = router;
