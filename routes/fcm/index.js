const express = require('express');
const router = express.Router();
const fcmController = require('./../../controllers/fcm');

router.put('/user/:id', fcmController.updateUserFCM);
router.put('/mitra/:id', fcmController.updateMitraFCM);

module.exports = router;
