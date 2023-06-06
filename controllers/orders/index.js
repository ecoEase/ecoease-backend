const { Op } = require('sequelize')
const { sequelize } = require('../../database')
const DetailTransaction = require('../../models/detailTransaction')
const Garbages = require('../../models/garbage')
const Orders = require('../../models/orders')
const Location = require('../../models/location')
const Address = require('../../models/address')
const Mitra = require('../../models/mitra')
const User = require('../../models/user')

const getOrders = async (req, res) => {
    try {
        const { userId, mitraId, id } = req.query
        const includeModels = [
            { model: Address },
            { model: Garbages },
            { model: Location },
            { model: Mitra },
            { model: User },
        ]

        let orders

        if (userId) {
            orders = await Orders.findAll(
                {
                    include: includeModels,
                    where: { user_id: userId }
                }
            )
        } else if (mitraId) {
            orders = await Orders.findAll(
                {
                    include: includeModels,
                    where: { mitra_id: mitraId }
                }
            )
        } else if (id) {
            orders = await Orders.findByPk(id,
                { include: includeModels },
            )
        } else {
            orders = await Orders.findAll({
                include: includeModels
            })
        }

        if (orders.length == 0) return res.status(404).json({ message: "Data orders not found" })

        return res.status(200).json({ message: "Success retrieve orders data", data: orders })
    } catch (error) {
        res.status(500).send({ message: `error: ${error.message}` })
    }
}
const postOrder = async (req, res) => {
    try {
        const orderResponse = await Orders.create(req.body)
        res.status(200).json({ message: "Success post order data", data: orderResponse })
    } catch (error) {
        res.status(500).send({ message: `error: ${error.message}` })
    }
}
const postNewOrder = async (req, res) => {
    // begin transaction
    const transaction = await sequelize.transaction()
    try {
        // insert location data for order data
        const location = req.body.location
        const locationResponse = location ? await Location.create(location) : null
        // insert to order table
        const order = req.body.order
        order.location_id = locationResponse ? locationResponse.id : null
        const orderResponse = await Orders.create(order)
        const order_id = orderResponse.id
        // insert to detail transaction table
        const detailTxn = req.body.detailTransactions
        const detailTxnWithOrderId = detailTxn.map(item => {
            item.order_id = order_id
            return item
        })

        const detailTransactionsResponse = await DetailTransaction.bulkCreate(detailTxnWithOrderId)
        // finish transaction
        await transaction.commit()
        res.status(200).json(
            {
                message: "Success adding new order transaction",
                data: {
                    order: orderResponse,
                    location: location,
                    detailTransactions: detailTransactionsResponse
                }
            }
        )
    } catch (error) {
        // cancel transaction
        await transaction.rollback()
        res.status(500).send({ message: `error: ${error.message}` })
    }
}
const updateStatus = async (req, res) => {
    try {
        const { id, status, mitra_id } = req.body
        const order = await Orders.findByPk(id)

        if (status == 'NOT_TAKEN' || status == 'TAKEN' || status == 'CANCELED') return res.status(500).json({ message: `Can't update order status to ${status}!` })

        if (mitra_id == null) return res.status(500).json({ message: "Can't update order where is not picked by mitra" })

        if (order.mitra_id != mitra_id) return res.status(500).json({ message: "Not authorized mitra!" })

        if (orders.length == 0) return res.status(404).json({ message: "Data order not found" })

        const result = await Orders.update(
            { status: status },
            { where: { id: id } }
        )
        res.status(200).json({ message: "Success update order status", data: result })
    } catch (error) {
        res.status(500).json({ message: `error: ${error.message}` })
    }
}
const pickOrder = async (req, res) => {
    try {
        const { id, mitra_id } = req.body
        //check if order has picked by other or not
        const order = await Orders.findByPk(id)
        const mitra = await Mitra.findByPk(mitra_id)
        if (order.mitra_id != null) return res.status(500).json({ message: "This order already picked by other!" })

        if (order.length == 0) return res.status(404).json({ message: "Data order not found!" })
        if (mitra.length == 0) return res.status(404).json({ message: "Data mitra not found!" })

        const result = await Orders.update(
            { status: 'TAKEN', mitra_id: mitra_id },
            { where: { id: id } }
        )
        res.status(200).json({ message: "Success pick order", data: result })
    } catch (error) {
        res.status(500).json({ message: `error: ${error.message}` })
    }
}
const canceledOrder = async (req, res) => {
    try {
        const { id, mitra_id } = req.body
        const order = await Orders.findByPk(id)

        if (order.mitra_id != null && order.mitra_id != mitra_id) return res.status(500).json({ message: "can't canceled order when order is already picked!" })

        if (order.length == 0) return res.status(404).json({ message: "Data order not found" })

        const result = await Orders.update(
            { status: 'CANCELED' },
            { where: { id: id } }
        )
        res.status(200).json({ message: "Success canceled order", data: result })
    } catch (error) {
        res.status(500).json({ message: `error: ${error.message}` })
    }
}

module.exports = {
    getOrders,
    postOrder,
    postNewOrder,
    updateStatus,
    pickOrder,
    canceledOrder,
}