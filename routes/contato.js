const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.render('contato', {title: 'PETSHOP DH'})
});

module.exports = router;
