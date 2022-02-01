const { uuid } = require('uuidv4');
const fs = require('fs');
const db = require('../database/models');

const services = {
    index: async (req, res) => {
        const servicesList = await db.Service.findAll();
        res.render('servicos',{
            title: 'PETSHOP DH',
            servicesList            
        });
    },
    create: (req, res) => {
      const { nome, preco, descricao } = req.body;
  
      db.Servico.create({
        uuid: uuid(),
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
}

module.exports = services;