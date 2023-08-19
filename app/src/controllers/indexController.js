const path = require("path")
const { encode } = require("querystring")

module.exports = {
    index: ( req, res ) =>{
        res.render("home")
    },
    term: (req,res) =>{
        res.render("terminosYCondiciones")
    }
}