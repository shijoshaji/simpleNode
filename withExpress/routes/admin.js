const express = require('express');
const path = require('path');

const router = express.Router();


const rootDir = require('../util/pathWrapper');

// add new product
// router.get('/addProduct', (req, res, next) => {
//   console.log('we are in add product');
//   res.send(
//     '<form action="/admin/product" method="POST"> <input type="text" name="prdName"><button type="submit">Add Product</button></form>'
//   );
// });

// using sendFile instead of res.send

router.get('/addProduct', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
  console.log('we are redirected', req.body);
  res.redirect('/');
});

module.exports = router;
