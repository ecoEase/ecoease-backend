const DetailTransaction = require('../../models/detailTransaction')

const getDetailTransactions = async (req, res) => {
    try {
        const detailTransactions = await DetailTransaction.findAll()
        res.status(200).json(detailTransactions)
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

const postDetailTransaction = async (req, res) => {
    try {
        const detailTransaction = req.body
        const result = await DetailTransaction.create(detailTransaction)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const postBulkDetailTransactions = async (req, res) => {
    try {
        const listDetailTransactions = req.body.detailTransactions

        const result = await DetailTransaction.bulkCreate(listDetailTransactions)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = {
    getDetailTransactions,
    postBulkDetailTransactions,
};
