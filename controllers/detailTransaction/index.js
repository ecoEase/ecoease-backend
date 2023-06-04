const DetailTransaction = require('../../models/detailTransaction')

const getDetailTransactions = async (req, res) => {
    try {
        const detailTransactions = await DetailTransaction.findAll()

        if (detailTransactions.length == 0) return res.status(404).json({ message: "Data not found" })

        res.status(200).json({ message: "Success retrieve data", data: detailTransactions })
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

const postDetailTransaction = async (req, res) => {
    try {
        const detailTransaction = req.body
        const result = await DetailTransaction.create(detailTransaction)
        res.status(200).json({ message: "Success post new data", data: result })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const postBulkDetailTransactions = async (req, res) => {
    try {
        const listDetailTransactions = req.body.detailTransactions

        const result = await DetailTransaction.bulkCreate(listDetailTransactions)
        res.status(200).json({ message: "Success post batch datas", data: result })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = {
    getDetailTransactions,
    postBulkDetailTransactions,
};
