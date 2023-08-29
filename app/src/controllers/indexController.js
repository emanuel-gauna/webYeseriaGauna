const path = require("path")


module.exports = {
    index: ( req, res ) =>{
        res.render("home" , {
            title: "bienvenido a Yeseria Gauna"
        })
    },
    term: (req,res) =>{
        res.render("terminosYCondiciones", {
            title: "Terminos y condiciones"
        })
    }
}