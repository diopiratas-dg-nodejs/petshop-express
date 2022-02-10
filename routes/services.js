const express = require('express');
const router = express.Router();
const servicesController = require('../controller/servicesController')


router.get('/', servicesController.index);
router.post('/create', servicesController.create);
router.post('/findByPrice', servicesController.findByPrice);
router.post('/queries', servicesController.queries);

module.exports = router;
