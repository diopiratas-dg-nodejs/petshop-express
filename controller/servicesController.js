const { uuid } = require('uuidv4');
const fs = require('fs');
const db = require('../database/models');
const { sequelize } = require('../database/models');
const { QueryTypes } = require('sequelize');

const services = {
    index: async (req, res) => {
        const servicesList = await db.Service.findAll(
          {
            include: [
              {model: db.Categoria, as: 'categoria'}
            ]
          }
        );
        res.render('servicos',{
            title: 'PETSHOP DH',
            servicesList            
        });
    },
    queries: async(req, res) => {
      const { campo } = req.body;
      
      if (campo === 'nome'){
        const resultadoQuery = await sequelize.query(
          "SELECT * FROM 'services' WHERE name = ?",
          {
            replacements : ['b','o']
          }
        )
        res.status(201).json(resultadoQuery)
      }else if (campo === 'preco'){
        const resultadoQuery = await sequelize.query(
          "SELECT * FROM 'services' WHERE preco > :price",
          {
            replacements : {price: 200}
          }
        )
        res.status(201).json(resultadoQuery)
      }else if (campo === 'descricao'){
        const resultadoQuery = await sequelize.query(
          "SELECT * FROM 'services' WHERE text LIKE :descricao",
          {
            replacements : {descricao: 'pet'}
          }
        )
        res.status(201).json(resultadoQuery)
      }else if (campo === 'categoria'){
        const resultadoQuery = await sequelize.query(
          "SELECT * FROM 'services' s INNER JOIN categoria c ON s.categoria_id = c.id " + 
        " WHERE c.name LIKE $categoria",
          {
            bind : {categoria: 'Alimento'}
          }
        )
        res.status(201).json(resultadoQuery)
      }
    },
    findByPrice: async(req, res) => {
      const { price } = req.body;
      const resultadoPreco = await sequelize.query("SELECT * FROM 'services' WHERE price >= $priceVal ",
      {
        
        bind: [{priceVal: price}],
        type: QueryTypes.SELECT
      })
      res.status(201).json(resultadoPreco);
    },
    create: (req, res) => {
      const { name, price, text, email, categoria_id } = req.body;
      let id = uuid();
      let novoServico = {
        uuid: id,
        name,
        price,
        text,
        email,
        categoria_id
      }
      db.Service.create(novoServico)
        .then((result) => {
          res.status(201).send('OK')
        })
        .catch((e) => {
          res.status(500);
        });
    },
}

module.exports = services;