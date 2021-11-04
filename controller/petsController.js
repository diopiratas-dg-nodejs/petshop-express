const pets = {
    index: (req, res) => {
        res.status(200).send({
            pets: [{
                name: 'Tchutchucao',
                breed: 'Shitzu'
            },{
                name: 'Away',
                breed: 'Vira Lata'
            },{
                name: 'Lauder',
                breed: 'Lulu da Pomerania'
            }]
        })
    }
}

module.exports = pets;