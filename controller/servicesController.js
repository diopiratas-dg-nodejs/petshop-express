const { uuid } = require('uuidv4');
const fs = require('fs');

const services = {
    index: (req, res) => {
        let servicosStr = fs.readFileSync('servicos.json', {encoding: 'utf-8'});
        let servicesList = [];
        servicesList.push(JSON.parse(servicosStr));
        res.render('servicos',{
            title: 'PETSHOP DH',
            servicesList             
        });
    }
}

module.exports = services;