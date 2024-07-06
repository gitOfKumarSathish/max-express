const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const Product = require('../controllers/products');

const router = express.Router();


router
  .get('/add-product', Product.getAddProduct)
  .post('/add-product', Product.postAddProduct);

exports.routes = router;
