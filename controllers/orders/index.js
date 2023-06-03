const { Op } = require('sequelize')
const { sequelize } = require('../../database')
const DetailTransaction = require('../../models/detailTransaction')
const Garbages = require('../../models/garbage')
const Orders = require('../../models/orders')
const Location = require('../../models/location')

const getOrders = async (req, res) => {
    try {
        const orders = await Orders.findAll({
            include: [
                {
                    model: Garbages
                },
                {
                    model: Location
                },
            ]
        })
        res.status(200).json({ data: orders })
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

        console.log("detailTxnWithOrderId")

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
    getOrders,
    postOrder,
    postNewOrder,
}