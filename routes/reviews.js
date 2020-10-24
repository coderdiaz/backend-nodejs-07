const express = require('express');
const router = express.Router();
const { getAllReviews, createReview, updateReview, deleteReview } = require('../controllers/reviews')
const permissions = require('../middlewares/permissions');

// api/users
router.get('/', permissions('admin'), getAllReviews);
router.post('/', permissions('admin'), createReview);
router.put('/:id', permissions('admin'), updateReview);
router.delete('/:id', permissions('admin'), deleteReview);

module.exports = router;