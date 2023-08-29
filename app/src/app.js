const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const PORT = 3000;
/* app.set("views", "./src/views");
 */

/* Template engine Config. */
app.set("view engine", "ejs");
app.set("views", "./src/views");


//modulos de rutas//
const indexRouter = require("./routes/index.js")
const productsRouter = require("./routes/products.js");
const cartRouter = require("./routes/cart.js");
const usersRouter = require("./routes/users.js");

//rutas estaticas
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))//capturamos lo que viene de los formularios en obj/json
app.use(express.json());
/* metodo para aceptar put y delete */
app.use(methodOverride("_method"));




//Routes Middlewres//
//home//
app.use("/", indexRouter);
//todos los productos//
app.use("/products", productsRouter);
//carrito de compras//
app.use("/cart", cartRouter);
//usuarios
app.use("/users", usersRouter);

//404-not-Found//
app.use((req,res,next)=>{
    res.status(404).render("notFound" ,{
        title: "error-404"
    })
})
 

app.listen( PORT , ()=> console.log(`escuchando al servidor ${PORT}\n http://localhost:${PORT}`))