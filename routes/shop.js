const express = require('express');

const { renderShopPage } = require('../controller/products');

const router = express.Router();
router.get('/', renderShopPage);
router.get('/test', renderShopPage);

module.exports = router;


