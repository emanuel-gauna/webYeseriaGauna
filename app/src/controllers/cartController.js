const path = require("path");

module.exports = {
    addItem: (req,res) =>{
        res.send("item agregado")
    },
    deleteItem: (req,res) =>{
        res.send("item eliminado")
    },
    allItems: (req,res) =>{
        res.send("total de productos")
    },
    deleteAllItems: (req,res) =>{
        res.send("carrito vacio")
    },
}