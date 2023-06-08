const express = require('express');
const router = express.Router();
const loginMitraController = require('./../../controllers/loginmitra');

router.post('/', loginMitraController.loginMitra);

module.exports = router;
