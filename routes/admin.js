const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/books', adminController.getBooks);

router.post('/add-book', adminController.postBook);

router.post('/payfine', adminController.payFine);

module.exports = router;