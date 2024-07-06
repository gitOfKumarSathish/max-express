const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const { getShop } = require('../controllers/products');

const router = express.Router();

router.get('/', getShop);

module.exports = router;
