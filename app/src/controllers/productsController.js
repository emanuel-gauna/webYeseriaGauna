const path = require("path");
const fs = require("fs");
const { encode } = require("querystring")


const materialsFilePath = path.join(__dirname, "../database/materials.json");
const categoriesFilePath = path.join(__dirname, "../database/categories.json");
const materials = JSON.parse(fs.readFileSync(materialsFilePath, 'utf-8'));
const categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));


module.exports = {
    all: (req,res) =>{
        res.render("products/allProducts", {
            title: "todos los productos",
            materials
        })
    },
    productDetail: (req,res) =>{
        const materialId = +req.params.id;
        const materials = materials.find(material => material.id == materialId)
        res.render("products/productDetail", {
            title: "Detalle de productos",
            materials,
        })
    },
    categories: (req,res) =>{
        const categoriesID = +req.params.id;
        const category = categories.find(cate => cate.id === categoriesID)
        res.render("products/productsCategories", {
            title: "Categorias",
            category
        })
    },
    productsCart: (req,res) =>{
        res.render("products/productsCart")
    },
    search: (req,res) =>{
      
        let busqueda = req.query.search;

        let searchResult = [];

        for (let i = 0; i < materials.length; i++) {
            if(materials[i].name.includes(busqueda)){
                searchResult.push(materials[i])
            }
        } 
           res.render("products/search" , {
                title: "buscador de productos",
                searchResult: searchResult,
        });     
        }
        
    }
