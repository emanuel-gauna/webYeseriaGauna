const path = require("path");
const fs = require("fs");
const { encode } = require("querystring")

/* const menu = require("../database/menu.json"); */

const menuFilePath = path.join(__dirname, "../database/materials.json")
const menu = JSON.parse(fs.readFileSync(menuFilePath, 'utf-8'));


module.exports = {
    all: (req,res) =>{
        res.render("products/allProducts", {
            menu
        })
    },
    productDetail: (req,res) =>{
        const materialId = +req.params.id;
        const materials = menu.find(material => material.id == materialId)
        res.render("products/productDetail", {
            title: "Detalle de productos",
            materials,
        })
    },
    categories: (req,res) =>{
        res.render("products/productsCategories")
    },
    productsCart: (req,res) =>{
        res.render("products/productsCart")
    },
    search: (req,res) =>{
      
        let busqueda = req.query.keywords;

        let searchResult = [];
        for (let i = 0; i < menu.length; i++) {
            if(menu[i].name.includes(busqueda)){
                searchResult.push(menu)
            }
            
        } 

            
            res.render("products/search" , {
                searchResult
        });       
        }
        
    }
