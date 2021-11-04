const express = require('express');
const router = express.Router();
const servicesController = require('../controller/servicesController')


router.get('/', servicesController.index);

module.exports = router;
