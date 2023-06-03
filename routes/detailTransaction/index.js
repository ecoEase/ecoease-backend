const router = require('express').Router()
const detailTransactions = require('../../controllers/detailTransaction')

router.get('/', detailTransactions.getDetailTransactions)
router.post('/bulk', detailTransactions.postBulkDetailTransactions)

module.exports = router