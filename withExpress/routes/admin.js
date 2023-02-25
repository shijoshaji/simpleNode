const express = require('express');

const router = express.Router();

// add new product
router.get('/addProduct', (req, res, next) => {
  console.log('we are in add product');
  res.send(
    '<form action="/admin/product" method="POST"> <input type="text" name="prdName"><button type="submit">Add Product</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  console.log('we are redirected', req.body);
  res.redirect('/');
});

module.exports = router;
