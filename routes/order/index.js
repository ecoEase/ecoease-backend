const router = require('express').Router()
const orderController = require('../../controllers/orders')

router.get('/', orderController.getOrders)
router.post('/', orderController.postOrder)
router.post('/with-detail-transactions', orderController.postNewOrder)

module.exports = router