
module.exports = {
    login: (req,res) =>{
        return res.render("users/login", {

        })
    },
    userHome: (req,res) =>{
        return res.render()
    },
    userEdit: (req,res) =>{
        let idUser = req.params.id;
        let listUsers = [
            "dario",
            "javier",
            "maru", 
            "jaki",
            "facu",
        ];

        let userToedit = listUsers[idUser];
        res.send(userToedit);
       /*  return res.render("user/userEdit", {
            userToedit
        }) */
    },
    userEditUpdate: (req,res) =>{
        return res.render()
    
    },
    processLogin: (req,res) =>{
        return res.render()
    },
    register: (req,res) =>{
        let listUsers = [
            "dario",
            "javier",
            "maru", 
            "jaki",
            "facu",
        ];
        return res.render("users/register", {
            listUsers
        })
    },
    processRegister: (req,res) =>{
        return res.render()
    },
    logOut: (req,res) =>{
        return res.render()
    },
    userDestroy: (req,res) =>{
        return res.render()
    },
    googleLogin: (req,res) =>{
        return res.render()
    },
    
} 