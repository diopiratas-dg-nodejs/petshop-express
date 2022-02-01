const { uuid } = require('uuidv4')
const fs = require('fs')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const db = require('../database/models')

async function create(req, res){
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    let service = {
        uuid: uuid(),
        ...req.body,
    };
    let serviceStr = JSON.stringify(service);
    await fs.writeFile('servicos.json', serviceStr);
    res.json(service)
}

const createUser = (req, res) => {
    let {nome, email, senha} = req.body
    let senhaHash = bcrypt.hashSync(senha, 10)
    let novoUsuario = {
        nome,
        email,
        senha: senhaHash
    }

    db.Usuario.create(novoUsuario)
    .then((result) => {
      res.status(201).send('OK');
    })
    .catch((e) => {
        console.log(e)
      res.status(500).send('Erro ao inserir na base');
    });
};

const index = (req, res) => {
    if (req.session.logged === true){
        res.render('admin', {
            title: 'PETSHOP DH'
        })
    }else{
        console.log('Realize login para acessar a pagina')
        res.redirect('/')        
    }
}

const service = (req, res) => {
    res.render('criar')
}

module.exports = {
    create,
    index,
    createUser
};