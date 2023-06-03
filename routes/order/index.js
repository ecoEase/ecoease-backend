const router = require('express').Router()
const orderController = require('../../controllers/orders')

router.get('/', orderController.getOrders)
router.post('/', orderController.postOrder)
router.post('/with-detail-transactions', orderController.postNewOrder)
router.put('/pickup', orderController.pickOrder)
router.put('/cancel', orderController.canceledOrder)
router.put('/update-status', orderController.updateStatus)

module.exports = router