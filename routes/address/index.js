const express = require('express');
const router = express.Router();
const addressController = require('./../../controllers/address');

//create
router.post('/', addressController.createAddress);
//update
router.put('/update/:id', addressController.updateAddress);
//delete
router.delete('/delete/:id', addressController.deleteAddress);
//read
router.get('/', addressController.getAddress);

module.exports = router;
