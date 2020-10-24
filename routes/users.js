const express = require('express')
const router = express.Router()
const { getAllUsers, createUser, updateUser, deleteUser, getProductsFromUser } = require('../controllers/users')
const permissions = require('../middlewares/permissions')

// api/users
router.get('/', permissions('admin'), getAllUsers)
router.post('/', permissions('admin'), createUser)
router.get('/:id/products', permissions('admin'), getProductsFromUser)
router.put('/:id', permissions('admin'), updateUser)
router.delete('/:id', permissions('admin'), deleteUser)

module.exports = router
