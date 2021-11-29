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

router.post('/', upload.array('fotosServico'), adminController.create);
router.get('/', adminController.index);

module.exports = router;