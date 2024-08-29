const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const control = require('./web/js/control.js');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'web/images'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/api/products', upload.single('image'), control.addProduct);
router.get('/api/products', control.getProducts);
router.put('/api/products/:productId/stock', control.updateStock);
router.put('/api/products/:productId', control.updateProduct);
router.delete('/api/products/:productId', control.deleteProduct);

module.exports = router;