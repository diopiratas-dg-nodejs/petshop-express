const { uuid } = require('uuidv4')
const fs = require('fs')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

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
    let {name, email, senha} = req.body
    let senhaHash = bcrypt.hashSync(senha, 10)
    let novoUsuario = {
        id : uuid(),
        name,
        email,
        senha: senhaHash
    }

    fs.writeFile('user.json', JSON.stringify(novoUsuario))
    .then(function(){res.redirect(201, '/')})
    .catch(function(){console.log('Erro ao gravar no arquivo')})    
}


async function analyseUser(userId){
    if (userId > 10){
        throw new Error('Mais que 10 usuarios')
    }else{
        console.log('Td certo')
    }
}

async function getAllUsers(){
    const db;
    const sql = 'SELECT * FROM usuarios'
    const users = await db.query(sql, [])
    for (const user of users){
        await analyseUser(user.id)
    }
}

getAllUsers()

const index = (req, res) => {
    const servicesStr = fs.readFileSync('servicos.json', {encoding: 'utf-8'})
    const servicesList = [];
    servicesList.push(JSON.parse(servicesStr))
    res.render('admin', {
        title: 'PETSHOP DH',
        servicesList
    })
}

const service = (req, res) => {
    res.render('criar')
}

module.exports = {
    create,
    index,
    createUser
};