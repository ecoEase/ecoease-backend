const express = require('express');
const router = express.Router();
const { registerUser } = require('./../../controllers/user');
const multer = require('multer');
const ImgUpload = require('../../imgupload/imgUpload');

// Konfigurasi Multer
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

router.post('/', upload.single('photoFile'), ImgUpload.uploadToGcs, registerController.registerUser);

module.exports = router;
