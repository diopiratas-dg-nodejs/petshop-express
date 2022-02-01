const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController')


router.get('/', loginController.index);
router.post('/entrar', loginController.login);

module.exports = router;
