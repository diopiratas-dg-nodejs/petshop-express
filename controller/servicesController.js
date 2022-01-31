const { uuid } = require('uuidv4');
const fs = require('fs');
const db = require('../database/models');

const services = {
  index: (req, res) => {
    let servicosStr = fs.readFileSync('servicos.json', { encoding: 'utf-8' });
    let servicesList = [];
    servicesList.push(JSON.parse(servicosStr));
    res.render('servicos', {
      title: 'PETSHOP DH',
      servicesList,
    });
  },
  create: (req, res) => {
    const { nome, preco, descricao } = req.body;

    db.Servico.create({
      nome,
      preco,
      descricao,
    })
      .then((result) => {
        res.status(201).json(resut);
      })
      .catch((e) => {
        res.status(500);
      });
  },
};

module.exports = services;
