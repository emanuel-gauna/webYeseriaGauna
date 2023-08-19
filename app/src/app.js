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

//rutas estaticas
app.use(express.static("public"));
app.use(express.json());

//404-not-Found//
/* app.use((req,res,next)=>{
    res.status(404).sendFile((path.join(__dirname, "/views/notFound.html")))
})
  */

//Routes Middlewres//
//home//
app.use("/", indexRouter);
//todos los productos//
app.use("/products", productsRouter);
//carrito de compras//
app.use("/cart", cartRouter);


app.listen( PORT , ()=> console.log(`escuchando al servidor ${PORT}\n http://localhost:${PORT}`))