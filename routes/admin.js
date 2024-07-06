const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const { initializeAddProduct, addProductHandler } = require('../controller/products');

const router = express.Router();

const products = [];

router.get("/", (req, res) => {
  // #swagger.tags = ['Admin']
  res.send("Hello from admin");
});
// /admin/add-product => GET

router.get('/add-product', initializeAddProduct);

// /admin/add-product => POST
// #swagger.tags = ['Admin']
router.post('/add-product', addProductHandler);

module.exports = router;





