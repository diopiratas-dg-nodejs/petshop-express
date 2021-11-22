const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController')

router.post('/', adminController.create);
router.get('/', adminController.index);
router.get('/servicos', adminController.service);

module.exports = router;
