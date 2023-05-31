const controller = require('./../../controllers/locations')
const router = require('express').Router()
const locationController = require('./../../controllers/locations')

router.get('/', locationController.getLocations)
router.post('/', locationController.postLocation)

module.exports = router