const express = require('express')
const router = express.Router()
const { getAllOrders, createOrder, updateOrder, deleteOrder, getFullOrder } = require('../controllers/orders')
const permissions = require('../middlewares/permissions');

// api/orders
router.get('/', permissions('admin'), getAllOrders)
router.get('/:id/fullOrder', permissions('admin'), getFullOrder)
router.post('/', permissions('admin'), createOrder)
router.put('/:id', permissions('admin'), updateOrder)
router.delete('/:id', permissions('admin'), deleteOrder)

module.exports = router
