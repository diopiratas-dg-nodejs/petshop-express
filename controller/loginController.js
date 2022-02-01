const fs = require('fs')
const session = require('express-session')
const bcrypt = require('bcrypt')
const db = require('../database/models')

const login = (req, res) => {
    let {email, senha} = req.body

    db.Usuario.findOne({
        where:{
            email: email
        }
    }).then((resultado) =>{
        if (bcrypt.compareSync(senha, resultado.senha)){
            req.session.logged = true;
            req.session.user = email;
            res.redirect('/admin')            
        }else{
            res.render('login',{
                title: 'PETSHOP DH'           
            });
            console.log('Senha incorreta')
        }  
    }).catch((e) => {
        console.log('Usuario não encontrado')
        res.render('login',{
            title: 'PETSHOP DH'           
        });
    })    
}

const index = (req, res) => {    
    res.render('login',{
        title: 'PETSHOP DH'           
    });
}

module.exports = {
    index,
    login
};