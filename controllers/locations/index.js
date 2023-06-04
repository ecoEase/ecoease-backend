const Location = require('../../models/location')
const getLocations = async (req, res) => {
    try {
        const locations = await Location.findAll()

        if (locations.length == 0) return res.status(404).json({ message: "Data locations not found" })

        res.status(200).json({ message: "Success retrieve ;location data", data: locations })
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

const postLocation = async (req, res) => {
    try {
        const location = req.body
        const result = await Location.create(location)
        res.status(200).json({ message: "Success post new location", data: result })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = {
    getLocations,
    postLocation,
};
