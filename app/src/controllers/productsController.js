const path = require("path");
const { encode } = require("querystring")

module.exports = {
    all: (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/products/allProducts.html"))
    },
    productDetail: (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/products/productDetail.html"))
    },
    categories: (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/products/productsCategories.html"))
    },
    productCart: (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/products/productsCart.html"))
    },
    search: (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/products/search.html"))
    }
}