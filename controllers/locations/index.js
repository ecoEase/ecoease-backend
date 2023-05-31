// const connection = require('./../../db');
const Location = require('../../models/location')
const getLocations = async (req, res) => {
    try {
        const locations = await Location.findAll()
        return res.status(200).json(locations)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getLocations,
};
