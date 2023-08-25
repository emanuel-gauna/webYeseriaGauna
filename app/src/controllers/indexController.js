const path = require("path")


module.exports = {
    index: ( req, res ) =>{
        res.render("home")
    },
    term: (req,res) =>{
        res.render("terminosYCondiciones")
    }
}