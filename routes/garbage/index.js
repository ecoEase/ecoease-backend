const express = require('express');
const router = express.Router();
const garbageController = require('./../../controllers/garbage');

//create
router.post('/', garbageController.createGarbages);
//update
router.put('/update/:id', garbageController.updateGarbages);
//delete
router.delete('/delete/:id', garbageController.deleteGarbages);
//read
router.get('/', garbageController.getGarbages);

module.exports = router;
