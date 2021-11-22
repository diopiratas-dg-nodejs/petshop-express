const { uuid } = require('uuidv4')
const fs = require('fs')

const create = (req, res) => {
    let service = {
        uuid: uuid(),
        ...req.body
    };
    let serviceStr = JSON.stringify(service);
    fs.writeFileSync('servicos.json', serviceStr);
    res.json(service)
};

const index = (req, res) => {
    const servicesStr = fs.readFileSync('servicos.json', {encoding: 'utf-8'})
    const servicesList = [];
    servicesList.push(JSON.parse(servicesStr))
    res.render('admin', {
        servicesList
    })
}

const service = (req, res) => {
    res.render('criar')
}

module.exports = {
    create,
    index
};