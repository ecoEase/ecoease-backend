const Orders = require('../../models/orders')
const getOrders = async (req, res) => {
    try {
        const orders = await Orders.findAll()
        res.status(200).json(orders)
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