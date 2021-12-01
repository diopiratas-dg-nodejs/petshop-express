const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '/home/magalu/Workspaces/petshop-express/uploads');
    },
    filename: (req, file, callback) => {
        console.log(file)
        callback(null, `${new Date().getTime()}-${file.originalname}`)
    }
})

const upload = multer({storage})

const { body, checkSchema } = require('express-validator')

const schema = {
    name: {
        isLength: {
            errorMessage: 'Name should be at least 5 chars',
            options: {min: 5}
        }
    },
} 

router.post('/',
    checkSchema(schema),
    upload.array('fotosServico'), adminController.create);
router.get('/', adminController.index);

module.exports = router;