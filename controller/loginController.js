const fs = require('fs')
const session = require('express-session')
const bcrypt = require('bcrypt')

const login = (req, res) => {
    let users = fs.readFileSync('user.json')
    let {èmail, senha} = req.body

    users.forEach(user => {
        if (bcrypt.compareSync(user.senha, bcrypt.hashSync(senha,10))){
            req.session.logged = true;
            req.session.user = email;
        }        
    });
    
}

module.exports = {
    login
};