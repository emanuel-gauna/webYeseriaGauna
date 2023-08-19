const path = require("path");
const { encode } = require("querystring")

module.exports = {
    all: (req,res) =>{
        res.render("products/allProducts")
    },
    productDetail: (req,res) =>{
        res.render("products/productDetail")
    },
    categories: (req,res) =>{
        res.render("products/productsCategories")
    },
    productsCart: (req,res) =>{
        res.render("products/productsCart")
    },
    search: (req,res) =>{
        res.render("products/search")
    }
}