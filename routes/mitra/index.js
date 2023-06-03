const express = require('express');
const router = express.Router();
const mitraController = require('./../../controllers/mitra');

router.post('/', mitraController.registerMitra);

module.exports = router;
