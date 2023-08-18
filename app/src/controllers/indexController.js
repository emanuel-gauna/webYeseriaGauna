const path = require("path")
const { encode } = require("querystring")

module.exports = {
    index: ( req, res ) =>{
        res.sendFile(path.join(__dirname, "../views/home.html"))
    },
    term: (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/terminosYCondiciones.txt"))
    }
}