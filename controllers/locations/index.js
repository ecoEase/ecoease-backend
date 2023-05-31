const Location = require('../../models/location')
const getLocations = async (req, res) => {
    try {
        const locations = await Location.findAll()
        res.status(200).json(locations)
    } catch (error) {
        res.status(500).send(error)
    }
}

const postLocation = async (req, res) => {
    try {
        const location = req.body
        const result = await Location.create(location)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getLocations,
    postLocation,
};
