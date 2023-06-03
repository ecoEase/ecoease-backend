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
        console.log(userId)
        let orders

        if (userId) {
            orders = await Orders.findAll(
                {
                    include: includeModels,
                    where: { user_id: userId }
                }
            )
            return res.status(200).json({ data: orders })
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
            return res.status(200).json({ data: orders })
        }

        return res.status(200).json({ data: orders })
    } catch (error) {
        res.status(500).send(error)
    }
}

const postOrder = async (req, res) => {
    try {
        const orderResponse = await Orders.create(req.body)
        res.status(200).json({ data: orderResponse })
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

const postNewOrder = async (req, res) => {
    // begin transaction
    const transaction = await sequelize.transaction()
    try {
        // insert to order table
        const order = req.body.order
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
                data: {
                    order: orderResponse,
                    detailTransactions: detailTransactionsResponse
                }
            }
        )
    } catch (error) {
        // cancel transaction
        await transaction.rollback()
        res.status(500).send({ message: error })
    }
}

const updateStatus = async (req, res) => {
    try {
        const { id, status } = req.body.id

        if (status == 'NOT_TAKEN' || status == 'CANCELED') return res.status(500).json({ message: `can't update order status to ${status}!` })

        if (mitra_id == null) return res.status(500).json({ message: "can't update order where is not picked by mitra" })

        const result = await Orders.update(
            { status: status },
            { where: { id: id } }
        )
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(500).json(error)
    }
}

const pickOrder = async (req, res) => {
    try {
        const { id, mitra_id } = req.body
        //check if order has picked by other or not
        const order = await Orders.findByPk(id)
        if (order.mitra_id != null) return res.status(500).json({ message: "this order already picked by other!" })

        const result = await Orders.update(
            { status: 'TAKEN', mitra_id: mitra_id },
            { where: { id: id } }
        )
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const canceledOrder = async (req, res) => {
    try {
        const { id, mitra_id } = req.body
        const order = await Orders.findByPk(id)

        if (order.mitra_id != null && order.mitra_id != mitra_id) return res.status(500).json({ message: "can't canceled order when order is already picked!" })

        const result = await Orders.update(
            { status: 'CANCELED' },
            { where: { id: id } }
        )
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(500).json(error)
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