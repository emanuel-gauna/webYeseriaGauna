const express = require("express");
const app = express();
const path = require("path");

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
app.use(express.json());




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
    res.status(404).render("notFound")
})
 

app.listen( PORT , ()=> console.log(`escuchando al servidor ${PORT}\n http://localhost:${PORT}`))