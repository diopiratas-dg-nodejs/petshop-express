const services = {
    index: (req, res) => {
        res.status(200).send({
            services: [
                {
                    name: 'Banho'
                },
                {
                    name: 'Tosa'
                },
                {
                    name: 'Pelagem'
                },
                {
                    name: 'Hospedagem'
                },
                {
                    name: 'Alimentacao'
                },
                {
                    name: 'Cirurgia'
                }
            ]            
        });
    }
}

module.exports = services;