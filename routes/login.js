const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.render('login', {title: 'PETSHOP DH'})
});

module.exports = router;
