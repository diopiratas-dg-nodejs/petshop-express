const services = {
    index: (req, res) => {
        res.render('servicos',{
            title: 'PETSHOP DH',
            services: [
                {
                    name: 'Banho',
                    price: 30.00,
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a, veritatis voluptates natus, quaerat voluptatibus tenetur in labore ad consequatur repudiandae quia veniam quas deserunt iure voluptatem. Saepe, est ipsam!"
                },
                {
                    name: 'Tosa',
                    price: 50.00,
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a, veritatis voluptates natus, quaerat voluptatibus tenetur in labore ad consequatur repudiandae quia veniam quas deserunt iure voluptatem. Saepe, est ipsam!"
                },
                {
                    name: 'Pelagem',
                    price: 10.00,
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a, veritatis voluptates natus, quaerat voluptatibus tenetur in labore ad consequatur repudiandae quia veniam quas deserunt iure voluptatem. Saepe, est ipsam!"
                },
                {
                    name: 'Hospedagem',
                    price: 187.00,
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a, veritatis voluptates natus, quaerat voluptatibus tenetur in labore ad consequatur repudiandae quia veniam quas deserunt iure voluptatem. Saepe, est ipsam!"
                },
                {
                    name: 'Alimentacao',
                    price: 50.00,
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a, veritatis voluptates natus, quaerat voluptatibus tenetur in labore ad consequatur repudiandae quia veniam quas deserunt iure voluptatem. Saepe, est ipsam!"
                },
                {
                    name: 'Cirurgia'
                }
            ]            
        });
    }
}

module.exports = services;