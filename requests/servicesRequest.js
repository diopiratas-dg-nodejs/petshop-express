const axios = require('axios')
const defaults = require('./default')

const url = 'services'

const servicesRequest = {
    getOneService: (id) => axios({
        ...defaults,
        method: 'get',
        url: `${url}/${id}`
    }),
    getServices: () => axios({
        ...defaults,
        method: 'get',
        url: `${url}/`
    })
};

module.exports = servicesRequest;