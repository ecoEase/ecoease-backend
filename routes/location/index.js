const controller = require('./../../controllers/locations')
const router = require('express').Router()
const locationController = require('./../../controllers/locations')

module.exports = () => {
    router.get('/', locationController.getLocations)
}