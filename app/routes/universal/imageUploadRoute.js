const express = require('express');
const router = express.Router();
const multer = require('multer');
const controller = require('../../controllers/universal/imageUploadController')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname)
    }
})
const upload = multer({
    storage: storage
})
router.post('/upload', upload.single('image'), controller.upload)
module.exports = router