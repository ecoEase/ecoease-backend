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
router.get('/selected/:id', addressController.getSelectedAddress);
router.put('/use/:id', addressController.useAddress)

module.exports = router;
